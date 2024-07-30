/**
 * Limiter block that limits the range of a signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.uMax - Upper limit of input signal.
 * @param {number} params.uMin - Lower limit of input signal.
 * 
 * @returns {Function} - A function that limits the input signal within the specified range.
 */

export default function limiter({ uMax, uMin }) {
  if (uMin >= uMax) {
    throw new Error("uMin must be smaller than uMax. Check parameters.");
  }

  return ({ u }) => {
    const y = Math.max(Math.min(u, uMax), uMin);
    return { y };
  };
}
