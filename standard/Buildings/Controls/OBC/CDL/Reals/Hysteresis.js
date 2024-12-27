/**
 * Hysteresis block that transforms a Real signal to a Boolean signal with Hysteresis.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.uLow - If y=true and u<uLow, switch to y=false.
 * @param {number} params.uHigh - If y=false and u>uHigh, switch to y=true.
 * @param {boolean} params.pre_y_start - Value of pre(y) at initial time.
 * 
 * @returns {Function} - A function that calculates the hysteresis transformation given the input.
 */

 function hysteresis({ uLow = 0, uHigh = 0, pre_y_start = false }) {
  let previous_y = pre_y_start;

  return ({ u = 0 }) => {
    if (uHigh <= uLow) {
      throw new Error("Hysteresis limits wrong. uHigh must be larger than uLow");
    }

    const y = (!previous_y && u > uHigh) || (previous_y && u >= uLow);
    previous_y = y;
    return { y };
  };
}


module.exports = hysteresis;