/**
 * Min block that passes through the smallest signal
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function min() {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: Math.min(u1, u2) };
  }
}


module.exports = min;