/**
 * FallingEdge block that outputs true if the input signal has a falling edge.
 * It detects when the Boolean input goes from true to false between event iterations.
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.pre_u_start - Start value of pre(u) at initial time.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal; true on falling edge.
 */
function fallingEdge({ pre_u_start = false } = {}) {
  let prev_not_u = !pre_u_start;
  return ({ u = false } = {}) => {
    const not_u = !u;
    const y = not_u && !prev_not_u;
    prev_not_u = not_u;
    return { y };
  };
}

module.exports = fallingEdge;
