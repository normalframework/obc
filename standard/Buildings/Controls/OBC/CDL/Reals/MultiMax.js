/**
 * MultiMax block that outputs the maximum element of the input vector
 * 
 * @param {Object} input - The input object.
 * @param {number[]} input.u - Connector of Real input signals.
 * @param {Object} params - The parameters object.
 * @param {number} params.nin - Number of input connections.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function multiMax({ nin }) {
  return ({ u = [] }) => {
    u = u ?? [];
    return { y: Math.max(...u.map(u => u ?? 0)) };
  }
}

module.exports = multiMax;