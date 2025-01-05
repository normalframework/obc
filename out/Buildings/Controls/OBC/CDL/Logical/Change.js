/*
 * Change block that outputs true if the input u has a rising or falling edge
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Connector of Boolean input signal.
 * @param {Object} params - The parameters object.
 * @param {boolean} [params.pre_u_start=false] - Start value of pre(u) at initial time.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function change({ pre_u_start = false }) {
  let previous_u = pre_u_start;

  return ({ u = false }) => {
    const current_y = u !== previous_u
    previous_u = u; // Update previous_u for the next call
    return { y: current_y };
  }
}

module.exports = change;
