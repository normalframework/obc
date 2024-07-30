import { alg, Edge, Graph } from "@dagrejs/graphlib";
import {
  buildExecutionGraph,
  EXECUTION_END_NODE,
  EXECUTION_START_NODE,
  lookupBlockElementId,
  parseJsonToGraph,
} from "./parser";
import { inEdges, outEdges, predecessors, successors } from "./graph";
import { ExecutionEdge, ExecutionNode } from "./types";
import { walkDirectoryRecursive } from "./utils";
import path from "path";
import fs from "fs";
import { visualizeGraph } from "./visualize";

const filesRegistry = new Map<string, string>();
const importedFiles = new Set<string>();

function makeFilePath(blockId: string) {
  const withoutUrl = blockId.split("#").pop();
  return path.join(...withoutUrl.split("."));
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
  return Array.from(imports).map((type) => {
    const name = importNames.get(type);
    const filePath = resolveFilePath(type);
    const relPath = path.relative(path.dirname(currentPath), filePath);

    return `import ${name} from "${relPath}";`;
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
  const imports = new Set<string>();
  const importNames = new Map<string, string>();
  const processed = new Set();
  const statements: string[] = [];

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
    console.log(`Loop detected ${e.v} -> ${e.w}`);
    graph.removeEdge(e);
  });

  const topological = alg.topsort(graph);
  topological.forEach((node) => {
    processed.add(node);
    if (node === EXECUTION_START_NODE || node === EXECUTION_END_NODE) {
      return;
    }
    const inputs = inEdges<ExecutionEdge>(graph, node);

    const inputsObject = makeJsObject(
      inputs
        .filter((e) => processed.has(e.from.block.id))
        .map((input) => [input.to.name, input.from.name])
    );
    const nodeValue = graph.node(node) as ExecutionNode;

    const skippedInputs = inputs.filter((e) => !processed.has(e.from.block.id));
    if (skippedInputs.length > 0) {
      console.warn(
        `Skipped inputs: ${skippedInputs
          .map((e) => e.from.name)
          .join(",")} for ${node}`
      );
    }

    const params = nodeValue.parameters ?? [];

    const paramsObject = makeJsObject(
      params.filter((p) => !!p.value).map((p) => [p.name, p.value])
    );
    const fn = resolveImport(nodeValue.type);
    statements.push(`// ${node}`);
    statements.push(
      `const ${nodeValue.name} = ${fn}(
      ${inputsObject},
      ${paramsObject}
      );`
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

  const res = [
    `// ${id}`,
    ...makeImports(id, imports, importNames),
    "\n",
    `export default function (
    ${inputsObject},
    ${paramsObject}
    ) {`,
    ...statements.map((s) => `  ${s}`),
    "\n",
    `  return ${outputObject};`,
    "}",
  ].join("\n");

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
  console.log(`Writing ${blockId} -> ${outFile}`);
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
    console.log(`Copying ${filePath} -> ${copyPath}`);
    fs.copyFileSync(filePath, copyPath);
  }

  for (const filePath of walkDirectoryRecursive(input)) {
    translateFile(filePath, output, options);
  }
}
