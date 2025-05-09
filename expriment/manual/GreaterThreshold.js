const fs = require('fs');
const path = require('path');
const TimeManager = require("../standard/TimeManager");
const sinFactory = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Sin");
const gtFactory = require("../standard/Buildings/Controls/OBC/CDL/Reals/GreaterThreshold");

async function main() {
  // Simulation parameters
  const StopTime = 10.0;
  const totalSteps = 100;
  const dt = StopTime / totalSteps;

  // Instantiate blocks
  const sinSrc = sinFactory({
    amplitude: 8,
    freqHz: 1 / 10,
    offset: -2,
    startTime: 1
  });
  const gre = gtFactory({ t: 2 });
  const greHys = gtFactory({ t: 2, h: 1 });

  // Prepare TSV rows
  const rows = [];
  rows.push([
    "time",
    "gre.u", "gre.y",
    "greHys.u", "greHys.y"
  ].join('\t'));

  // Simulation loop
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // Sample sine source
    const { y: u } = sinSrc();

    // GreaterThreshold blocks
    const { y: y1 } = gre({ u });
    const { y: y2 } = greHys({ u });

    // Record row
    rows.push([
      t.toFixed(3),
      u.toFixed(4),
      y1 ? 1 : 0,
      u.toFixed(4),
      y2 ? 1 : 0
    ].join('\t'));

    TimeManager.advance(dt);
  }

  // Ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // Write TSV to js/GreaterThreshold.csv
  const outPath = path.join(dir, 'GreaterThreshold.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
