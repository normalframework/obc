/**
 * Max block that passes through the largest signal
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

export default function max({ }) {
  return ({ u1, u2 }) => {
    return { y: Math.max(u1, u2) };
  }
}
