
/**
 * Constant block that outputs a constant signal y = k,
 * where k is a real-valued parameter.
 * 
 * @param {Object} input - The input object.
 * @param {Object} params - The parameters object.
 * @param {number} params.k - Constant output value.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function constant({ k = 0 }) {
  return () => {
    return { y: k };
  }
}

module.exports = constant;