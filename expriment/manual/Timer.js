const fs          = require('fs');
const path        = require('path');
const TimeManager = require("../standard/TimeManager");
const pulseFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Pulse");
const timerFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Timer");

async function main() {
  // Simulation parameters
  const StopTime   = 5.0;      // two full periods of the 2s pulse
  const totalSteps = 100;
  const dt         = StopTime / totalSteps;

  // Instantiate sources
  const booPul  = pulseFactory({ period: 2, width: 0.7 });
  const booPul1 = pulseFactory({ period: 2, width: 0.7, shift: -1 });

  // Instantiate Timer blocks
  const noThr   = timerFactory();               // default, no threshold compare
  const thrTim  = timerFactory({ t: 0.3 });     // compare threshold on input 1
  const thrTim1 = timerFactory({ t: 0.3 });     // compare threshold on input 2

  // Prepare rows
  const rows = [];
  rows.push([
    "time",
    "noThr.u",   "noThr.y",
    "thrTim.u",  "thrTim.y",
    "thrTim1.u", "thrTim1.y"
  ].join('\t'));

  // Simulation loop
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // Generate inputs
    const { y: u1 } = booPul();
    const { y: u2 } = booPul1();

    // Step each timer
    const { y: y_noThr }   = noThr({ u: u1 });
    const { y: y_thrTim }  = thrTim({ u: u1 });
    const { y: y_thrTim1 } = thrTim1({ u: u2 });

    // Record row
    rows.push([
      t.toFixed(3),
      u1 ? 1 : 0,     y_noThr.toFixed(3),
      u1 ? 1 : 0,     y_thrTim.toFixed(3),
      u2 ? 1 : 0,     y_thrTim1.toFixed(3)
    ].join('\t'));

    TimeManager.advance(dt);
  }

  // Ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Write TSV to js/Timer.csv
  const outPath = path.join(dir, 'Timer.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
