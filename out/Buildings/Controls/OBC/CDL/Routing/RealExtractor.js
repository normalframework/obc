/**
 * Buildings.Controls.OBC.CDL.Routing.RealExtractor
 *
 * Extracts a single real value from an input vector `u`
 * based on the integer input `index` (1-based).
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Number of input signals.
 *
 * @returns {Function} step({u, index}) → {y: number}
 */
function RealExtractor({ nin = 1 } = {}) {
  return ({ u = Array(nin).fill(0), index = 1 } = {}) => {
    if (!Array.isArray(u) || u.length !== nin) {
      throw new Error(`RealExtractor: input 'u' must be an array of length ${nin}.`);
    }

    // Clamp index into valid range [1, nin] (Modelica: min(nin, max(1, index)))
    const safeIndex = Math.min(nin, Math.max(1, index));

    // Modelica algorithm assert → warning
    if (index < 1 || index > nin) {
      console.warn(
        `RealExtractor: Index ${index} is out of range (1..${nin}), clamped to ${safeIndex}.`
      );
    }

    const y = u[safeIndex - 1]; // Convert to 0-based indexing
    return { y };
  };
}

module.exports = RealExtractor;
