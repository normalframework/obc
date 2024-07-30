/**
 * IntegratorWithReset block that outputs the integral of the input signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.k - Integrator gain.
 * @param {number} params.y_start - Initial or guess value of output (= state).
 * 
 * @returns {Function} - A function that calculates the integral with reset capability given the inputs.
 */

export default function integratorWithReset({ k = 1, y_start = 0 }) {
  let y = y_start;

  return ({ u, y_reset_in, trigger }) => {
    const dt = 0.001; // Small time step for numerical integration, can be adjusted

    if (trigger) {
      y = y_reset_in;
    } else {
      y += k * u * dt;
    }

    return { y };
  };
}
