/**
 * TriggeredMax block that outputs the maximum absolute value of a continuous signal at trigger instants.
 * At each rising edge of the trigger input, y is updated to the greater of its previous value and the absolute value of u.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector with a Real output signal.
 */
const Trigger = require('../../../../../Trigger');

function triggeredMax() {
  const isRising = Trigger();
  let y;
  let firstCall = true;

  return ({ u = 0, trigger = false } = {}) => {
    if (firstCall) {
      y = u;
      firstCall = false;
    }
    if (isRising(trigger)) {
      y = Math.max(y, Math.abs(u));
    }
    return { y };
  };
}

module.exports = triggeredMax;
