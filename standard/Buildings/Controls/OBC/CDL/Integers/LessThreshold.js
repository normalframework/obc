/**
 * LessThreshold block that outputs true if the input is less than a threshold parameter.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold for comparison (default is 0).
 * 
 * @returns {Function} - A function that takes input and produces output.
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal indicating if input u is less than t.
 */
 function lessThreshold({ t = 0 }) {
  return ({ u = 0 }) => {
    return { y: u < t };
  }
}

module.exports = lessThreshold;