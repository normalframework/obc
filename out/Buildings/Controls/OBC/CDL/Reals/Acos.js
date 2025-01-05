
/**
 * Acos block that outputs the arc cosine of the input
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal with unit "rad".
 */

 function acos() {
  return ({ u = 0 }) => {
    return { y: Math.acos(u) };
  }
}

module.exports = acos;