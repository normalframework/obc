const fs       = require('fs');
const path     = require('path');
const TimeManager = require("../standard/TimeManager");
const latchFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Latch");
const notFactory   = require("../standard/Buildings/Controls/OBC/CDL/Logical/Not");
const pulseFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Pulse");
const constFactory = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Constant");

// helper to format booleans as 0/1 for CSV
function b(v) { return v ? 1 : 0; }

async function main() {
  // --- create source blocks ---
  const fal    = constFactory({ k: false });
  const tru    = constFactory({ k: true  });
  const cleInp = pulseFactory({ period: 6, width: 0.5 });
  const latInp = pulseFactory({ period: 2, width: 0.5 });
  const not1   = notFactory();
  const not2   = notFactory();

  // --- instantiate latches with initial state ---
  const falCleTruIni = latchFactory({ init: true });
  const truCleTruIni = latchFactory({ init: true });
  const falCleFalIni = latchFactory({ init: false });
  const truCleFalIni = latchFactory({ init: false });
  const swiCleInp    = latchFactory({ init: false });
  const swiCleInp1   = latchFactory({ init: false });

  // --- prepare arrays for TSV output ---
  const rows = [];
  // tab‐separated header
  rows.push([
    "time",
    "falCleTruIni.u",  "falCleTruIni.clr",  "falCleTruIni.y",
    "falCleFalIni.u",  "falCleFalIni.clr",  "falCleFalIni.y",
    "truCleTruIni.u",  "truCleTruIni.clr",  "truCleTruIni.y",
    "truCleFalIni.u",  "truCleFalIni.clr",  "truCleFalIni.y",
    "swiCleInp.u",     "swiCleInp.clr",     "swiCleInp.y",
    "swiCleInp1.u",    "swiCleInp1.clr",    "swiCleInp1.y"
  ].join("\t"));

  // simulate
  const totalSteps = 100;
  for (let step = 0; step <= totalSteps; step++) {
    const t = TimeManager.time;

    // sources
    const { y: u_cle } = cleInp();
    const { y: u_lat } = latInp();
    const { y: y_fal } = fal();
    const { y: y_tru } = tru();
    const { y: y_not2} = not2({ u: u_lat });
    const { y: y_not1} = not1({ u: u_cle });

    // latch outputs
    const o1 = falCleTruIni({ u: u_lat, clr: y_fal });
    const o2 = falCleFalIni({ u: y_not2, clr: y_fal });
    const o3 = truCleTruIni({ u: u_lat, clr: y_tru });
    const o4 = truCleFalIni({ u: y_not2, clr: y_tru });
    const o5 = swiCleInp({ u: u_lat, clr: u_cle });
    const o6 = swiCleInp1({ u: u_lat, clr: y_not1 });

    // record row (tab‐separated)
    rows.push([
      t.toFixed(3),
      b(u_lat), b(y_fal), b(o1.y),
      b(y_not2), b(y_fal), b(o2.y),
      b(u_lat), b(y_tru), b(o3.y),
      b(y_not2), b(y_tru), b(o4.y),
      b(u_lat), b(u_cle), b(o5.y),
      b(u_lat), b(y_not1), b(o6.y)
    ].join("\t"));

    TimeManager.advance(0.1);
  }

  // write TSV to file
  const outPath = path.join(__dirname, "js", "Latch.csv");
  fs.writeFileSync(outPath, rows.join("\n"), "utf8");
  console.log(`Wrote validation results to ${outPath}`);
}

main().catch(console.error);
