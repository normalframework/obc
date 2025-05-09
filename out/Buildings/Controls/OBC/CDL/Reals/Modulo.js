
/**
 * Modulo block that outputs the remainder of first input divided by second input (~=0)
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function modulo({ } = {}) {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: u1 % u2 };
  }
}


module.exports = modulo;