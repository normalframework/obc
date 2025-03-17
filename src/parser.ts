import { Graph } from "@dagrejs/graphlib";
import { connections, dependencies } from "./graph";
import {
  ExecutionEdge,
  ExecutionEdgeBlock,
  ExecutionParameter,
  Link,
  Node,
} from "./types";
import clc from "cli-color";

export const EXECUTION_START_NODE = "START";
export const EXECUTION_END_NODE = "END";

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

const KNOWN_VALUES = {
  "Buildings.Controls.OBC.CDL.Types.SimpleController.PI": "Math.PI",
};

function parseInlineValue(value: string | number | undefined) {
  if (!value) {
    return value;
  }
  const knownValue = KNOWN_VALUES[value];
  if (knownValue) {
    return knownValue;
  }
  return value;
}

export function parseJsonToGraph(nodes: Node[]): Graph {
  const graph = new Graph({ directed: true, compound: true });
  nodes.forEach((item) => {
    const id = item["@id"];
    let value = item["S231P:value"] ?? "";
    if (typeof value === "object") {
      value = value["@value"];
    }
    graph.setNode(id, {
      id: item["@id"],
      value: parseInlineValue(value),
      type: item["@type"],
    });

    parseLinks(item["S231P:containsBlock"], (linkId) => {
      graph.setParent(linkId, id);
    });

    parseLinks(item["S231P:hasInput"], (linkId) => {
      graph.setEdge(linkId, id, "input");
    });

    parseLinks(item["S231P:hasOutput"], (linkId) => {
      graph.setEdge(id, linkId, "output");
    });

    parseLinks(item["S231P:hasParameter"], (linkId) => {
      graph.setEdge(linkId, id, "parameter");
    });

    parseLinks(item["S231P:isConnectedTo"], (linkId) => {
      graph.setEdge(id, linkId, "connection");
    });

    parseLinks(item["S231P:hasInstance"], (linkId) => {
      const val = nodes.find((item) => item["@id"] === linkId);
      if (!val) {
        graph.setEdge(linkId, id, "input");
        return;
      }
      // handle parameter
      if (val["S231P:value"] != null) {
        graph.setEdge(linkId, id, "parameter");
      }
      // handle output
      if (val["S231P:isConnectedTo"]) {
        graph.setEdge(id, linkId, "output");
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

function buildParameterExpression(
  value: string | undefined | number,
  tokens: string[]
) {
  if (!value) {
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
  const executionGraph = new Graph({ directed: true });
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
          )
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
          )
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

export function parseIdentifier(id: string) {
  const res = id.split(".").pop()!;

  if (RESERVED_KEYWORDS.includes(res)) {
    return `_${res}`;
  }
  return res;
}
