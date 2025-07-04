
/**
 * Sin block that outputs the sine of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal in radians.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function sin({ } = {}) {
  return ({ u = 0 }) => {
    return { y: Math.sin(u ?? 0) };
  }
}

module.exports = sin;