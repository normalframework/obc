/**
 * Buildings.Controls.OBC.CDL.Routing.BooleanScalarReplicator
 * 
 * Boolean signal replicator.
 * 
 * This block replicates the Boolean input signal `u` into an array
 * of `nout` identical Boolean outputs.
 * 
 * @param {Object} params
 * @param {number} [params.nout=1] - Number of outputs.
 * @returns {Function} step({u}) → {y: boolean[]}
 */
function BooleanScalarReplicator({ nout = 1 } = {}) {
  return ({ u = false } = {}) => {
    const y = Array(nout).fill(!!u);
    return { y };
  };
}

module.exports = BooleanScalarReplicator;