/**
 * TriggeredSampler block that samples a continuous signal at trigger instants.
 * The output y is initialized to y_start and updated to the input value u whenever the trigger rises.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.y_start - Initial value of the output signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector with a Real output signal.
 */
const Trigger = require('../../../../../Trigger');

function triggeredSampler({ y_start = 0 } = {}) {
  const isRising = Trigger();
  let y = y_start;

  return ({ u = 0, trigger = false } = {}) => {
    if (isRising(trigger)) {
      y = u;
    }
    return { y };
  };
}

module.exports = triggeredSampler;
