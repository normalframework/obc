import { alg, Edge, Graph } from "@dagrejs/graphlib";
import {
  buildExecutionGraph,
  EXECUTION_END_NODE,
  EXECUTION_START_NODE,
  lookupBlockElementId,
  parseIdentifier,
  parseJsonToGraph,
} from "./parser";
import { inEdges, outEdges, predecessors, successors } from "./graph";
import { ExecutionEdge, ExecutionNode } from "./types";
import { walkDirectoryRecursive } from "./utils";
import path from "path";
import fs from "fs";
import { visualizeGraph } from "./visualize";
import clc from "cli-color";

const filesRegistry = new Map<string, string>();
const importedFiles = new Set<string>();
const importedFilesTypes = new Map<string, string>();
const importTypes = new Map<string, string[]>();

function makeBlockId(blockId: string) {
  return blockId.split("#").pop();
}
function makeFilePath(blockId: string) {
  return path.join(...makeBlockId(blockId).split("."));
}

function resolveFilePath(type: string) {
  if (filesRegistry.has(type)) {
    return filesRegistry.get(type);
  }
  return makeFilePath(type);
}

function makeJsObject(values: [string, string][]) {
  if (values.length === 0) {
    return "{}";
  }
  return `{ ${values.map(([key, value]) => `${key}: ${value}`).join(", ")} }`;
}

function makeJsObjectParameter(keys: string[]) {
  return `{ ${keys.join(", ")} }`;
}

function makeObjectWithDefaultValue(values: [string, string][]) {
  return `{
${values.map(([key, value]) => `\t\t${key} = ${value}`).join(",\n")}
    } = {}`;
}

function makeImports(
  id: string,
  imports: Set<string>,
  importNames: Map<string, string>
) {
  const currentPath = makeFilePath(id);
  const importsArray = Array.from(imports);
  importsArray.sort();
  return importsArray.map((type) => {
    const name = importNames.get(type);
    const filePath = resolveFilePath(type);
    importedFiles.add(filePath);
    importedFilesTypes.set(filePath, type);
    if (!importTypes.has(filePath)) {
      importTypes.set(filePath, []);
    }
    importTypes.get(filePath).push(id);

    const relPath = path.relative(path.dirname(currentPath), filePath);

    return `const ${name} = require("${relPath}");`;
  });
}

function ensureStartEnd(graph: Graph) {
  const start = graph.node(EXECUTION_START_NODE) as ExecutionNode;
  if (!start) {
    throw new Error("Execution start node not found");
  }
  const end = graph.node(EXECUTION_END_NODE) as ExecutionNode;
  if (!end) {
    throw new Error("Execution end node not found");
  }
  return { start, end };
}

function makeUniqName(type: string) {
  const baseName = type.split(".").pop().toLowerCase();
  const randSuffix = Math.random().toString(36).substring(7);
  return `${baseName}_${randSuffix}`;
}

function findLoops(graph: Graph) {
  const loops: Edge[] = [];
  const visited = new Set();
  const stack = new Set();

  const isLooped = (n1: string, n2: string) => {
    if (visited.has(n2)) return false;
    if (n1 === n2) {
      return true;
    }
    const pres = predecessors(graph, n2);
    for (const p of pres) {
      if (isLooped(n1, p)) {
        return true;
      }
    }

    return false;
  };

  const dfs = (node: string) => {
    if (stack.has(node)) {
      return;
    }

    if (visited.has(node)) return;

    stack.add(node);
    predecessors(graph, node).forEach((p) => {
      if (visited.has(p)) return;
      if (!isLooped(node, p)) {
        dfs(p);
      } else {
        loops.push({ v: p, w: node });
      }
    });

    visited.add(node);

    successors(graph, node).forEach(dfs);

    stack.delete(node);
  };

  dfs(EXECUTION_START_NODE);

  return loops;
}

export function translateGraph(id: string, graph: Graph) {
  console.log(clc.blueBright("[TRANSLATING]"), clc.bold(parseIdentifier(id)));
  const imports = new Set<string>();
  const importNames = new Map<string, string>();
  const processed = new Set();
  const declarations: string[] = [];
  const fnCalls: string[] = [];

  const { start } = ensureStartEnd(graph);
  const resolveImport = (type: string) => {
    if (importNames.has(type)) {
      return importNames.get(type);
    }
    const name = makeUniqName(type);
    imports.add(type);
    importNames.set(type, name);
    return name;
  };

  // Remove loops
  const loops = findLoops(graph);
  loops.forEach((e) => {
    console.log(
      clc.yellow("[WARNING]"),
      clc.bold("Loop detected"),
      `${makeBlockId(e.v)} -> ${makeBlockId(e.w)}`
    );
    graph.removeEdge(e);
  });

  const topological = alg.topsort(graph);
  topological.forEach((node) => {
    processed.add(node);
    if (node === EXECUTION_START_NODE || node === EXECUTION_END_NODE) {
      return;
    }

    const nodeValue = graph.node(node) as ExecutionNode;

    const params = nodeValue.parameters ?? [];

    const paramsObject = makeJsObject(
      params.filter((p) => !!p.value).map((p) => [p.name, p.value])
    );
    const fn = resolveImport(nodeValue.type);
    declarations.push(`// ${node}`);
    declarations.push(`const ${nodeValue.name}Fn = ${fn}(${paramsObject});`);

    const inputs = inEdges<ExecutionEdge>(graph, node);

    const inputsObject = makeJsObject(
      inputs
        .filter((e) => processed.has(e.from.block.id))
        .map((input) => [input.to.name, input.from.name])
    );
    const skippedInputs = inputs.filter((e) => !processed.has(e.from.block.id));
    if (skippedInputs.length > 0) {
      console.warn(
        `Skipped inputs: ${skippedInputs
          .map((e) => e.from.name)
          .join(",")} for ${node}`
      );
    }
    fnCalls.push(
      `const ${nodeValue.name} = ${nodeValue.name}Fn(${inputsObject});`
    );
  });

  const inputEdges = outEdges<ExecutionEdge>(graph, EXECUTION_START_NODE);
  const inputs = new Set<string>(inputEdges.map((o) => o.from.name));
  const outputEdges = inEdges<ExecutionEdge>(graph, EXECUTION_END_NODE);
  const outputObject = makeJsObject(
    outputEdges.map((o) => [o.to.name, o.from.name])
  );
  const inputsObject = makeJsObjectParameter(Array.from(inputs));

  const paramsObject = makeObjectWithDefaultValue(
    start.parameters.filter((p) => !!p.value).map((p) => [p.name, p.value])
  );

  const res = `
// ${id}
${makeImports(id, imports, importNames).join("\n")}

module.exports = (
  ${paramsObject}
) => {
${declarations.map((s) => `  ${s}`).join("\n")}

  return (
    ${inputsObject}
  ) => {
${fnCalls.map((s) => `    ${s}`).join("\n")}

    return ${outputObject};
  }
}
`;

  return res;
}

export function translateFile(
  input: string,
  output: string,
  { visualize }: { visualize: boolean }
) {
  if (!input.endsWith(".jsonld")) {
    console.error("Skipping non jsonld file", input);
    return;
  }
  const json = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), input), "utf-8")
  );
  const fullGraph = parseJsonToGraph(json["@graph"]);
  const blockId = lookupBlockElementId(fullGraph);
  const executionGraph = buildExecutionGraph(fullGraph);
  const code = translateGraph(blockId, executionGraph);

  const outputName = makeFilePath(blockId);
  const outFile = path.join(output, outputName + ".js");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  if (filesRegistry.has(blockId)) {
    console.error("Duplicate block id", blockId);
    process.exit(1);
  }
  filesRegistry.set(blockId, outputName);

  console.log(
    clc.greenBright("[SUCCESS]"),
    clc.bold(parseIdentifier(blockId)),
    `-> ${outFile}
    `
  );
  fs.writeFileSync(outFile, code);
  if (visualize) {
    visualizeGraph(executionGraph, path.join(output, outputName + ".svg"));
  }
}

export function translateDirectory(
  input: string,
  output: string,
  options: { visualize: boolean }
) {
  fs.mkdirSync(path.dirname(output), { recursive: true });

  const standardFiles = [];
  const standard = path.join(__dirname, "..", "standard");

  for (const filePath of walkDirectoryRecursive(standard)) {
    const copyPath = path.join(output, path.relative(standard, filePath));
    fs.mkdirSync(path.dirname(copyPath), { recursive: true });
    fs.copyFileSync(filePath, copyPath);
    standardFiles.push(path.relative(output, copyPath).replace(".js", ""));
  }

  for (const filePath of walkDirectoryRecursive(input)) {
    translateFile(filePath, output, options);
  }

  const availableFiles = [...filesRegistry.values(), ...standardFiles];

  for (const file of importedFiles) {
    if (!availableFiles.includes(file)) {
      const types = importTypes.get(file);
      console.error(
        clc.red("[ERROR]"),
        "Missing import for type",
        clc.bold(makeBlockId(importedFilesTypes.get(file))),
        "from",
        clc.bold(file),
        "used in",
        types.map((t) => clc.bold(makeBlockId(t))).join(", "),
        "\n"
      );
    }
  }

}
