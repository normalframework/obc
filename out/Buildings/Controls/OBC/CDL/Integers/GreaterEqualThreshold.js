/**
 * GreaterEqualThreshold block that outputs true if the input is greater than or equal to a threshold.
 *
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Comparison with respect to a threshold (default is 0).
 * 
 * @returns {Object} - The output object.
 * @returns {function} - A function that takes the input object.
 * @returns {Object} output - The output object from the inner function.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

 function greaterEqualThreshold({ t = 0 }) {
  return ({ u = 0 }) => {
    return { y: (u ?? 0) >= (t ?? 0) };
  }
}

module.exports = greaterEqualThreshold;