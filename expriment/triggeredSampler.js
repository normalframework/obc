const fs           = require('fs');
const path         = require('path');
const TimeManager  = require("../standard/TimeManager");
const rampFactory  = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp");
const sinFactory   = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sin");
const pulseFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Pulse");
const tsFactory    = require("../standard/Buildings/Controls/OBC/CDL/Discrete/TriggeredSampler");

// helper to format booleans as 0/1
function b(v) { return v ? 1 : 0; }

async function main() {
  // --- create blocks ---
  const ramp1  = rampFactory({ duration: 1, offset: 0, height: 6.2831852 });
  const sin1   = sinFactory();
  const booPul = pulseFactory({ period: 0.2, width: 0.5 });
  const triSam   = tsFactory({ y_start: 0 });
  const triSam1  = tsFactory({ y_start: 1 });

  // prepare rows
  const rows = [];
  rows.push([
    "time",
    "triSam.u",   "triSam.trigger",   "triSam.y",
    "triSam1.u",  "triSam1.trigger",  "triSam1.y"
  ].join("\t"));

  // simulate 1 s at dt=0.01 s
  const totalSteps = Math.round(1.0 / 0.01);
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // continuous path: ramp → sin
    const { y: ramp_y } = ramp1();
    const { y: sin_y  } = sin1({ u: ramp_y });

    // trigger
    const { y: trig } = booPul();

    // samplers
    const out0 = triSam({ u: sin_y, trigger: trig });
    const out1 = triSam1({ u: sin_y, trigger: trig });

    // record
    rows.push([
      t.toFixed(3),
      sin_y.toFixed(4),     b(trig),     out0.y.toFixed(4),
      sin_y.toFixed(4),     b(trig),     out1.y.toFixed(4)
    ].join("\t"));

    TimeManager.advance(0.01);
  }

  // write to file
  const outPath = path.join(__dirname, "js", "TriggeredSampler.csv");
  fs.writeFileSync(outPath, rows.join("\n"), "utf8");
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
