
/**
 * Sin block that outputs the sine of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal in radians.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

export default function sin({ }) {
  return ({ u }) => {
    return { y: Math.sin(u) };
  }
}