
/**
 * Exp block that outputs the exponential (base e) of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

function exp() {
  return ({ u = 0 }) => {
    return { y: Math.exp(u) };
  }
}


module.exports = exp;