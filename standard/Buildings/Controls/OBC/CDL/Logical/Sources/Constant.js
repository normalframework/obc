/**
 * Constant block that outputs a constant signal of type Boolean.
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.k - Constant output value.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

export default function constant({ k }) {
  return () => {
    return { y: k };
  };
}
