/**
 * Subtract block that outputs the difference of the two inputs
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

export default function subtract({ }) {
  return ({ u1, u2 }) => {
    return { y: u1 - u2 };
  }
}
