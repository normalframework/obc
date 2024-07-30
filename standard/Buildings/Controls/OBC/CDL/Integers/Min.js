/**
 * Min block that passes through the smallest signal
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Integer input signal 1.
 * @param {number} input.u2 - Connector of Integer input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal (minimum of u1 and u2).
 */

export default function min({}) {
  return ({ u1, u2 }) => {
    return { y: Math.min(u1, u2) };
  }
}
