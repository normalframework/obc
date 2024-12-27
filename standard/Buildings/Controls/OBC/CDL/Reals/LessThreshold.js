/**
 * LessThreshold block that outputs true if input u is less than the threshold.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold for comparison.
 * @param {number} params.h - Hysteresis.
 * @param {boolean} params.pre_y_start - Value of pre(y) at initial time.
 * 
 * @returns {Function} - A function that calculates the less threshold comparison given the inputs.
 */

 function lessThreshold({ t = 0, h = 0, pre_y_start = false }) {
  let previous_y = pre_y_start;

  if (h >= 1E-10) {
    return ({ u = 0 }) => {
      const y = (!previous_y && u < t) || (previous_y && u < t + h);
      previous_y = y;
      return { y };
    };
  } else {
    return ({ u }) => {
      return { y: u < t };
    };
  }
}


module.exports = lessThreshold;