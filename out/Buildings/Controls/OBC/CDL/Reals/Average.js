
/**
 * Average block that outputs the average of its two inputs
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function average() {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: 0.5 * ((u1 ?? 0) + (u2 ?? 0)) };
  }
}

module.exports = average;