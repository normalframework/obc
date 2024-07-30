/**
 * Switch block that outputs one of two boolean input signals 
 * based on a boolean input signal. 
 * 
 * If the input signal `u2` is true, the block outputs `y = u1`. 
 * Otherwise, it outputs `y = u3`.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u1 - Boolean input signal.
 * @param {boolean} input.u2 - Boolean switch input signal.
 * @param {boolean} input.u3 - Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Boolean output signal.
 */

 function switchBlock() {
  return ({ u1, u2, u3 }) => {
    return { y: u2 ? u1 : u3 };
  }
}

module.exports = switchBlock;