/**
 * Tan block that outputs the tangent of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal in radians.
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

export default function tan({ }) {
  return ({ u }) => {
    return { y: Math.tan(u) };
  }
}
