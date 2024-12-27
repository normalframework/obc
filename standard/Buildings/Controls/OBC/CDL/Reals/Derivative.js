/**
 * Derivative block that approximates the derivative of the input.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.y_start - Initial value of output (= state).
 * 
 * @returns {Function} - A function that calculates the derivative given the input.
 */

function derivative({ y_start = 0 }) {
  let x = 0;

  return ({ k = 0, T = 0, u = 0 }) => {
    const T_nonZero = Math.max(T, 100 * Number.EPSILON);
    const dt = 0.001; // Small time step for numerical differentiation, can be adjusted

    if (Math.abs(k) < Number.EPSILON) {
      x = u;
    } else {
      x = u - (T * y_start) / k;
    }

    const der_x = (u - x) / T_nonZero;
    x += der_x * dt;

    const y = (k / T_nonZero) * (u - x);

    return { y };
  };
}

export default derivative;