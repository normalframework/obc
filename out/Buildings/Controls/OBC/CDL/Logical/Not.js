/**
 * Not block that outputs the logical negation of the input.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Connector of Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function notBlock() {
  return ({ u = false }) => {
    return { y: !u };
  }
}

module.exports = notBlock;