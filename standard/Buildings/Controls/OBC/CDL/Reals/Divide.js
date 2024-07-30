
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

export default function divide({ }) {
  return ({ u1, u2 }) => {
    return { y: u1 / u2 };
  }
}
