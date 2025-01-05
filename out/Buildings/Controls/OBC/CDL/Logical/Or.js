/**
 * Or block that outputs true if at least one input is true; otherwise, it outputs false.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u1 - Connector of first Boolean input signal.
 * @param {boolean} input.u2 - Connector of second Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function orBlock() {
  return ({ u1 = false, u2 = false }) => {
    return { y: u1 || u2 };
  };
}

module.exports = orBlock;