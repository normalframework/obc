/**
 * MultiOr block that outputs true if any element in the input vector u is true.
 * 
 * @param {Object} input - The input object.
 * @param {Array<boolean>} input.u - Array of Boolean input signals.
 * @param {Object} params - The parameters object.
 * @param {number} params.nin - Number of input connections.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

 function multiOr({ nin = 0 }) {
  return ({ u = []}) => {
    let y = false;

    if (u.length > 1) {
      let uTemp = [u[0]];
      for (let i = 1; i < u.length; i++) {
        uTemp[i] = u[i] || uTemp[i - 1];
      }
      y = uTemp[nin - 1];
    } else if (u.length === 1) {
      y = u[0];
    }

    return { y };
  };
}

module.exports = multiOr;
