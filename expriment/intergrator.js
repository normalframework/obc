const createIntegrator = require("../standard/Buildings/Controls/OBC/CDL/Reals/IntegratorWithReset"); // Adjust path accordingly
const createTrigger = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/SampleTrigger"); // Adjust path accordingly
const createRamp = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp"); // Adjust path accordingly
const createPulse = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Pulse"); // Adjust path accordingly
const TimeManager = require("../standard/TimeManager");

const trigger = createTrigger({ period: 0.2 });

const intDef = createIntegrator({ y_start: -2, k: 1 });

// intWitRes1: y_start=-2, k=0.5
const intWitRes1 = createIntegrator({ y_start: -2, k: 0.5 });

// intWitRes2: y_start=-5, k=0.5
const intWitRes2 = createIntegrator({ y_start: -5, k: 0.5 });

const ramp = createRamp({ duration: 1, height: -1, offset: -2 });
const pulse = createPulse({ width: 0.5, period: 0.2 });

// Arrays to store results
const timeArray = [];
const triggerResArray = [];
const boolPulseArray = [];
const yResetArray = [];
const outDefArray = [];
const out1Array = [];
const out2Array = [];

for (let step = 0; ; step++) {
  const t = TimeManager.time;
  if (t > 1.0) break;

  // inputs
  const u = 10;
  const triggerRes = trigger().y
  const boolPulse = pulse().y
  const yReset = ramp().y
  // step each integrator
  const outDef = intDef({ u, trigger: triggerRes, y_reset_in: yReset }).y;
  const out1 = intWitRes1({ u, trigger: triggerRes, y_reset_in: yReset }).y;
  const out2 = intWitRes2({ u, trigger: boolPulse, y_reset_in: yReset }).y;

  // Store results
  timeArray.push(Number(t.toFixed(8)));
  triggerResArray.push(triggerRes);
  boolPulseArray.push(boolPulse);
  yResetArray.push(yReset);
  outDefArray.push(outDef);
  out1Array.push(out1);
  out2Array.push(out2);

  TimeManager.advance(.01)
}

// Create CSV header
const header = ['time', 'triggerRes', 'boolPulse', 'yReset', 'intDef', 'intWitRes1', 'intWitRes2'].join(',');

// Create CSV rows
const rows = timeArray.map((time, i) => {
  return [
    time,
    triggerResArray[i],
    boolPulseArray[i],
    yResetArray[i],
    outDefArray[i],
    out1Array[i],
    out2Array[i]
  ].join(',');
});

console.log(header);
rows.forEach(row => console.log(row));