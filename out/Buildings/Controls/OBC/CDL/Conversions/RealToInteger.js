/**
 * RealToInteger block that converts Real input to Integer output
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal.
 */

function realToInteger() {
  return ({ u = 0 }) => {
    u = u ?? 0;
    const y = u > 0 ? Math.floor(u + 0.5) : Math.ceil(u - 0.5);
    return { y };
  };
}

module.exports = realToInteger;
