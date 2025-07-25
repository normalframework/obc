import graphlib from "@dagrejs/graphlib";
import clc from "cli-color";
import fs from "fs";
import * as MathJS from "mathjs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { ParsedExpression, processCst } from "./cst";
import { inEdges, outEdges, successors } from "./graph";
import { parseModelica } from "./modelica";
import {
  buildExecutionGraph,
  EXECUTION_END_NODE,
  EXECUTION_START_NODE,
  lookupBlockElementId,
  makeFilePath,
  normalizeBlockId,
  parseIdentifier,
  parseJsonToGraph,
  readGraphFile,
} from "./parser";
import { ExecutionEdge, ExecutionNode, ExecutionParameter } from "./types";
import { stringHash, walkDirectoryRecursive } from "./utils";
import { visualizeGraph } from "./visualize";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesRegistry = new Map<string, string>();
const importedFiles = new Set<string>();
const importsMap = new Map<string, string[]>();

const modelicaConstants = new Map<string, string | number | boolean>();
let modelicaLoaded = false;

export type TranslationOptions = {
  visualize: boolean | string;
  rebuildModelica?: boolean;
  validation?: boolean;
};

function makeUniqName(type: string) {
  const baseName = type.split(".").pop()!.toLowerCase();
  return `${baseName}_${stringHash(type)}`;
}
function resolveFilePath(type: string) {
  const id = normalizeBlockId(type);
  if (filesRegistry.has(id)) {
    return filesRegistry.get(id)!;
  }
  const keys = Array.from(filesRegistry.keys());
  const closest = keys.find((k) => k.endsWith(id));
  if (closest) {
    return filesRegistry.get(closest)!;
  }
  return makeFilePath(type);
}

export function generateJsObject(
  values: [string, string | undefined][],
  sep = ", "
) {
  if (values.length === 0) {
    return "{}";
  }
  return `{ ${values.map(([key, value]) => `${key}: ${value}`).join(sep)} }`;
}

export function generateJsObjectParameter(keys: string[]) {
  return `{ ${keys.join(", ")} }`;
}

function generateParameterObject(values: [string, string | undefined][]) {
  if (!values.length) {
    return "";
  }
  const params = values
    .map(([key, value]) => (value ? `\t\t${key} = ${value}` : `\t\t${key}`))
    .join(",\n");
  return `{
${params},
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
    importsMap.get(filePath)!.push(id);

    let relPath = path.relative(path.dirname(currentPath), filePath);
    if (!relPath.startsWith(".")) {
      relPath = `./${relPath}`;
    }
    return `const ${name} = require("${relPath}");`;
  });
}

function ensureStartEnd(graph: graphlib.Graph) {
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

function findLoops(graph: graphlib.Graph) {
  const loops: graphlib.Edge[] = [];
  const visited = new Set();
  const stack = new Set();

  const dfs = (node: string) => {
    if (stack.has(node)) {
      return true;
    }

    if (visited.has(node)) return false;

    stack.add(node);
    successors(graph, node).forEach((s) => {
      if (dfs(s)) {
        loops.push({ v: node, w: s });
      }
    });
    stack.delete(node);
    visited.add(node);
    return false;
  };

  graph.nodes().forEach(dfs);
  return loops;
}

function sortParams(params: ExecutionParameter[]) {
  const graph = new graphlib.Graph({ directed: true });
  params.forEach((p) => {
    graph.setNode(p.name, p);
    params.forEach((p2) => {
      if (p.value?.includes(p2.name)) {
        graph.setEdge(p2.name, p.name);
      }
    });
  });
  const sorted = graphlib.alg.topsort(graph);
  return sorted.map((name) => graph.node(name));
}

// function to convert modelica constants to js constants
function jsValue(value: string | undefined) {
  if (value == null) {
    return;
  }

  const valueKey = value.replace(/"/g, "");
  if (modelicaConstants.has(valueKey)) {
    return modelicaConstants.get(valueKey)?.toString();
  }

  // check if valud is valid math expression
  try {
    const returnValue = MathJS.evaluate(value);
    MathJS.evaluate(returnValue);
    return returnValue;
  } catch (e) {
    return value;
  }
}

export function translateGraph(
  id: string,
  graph: graphlib.Graph,
  validation = false
) {
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
  const edges = graph.edges();
  loops.forEach((e) => {
    console.log(
      clc.yellow("[WARNING]"),
      clc.bold("Loop detected"),
      `${normalizeBlockId(e.v)} -> ${normalizeBlockId(e.w)}`
    );
    const edgesToRemove = edges.filter(
      (edge) => edge.v === e.v && edge.w === e.w
    );
    edgesToRemove.forEach((edge) => {
      graph.removeEdge(edge);
    });
  });

  const topological = graphlib.alg.topsort(graph);
  const callResults: string[] = [];
  topological.forEach((node) => {
    processed.add(node);
    if (node === EXECUTION_START_NODE || node === EXECUTION_END_NODE) {
      return;
    }
    const nodeValue = graph.node(node) as ExecutionNode;

    const params = nodeValue.parameters ?? [];
    const paramsObject = generateJsObject(
      params.filter((p) => !!p.value).map((p) => [p.name, jsValue(p.value)])
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
    callResults.push(nodeValue.name);
  });

  const inputEdges = outEdges<ExecutionEdge>(graph, EXECUTION_START_NODE);
  const inputs = new Set<string>(inputEdges.map((o) => o.from.name));
  const outputEdges = inEdges<ExecutionEdge>(graph, EXECUTION_END_NODE);
  let outputObject = "{}";
  if (validation) {
    outputObject = generateJsObject(callResults.map((c) => [c, c]));
  } else {
    outputObject = generateJsObject(
      outputEdges.map((o) => [o.to.name, o.from.name])
    );
  }

  const inputsObject = generateJsObjectParameter(Array.from(inputs));

  const params = sortParams(start.parameters ?? []);
  const paramsObject = generateParameterObject(
    params.map((p) => [p.name, jsValue(p.value)])
  );

  const code = `
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
  const definition = {
    inputs: Array.from(inputs),
    outputs: outputEdges.map((o) => o.to.name),
  };
  return { code, definition };
}

export function translateFile(
  input: string,
  output: string,
  { visualize, rebuildModelica, validation }: TranslationOptions
) {
  if (!input.endsWith(".jsonld")) {
    // console.log(clc.yellow("[WARNING]"), "Skipping non jsonld file", input);
    return;
  }

  loadModelicaFiles(rebuildModelica);
  const filePath = path.join(process.cwd(), input);
  const json = readGraphFile(filePath);
  if (!json) {
    return;
  }
  const fullGraph = parseJsonToGraph(filePath, json);
  const blockId = lookupBlockElementId(fullGraph);
  const executionGraph = buildExecutionGraph(fullGraph);
  const { code, definition } = translateGraph(
    blockId,
    executionGraph,
    validation || input.includes("/Validation/")
  );

  const outputName = makeFilePath(blockId);

  let outFile = output;
  if (!outFile.endsWith(".js")) {
    outFile = path.join(output, outputName + ".js");
  }

  const defFile = outFile.replace(".js", ".json");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const normalizedId = normalizeBlockId(blockId);

  if (filesRegistry.has(normalizedId)) {
    console.error(clc.yellow("[WARNING]"), "Duplicate block id", blockId);
    return;
  }
  filesRegistry.set(normalizedId, outputName);

  console.log(
    clc.greenBright("[SUCCESS]"),
    clc.bold(parseIdentifier(blockId)),
    `-> ${outFile}
  `
  );
  fs.writeFileSync(outFile, code);
  fs.writeFileSync(defFile, JSON.stringify(definition, null, 2));

  if (visualize) {
    const folder = path.dirname(outFile);
    const fileName = path.basename(outFile).replace(".js", ".svg");
    if (typeof visualize === "string") {
      visualizeGraph(executionGraph, visualize);
    } else {
      visualizeGraph(executionGraph, path.join(folder, fileName));
    }
  }
}

function isModelicaFile(filePath: string) {
  return path.extname(filePath) === ".mo";
}

function expressionJsValue(expression: ParsedExpression | undefined) {
  if (!expression) {
    return '""';
  }
  if ("value" in expression) {
    if (typeof expression.value === "string") {
      return `"${expression.value}"`;
    }
    return expression.value;
  }
  return expression.expression;
}

function parseModelicaFiles(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const cst = parseModelica(content);
    const fileModel = processCst(cst);
    if (
      (fileModel.namespace && fileModel.constants.length) ||
      fileModel.enumerations.length
    ) {
      const parts = [fileModel.namespace, fileModel.package].filter((p) => p);
      fileModel.constants
        .filter((c) => c.value)
        .forEach((constant) => {
          modelicaConstants.set(
            [...parts, constant.name].join("."),
            expressionJsValue(constant.value)
          );
        });
      fileModel.enumerations.forEach((enumeration) => {
        Object.entries(enumeration.value).forEach(([key, value]) => {
          modelicaConstants.set(
            [...parts, enumeration.name, key].join("."),
            value
          );
        });
      });
    }
    console.log(clc.greenBright("[PARSED]"), filePath);
  } catch (e) {
    console.error(clc.red("[ERROR]"), "Error parsing file", filePath, e);
    throw e;
  }
}

function loadModelicaFiles(force?: boolean) {
  if (modelicaLoaded) {
    return;
  }
  if (fs.existsSync("modelica.json") && !force) {
    const data = fs.readFileSync("modelica.json", "utf-8");
    const parsed = JSON.parse(data) as [string, string | number, boolean][];
    for (const [key, value] of parsed) {
      modelicaConstants.set(key, value as string | number | boolean);
    }
  } else {
    console.log("Parsing Modelica files for constants and enumerations");
    const modelicaBuildings = path.join(__dirname, "..", "modelica-buildings");
    console.log("Modelica Directory: ", modelicaBuildings);

    for (const filePath of walkDirectoryRecursive(modelicaBuildings)) {
      if (isModelicaFile(filePath)) {
        parseModelicaFiles(filePath);
      }
    }

    fs.writeFileSync("modelica.json", JSON.stringify([...modelicaConstants]));
  }
  modelicaLoaded = true;
}

export function translateDirectory(
  input: string,
  output: string,
  options: TranslationOptions
) {
  fs.mkdirSync(path.dirname(output), { recursive: true });
  loadModelicaFiles(options.rebuildModelica);
  const standard = path.join(__dirname, "..", "standard");

  const standardFiles: string[] = [];

  for (const filePath of walkDirectoryRecursive(standard)) {
    const copyPath = path.join(output, path.relative(standard, filePath));
    fs.mkdirSync(path.dirname(copyPath), { recursive: true });
    fs.copyFileSync(filePath, copyPath);
    standardFiles.push(copyPath);

    const importPath = path.relative(output, copyPath).replace(".js", "");
    filesRegistry.set(importPath.replace(/\//g, "."), importPath);
  }

  for (const filePath of walkDirectoryRecursive(input)) {
    if (
      filePath.endsWith("package.json") ||
      filePath.endsWith("package.jsonld")
    ) {
      continue;
    }
    try {
      // do not translate CDL files
      if (
        filePath.includes("Buildings/Controls/OBC/CDL") &&
        !filePath.includes("/Validation/")
      ) {
        continue;
      }

      translateFile(filePath, output, options);
    } catch (e) {
      console.error(clc.red("[ERROR]"), "Error translating file", filePath, e);
    }
  }

  const availableFiles = [...filesRegistry.values()];

  for (const file of importedFiles) {
    if (!availableFiles.includes(file)) {
      const types = importsMap.get(file) ?? [];
      const isValidation = types.every((t) =>
        normalizeBlockId(t).includes(".Validation.")
      );
      if (isValidation) {
        continue;
      }
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
