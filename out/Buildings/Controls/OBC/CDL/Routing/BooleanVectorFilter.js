/**
 * Buildings.Controls.OBC.CDL.Routing.BooleanVectorFilter
 *
 * Filters a Boolean vector `u` based on a Boolean mask `msk`.
 * The output vector `y` contains only the elements of `u` where the mask value is `true`.
 *
 * @param {Object} params
 * @param {number} params.nin - Size of input vector.
 * @param {number} params.nout - Size of output vector.
 * @param {boolean[]} [params.msk] - Boolean mask of length `nin`. Default: all `true`.
 *
 * @returns {Function} step({u}) → {y: boolean[]}
 */
function BooleanVectorFilter({ nin, nout, msk = Array(nin).fill(true) }) {
  // --- Compute indices of included elements (Modelica: mskId = index(msk)) ---
  const mskId = msk
    .map((v, i) => (v ? i + 1 : null))
    .filter((v) => v !== null);

 
  return ({ u = Array(nin).fill(false) } = {}) => {
    const y = mskId.map((i) => !!u[i - 1]); // convert to JS 0-based index
    return { y };
  };
}

module.exports = BooleanVectorFilter;
