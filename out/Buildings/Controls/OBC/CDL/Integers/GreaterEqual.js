/**
 * GreaterEqual block that outputs true if input u1 is greater than or equal to input u2.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of the first Integer input signal.
 * @param {number} input.u2 - Connector of the second Integer input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

 function greaterEqual() {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: (u1 ?? 0) >= (u2 ?? 0) };
  }
}

module.exports = greaterEqual;