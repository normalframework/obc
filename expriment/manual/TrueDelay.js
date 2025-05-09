const fs          = require('fs');
const path        = require('path');
const TimeManager = require("../standard/TimeManager");
const pulseFactory     = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Pulse");
const notFactory       = require("../standard/Buildings/Controls/OBC/CDL/Logical/Not");
const trueDelayFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/TrueDelay");

async function main() {
  // Simulation parameters
  const StopTime   = 5.0;
  const totalSteps = 100;
  const dt         = StopTime / totalSteps;

  // --- create sources and inverters ---
  const booPul  = pulseFactory({ period: 1.5, width: 0.5 });
  const booPul1 = pulseFactory({ period: 1.5, width: 0.5 });
  const not1    = notFactory();
  const not2    = notFactory();

  // --- instantiate TrueDelay blocks ---
  const delays = [
    trueDelayFactory({ delayTime: 0         }), // onDelay0
    trueDelayFactory({ delayTime: 0.5       }), // onDelay1
    trueDelayFactory({ delayTime: 0.8       }), // onDelay2
    trueDelayFactory({ delayTime: 1.8       }), // onDelay3
    trueDelayFactory({ delayTime: 0         }), // onDelay4 (fed by not1)
    trueDelayFactory({ delayTime: 0.5       }), // onDelay5
    trueDelayFactory({ delayTime: 0.8       }), // onDelay6
    trueDelayFactory({ delayTime: 1.8       }), // onDelay7
    trueDelayFactory({ delayTime: 0,   delayOnInit: true }), // onDelay00
    trueDelayFactory({ delayTime: 0.5, delayOnInit: true }), // onDelay11
    trueDelayFactory({ delayTime: 0.8, delayOnInit: true }), // onDelay22
    trueDelayFactory({ delayTime: 1.8, delayOnInit: true }), // onDelay33
    trueDelayFactory({ delayTime: 0,   delayOnInit: true }), // onDelay44 (fed by not2)
    trueDelayFactory({ delayTime: 0.5, delayOnInit: true }), // onDelay55
    trueDelayFactory({ delayTime: 0.8, delayOnInit: true }), // onDelay66
    trueDelayFactory({ delayTime: 1.8, delayOnInit: true })  // onDelay77
  ];

  // --- prepare TSV rows ---
  const rows = [];
  const names = [
    'onDelay0','onDelay1','onDelay2','onDelay3',
    'onDelay4','onDelay5','onDelay6','onDelay7',
    'onDelay00','onDelay11','onDelay22','onDelay33',
    'onDelay44','onDelay55','onDelay66','onDelay77'
  ];
  const header = ['time'];
  for (const n of names) {
    header.push(`${n}.u`, `${n}.y`);
  }
  rows.push(header.join('\t'));

  // simulate StopTime at totalSteps
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // source signals
    const { y: p0 } = booPul();
    const { y: p1 } = booPul1();
    const { y: n1 } = not1({ u: p0 });
    const { y: n2 } = not2({ u: p1 });

    // inputs for each delay block
    const inputs = [
      p0, p0, p0, p0,  // onDelay0..3
      n1, n1, n1, n1,  // onDelay4..7
      p1, p1, p1, p1,  // onDelay00..33
      n2, n2, n2, n2   // onDelay44..77
    ];

    const row = [t.toFixed(3)];
    delays.forEach((del, i) => {
      const out = del({ u: inputs[i] });
      row.push(inputs[i] ? 1 : 0, out.y ? 1 : 0);
    });

    rows.push(row.join('\t'));
    TimeManager.advance(dt);
  }

  // ensure js/ folder exists
  const dir = path.join(__dirname, 'js');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // write TSV to js/TrueDelay.csv
  const outPath = path.join(dir, 'TrueDelay.csv');
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
