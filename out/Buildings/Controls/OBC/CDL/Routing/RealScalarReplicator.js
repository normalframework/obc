/**
 * Buildings.Controls.OBC.CDL.Routing.RealScalarReplicator
 *
 * Real signal replicator.
 *
 * This block replicates the Real input signal `u` into an array
 * of `nout` identical Real output signals.
 *
 * @param {Object} params
 * @param {number} [params.nout=1] - Number of outputs.
 * @returns {Function} step({u}) → {y: number[]}
 */
function RealScalarReplicator({ nout = 1 } = {}) {
  return ({ u = 0 } = {}) => {
    const y = Array(nout).fill(u);
    return { y };
  };
}

module.exports = RealScalarReplicator;
