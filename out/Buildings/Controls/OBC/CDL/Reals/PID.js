// http://example.org#Buildings.Controls.OBC.CDL.Reals.PID

// 1) Import the sub-blocks that appear in the Modelica code.
//    Adjust the require paths to match your directory structure.
const subtract_20a0b = require("../../CDL/Reals/Subtract");
const multiplyParam_a2f3c = require("../../CDL/Reals/MultiplyByParameter");
const integratorWithReset_3d2be = require("../../CDL/Reals/IntegratorWithReset");
const derivative_1b53e = require("../../CDL/Reals/Derivative");
const add_4c6b1 = require("../../CDL/Reals/Add");
const limiter_e9cb2 = require("../../CDL/Reals/Limiter");

// For constants:
const constant_4e0fa = require("../../CDL/Reals/Sources/Constant");
// For logical checks/ asserts, if needed:
const logicalConst_73bbd = require("../../CDL/Logical/Sources/Constant");
const assert_176ca = require("../../CDL/Utilities/Assert");

/**
 * PID controller that can be configured for P, PI, PD, or PID action.
 *
 * @param {Object} config Configuration object for all Modelica parameters
 * @param {string} [config.controllerType="Buildings.Controls.OBC.CDL.Types.SimpleController.PI"]
 * @param {number} [config.k=1]       - Controller gain
 * @param {number} [config.Ti=0.5]    - Integral time
 * @param {number} [config.Td=0.1]    - Derivative time
 * @param {number} [config.r=1]       - Scaling factor for the control error
 * @param {number} [config.yMax=1]    - Upper limit of output
 * @param {number} [config.yMin=0]    - Lower limit of output
 * @param {number} [config.Ni=0.9]    - Anti-windup factor
 * @param {number} [config.Nd=10]     - Derivative filter factor
 * @param {number} [config.xi_start=0] - Initial integrator state
 * @param {number} [config.yd_start=0] - Initial derivative output
 * @param {boolean} [config.reverseActing=true]
 * @returns {Function} A function that takes inputs and returns outputs
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
    reverseActing = true
  } = {}
) => {
  // 2) Evaluate booleans for integral or derivative:
  const with_I =
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PI" ||
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PID";

  const with_D =
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PD" ||
    controllerType === "Buildings.Controls.OBC.CDL.Types.SimpleController.PID";

  // 3) Convert reverseActing into ±1
  const revAct = reverseActing ? 1 : -1;

  // 4) Pre-create sub-block factories that do NOT depend on dynamic inputs.
  //    For instance, the “limiter” block that uses fixed yMin/yMax.
  const limFn = limiter_e9cb2({ uMax: yMax, uMin: yMin });

  // For anti-windup gain: k * Ni might matter, but from the code:
  //   antWinGai(k=1/(k*Ni))
  // We'll do:
  const antWinGaiFn = with_I
    ? multiplyParam_a2f3c({ k: 1 / (k * Ni) })
    : null;

  // Derivative gain constants for TDer, kDer, etc.:
  //  kDer(k = k*Td), TDer(k = Td/Nd)
  const kDerFn = with_D ? constant_4e0fa({ k: k * Td }) : null;
  const TDerFn = with_D ? constant_4e0fa({ k: Td / Nd }) : null;

  // If no derivative, we have a constant=0 block for the D input.
  const DzeroFn = !with_D ? constant_4e0fa({ k: 0 }) : null;

  // For integral, we either instantiate IntegratorWithReset or a constant=0
  const iFn = with_I
    ? integratorWithReset_3d2be({ k: k / Ti, y_start: xi_start })
    : null;
  const IzeroFn = !with_I ? constant_4e0fa({ k: 0 }) : null;
  const conFn = with_I ? constant_4e0fa({ k: 0 }) : null;    // zero for reset?
  const con1Fn = with_I ? logicalConst_73bbd({ k: false }) : null;

  // The main derivative block:
  const dFn = with_D
    ? derivative_1b53e({
        y_start: yd_start
        // We'll pass T and k dynamically when we call it
      })
    : null;

  // The P block is a multiply-by-parameter with P.k = k
  const pFn = multiplyParam_a2f3c({ k });

  // Sub-controllers for subtract or add
  const subtractFn = subtract_20a0b({});
  const errPFn = subtract_20a0b({});
  const errDFn = with_D ? subtract_20a0b({}) : null;
  const errI1Fn = with_I ? subtract_20a0b({}) : null;
  const errI2Fn = with_I ? subtract_20a0b({}) : null;
  const antWinErrFn = with_I ? subtract_20a0b({}) : null;
  const addPDFn = add_4c6b1({});
  const addPIDFn = add_4c6b1({});

  // Possibly also a subtract block for "controlError" if you want it directly:
  const controlErrorFn = subtract_20a0b({});

  // 5) Return the function that does the wiring for each call
  return (
    {
      u_s = 0, // set point
      u_m = 0  // measurement
    } = {}
  ) => {
    // ————— 5A. Evaluate sub-blocks in "wiring" order ————— //

    // a) Create the control error: (u_s - u_m)
    const controlError = controlErrorFn({ u1: u_s, u2: u_m });

    // b) Multiply setpoint by revAct/r, measurement by revAct/r
    //    In the Modelica code, they used separate MultiplyByParameter blocks:
    const uS_revActFn = multiplyParam_a2f3c({ k: revAct / r });
    const uMea_revActFn = multiplyParam_a2f3c({ k: revAct / r });

    const uS_revAct = uS_revActFn({ u: u_s });
    const uMea_revAct = uMea_revActFn({ u: u_m });

    // c) Sub-block "errP" => (setpoint - measurement) in P path
    //    In code:  connect(uS_revAct.y, errP.u1), connect(uMea_revAct.y, errP.u2)
    const errP = errPFn({ u1: uS_revAct.y, u2: uMea_revAct.y });

    // d) Evaluate the P output: pFn => Multiply by k
    const P = pFn({ u: errP.y });  // P.y is the proportional contribution

    // e) For D part (if with_D)
    let D = null;
    let errD = null;
    let kDer = null;
    let TDer = null;
    if (with_D) {
      errD = errDFn({ u1: uS_revAct.y, u2: uMea_revAct.y });
      kDer = kDerFn({});
      TDer = TDerFn({});
      // We call dFn with { y_start, T, k }, so pass TDer.y, kDer.y as the “T” and “k”.
      D = dFn({ u: errD.y, T: TDer.y, k: kDer.y });
    }

    // If no derivative, we have D=0 from DzeroFn
    const Dzero = !with_D ? DzeroFn({}) : null;

    // f) For I part (if with_I)
    let I = null;
    let errI1 = null;
    let errI2 = null;
    let antWinErr = null;
    let antWinGai = null;
    if (with_I) {
      // errI1 => subtract => setpoint - measurement for I path
      errI1 = errI1Fn({ u1: uS_revAct.y, u2: uMea_revAct.y });

      // The integrator’s input is errI2.y
      errI2 = errI2Fn({});
      // wire up errI1 => errI2.u1
      // wire up antWinGai => errI2.u2

      // anti-windup error => subtract( addPID - lim.y )
      antWinErr = antWinErrFn({});
      // antWinGai => multiplyByParameter => (1/(k*Ni))
      antWinGai = antWinGaiFn({}); // partial

      // finally, the integrator
      I = iFn({ u: errI2.y });
    } else {
      // no integrator => I=0
    }

    // g) Summation for PD => addPD, for PID => addPID
    // addPD => P + D (or D=0 if ~with_D)
    const addPD = addPDFn({
      u1: P.y,
      u2: with_D ? D.y : Dzero?.y
    });

    // addPID => addPD.y + I.y (or 0 if ~with_I)
    const addPID = addPIDFn({
      u1: addPD.y,
      u2: with_I ? I.y : IzeroFn?.({})?.y
    });

    // h) Final limiter => lim(u = addPID.y)
    const lim = limFn({ u: addPID.y });

    // i) Anti-windup (if with_I) => antWinErr.u1 = addPID.y, antWinErr.u2 = lim.y
    //    antWinGai.u = antWinErr.y, errI2.u2 = antWinGai.y, etc.
    if (with_I) {
      antWinErrFn({ u1: addPID.y, u2: lim.y });         // set .y => Δy
      const awErr = antWinErrFn({});
      const awGai = antWinGaiFn({ u: awErr.y });        // => (Δy * 1/(k*Ni))
      // feed into errI2
      errI2Fn({ u1: errI1.y, u2: awGai.y });            // => integrator input
      // now get the final instance
      // note: since we re-called these sub-blocks, store them in local variables:
      const updatedAntWinErr = antWinErrFn({});
      const updatedErrI2 = errI2Fn({});
      const updatedAwGai = antWinGaiFn({});
      // integrate
      I = iFn({ u: updatedErrI2.y });
    }

    // j) Return final output
    // The final output is the limiter's output: lim.y
    return {
      y: lim.y
    };
  };
};
