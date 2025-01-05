/**
 * Constant block that outputs a constant signal of type Integer.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.k - Constant output value.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal.
 */

 function constant({ k = 0 }) {
  return () => {
    return { y: k };
  }
}

module.exports = constant;