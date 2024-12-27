
/**
 * Multiply block that outputs the product of two inputs
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

 function multiply() {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: u1 * u2 };
  }
}

module.exports = multiply;