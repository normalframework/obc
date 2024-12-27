
/**
 * MultiMin block that outputs the minimum element of the input vector
 * 
 * @param {Object} inputs - The input object.
 * @param {number[]} inputs.u - Connector of Real input signals.
 * @param {Object} params - The parameters object.
 * @param {number} params.nin - Number of input connections.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function multiMin({ nin }) {
  return ({ u = [] }) => {
    return { y: Math.min(...u) };
  }
}

module.exports = multiMin;