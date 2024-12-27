/**
 * TriggeredMovingMean block that computes the triggered discrete moving mean of an input signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.n - Number of samples over which the input is averaged.
 * 
 * @returns {Function} - A function that computes the moving mean of the input signal when triggered.
 */

function triggeredMovingMean({ n = 0 }) {
  let iSample = 0;
  let counter = 0;
  let index = 0;
  const ySample = new Array(n).fill(0);

  return ({ u = 0, trigger = false }) => {
    if (trigger) {
      index = (iSample % n);
      ySample[index] = u;
      counter = Math.min(counter + 1, n);
      iSample++;
    }

    const y = ySample.reduce((sum, val) => sum + val, 0) / counter;

    return { y };
  };
}

module.exports = triggeredMovingMean;