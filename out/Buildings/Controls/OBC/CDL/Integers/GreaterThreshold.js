/**
 * GreaterThreshold block that outputs true if the input u is greater than a threshold
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold for comparison (default is 0).
 * 
 * @returns {Function} - A function that takes an input object.
 * @returns {Object} input - The input object.
 * @returns {number} input.u - Connector of Integer input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal (true if u > t).
 */

 function greaterThreshold({ t = 0 }) {
  return ({ u = 0 }) => {
    return { y: (u ?? 0) > (t ?? 0) };
  };
}

module.exports = greaterThreshold;