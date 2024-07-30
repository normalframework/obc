
/**
 * Cos block that outputs the cosine of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal with unit "rad".
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal for cosine of input.
 */

export default function cos({ }) {
  return ({ u }) => {
    return { y: Math.cos(u) };
  }
}
