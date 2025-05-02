/**
 * LimitSlewRate block that limits the increase or decrease rate of the input signal.
 * It approximates the derivative between input and output and clamps it between fallingSlewRate and raisingSlewRate.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.raisingSlewRate - Speed with which to increase the output (1/s).
 * @param {number} [params.fallingSlewRate] - Speed with which to decrease the output (1/s); defaults to -raisingSlewRate.
 * @param {number} [params.Td] - Derivative time constant (s); defaults to raisingSlewRate * 10.
 * @param {boolean} [params.enable=true] - Set to false to disable the rate limiter.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - The rate-limited signal.
 */
const TimeManager = require("../../../../../TimeManager");
const Initial = require("../../../../../Initial");
function limitSlewRate({
  raisingSlewRate,
  fallingSlewRate = -raisingSlewRate,
  Td = raisingSlewRate * 10,
  enable = true
} = {}) {
  let y;
  const eps = Number.EPSILON;
  const isInitial = Initial();

  return ({ u = 0 } = {}) => {
    const dt = Math.max(TimeManager.dt, eps);

    if (isInitial()) {
      y = u;
    } else if (!enable) {
      y = u;
      return { y };
    } else {
      const thr = (u - y) / Td;
      const limitedThr = thr < fallingSlewRate
        ? fallingSlewRate
        : thr > raisingSlewRate
          ? raisingSlewRate
          : thr;
      y += limitedThr * dt;
    }

    return { y };
  };
}

module.exports = limitSlewRate;
