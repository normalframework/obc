const fs          = require('fs');
const path        = require('path');
const TimeManager = require("../standard/TimeManager");
const rampFactory = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp");
const sinFactory  = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sin");
const udFactory   = require("../standard/Buildings/Controls/OBC/CDL/Discrete/UnitDelay");

async function main() {
  // Simulation parameters
  const StopTime   = 1.0;
  const totalSteps = 100;
  const dt         = StopTime / totalSteps;

  // Instantiate blocks
  const ramp1      = rampFactory({ duration: 1, offset: 0, height: 6.2831852 });
  const sin1       = sinFactory();
  const unitDelay1 = udFactory({ samplePeriod: 0.2 });

  // Prepare rows
  const rows = [];
  rows.push([ "time", "unitDelay.u", "unitDelay.y" ].join('\t'));

  // Simulation loop
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // Continuous path: ramp → sin → unit delay
    const { y: ramp_y } = ramp1();
    const { y: sin_y  } = sin1({ u: ramp_y });
    const { y: y_del  } = unitDelay1({ u: sin_y });

    // Record: time, input to UnitDelay, output from UnitDelay
    rows.push([
      t.toFixed(3),
      sin_y.toFixed(4),
      y_del.toFixed(4)
    ].join('\t'));

    TimeManager.advance(dt);
  }

  // Ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Write TSV to js/UnitDelay.csv
  const outPath = path.join(dir, 'UnitDelay.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
