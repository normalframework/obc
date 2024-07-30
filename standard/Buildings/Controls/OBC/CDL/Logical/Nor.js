/**
 * Nor block that outputs the logical 'nor': y = not (u1 or u2)
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u1 - Connector of first Boolean input signal.
 * @param {boolean} input.u2 - Connector of second Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

export default function nor() {
  return ({ u1, u2 }) => {
    return { y: !(u1 || u2) };
  }
}
