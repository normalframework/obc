import { alg, Edge, Graph } from "@dagrejs/graphlib";
import clc from "cli-color";
import fs from "fs";
import path from "path";
import { inEdges, outEdges, predecessors, successors } from "./graph";
import {
  buildExecutionGraph,
  EXECUTION_END_NODE,
  EXECUTION_START_NODE,
  lookupBlockElementId,
  parseIdentifier,
  parseJsonToGraph,
} from "./parser";
import { ExecutionEdge, ExecutionNode } from "./types";
import { stringHash, walkDirectoryRecursive } from "./utils";
import { visualizeGraph } from "./visualize";

const filesRegistry = new Map<string, string>();
const importedFiles = new Set<string>();
const importsMap = new Map<string, string[]>();

function normalizeBlockId(blockId: string) {
  return blockId.split("#").pop();
}
function makeFilePath(blockId: string) {
  return path.join(...normalizeBlockId(blockId).split("."));
}

function makeUniqName(type: string) {
  const baseName = type.split(".").pop().toLowerCase();
  return `${baseName}_${stringHash(type)}`;
}
function resolveFilePath(type: string) {
  const id = normalizeBlockId(type);
  if (filesRegistry.has(id)) {
    return filesRegistry.get(id);
  }
  const keys = Array.from(filesRegistry.keys());
  const closest = keys.find((k) => k.endsWith(id));
  if (closest) {
    return filesRegistry.get(closest);
  }
  return makeFilePath(type);
}

function generateJsObject(values: [string, string][]) {
  if (values.length === 0) {
    return "{}";
  }
  return `{ ${values.map(([key, value]) => `${key}: ${value}`).join(", ")} }`;
}

function generateJsObjectParameter(keys: string[]) {
  return `{ ${keys.join(", ")} }`;
}

function generateParameterObject(values: [string, string][]) {
  if (!values.length) {
    return "";
  }
  const withDefaultValues = values
    .filter(([, value]) => !!value)
    .map(([key, value]) => `\t\t${key} = ${value}`)
    .join(",\n");
  const withoutDefaultValues = values
    .filter(([, value]) => !value)
    .map(([key]) => `\t\t${key}`)
    .join(",\n");
  return `{
${[withDefaultValues, withoutDefaultValues].filter(Boolean).join(",\n")},
    } = {}`;
}

function generateImports(
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
    if (!importsMap.has(filePath)) {
      importsMap.set(filePath, []);
    }
    importsMap.get(filePath).push(id);

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
      `${normalizeBlockId(e.v)} -> ${normalizeBlockId(e.w)}`
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

    const paramsObject = generateJsObject(
      params.filter((p) => !!p.value).map((p) => [p.name, p.value])
    );
    const fn = resolveImport(nodeValue.type);
    declarations.push(`// ${node}`);
    declarations.push(`const ${nodeValue.name}Fn = ${fn}(${paramsObject});`);

    const inputs = inEdges<ExecutionEdge>(graph, node);

    const inputsObject = generateJsObject(
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
  const outputObject = generateJsObject(
    outputEdges.map((o) => [o.to.name, o.from.name])
  );
  const inputsObject = generateJsObjectParameter(Array.from(inputs));

  const paramsObject = generateParameterObject(
    start.parameters.map((p) => [p.name, p.value])
  );

  const res = `
// ${id}
${generateImports(id, imports, importNames).join("\n")}

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

  let outFile = output;
  if (!outFile.endsWith(".js")) {
    outFile = path.join(output, outputName + ".js");
  }

  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const normalizedId = normalizeBlockId(blockId);

  if (filesRegistry.has(normalizedId)) {
    console.error("Duplicate block id", blockId);
    process.exit(1);
  }
  filesRegistry.set(normalizedId, outputName);

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

  const standard = path.join(__dirname, "..", "standard");

  for (const filePath of walkDirectoryRecursive(standard)) {
    const copyPath = path.join(output, path.relative(standard, filePath));
    fs.mkdirSync(path.dirname(copyPath), { recursive: true });
    fs.copyFileSync(filePath, copyPath);
    const importPath = path.relative(output, copyPath).replace(".js", "");
    filesRegistry.set(importPath.replace(/\//g, "."), importPath);
  }

  for (const filePath of walkDirectoryRecursive(input)) {
    translateFile(filePath, output, options);
  }

  const availableFiles = [...filesRegistry.values()];

  for (const file of importedFiles) {
    if (!availableFiles.includes(file)) {
      const types = importsMap.get(file);
      console.error(
        clc.red("[ERROR]"),
        "Missing import for type",
        clc.bold(file),
        "used in",
        types.map((t) => clc.bold(normalizeBlockId(t))).join(", "),
        "\n"
      );
    }
  }
}
