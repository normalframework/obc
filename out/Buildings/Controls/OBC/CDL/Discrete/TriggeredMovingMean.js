/**
 * TriggeredMovingMean block that computes a discrete moving mean of the input signal at trigger instants.
 * It maintains a buffer of the last n samples taken when the block is initialized or the trigger rises,
 * and outputs the average of those samples.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.n - Number of samples over which the input is averaged (min 1).
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Discrete averaged signal.
 */
const Trigger = require('../../../../../Trigger');
const Initial = require('../../../../../Initial');

function triggeredMovingMean({ n } = {}) {
  const isInitial = Initial();
  const isRising = Trigger();
  let iSample = 0;
  let counter = 0;
  let ySample = Array(n).fill(0);
  let y = 0;

  return ({ u = 0, trigger = false } = {}) => {
    u = u ?? 0;
    if (isInitial() || isRising(trigger)) {
      const index = iSample % n;
      ySample[index] = u;
      counter = counter === n ? n : counter + 1;
      y = ySample.reduce((sum, val) => sum + val, 0) / counter;
      iSample += 1;
    }
    return { y };
  };
}

module.exports = triggeredMovingMean;
