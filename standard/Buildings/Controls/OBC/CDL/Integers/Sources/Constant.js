/**
 * Constant block that outputs a constant signal of type Integer.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.k - Constant output value.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal.
 */

export default function constant({ k }) {
  return () => {
    return { y: k };
  }
}
