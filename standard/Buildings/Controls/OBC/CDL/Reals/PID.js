const IntegratorReset = require('./IntegratorWithReset');
const DerivativeBlock = require('./Derivative');
const Limiter = require('./Limiter');

const ControllerType = {
  P: 0,
  PI: 1,
  PD: 2,
  PID: 3,
}

/**
 * PID block implementing P, PI, PD, and PID control with optional anti-windup and output limits.
 *
 * @param {Object} params - The parameters object.
 * @param {string} [params.controllerType="Buildings.Controls.OBC.CDL.Types.SimpleController.PI"]
 *   - Type of controller.
 * @param {number} [params.k=1]         - Controller gain.
 * @param {number} [params.Ti=0.5]      - Integral time constant.
 * @param {number} [params.Td=0.1]      - Derivative time constant.
 * @param {number} [params.r=1]         - Typical error scale.
 * @param {number} [params.yMax=1]      - Upper output limit.
 * @param {number} [params.yMin=0]      - Lower output limit.
 * @param {number} [params.Ni=0.9]      - Anti-windup factor.
 * @param {number} [params.Nd=10]       - Derivative filter factor.
 * @param {number} [params.xi_start=0]  - Initial integrator state.
 * @param {number} [params.yd_start=0]  - Initial derivative output.
 * @param {boolean} [params.reverseActing=true] - True for reverse-acting control.
 */

function pid({
  controllerType = ControllerType.PI,
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
} = {}) {

  const with_I = controllerType === ControllerType.PI ||
    controllerType === ControllerType.PID;

  const with_D = controllerType === ControllerType.PD ||
    controllerType === ControllerType.PID;

  const rev = reverseActing ? 1 : -1;
  const dBlock = DerivativeBlock({ y_start: yd_start })
  const iBlock = IntegratorReset({ k: k / Ti, y_start: xi_start });
  const limBlock = Limiter({ uMin: yMin, uMax: yMax });

  let lastPID = 0;
  let lastLimitedPID = 0;

  return function step({ u_s = 0, u_m = 0 } = {}) {

    const uS_revAct = u_s * (rev / r);
    const uM_revAct = u_m * (rev / r);

    // 1. compute scaled, reverse-acting error
    const err = uS_revAct - uM_revAct;

    // 2. P term
    const pTerm = err * k;

    // 3. D term
    const dTerm = with_D
      ? dBlock({ u: err, k: k * Td, T: Td / Nd }).y
      : 0;


    // 4. I term before anti-windup
    let I = 0;
    if (with_I) {
      const awErr = lastPID - lastLimitedPID;
      const awGain = 1 / (k * Ni);
      const awCorr = awGain * awErr;
      I = iBlock({ u: err - awCorr }).y;
    }

    // 5. sum P+I+D
    const sumPID = pTerm + I + dTerm;

    // 6. limit output
    const output = limBlock({ u: sumPID }).y;

    lastPID = sumPID;
    lastLimitedPID = output;

    return { y: output };
  };
}

module.exports = pid;
