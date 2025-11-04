/**
 * Buildings.Controls.OBC.CDL.Routing.BooleanExtractor
 *
 * Extracts a scalar Boolean signal from a Boolean input vector based on an integer index.
 * The index determines which element of the input vector `u` is output as `y`.
 * If the index is out of range, it is clamped between 1 and `nin`.
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Number of Boolean input signals.
 *
 * @returns {Function} step({u, index}) → {y: boolean}
 */
function BooleanExtractor({ nin = 1 } = {}) {
  return ({ u = Array(nin).fill(false), index = 1 } = {}) => {
    if (index <= 0 || index > nin) {
      console.warn(
        `BooleanExtractor: Extract index ${index} is out of range [1, ${nin}]. It will be clamped.`
      );
    }

    const clampedIndex = Math.min(nin, Math.max(1, index));
    const y = !!u[clampedIndex - 1]; // Convert to JS 0-based index

    return { y };
  };
}

module.exports = BooleanExtractor;
