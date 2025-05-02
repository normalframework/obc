/**
 * Ramp block that limits the changing rate of the input signal.
 * It enforces maximum rising and falling slew rates on an internal state y_internal,
 * and when active is false, bypasses the limiter.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.raisingSlewRate - Maximum speed to increase the output (1/s).
 * @param {number} [params.fallingSlewRate] - Maximum speed to decrease the output (1/s); defaults to -raisingSlewRate.
 * @param {number} [params.Td] - Derivative time constant (s); defaults to raisingSlewRate * 0.001.
 * 
 * @returns {Function} - The step function.
 * @returns {Object} output - The output object.
 * @returns {number} output.y - The rate-limited (or bypassed) output signal.
 */
const TimeManager = require("../../../../../TimeManager");

function ramp({
  raisingSlewRate,
  fallingSlewRate = -raisingSlewRate,
  Td = raisingSlewRate * 0.001
} = {}) {
  let y_internal;
  let firstCall = true;
  const eps = Number.EPSILON;

  return ({ u = 0, active = false } = {}) => {
    const dt = Math.max(TimeManager.dt, eps);

    if (firstCall) {
      // initialize internal state to input
      y_internal = u;
      firstCall = false;
    }

    if (active) {
      // reset internal state when active
      y_internal = u;
    }

    // approximate derivative between input and internal state
    const thr = (u - y_internal) / Td;
    // clamp derivative to slew rates
    const limitedThr = thr < fallingSlewRate
      ? fallingSlewRate
      : thr > raisingSlewRate
        ? raisingSlewRate
        : thr;
    // integrate to update internal state
    y_internal += limitedThr * dt;

    // output bypasses limiter when not active
    const y = active ? y_internal : u;
    return { y };
  };
}

module.exports = ramp;
