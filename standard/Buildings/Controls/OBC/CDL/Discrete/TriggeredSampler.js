/**
 * TriggeredSampler block that samples a continuous input signal when triggered.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector with a Real input signal.
 * @param {boolean} input.trigger - Signal that triggers the sampler.
 * @param {Object} params - The parameters object.
 * @param {number} params.y_start - Initial value of output signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector with a Real output signal.
 */

 function triggeredSampler({ y_start = 0 }) {
  let y = y_start;

  return ({ u, trigger }) => {
    if (trigger) {
      y = u;
    }

    return { y };
  }
}

module.exports = triggeredSampler;