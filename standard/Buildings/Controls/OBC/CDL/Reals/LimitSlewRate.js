/**
 * LimitSlewRate block that limits the increase or decrease rate of input.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.raisingSlewRate - Speed with which to increase the output.
 * @param {number} params.fallingSlewRate - Speed with which to decrease the output.
 * @param {number} params.Td - Derivative time constant.
 * @param {boolean} params.enable - Set to false to disable rate limiter.
 * 
 * @returns {Function} - A function that limits the slew rate of the input signal.
 */

 function limitSlewRate({ raisingSlewRate, fallingSlewRate = -raisingSlewRate, Td, enable = true }) {
  if (raisingSlewRate <= 0) {
    throw new Error("raisingSlewRate must be larger than zero.");
  }
  if (fallingSlewRate >= 0) {
    throw new Error("fallingSlewRate must be less than zero.");
  }

  let y = 0;

  return ({ u }) => {
    const thr = (u - y) / Td;
    if (enable) {
      if (thr < fallingSlewRate) {
        y += fallingSlewRate * Td;
      } else if (thr > raisingSlewRate) {
        y += raisingSlewRate * Td;
      } else {
        y = u;
      }
    } else {
      y = u;
    }
    return { y };
  };
}


module.exports = limitSlewRate;