/**
 * Subtract block that outputs the difference of the two inputs
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

function subtract({ } = {}) {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: (u1 ?? 0) - (u2 ?? 0) };
  }
}


module.exports = subtract;