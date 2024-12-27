/**
 * MultiAnd block that outputs true if all input signals are true.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.nin - Number of input connections.
 * 
 * @returns {Function} - A function that takes an input object.
 * @returns {Object} input - The input object.
 * @returns {Array} input.u - Connector of Boolean input signals (array).
 * @returns {Object} output - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function multiAnd({ nin = 0 }) {
  return ({ u = [] }) => {
    let y = true;

    if (u.length > 1) {
      for (let i = 0; i < u.length; i++) {
        y = y && u[i];
      }
    } else if (u.length === 1) {
      y = u[0];
    } else {
      y = false;
    }

    return { y };
  };
}

module.exports = multiAnd;