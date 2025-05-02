
/*
 * Atan block that outputs the arc tangent of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function atan({ } = {}) {
  return ({ u = 0 }) => {
    return { y: Math.atan(u) };
  }
}

module.exports = atan;