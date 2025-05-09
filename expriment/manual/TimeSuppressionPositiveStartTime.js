const fs = require('fs');
const path = require('path');
const TimeManager = require("../../standard/TimeManager");
const sinFactory = require("../../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Sin");
const rampFactory = require("../../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp");
const tsFactory = require("../TimeSuppression");

async function main() {
  // Simulation parameters
  const StopTime = 7200;   // run long enough to cover setpoint start + maxTim
  const totalSteps = 100;
  const dt = StopTime / totalSteps;


  // Instantiate sources
  const zonTem = sinFactory({
    amplitude: 2,
    freqHz: 1 / 7200,
    offset: 298.15,
    startTime: 0
  });
  const cooSet = rampFactory({
    height: 5,
    duration: 600,
    offset: 295.15,
    startTime: 900
  });

  // Instantiate TimeSuppression blocks
  const timSupCooReq = tsFactory();
  const timSupAla = tsFactory({ chaRat: 1080, maxTim: 7200 });

  // Prepare TSV rows
  const rows = [];
  rows.push([
    "time",
    "timSupCooReq.TSet", "timSupCooReq.TZon", "timSupCooReq.y",
    "timSupAla.TSet", "timSupAla.TZon", "timSupAla.y"
  ].join('\t'));

  // Simulation loop
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // Sample sources
    const { y: TZon } = zonTem();
    const { y: TSet } = cooSet();

    // Step TimeSuppression blocks
    const out1 = timSupCooReq({ TZon, TSet });
    const out2 = timSupAla({ TZon, TSet });

    // Record row
    rows.push([
      t.toFixed(1),
      TSet.toFixed(4), TZon.toFixed(4), out1.yAftSup ? 1 : 0,
      TSet.toFixed(4), TZon.toFixed(4), out2.yAftSup ? 1 : 0
    ].join('\t'));

    TimeManager.advance(dt);
  }

  // Ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // Write TSV to js/TimeSuppressionPositiveStartTime.csv
  const outPath = path.join(dir, 'TimeSuppressionPositiveStartTime.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
