
/**
 * MultiSum block that computes the sum of Reals: y = k[1]*u[1] + k[2]*u[2] + ... + k[n]*u[n]
 * 
 * @param {Object} input - The input object.
 * @param {number[]} input.u - Array of Real input signals.
 * @param {Object} params - The parameters object.
 * @param {number} params.nin - Number of input connections.
 * @param {number[]} params.k - Array of input gains.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function multiSum({ nin, k = [] }) {
  return ({ u = [] }) => {
    if (u.length > 0) {
      return { y: k.reduce((sum, gain, index) => sum + gain * u[index], 0) };
    } else {
      return { y: 0 };
    }
  }
}

module.exports = multiSum;