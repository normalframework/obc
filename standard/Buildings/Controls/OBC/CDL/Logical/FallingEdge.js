/**
 * FallingEdge block that outputs true if the input has a falling edge.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Connector of Boolean input signal.
 * @param {Object} params - The parameters object.
 * @param {boolean} [params.pre_u_start=false] - Start value of pre(u) at initial time.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function fallingEdge({ pre_u_start = false }) {
  let preNotU = !pre_u_start; // Initial pre value of not_u

  return ({ u = false }) => {
    const notU = !u;
    const y = edge(notU, preNotU);
    preNotU = notU; // Update pre for the next iteration
    return { y };
  }
}

// Helper function to check for falling edge
function edge(current, previous) {
  return previous === true && current === false;
}


module.exports = fallingEdge;