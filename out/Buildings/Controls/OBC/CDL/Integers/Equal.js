/**
 * Equal block that outputs true if input u1 is equal to input u2.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of first Integer input signal.
 * @param {number} input.u2 - Connector of second Integer input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

 function equal() {
  return ({ u1, u2 }) => {
    return { y: u1 === u2 };
  }
}

module.exports = equal;