
/**
 * Divide block that outputs the quotient of u1 divided by u2
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector for dividend.
 * @param {number} input.u2 - Connector for divisor.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector for quotient.
 */

 function divide({ } = {}) {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: u1 / u2 };
  }
}

module.exports = divide;