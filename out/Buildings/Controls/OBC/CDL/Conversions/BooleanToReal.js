/**
 * BooleanToReal block that converts a Boolean input to a Real output signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.realTrue - Output signal for true Boolean input.
 * @param {number} params.realFalse - Output signal for false Boolean input.
 * 
 * @returns {Function} - A function that takes an input object.
 * @returns {Object} input - The input object.
 * @returns {boolean} input.u - Connector of Boolean input signal.
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

function booleanToReal({ realTrue = 1.0, realFalse = 0.0 }) {
  return ({ u }) => {
    return { y: u ? realTrue : realFalse };
  };
}

module.exports = booleanToReal;
