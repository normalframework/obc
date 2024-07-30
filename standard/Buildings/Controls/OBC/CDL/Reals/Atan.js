
/*
 * Atan block that outputs the arc tangent of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

export default function atan({ }) {
  return ({ u }) => {
    return { y: Math.atan(u) };
  }
}
