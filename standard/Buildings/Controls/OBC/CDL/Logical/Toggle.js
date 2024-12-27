/**
 * Toggle block that generates a true output when toggle input u rises from false to true,
 * provided that the clear input clr is false or also became false at the same time.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Toggle input.
 * @param {boolean} input.clr - Clear input.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Output signal.
 */
function toggle() {
  let prev_u = false;
  let prev_clr = false;
  let y = false;

  return ({ u = false, clr = false }) => {
    if (clr) {
      y = false;
    } else if (!clr && u && !prev_u) {
      y = !y;
    }

    prev_u = u;
    prev_clr = clr;

    return { y };
  };
}

module.exports = toggle;