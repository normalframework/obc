/**
 * Switch block that outputs one of two integer input signals based on a boolean input signal.
 * 
 * If the input signal u2 is true, the block outputs y = u1. 
 * Otherwise, it outputs y = u3.
 *
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Integer input signal 1.
 * @param {boolean} input.u2 - Boolean switch input signal.
 * @param {number} input.u3 - Integer input signal 2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Integer output signal.
 */

function switchBlock() {
  return ({ u1, u2, u3 }) => {
    return { y: u2 ? u1 : u3 };
  }
}

module.exports = switchBlock;