/**
 * Buildings.Controls.OBC.CDL.Routing.RealExtractSignal
 *
 * Extracts specific elements from a real input vector `u` according to
 * an integer index vector `extract`, producing an output vector `y`.
 *
 * @param {Object} params
 * @param {number} [params.nin=1] - Number of input signals.
 * @param {number} [params.nout=1] - Number of output signals.
 * @param {number[]} [params.extract] - Extraction indices (1-based). Default = [1..nout].
 *
 * @returns {Function} step({u}) → {y: number[]}
 */
function RealExtractSignal({ nin = 1, nout = 1, extract = Array.from({ length: nout }, (_, i) => i + 1) } = {}) {
  if (!Array.isArray(extract) || extract.length !== nout) {
    throw new Error(`RealExtractSignal: 'extract' must be an array of length ${nout}.`);
  }

  // Validation (equivalent to Modelica initial equation assert)
  for (let i = 0; i < nout; i++) {
    if (extract[i] < 1 || extract[i] > nin) {
      throw new Error(
        `RealExtractSignal: extract[${i + 1}] = ${extract[i]} is out of range (1..${nin}).`
      );
    }
  }

  // Step function
  return ({ u = Array(nin).fill(0) } = {}) => {
    if (!Array.isArray(u) || u.length !== nin) {
      throw new Error(`RealExtractSignal: input 'u' must be an array of length ${nin}.`);
    }

    // Extract specified indices (1-based → 0-based)
    const y = extract.map(i => u[i - 1]);
    return { y };
  };
}

module.exports = RealExtractSignal;
