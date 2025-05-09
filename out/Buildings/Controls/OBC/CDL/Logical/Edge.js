/**
 * Edge block that outputs true if the input u has a rising edge (from false to true).
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.pre_u_start - Start value of pre(u) at initial time.
 * 
 * @returns {Function} - A function that takes the input object.
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Connector of Boolean input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function edge({ pre_u_start = false } = {}) {
  let previous_u = pre_u_start;

  return ({ u = false }) => {
    const y = u && !previous_u;
    previous_u = u; // Update previous_u for the next call
    return { y };
  };
}

module.exports = edge;
