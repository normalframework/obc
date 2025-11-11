
/**
 * Asin block that outputs the arc sine of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal with unit "rad".
 */

 function asinBlock() {
  return ({ u = 0 }) => {
    return { y: Math.asin(u ?? 0) };
  }
}

module.exports = asinBlock;