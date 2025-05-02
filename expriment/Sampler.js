const fs          = require('fs');
const path        = require('path');
const TimeManager = require("../standard/TimeManager");
const rampFactory = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp");
const sinFactory  = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sin");
const samplerFactory = require("../standard/Buildings/Controls/OBC/CDL/Discrete/Sampler");

async function main() {
  // Simulation parameters
  const StopTime   = 1.0;
  const totalSteps = 100;
  const dt         = StopTime / totalSteps;

  // Instantiate blocks
  const ramp1    = rampFactory({ duration: 1, offset: 0, height: 6.2831852 });
  const sin1     = sinFactory();
  const sampler1 = samplerFactory({ samplePeriod: 0.2 });

  // Prepare TSV rows
  const rows = [];
  rows.push([ "time", "sampler1.u", "sampler1.y" ].join('\t'));

  // Simulation loop
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // Continuous path: ramp → sin → sampler
    const { y: ramp_y } = ramp1();
    const { y: sin_y  } = sin1({ u: ramp_y });
    const { y: y_samp } = sampler1({ u: sin_y });

    // Record: time, input, output
    rows.push([
      t.toFixed(3),
      sin_y.toFixed(4),
      y_samp.toFixed(4)
    ].join('\t'));

    TimeManager.advance(dt);
  }

  // Ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Write TSV to js/Sampler.csv
  const outPath = path.join(dir, 'Sampler.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
