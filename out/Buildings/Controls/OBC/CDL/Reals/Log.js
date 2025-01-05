
/**
 * Log block that outputs the natural (base e) logarithm of the input (input > 0 required)
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function log() {
  return ({ u = 0 }) => {
    return { y: Math.log(u) };
  }
}


module.exports = log;