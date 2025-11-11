/**
 * LessEqualThreshold block that outputs true if the input u 
 * is less than or equal to a threshold t.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold for comparison.
 * 
 * @returns {Function} - Returns a function that takes input object.
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Integer input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

 function lessEqualThreshold({ t = 0 }) {
  return ({ u = 0 }) => {
    return { y: (u ?? 0) <= (t ?? 0) };
  }
}

module.exports = lessEqualThreshold;