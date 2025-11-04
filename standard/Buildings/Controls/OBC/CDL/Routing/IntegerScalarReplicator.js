/**
 * Buildings.Controls.OBC.CDL.Routing.IntegerScalarReplicator
 *
 * Replicates a single integer input signal into an array of identical integer outputs.
 *
 * @param {Object} params
 * @param {number} [params.nout=1] - Number of output signals.
 *
 * @returns {Function} step({u}) → {y: number[]}
 */
function IntegerScalarReplicator({ nout = 1 } = {}) {
  return ({ u = 0 } = {}) => {
    const y = Array(nout).fill(u);
    return { y };
  };
}

module.exports = IntegerScalarReplicator;
