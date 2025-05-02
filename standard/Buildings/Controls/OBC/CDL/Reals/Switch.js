/**
 * Switch block that outputs one of two real input signals based on a boolean input signal
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Real input signal.
 * @param {boolean} input.u2 - Boolean switch input signal, if true, y=u1, else y=u3.
 * @param {number} input.u3 - Real input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Real output signal.
 */

function switchBlock({ } = {}) {
  return ({ u1, u2, u3 }) => {
    return { y: u2 ? u1 : u3 };
  }
}


module.exports = switchBlock;