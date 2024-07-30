import { Edge, Graph } from "@dagrejs/graphlib";

export function predecessors(graph: Graph, node: string): string[] {
  const predecessors = graph.predecessors(node);
  if (!predecessors) {
    return [];
  }
  return predecessors;
}

export function successors(graph: Graph, node: string): string[] {
  const successors = graph.successors(node);
  if (!successors) {
    return [];
  }
  return successors;
}

export function dependencies(graph: Graph, node: string) {
  const p = predecessors(graph, node);
  const s = successors(graph, node);
  const inputs = p.filter((n) => graph.edge(n, node) === "input");
  const parameters = p.filter((n) => graph.edge(n, node) === "parameter");
  const outputs = s.filter((n) => graph.edge(node, n) === "output");
  return { inputs, outputs, parameters };
}

export function connections(graph: Graph, input: string) {
  const p = predecessors(graph, input);
  const connections = p.filter((n) => graph.edge(n, input) === "connection");
  if (!connections.length) {
    return null;
  }
  const connectionOutput = connections[0];
  const cp = predecessors(graph, connectionOutput);
  const outputs = cp.filter(
    (n) => graph.edge(n, connectionOutput) === "output"
  );
  return {
    block: outputs[0],
    connection: connectionOutput,
  };
}

function mapEdges<T>(graph: Graph, edges: void | Edge[]): T[] {
  if (!edges) {
    return [];
  }
  return edges.map((edge) => graph.edge(edge));
}

export function inEdges<T>(graph: Graph, node: string) {
  return mapEdges<T>(graph, graph.inEdges(node));
}

export function outEdges<T>(graph: Graph, node: string) {
  return mapEdges<T>(graph, graph.outEdges(node));
}
