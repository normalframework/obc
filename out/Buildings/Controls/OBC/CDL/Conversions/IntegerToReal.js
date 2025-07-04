/**
 * IntegerToReal block that converts Integer input signals to Real output signals.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Integer input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

function integerToReal() {
  return ({ u }) => {
    u = u ?? 0;
    return { y: u };
  }
}

module.exports = integerToReal;
