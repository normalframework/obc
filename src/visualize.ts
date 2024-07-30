import { Graph } from "@dagrejs/graphlib";
import dot from "graphlib-dot";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render";
import fs from "fs";
import clc from 'cli-color';

export function visualizeGraph(graph: Graph, filename: string = "graph.svg") {
  const dotStr = dot.write(graph);
  // Render the graph to SVG using Viz.js
  const viz = new Viz({ Module, render });
  viz
    .renderString(dotStr, { format: "svg" })
    .then((svg) => {
      // Save the SVG to a file
      fs.writeFileSync(filename, svg);
      console.log(clc.blue('[GRAPH]'), `-> ${filename}`);
    })
    .catch((error) => {
      console.error("Error rendering graph:", error);
    });
}
