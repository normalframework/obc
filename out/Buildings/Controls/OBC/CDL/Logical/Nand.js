/**
 * Nand block that outputs the negation of the logical AND of two inputs.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u1 - Connector of the first Boolean input signal.
 * @param {boolean} input.u2 - Connector of the second Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function nand() {
  return ({ u1 = false, u2 = false }) => {
    return { y: !(u1 && u2) };
  };
}

module.exports = nand;