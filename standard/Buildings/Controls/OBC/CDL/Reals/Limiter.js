/**
 * Limiter block that limits the range of a signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.uMax - Upper limit of input signal.
 * @param {number} params.uMin - Lower limit of input signal.
 * 
 * @returns {Function} - A function that limits the input signal within the specified range.
 */

 function limiter({ uMax = 0, uMin = 0 }) {
  if (uMin >= uMax) {
    throw new Error("uMin must be smaller than uMax. Check parameters.");
  }

  return ({ u = 0 }) => {
    const y = Math.max(Math.min(u, uMax), uMin);
    return { y };
  };
}


module.exports = limiter;