const TimeManager = require("../../../../../TimeManager");
const Trigger     = require("../../../../../Trigger");

/**
 * IntegratorWithReset block that outputs the integral of the input signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.k - Integrator gain.
 * @param {number} params.y_start - Initial or guess value of output (= state).
 * 
 * @returns {Function} - A function that calculates the integral with reset capability given the inputs.
 */

function integratorWithReset({ k = 1, y_start = 0 }) {
  let y = y_start;

  const isRising = Trigger();
  const eps = Number.EPSILON;

  return ({ u = 0, y_reset_in = 0, trigger = false }) => {
    if (isRising(trigger)) {
      y = y_reset_in;
    } 
    const dt = Math.max(TimeManager.dt, eps);
    y += k * u * dt;
    return { y };
  };
}


module.exports = integratorWithReset;