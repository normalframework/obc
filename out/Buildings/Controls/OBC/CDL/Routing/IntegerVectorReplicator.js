/**
 * Buildings.Controls.OBC.CDL.Routing.IntegerVectorReplicator
 *
 * Replicates an integer input vector `u` into `nout` identical rows,
 * producing a 2D integer matrix `y` of size [nout, nin].
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Size of input vector.
 * @param {number} [params.nout=1] - Number of rows (replications) in output.
 *
 * @returns {Function} step({u}) → {y: number[][]}
 */
function IntegerVectorReplicator({ nin = 1, nout = 1 } = {}) {
  return ({ u = Array(nin).fill(0) } = {}) => {
    if (!Array.isArray(u) || u.length !== nin) {
      throw new Error(
        `IntegerVectorReplicator: Input 'u' must be an array of length ${nin}.`
      );
    }

    // Equivalent to Modelica's `fill(u, nout)`
    const y = Array.from({ length: nout }, () => [...u]);

    return { y };
  };
}

module.exports = IntegerVectorReplicator;
