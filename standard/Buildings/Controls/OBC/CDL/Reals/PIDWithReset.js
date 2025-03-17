// http://example.org#Buildings.Controls.OBC.CDL.Reals.PIDWithReset

// 1) Import all sub-block factories. Adjust the require paths to match your project.
const subtract_1a2b = require("../../CDL/Reals/Subtract");
const multiplyParam_3c4d = require("../../CDL/Reals/MultiplyByParameter");
const integratorWithReset_4e5f = require("../../CDL/Reals/IntegratorWithReset");
const derivative_5f6g = require("../../CDL/Reals/Derivative");
const add_6g7h = require("../../CDL/Reals/Add");
const limiter_7h8i = require("../../CDL/Reals/Limiter");

const constant_8i9j = require("../../CDL/Reals/Sources/Constant");
const logicalConst_9j0k = require("../../CDL/Logical/Sources/Constant");
const assert_0k1l = require("../../CDL/Utilities/Assert");

/**
 * PID controller with integrator reset, configurable as P, PI, PD, or PID.
 * 
 * @param {Object} config
 * @param {string}  [config.controllerType="Buildings.Controls.OBC.CDL.Types.SimpleController.PI"]
 * @param {number}  [config.k=1]       - Gain of controller
 * @param {number}  [config.Ti=0.5]    - Integral time constant
 * @param {number}  [config.Td=0.1]    - Derivative time constant
 * @param {number}  [config.r=1]       - Typical range of control error
 * @param {number}  [config.yMax=1]    - Upper limit of output
 * @param {number}  [config.yMin=0]    - Lower limit of output
 * @param {number}  [config.Ni=0.9]    - Anti-windup factor
 * @param {number}  [config.Nd=10]     - Derivative filter factor
 * @param {number}  [config.xi_start=0] - Initial integrator state
 * @param {number}  [config.yd_start=0] - Initial derivative output
 * @param {boolean} [config.reverseActing=true] - Reverse vs. direct acting
 * @param {number}  [config.y_reset=0] - Value to which controller output is reset on trigger
 * 
 * @returns {Function} A function that takes inputs { u_s, u_m, trigger } and returns { y }.
 */
module.exports = (
  {
    controllerType = "Buildings.Controls.OBC.CDL.Types.SimpleController.PI",
    k = 1,
    Ti = 0.5,
    Td = 0.1,
    r = 1,
    yMax = 1,
    yMin = 0,
    Ni = 0.9,
    Nd = 10,
    xi_start = 0,
    yd_start = 0,
    reverseActing = true,
    y_reset = 0
  } = {}
) => {
  // 2) Determine if we have integral or derivative action.
  const with_I =
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PI" ||
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PID";

  const with_D =
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PD" ||
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PID";

  // 3) Convert reverseActing to ±1
  const revAct = reverseActing ? 1 : -1;

  // 4) Create sub-block factories that depend only on parameters (not on dynamic inputs).

  // (a) The limiter with fixed yMin/yMax
  const limFn = limiter_7h8i({ uMax: yMax, uMin: yMin });

  // (b) Anti-windup multiplier if with_I => 1/(k*Ni)
  const antWinGaiFn = with_I
    ? multiplyParam_3c4d({ k: 1 / (k * Ni) })
    : null;

  // (c) Derivative constants:
  //     kDer = k*Td, TDer = Td/Nd
  const kDerFn = with_D ? constant_8i9j({ k: k * Td }) : null;
  const TDerFn = with_D ? constant_8i9j({ k: Td / Nd }) : null;

  // If no derivative, we define a zero constant for the D input
  const DzeroFn = !with_D ? constant_8i9j({ k: 0 }) : null;

  // (d) IntegratorWithReset or zero
  //     The integrator’s gain is k/Ti, with initial state xi_start
  const iFn = with_I
    ? integratorWithReset_4e5f({ k: k / Ti, y_start: xi_start })
    : null;
  const IzeroFn = !with_I ? constant_8i9j({ k: 0 }) : null;

  // (e) Additional blocks used for reset logic:
  //     We have an extra constant for y_reset, plus a subtract block “addRes”
  //     (the name "addRes" is in the Modelica code, but it’s actually a Subtract).
  const yResSigFn = with_I ? constant_8i9j({ k: y_reset }) : null;
  const addResFn = with_I ? subtract_1a2b({}) : null;

  // (f) Sub-blocks for the main P path, subtract blocks, add blocks, etc.
  const subtractFn = subtract_1a2b({});
  const errPFn = subtract_1a2b({});
  const errDFn = with_D ? subtract_1a2b({}) : null;
  const errI1Fn = with_I ? subtract_1a2b({}) : null;
  const errI2Fn = with_I ? subtract_1a2b({}) : null;
  const antWinErrFn = with_I ? subtract_1a2b({}) : null;
  const addPDFn = add_6g7h({});
  const addPIDFn = add_6g7h({});

  // The P block is multiply-by-parameter with k
  const pFn = multiplyParam_3c4d({ k });

  // For the derivative block
  const dFn = with_D ? derivative_5f6g({ y_start: yd_start }) : null;

  // 5) Return the function that takes the actual inputs and wires everything
  return (
    {
      u_s = 0,       // setpoint
      u_m = 0,       // measurement
      trigger = false // boolean reset trigger
    } = {}
  ) => {
    // a) Multiply setpoint & measurement by revAct/r
    const uS_revActFn = multiplyParam_3c4d({ k: revAct / r });
    const uMea_revActFn = multiplyParam_3c4d({ k: revAct / r });

    const uS_revAct = uS_revActFn({ u: u_s });
    const uMea_revAct = uMea_revActFn({ u: u_m });

    // b) Sub-block "errP" => (uS_revAct - uMea_revAct)
    const errP = errPFn({ u1: uS_revAct.y, u2: uMea_revAct.y });
    // Then scale by k => P contribution
    const P = pFn({ u: errP.y });

    // c) Derivative part if with_D
    let Dval;
    if (with_D) {
      const errD = errDFn({ u1: uS_revAct.y, u2: uMea_revAct.y });
      const kd = kDerFn({});
      const Td_ = TDerFn({});
      // Evaluate derivative block => dFn({ u: errD.y, T: Td_.y, k: kd.y })
      const D_ = dFn({ u: errD.y, T: Td_.y, k: kd.y });
      Dval = D_.y;
    } else {
      const Dz = DzeroFn({});
      Dval = Dz.y; // zero
    }

    // d) Summation for PD => addPD(u1=P, u2=D)
    const addPD = addPDFn({
      u1: P.y,
      u2: Dval
    });

    // e) Integrator part if with_I
    let Ival;
    if (with_I) {
      // errI1 => (uS_revAct - uMea_revAct)
      const errI1 = errI1Fn({ u1: uS_revAct.y, u2: uMea_revAct.y });

      // We'll create subtract blocks for anti-windup: antWinErr, etc.
      const antWinErr = antWinErrFn({});
      // wire (addPID - lim) => antWinErr
      // in final pass below

      // Next, errI2 => combine errI1 and the anti-windup term
      const errI2 = errI2Fn({});

      // The integrator block iFn => integratorWithReset_4e5f
      // It also needs trigger, y_reset_in, etc.
      Ival = iFn({
        u: errI2.y,
        trigger: trigger, // from the input
        // We'll wire y_reset_in to something below
      });
    } else {
      // no integrator => zero
      Ival = IzeroFn({}).y;
    }

    // f) Summation for PID => addPID(u1=addPD.y, u2=Ival)
    const addPID = addPIDFn({
      u1: addPD.y,
      u2: with_I ? Ival.y : Ival // if Ival is just a .y or number
    });

    // g) Limit the output => limFn(u=addPID.y)
    const lim = limFn({ u: addPID.y });

    // h) Anti-windup logic: (addPID - lim) => antWinErr => antWinGai => errI2
    if (with_I) {
      // Evaluate the same sub-blocks a second time with actual wiring:
      const updatedAntWinErr = antWinErrFn({ u1: addPID.y, u2: lim.y }); // => Δy
      const updatedAntWinGai = antWinGaiFn({ u: updatedAntWinErr.y });   // => 1/(k*Ni)*Δy

      // Now feed that to errI2 => (errI1.y, updatedAntWinGai.y)
      // We need errI1 again:
      const reErrI1 = errI1Fn({});
      // But typically, we'd have stored that result earlier or you'd create it once.
      // For clarity, do a single pass or store them in variables. 
      // We'll assume we just do one pass. 
      // If you prefer a single-pass approach, keep references to each block's results.

      // Actually, let's do it more simply:
      // We'll re-call errI1Fn and errI2Fn with the real signals:
      const finalErrI1 = errI1Fn({ u1: uS_revAct.y, u2: uMea_revAct.y });
      const finalErrI2 = errI2Fn({ u1: finalErrI1.y, u2: updatedAntWinGai.y });
      // Re-run the integrator:
      const finalI = iFn({
        u: finalErrI2.y,
        trigger: trigger
        // y_reset_in wiring is below
      });

      // Then re-run addPID => finalAddPID
      const finalAddPID = addPIDFn({
        u1: addPD.y,
        u2: finalI.y
      });

      const finalLim = limFn({ u: finalAddPID.y });

      // Reset logic: “addRes” => subtract => (yResSig.y - addPD.y?) or (addPD.y - yResSig.y?)
      // Modelica says: connect(addPD.y, addRes.u2), connect(yResSig.y, addRes.u1)
      const yResSigVal = yResSigFn({});
      const addResVal = addResFn({ u1: yResSigVal.y, u2: addPD.y });

      // Now pass that to iFn => y_reset_in
      const finalI2 = iFn({
        u: finalErrI2.y,
        trigger: trigger,
        y_reset_in: addResVal.y
      });

      // Then final addPID => (PD + I)
      const finalAddPID2 = addPIDFn({
        u1: addPD.y,
        u2: finalI2.y
      });

      // Then final limiter
      const finalLim2 = limFn({ u: finalAddPID2.y });

      // Return the final output
      return {
        y: finalLim2.y
      };
    }

    // If no integrator, we skip all that extra logic and just return the simpler path
    return {
      y: lim.y
    };
  };
};
