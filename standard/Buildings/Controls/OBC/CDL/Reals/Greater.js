/**
 * Greater block that outputs true if input u1 is greater than input u2
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.h - Hysteresis.
 * @param {boolean} params.pre_y_start - Value of pre(y) at initial time.
 * 
 * @returns {Function} - A function that calculates the greater comparison given the inputs.
 */

 function greater({ h = 0, pre_y_start = false }) {
  let previous_y = pre_y_start;

  if (h >= 1E-10) {
    return ({ u1 = 0, u2 = 0 }) => {
      const y = (!previous_y && u1 > u2) || (previous_y && u1 > u2 - h);
      previous_y = y;
      return { y };
    };
  } else {
    return ({ u1, u2 }) => {
      return { y: u1 > u2 };
    };
  }
}


module.exports = greater;