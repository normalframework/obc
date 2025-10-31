import { Graph } from "@dagrejs/graphlib";
import clc from "cli-color";
import fs from "fs";
import path from "path";
import { connections, dependencies } from "./graph";
import {
  ExecutionEdge,
  ExecutionEdgeBlock,
  ExecutionParameter,
  Link,
  Node,
} from "./types";
export const EXECUTION_START_NODE = "START";
export const EXECUTION_END_NODE = "END";

function parseNodesLinks(
  nodes: Node[],
  links: Link | Link[] | undefined,
  processor: (id: string, node: Node) => void
) {
  parseLinks(links, (id) => {
    const node = nodes.find((item) => item["@id"] === id);
    if (!node) {
      console.error(clc.red("[ERROR]"), "Node not found", id);
      return;
    }
    processor(id, node);
  });
}

function parseLinks(
  links: Link | Link[] | undefined,
  processor: (id: string) => void
) {
  if (!links) {
    return;
  }
  if (Array.isArray(links)) {
    links.forEach((link) => {
      processor(link["@id"]);
    });
  } else {
    processor(links["@id"]);
  }
}

function parseLinkIds(links: Link | Link[] | undefined): string[] {
  if (!links) {
    return [];
  }
  return (
    Array.isArray(links) ? links.map((link) => link["@id"]) : [links["@id"]]
  ).map(parseIdentifier);
}

const KNOWN_VALUES = {};

function findMatchingFile(baseDir: string, importPath: string) {
  const targetSuffix = path.normalize(importPath);
  const matches: string[] = [];

  function search(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        search(fullPath);
      } else if (entry.isFile()) {
        const normalizedPath = path.normalize(fullPath);
        if (normalizedPath.endsWith(targetSuffix)) {
          matches.push(normalizedPath);
        }
      }
    }
  }

  search(baseDir);
  return matches[0] ?? null;
}

function resolveImport(currentFilePath: string, importPath: string) {
  let dir = path.dirname(currentFilePath);

  while (dir !== process.cwd()) {
    if (fs.existsSync(path.join(dir, importPath))) {
      return path.join(dir, importPath);
    }
    dir = path.dirname(dir);
  }

  return null;
}

function parseInlineValue(value: string | number | undefined) {
  if (value == null) {
    return value;
  }
  const knownValue = KNOWN_VALUES[value];
  if (knownValue) {
    return knownValue;
  }
  return value;
}

function parseNode(graph: Graph, node: Node) {
  let value = node["S231P:value"] ?? "";
  if (typeof value === "object") {
    value = value["@value"];
  }
  graph.setNode(node["@id"], {
    id: node["@id"],
    value: parseInlineValue(value),
    type: node["@type"] ?? "",
  });
}

export function parseJsonToGraph(filePath: string, nodes: Node[]): Graph {
  const graph = new Graph({ directed: true, compound: true });
  const blockTypes = ["S231P:Block", "S231P:ElementaryBlock"];
  const mainNode = nodes.find((item) =>
    blockTypes.includes(item["@type"] ?? "")
  );

  const connectionTypes = new Map<string, "input" | "output" | "parameter">();

  if (!mainNode) {
    throw new Error("No main node found");
  }

  const id = mainNode["@id"];

  graph.setNode(id, {
    id: id,
    type: mainNode["@type"],
  });

  parseNodesLinks(nodes, mainNode["S231P:containsBlock"], (linkId, node) => {
    const type = node["@type"];
    if (!type) {
      return;
    }
    const nodeFile = makeFilePath(type) + ".jsonld";
    const nodeFilePath = resolveImport(filePath, nodeFile);
    if (!nodeFilePath) {
      console.error(clc.red("[ERROR]"), "Node file is invalid", nodeFile);
      return;
    }
    const nodeData = readGraphFile(nodeFilePath);

    if (!nodeData) {
      console.error(clc.red("[ERROR]"), "Node file is invalid", nodeFile);
      return;
    }
    const nodeBlock = nodeData.find((item) =>
      blockTypes.includes(item["@type"] ?? "")
    );
    if (!nodeBlock) {
      console.error(
        clc.red("[ERROR]"),
        `Node block not found. ${filePath} - ${nodeFile} - ${linkId}`
      );
      return;
    }

    parseNode(graph, node);

    const inputs = parseLinkIds(nodeBlock["S231P:hasInput"]);
    const outputs = parseLinkIds(nodeBlock["S231P:hasOutput"]);
    const parameters = parseLinkIds(nodeBlock["S231P:hasParameter"]);

    parseLinks(node["S231P:hasInstance"], (instanceId) => {
      const instanceNode = nodes.find((item) => item["@id"] === instanceId);
      if (instanceNode) {
        parseNode(graph, instanceNode);
      } else {
        graph.setNode(instanceId, {
          id: instanceId,
        });
      }
      const identifier = parseIdentifier(instanceId);
      if (inputs.includes(identifier)) {
        connectionTypes.set(instanceId, "input");
        graph.setEdge(instanceId, linkId, {
          label: "input",
        });
      } else if (outputs.includes(identifier)) {
        connectionTypes.set(instanceId, "output");
        graph.setEdge(linkId, instanceId, {
          label: "output",
        });
      } else if (parameters.includes(identifier)) {
        connectionTypes.set(instanceId, "parameter");
        graph.setEdge(instanceId, linkId, {
          label: "parameter",
        });
      } else {
        console.log(
          clc.yellow("[WARNING]"),
          `Unknown link. ${filePath} -> ${nodeFilePath} -> ${instanceId}`
        );
      }
    });
    graph.setParent(linkId, id);
  });

  parseNodesLinks(nodes, mainNode["S231P:hasInput"], (linkId, node) => {
    parseNode(graph, node);
    graph.setEdge(linkId, id, {
      label: "input",
    });
    connectionTypes.set(linkId, "output"); // Input of block we treat as output variable for connections
  });

  parseNodesLinks(nodes, mainNode["S231P:hasOutput"], (linkId, node) => {
    parseNode(graph, node);
    graph.setEdge(id, linkId, {
      label: "output",
    });
    connectionTypes.set(linkId, "input"); // Output of block we treat as input variable for connections
  });

  parseNodesLinks(nodes, mainNode["S231P:hasParameter"], (linkId, node) => {
    parseNode(graph, node);
    graph.setEdge(linkId, id, {
      label: "parameter",
    });
    connectionTypes.set(linkId, "output"); // Output of block we treat as input variable for connections
  });

  nodes.forEach((item) => {
    const id = item["@id"];
    if (!id) {
      return;
    }
    parseLinks(item["S231P:isConnectedTo"], (linkId) => {
      switch (connectionTypes.get(linkId)) {
        case "input":
          graph.setEdge(id, linkId, {
            label: "connection",
          });
          break;
        case "output":
          graph.setEdge(linkId, id, {
            label: "connection",
          });
          break;
        case "parameter":
          graph.setEdge(linkId, id, {
            label: "connection",
          });
          break;
        default:
          // fallback logic for old files
          if (id.endsWith(".y")) {
            graph.setEdge(id, linkId, {
              label: "connection",
            });
          } else {
            graph.setEdge(linkId, id, {
              label: "connection",
            });
          }
      }
    });
  });

  return graph;
}

function buildEdge(
  from: ExecutionEdgeBlock,
  to: ExecutionEdgeBlock
): ExecutionEdge {
  let fromLabel = `${from.name}.${from.parameter}`;
  if (from.name === EXECUTION_START_NODE) {
    fromLabel = from.parameter;
  }
  let toLabel = to.parameter;
  return {
    label: `${fromLabel} -> ${toLabel}`,
    from: {
      block: from,
      name: fromLabel,
    },
    to: {
      block: to,
      name: toLabel,
    },
  };
}

export function lookupBlockElementId(graph: Graph) {
  const res = graph.nodes().find((node) => !graph.parent(node));
  if (!res) {
    throw new Error("No main element found");
  }
  return res;
}
function tryParseArray(input: string): [boolean, any[]] {
  try {
    if (typeof input !== "string") return [false, []];
    const s = input.trim();
    if (!s) return [false, []];

    const coerce = (v) => {
      const t = v.trim();
      if (!t) return t; // empty stays empty
      const n = Number(t);
      return Number.isNaN(n) ? t : n;
    };

    // --- Set: { ... } => 1D
    if (s.startsWith("{") && s.endsWith("}")) {
      const inner = s.slice(1, -1).trim();
      if (!inner) return [true, []];
      const items = inner.split(",").map(coerce);
      return [true, items];
    }

    // --- Vector/Matrix: [ ... ]
    if (s.startsWith("[") && s.endsWith("]")) {
      const inner = s.slice(1, -1).trim();
      if (!inner) return [true, []];

      // Split rows by ';' (matrix rows). Filter empty rows to allow trailing ';'.
      const rows = inner
        .split(";")
        .map((r) => r.trim())
        .filter((r) => r.length > 0);

      // If only one row (no ';' present), it's a vector.
      if (rows.length <= 1) {
        const row = rows[0] ?? inner;
        const items = row
          .split(",")
          .map(coerce)
          .filter((x) => !(typeof x === "string" && x.trim() === ""));
        return [true, items];
      }

      // Otherwise, matrix: each row is comma-separated values.
      const matrix = rows.map((r) => {
        const cols = r
          .split(",")
          .map(coerce)
          .filter((x) => !(typeof x === "string" && x.trim?.() === ""));
        if (cols.length === 0) throw new Error("Empty matrix row");
        return cols;
      });

      return [true, matrix];
    }

    // Unknown wrapper
    return [false, []];
  } catch {
    return [false, []];
  }
}

function buildParameterExpression(
  value: string | undefined | number | any[],
  tokens: string[]
) {
  if (value == null) {
    return undefined;
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    !isNaN(Number(value))
  ) {
    return value.toString();
  }
  if (Object.values(KNOWN_VALUES).includes(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((v) => buildParameterExpression(v, tokens))
  }

  const [isArray, array] = tryParseArray(value);
  if (isArray) {
    return buildParameterExpression(array, tokens);
  }

  const expressionTokens = value
    .replace(/\s+/g, "")
    .split(/([()+\-*/])/)
    .filter(Boolean);

  const isJsExpression = expressionTokens.some((t) => tokens.includes(t));

  if (isJsExpression) {
    return value;
  }

  return `"${value}"`;
}

function buildParameters(
  graph: Graph,
  params: string[],
  tokens: string[] = []
): ExecutionParameter[] {
  return params.map((p) => {
    const value = graph.node(p)?.value;
    return {
      id: p,
      name: parseIdentifier(p),
      value: buildParameterExpression(value, tokens),
    };
  });
}

export function buildExecutionGraph(graph: Graph) {
  const executionGraph = new Graph({ directed: true, multigraph: true });
  const mainElement = lookupBlockElementId(graph);
  const blocks = graph.children(mainElement);
  const { inputs, outputs, parameters } = dependencies(graph, mainElement);

  const parametersIdentifiers = parameters.map(parseIdentifier);
  executionGraph.setNode(EXECUTION_START_NODE, {
    id: EXECUTION_START_NODE,
    parameters: buildParameters(graph, parameters, parametersIdentifiers),
  });
  executionGraph.setNode(EXECUTION_END_NODE, { id: EXECUTION_END_NODE });

  const buildExecutionEdge = (
    input: string,
    blockId: string,
    block: string
  ) => {
    const connection = connections(graph, input);
    const id = parseIdentifier(input);

    if (connection) {
      const { block: connectionBlock, connection: connectionNode } = connection;
      const connectionId = parseIdentifier(connectionNode);

      if (inputs.includes(connectionNode)) {
        executionGraph.setEdge(
          EXECUTION_START_NODE,
          block,
          buildEdge(
            {
              name: EXECUTION_START_NODE,
              parameter: connectionId,
              id: EXECUTION_START_NODE,
            },
            {
              name: blockId,
              parameter: id,
              id: block,
            }
          ),
          connectionId
        );
      } else if (outputs.includes(connectionNode)) {
        console.log(
          clc.yellow("[WARNING]"),
          "Detected self look in block",
          blockId,
          `${connectionNode} -> ${input}`
        );
      } else if (connectionBlock) {
        const inputBlockId = parseIdentifier(connectionBlock);
        executionGraph.setEdge(
          connectionBlock,
          block,
          buildEdge(
            {
              id: connectionBlock,
              name: inputBlockId,
              parameter: connectionId,
            },
            {
              name: blockId,
              parameter: id,
              id: block,
            }
          ),
          connectionId
        );
        return;
      }
    }
  };

  blocks.forEach((block) => {
    const value = graph.node(block);
    const blockId = parseIdentifier(block);
    const nodeDeps = dependencies(graph, block);

    const node = {
      ...value,
      ...nodeDeps,
      parameters: buildParameters(
        graph,
        nodeDeps.parameters,
        parametersIdentifiers
      ),
      name: blockId,
    };

    executionGraph.setNode(block, node);

    const { inputs } = nodeDeps;
    inputs.forEach((input) => buildExecutionEdge(input, blockId, block));
  });

  outputs.forEach((output) =>
    buildExecutionEdge(output, EXECUTION_END_NODE, EXECUTION_END_NODE)
  );

  return executionGraph;
}

const RESERVED_KEYWORDS = [
  "switch",
  "case",
  "default",
  "break",
  "return",
  "const",
  "var",
  "let",
  "if",
  "else",
  "for",
  "while",
  "do",
  "function",
  "class",
  "extends",
  "super",
  "new",
  "this",
  "null",
  "true",
  "false",
  "typeof",
  "instanceof",
  "void",
  "delete",
  "in",
  "of",
  "try",
  "catch",
  "finally",
  "throw",
  "async",
  "await",
  "import",
  "from",
  "export",
  "as",
  "default",
  "with",
  "yield",
  "let",
  "static",
  "get",
  "set",
  "constructor",
  "arguments",
  "eval",
  "implements",
  "interface",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "abstract",
  "boolean",
  "byte",
  "char",
  "double",
  "final",
  "float",
  "goto",
  "int",
  "long",
  "native",
  "short",
];

export function normalizeBlockId(blockId: string) {
  return blockId.split("#").pop()!;
}

export function makeFilePath(blockId: string) {
  return path.normalize(path.join(...normalizeBlockId(blockId).split(".")));
}

export function parseIdentifier(id: string) {
  const res = id.split(".").pop()!;

  if (RESERVED_KEYWORDS.includes(res)) {
    return `_${res}`;
  }
  return res;
}

export function readGraphFile(filePath: string) {
  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  if (!json["@graph"]) {
    console.error(clc.red("[ERROR]"), "Invalid json jsonld", filePath);
    return;
  }
  return json["@graph"];
}
