/**
 * Latch block that maintains a true signal until cleared.
 * Output y becomes true when u is true and remains true until clr becomes true.
 * 
 * @param {Object} params - The parameters object.
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Output signal; stays true until cleared.
 */
const Initial = require("../../../../../Initial");

function latch() {
  const isInitial = Initial();
  let y;
  let prev = { u: false, clr: false };

  return ({ u = false, clr = false } = {}) => {
    if (
      isInitial() ||
      u !== prev.u ||
      clr !== prev.clr
    ) {
      y = u && !clr;
    }
    prev.u = u;
    prev.clr = clr;
    return { y };
  };
}

module.exports = latch;
