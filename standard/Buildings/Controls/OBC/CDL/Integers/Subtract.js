/**
 * Subtract block that outputs the difference of two input signals
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Integer input signal 1.
 * @param {number} input.u2 - Connector of Integer input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal.
 */

export default function subtract() {
  return ({ u1, u2 }) => {
    return { y: u1 - u2 };
  }
}
