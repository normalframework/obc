/**
 * BooleanToInteger block that converts a Boolean input signal to an Integer output signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.integerTrue - Output signal for true Boolean input.
 * @param {number} params.integerFalse - Output signal for false Boolean input.
 * 
 * @returns {Function} - A function that takes an input object.
 * @returns {Object} input - The input object.
 * @returns {boolean} input.u - Connector of Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal.
 */

function booleanToInteger({ integerTrue = 1, integerFalse = 0 }) {
  return ({ u }) => {
    return { y: u ? integerTrue : integerFalse };
  }
}

module.exports = booleanToInteger;
