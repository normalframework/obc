/**
 * Buildings.Controls.OBC.CDL.Routing.RealVectorFilter
 *
 * Filters a real-valued input vector `u` using a boolean mask `msk`.
 * Returns an output vector `y` containing only elements where the mask is true.
 *
 * @param {Object} params
 * @param {number} params.nin - Size of input vector.
 * @param {number} params.nout - Size of output vector.
 * @param {boolean[]} [params.msk] - Boolean mask of length `nin`.
 *   Defaults to all `true`.
 *
 * @returns {Function} step({u}) → {y: number[]}
 */
function RealVectorFilter({ nin, nout, msk = Array(nin).fill(true) } = {}) {
  if (!Array.isArray(msk) || msk.length !== nin) {
    throw new Error(`RealVectorFilter: 'msk' must be an array of length ${nin}.`);
  }

  // Derive indices where mask is true (Modelica: BooleanVectors.index)
  const mskId = msk
    .map((flag, i) => (flag ? i + 1 : null))
    .filter(i => i !== null);

  // Modelica's assert from initial equation
  const activeCount = mskId.length;
  if (nout !== activeCount) {
    throw new Error(
      `RealVectorFilter: Size mismatch — nout=${nout} but mask includes ${activeCount} elements.`
    );
  }

  // Step function
  return ({ u = Array(nin).fill(0) } = {}) => {
    if (!Array.isArray(u) || u.length !== nin) {
      throw new Error(`RealVectorFilter: input 'u' must be an array of length ${nin}.`);
    }

    // Equivalent to y = u[mskId];
    const y = mskId.map(i => u[i - 1]); // 1-based → 0-based index
    return { y };
  };
}

module.exports = RealVectorFilter;
