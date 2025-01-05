
/**
 * Abs block that outputs the absolute value of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

function abs() {
  return ({ u = 0 }) => {
    return { y: Math.abs(u) };
  }
}

module.exports = abs;