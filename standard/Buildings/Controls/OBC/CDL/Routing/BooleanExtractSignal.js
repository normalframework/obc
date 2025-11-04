/**
 * Buildings.Controls.OBC.CDL.Routing.BooleanExtractSignal
 *
 * Extract signals from a Boolean input signal vector.
 * 
 * This block extracts selected Boolean signals from the input array `u`
 * according to the indices specified in the `extract` vector.
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Number of inputs.
 * @param {number} [params.nout=1] - Number of outputs.
 * @param {number[]} [params.extract] - Indices of input signals to extract (1-based).
 *
 * @returns {Function} step({u}) → {y: boolean[]}
 */
function BooleanExtractSignal({ nin = 1, nout = 1, extract = Array.from({ length: nout }, (_, i) => i + 1) } = {}) {
  // Validation (Modelica initial equation equivalent)
  const valid = extract.every(i => i > 0 && i <= nin);
  if (!valid) {
    throw new Error(
      `BooleanExtractSignal: The elements of 'extract' must be between 1 and ${nin}. Got [${extract.join(", ")}].`
    );
  }

  return ({ u = Array(nin).fill(false) } = {}) => {
    const y = extract.map(i => !!u[i - 1]); // Convert to JS 0-based indexing
    return { y };
  };
}

module.exports = BooleanExtractSignal;
