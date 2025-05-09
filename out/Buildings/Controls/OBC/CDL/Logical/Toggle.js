/**
 * Toggle block that toggles the output value whenever its input turns true.
 * It also clears the output to false when the clear signal is true.
 * 
 * @param {Object} params - The parameters object.
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Output signal; toggles on rising edges of u, resets on clr.
 */
const Initial = require("../../../../../Initial");

function toggle() {
  const isInitial = Initial();
  let prev_u = false;
  let prev_clr = false;
  let y = false;

  return ({ u = false, clr = false } = {}) => {
    if (isInitial()) {
      y = clr ? false : u;
    } else if (clr) {
      y = false;
    } else if (u !== prev_u) {
      // Rising or falling edge detected
      if (!prev_u) {
        // Rising edge: toggle y
        y = !y;
      } // else falling edge: retain y
    }

    prev_u = u;
    prev_clr = clr;
    return { y };
  };
}

module.exports = toggle;
