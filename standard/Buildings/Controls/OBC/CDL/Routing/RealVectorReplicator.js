/**
 * Buildings.Controls.OBC.CDL.Routing.RealVectorReplicator
 *
 * Replicates a real input vector `u` into a 2D output matrix `y`
 * with `nout` identical rows.
 *
 * @param {Object} params
 * @param {number} [params.nin=1]  - Size of input vector.
 * @param {number} [params.nout=1] - Number of rows in the output.
 *
 * @returns {Function} step({u}) → {y: number[][]}
 */
function RealVectorReplicator({ nin = 1, nout = 1 } = {}) {
  return ({ u = Array(nin).fill(0) } = {}) => {
    if (!Array.isArray(u) || u.length !== nin) {
      throw new Error(`RealVectorReplicator: input 'u' must be an array of length ${nin}.`);
    }

    // Equivalent to Modelica: y = fill(u, nout)
    const y = Array.from({ length: nout }, () => [...u]);
    return { y };
  };
}

module.exports = RealVectorReplicator;
