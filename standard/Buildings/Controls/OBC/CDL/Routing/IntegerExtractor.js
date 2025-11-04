/**
 * Buildings.Controls.OBC.CDL.Routing.IntegerExtractor
 *
 * Extracts a scalar integer signal from an integer input vector `u`
 * based on the integer index `index`. If the index is out of range,
 * it is clamped between 1 and `nin`.
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Number of integer input signals.
 *
 * @returns {Function} step({u, index}) → {y: number}
 */
function IntegerExtractor({ nin = 1 } = {}) {
  return ({ u = Array(nin).fill(0), index = 1 } = {}) => {
    if (index <= 0 || index > nin) {
      console.warn(
        `IntegerExtractor: Extract index ${index} is out of range [1, ${nin}]. It will be clamped.`
      );
    }

    const clampedIndex = Math.min(nin, Math.max(1, index));
    const y = u[clampedIndex - 1]; // convert from 1-based to 0-based

    return { y };
  };
}

module.exports = IntegerExtractor;
