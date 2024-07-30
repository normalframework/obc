/**
 * TriggeredMax block that outputs the maximum absolute value of a continuous signal at trigger instants.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector with a Real input signal.
 * @param {boolean} input.trigger - Connector for the trigger.
 * @param {Object} output - The output object.
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector with a Real output signal.
 */

 function triggeredMax() {
  let previousY = 0;

  return ({ u, trigger }) => {
    if (trigger) {
      previousY = Math.max(previousY, Math.abs(u));
    }
    return { y: previousY };
  };
}

module.exports = triggeredMax;