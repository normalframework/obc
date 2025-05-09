const TimeManager = require("../../../../../TimeManager");


/**
 * Derivative block:  
 *   T·dx/dt = u – x  
 *   y       = (k/T_nonZero)*(u – x)
 *
 * @param {Object} params
 * @param {number} params.y_start  – initial output (= state)
 * @returns {(inputs: {u:number,k:number,T:number}) => {y:number}}
 */
function derivative({ y_start = 0 } = {}) {
  // state x: will be set correctly at first call
  let x;
  return ({ u = 0, k = 0, T = 0 } = {}) => {
    const eps = Number.EPSILON
    const T_nonZero = Math.max(T, 100 * eps);
    const dt = Math.max(TimeManager.dt, eps);

    if (x == null) {
      x = Math.abs(k) < eps
        ? u
        : u - (T * y_start) / k;
    }
    
    const y = (k / T_nonZero) * (u - x);
    x = x + dt * ((u - x) / T_nonZero);

    return { y };
  }
}

module.exports = derivative;
