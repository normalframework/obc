/**
 * Pre block that breaks algebraic loops by an infinitesimal small time delay.
 * It returns the value of the input signal from the last event iteration 
 * and stops iteration once both values are identical.
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.pre_u_start - Start value of pre(u) at initial time.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function pre({ pre_u_start = false }) {
  let prev_u = pre_u_start;

  return ({ u = false }) => {
    const y = prev_u;
    prev_u = u;
    return { y };
  };
}

module.exports = pre;