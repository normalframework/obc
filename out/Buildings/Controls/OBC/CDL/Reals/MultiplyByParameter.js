/**
 * MultiplyByParameter block that outputs the product of a gain value with the input signal
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Input signal connector.
 * @param {Object} params - The parameters object.
 * @param {number} params.k - Gain value multiplied with input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Output signal connector.
 */

 function multiplyByParameter({ k = 0 }) {
  return ({ u = 0 }) => {
    return { y: (k ?? 0) * (u ?? 0) };
  }
}

module.exports = multiplyByParameter;