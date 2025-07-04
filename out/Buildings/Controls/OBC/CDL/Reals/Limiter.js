/**
 * Limiter block that limits the range of a signal.
 * It clamps the input u to lie within [uMin, uMax].
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.uMin - Lower limit of the input signal.
 * @param {number} params.uMax - Upper limit of the input signal.
 * 
 * @returns {Function} - The step function.
 * @returns {Object} output - The output object.
 * @returns {number} output.y - The clamped input signal.
 */
function limiter({ uMin, uMax } = {}) {
  uMin = uMin ?? 0;
  uMax = uMax ?? 0;
  if (uMin >= uMax) {
    throw new Error("uMin must be smaller than uMax. Check parameters.");
  }
  return ({ u = 0 } = {}) => {
    u = u ?? 0;
    const y = u > uMax ? uMax : (u < uMin ? uMin : u);
    return { y };
  };
}

module.exports = limiter;
