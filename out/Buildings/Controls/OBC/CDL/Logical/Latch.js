/**
 * Latch block that maintains a true signal until cleared.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Latch input signal.
 * @param {boolean} input.clr - Clear input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Output signal.
 */
function latch() {
  let y = false;

  const res = ({ u = false, clr = false }) => {
    if (clr) {
      y = false;
    } else if (u) {
      y = true;
    }
    return { y };
  };

  return res;
}

module.exports = latch;