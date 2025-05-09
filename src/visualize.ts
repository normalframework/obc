import { Graph } from "@dagrejs/graphlib";
import dot from "graphlib-dot";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render";
import fs from "fs";
import clc from "cli-color";

/**
 * Finds the longest common prefix among a list of strings.
 */
function getLongestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) return "";
  let prefix = strings[0];
  for (const str of strings) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

function pretifyGraph(graph: Graph) {
  const nodes = graph.nodes();
  const commonPrefix = getLongestCommonPrefix(nodes);

  const newGraph = new Graph({
    directed: graph.isDirected(),
    multigraph: graph.isMultigraph(),
    compound: graph.isCompound(),
  });

  const idMap: Record<string, string> = {};
  for (const node of nodes) {
    let newId = node.slice(commonPrefix.length);
    if (newId.startsWith(".")) {
      newId = newId.slice(1);
    }
    if (!newId) {
      newId = "root";
    }
    idMap[node] = newId;
    newGraph.setNode(newId, graph.node(node));
  }

  for (const edge of graph.edges()) {
    const newV = idMap[edge.v];
    const newW = idMap[edge.w];
    newGraph.setEdge(newV, newW, graph.edge(edge), edge.name);
  }

  return newGraph;
}

export function visualizeGraph(graph: Graph, filename: string = "graph.svg") {
  const dotStr = dot.write(pretifyGraph(graph));
  // Render the graph to SVG using Viz.js
  const viz = new Viz({ Module, render });
  viz
    .renderString(dotStr, { format: "svg" })
    .then((svg) => {
      // Save the SVG to a file
      fs.writeFileSync(filename, svg);
      console.log(clc.blue("[GRAPH]"), `-> ${filename}`);
    })
    .catch((error) => {
      console.error("Error rendering graph:", error);
    });
}
