/**
 * Xor block that outputs true if exactly one input is true.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u1 - Connector of first Boolean input signal.
 * @param {boolean} input.u2 - Connector of second Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function xor() {
  return ({ u1 = false, u2 = false }) => {
    return { y: (!u1 && !u2) || (u1 && u2) };
  }
}

module.exports = xor;