/**
 * Latch block that maintains a true signal until cleared.
 * Output y becomes true when u is true and remains true until clr becomes true.
 * 
 * @param {Object} params - The parameters object.
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Output signal; stays true until cleared.
 */

function latch() {
  let y;

  return ({ u = false, clr = false } = {}) => {
    if (clr) {
      y = false;
    } else {
      y = y || u;
    }

    return { y };
  };
}

module.exports = latch;
