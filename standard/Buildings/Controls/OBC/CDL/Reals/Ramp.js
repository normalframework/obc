/**
 * Ramp block that limits the changing rate of the input.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.raisingSlewRate - Maximum speed with which to increase the output.
 * @param {number} params.fallingSlewRate - Maximum speed with which to decrease the output.
 * @param {number} params.Td - Derivative time constant.
 * 
 * @returns {Function} - A function that limits the rate of change of the input signal.
 */

export default function ramp({ raisingSlewRate, fallingSlewRate = -raisingSlewRate, Td }) {
  if (raisingSlewRate <= 0) {
    throw new Error("raisingSlewRate must be larger than zero.");
  }
  if (fallingSlewRate >= 0) {
    throw new Error("fallingSlewRate must be less than zero.");
  }

  let y_internal = 0;

  return ({ u, active }) => {
    const dt = 0.001; // Small time step for numerical integration, can be adjusted
    const thr = (u - y_internal) / Td;

    if (active) {
      if (thr < fallingSlewRate) {
        y_internal += fallingSlewRate * dt;
      } else if (thr > raisingSlewRate) {
        y_internal += raisingSlewRate * dt;
      } else {
        y_internal = u;
      }
    } else {
      y_internal = u;
    }

    const y = active ? y_internal : u;
    return { y };
  };
}
