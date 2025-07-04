/**
 * Abs block that outputs the absolute value of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Integer input signals.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signals.
 */

 function absBlock() {
  return ({ u = 0 }) => {
    return { y: Math.abs(u ?? 0) };
  }
}

module.exports = absBlock;