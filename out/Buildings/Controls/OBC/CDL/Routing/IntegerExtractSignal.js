/**
 * Buildings.Controls.OBC.CDL.Routing.IntegerExtractSignal
 *
 * Extracts selected integer signals from an integer input vector `u`
 * according to the indices specified in the `extract` vector.
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Number of input signals.
 * @param {number} [params.nout=1] - Number of output signals.
 * @param {number[]} [params.extract] - Indices (1-based) of input elements to extract.
 *
 * @returns {Function} step({u}) → {y: number[]}
 */
function IntegerExtractSignal({ nin = 1, nout = 1, extract = Array.from({ length: nout }, (_, i) => i + 1) } = {}) {
  // --- Validation (Modelica initial equation equivalent) ---
  const valid = extract.every(i => i > 0 && i <= nin);
  if (!valid) {
    throw new Error(
      `IntegerExtractSignal: The elements of 'extract' must be between 1 and ${nin}. Got [${extract.join(", ")}].`
    );
  }

  return ({ u = Array(nin).fill(0) } = {}) => {
    const y = extract.map(i => u[i - 1]); // Convert to JS 0-based indexing
    return { y };
  };
}

module.exports = IntegerExtractSignal;
