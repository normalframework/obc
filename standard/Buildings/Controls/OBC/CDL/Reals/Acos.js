
/**
 * Acos block that outputs the arc cosine of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal with unit "rad".
 */

export default function acos() {
  return ({ u }) => {
    return { y: Math.acos(u) };
  }
}
