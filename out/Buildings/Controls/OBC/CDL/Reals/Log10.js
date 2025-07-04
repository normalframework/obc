/**
 * Log10 block that outputs the base 10 logarithm of the input (input > 0 required)
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function log10() {
  return ({ u = 0 }) => {
    return { y: Math.log10(u ?? 0) };
  }
}


module.exports = log10;