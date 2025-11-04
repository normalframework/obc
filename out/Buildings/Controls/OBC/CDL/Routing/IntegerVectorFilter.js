/**
 * Buildings.Controls.OBC.CDL.Routing.IntegerVectorFilter
 *
 * Filters an integer input vector `u` using a boolean mask `msk`,
 * producing an output vector `y` that includes only elements where
 * `msk[i]` is true.
 *
 * @param {Object} params
 * @param {number} params.nin - Size of the input vector.
 * @param {number} params.nout - Size of the output vector (must equal number of true mask elements).
 * @param {boolean[]} [params.msk] - Boolean mask of length `nin`. Default = all `true`.
 *
 * @returns {Function} step({u}) → {y: number[]}
 */
function IntegerVectorFilter({ nin, nout, msk = Array(nin).fill(true) } = {}) {
  if (!Array.isArray(msk) || msk.length !== nin) {
    throw new Error(`IntegerVectorFilter: 'msk' must be an array of length ${nin}.`);
  }

  // Compute mask indices (Modelica.BooleanVectors.index equivalent)
  const mskId = msk
    .map((val, i) => (val ? i + 1 : null))
    .filter(i => i !== null);

  const includedCount = mskId.length;
  if (includedCount !== nout) {
    throw new Error(
      `IntegerVectorFilter: nout (${nout}) does not match number of 'true' elements in mask (${includedCount}).`
    );
  }

  // Step function
  return ({ u = Array(nin).fill(0) } = {}) => {
    if (u.length !== nin) {
      throw new Error(`IntegerVectorFilter: input vector length (${u.length}) must equal nin (${nin}).`);
    }

    // Extract elements corresponding to true mask positions
    const y = mskId.map(i => u[i - 1]); // 1-based → 0-based indexing
    return { y };
  };
}

module.exports = IntegerVectorFilter;
