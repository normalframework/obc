const fs = require('fs');
const path = require('path');
const TimeManager = require("../standard/TimeManager");
const pulseFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Pulse");
const edgeFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Edge");
const rampFactory = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp");
const tsFactory = require("../standard/Buildings/Controls/OBC/CDL/Discrete/TriggeredSampler");

async function main() {
  // Simulation parameters
  const StopTime = 5.0;      // match ramp duration
  const totalSteps = 100;
  const dt = StopTime / totalSteps;

  // Instantiate blocks
  const booPul = pulseFactory({ period: 1.0, width: 0.5 });
  const edge1 = edgeFactory();
  const ramp2 = rampFactory({ duration: 5, offset: 0, height: 20 });
  const triSampler = tsFactory({ y_start: 0 });

  // Prepare TSV rows
  const rows = [];
  rows.push([
    "time",
    "edge1.u", "edge1.y",
    "triggeredSampler.u", "triggeredSampler.trigger", "triggeredSampler.y"
  ].join('\t'));

  // Simulation loop
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // Generate signals
    const { y: pulse_y } = booPul();
    const { y: ramp_y } = ramp2();
    const { y: edge_y } = edge1({ u: pulse_y });
    const { y: ts_y } = triSampler({ u: ramp_y, trigger: edge_y });

    // Record row
    rows.push([
      t.toFixed(3),
      pulse_y ? 1 : 0, edge_y ? 1 : 0,
      ramp_y.toFixed(4), edge_y ? 1 : 0, ts_y.toFixed(4)
    ].join('\t'));

    TimeManager.advance(dt);
  }

  // Ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Write TSV to js/Edge.csv
  const outPath = path.join(dir, 'Edge.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
