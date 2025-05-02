// validateDerivative.js
// ----------------------------------------------------------------------------
// Validation script for Buildings.Controls.OBC.CDL.Reals.Validation.Derivative
// ----------------------------------------------------------------------------

const createDerivative = require("../standard/Buildings/Controls/OBC/CDL/Reals/Derivative");
const createConstant = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Constant");
const createRamp = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/Ramp");
const createCivilTime = require("../standard/Buildings/Controls/OBC/CDL/Reals/Sources/CivilTime");
const createIntegrator = require("../standard/Buildings/Controls/OBC/CDL/Reals/IntegratorWithReset");
const createMultiplyByParam = require("../standard/Buildings/Controls/OBC/CDL/Reals/MultiplyByParameter");
const createSubtract = require("../standard/Buildings/Controls/OBC/CDL/Reals/Subtract");
const createCos = require("../standard/Buildings/Controls/OBC/CDL/Reals/Cos");
const createAbs = require("../standard/Buildings/Controls/OBC/CDL/Reals/Abs");
const createLessThreshold = require("../standard/Buildings/Controls/OBC/CDL/Reals/LessThreshold");
const createBoolConstant = require("../standard/Buildings/Controls/OBC/CDL/Logical/Sources/Constant");
const TimeManager = require("../standard/TimeManager");

// 1) Instantiate all blocks with their tuneable parameters
const der1 = createDerivative({ y_start: 1, });
const der2 = createDerivative({ y_start: 0 });


const ramp = createRamp({ height: 0.09, duration: 10, offset: 0.01, startTime: 5 });
const Tconst = createConstant({ k: 0.1 });

const modTime = createCivilTime();
const mulParam = createMultiplyByParam({ k: 1 });

const integr = createIntegrator({ y_start: 1 });
const cos = createCos();


// 2) Prepare arrays for logging
const log = {
  time: [], cos: [], der1: [], der2: [],
  error: [], withinTol: []
};

// 3) Run the simulation loop
const dt = 0.005;
for (; TimeManager.time <= 10.0; TimeManager.advance(dt)) {
  const t = Number(TimeManager.time.toFixed(8));

  // — Signal flow exactly as the Modelica ‘connect(...)’ lines
  const k1 = 1;
  const T1 = ramp().y;
  const k2 = 2;
  const T2 = 0.1;

  const timeVal = modTime().y;
  const scaled = mulParam({ u: timeVal }).y;
  const cosVal = cos({ u: scaled }).y;

  // IntegratorWithReset: u ← cosVal
  const intVal = integr({ u: cosVal, y_reset_in: cosVal }).y;


  // Two derivative tests: one on the integrator’s output:
  const der1Val = der1({ k: k1, T: T1, u: intVal }).y;
  const der2Val = der2({ k: k2, T: T2, u: intVal }).y;


  // Compute difference against the original cos


  // Log everything
  log.time.push(t);
  log.cos.push(cosVal);
  log.der1.push(der1Val);
  log.der2.push(der2Val);
  // log.error.push(absErr);
  // log.withinTol.push(ok);
}

const header = ["time", "cos", "der1", "der2"].join(",");
console.log(header);
for (let i = 0; i < log.time.length; i++) {
  console.log([
    log.time[i].toFixed(4),
    log.cos[i].toFixed(6),
    log.der1[i].toFixed(6),
    log.der2[i].toFixed(6),
  ].join(","));
}
