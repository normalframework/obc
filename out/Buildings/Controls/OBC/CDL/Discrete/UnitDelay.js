/**
 * UnitDelay block that outputs the input signal with a unit delay at discrete intervals.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of component (s).
 * @param {number} params.y_start - Initial value of output signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Continuous output signal delayed by one sample period.
 */
const TimeManager = require("../../../../../TimeManager");
const Initial = require("../../../../../Initial");

function unitDelay({ samplePeriod, y_start = 0 } = {}) {
  const isFirst = Initial();
  let nextSample = Math.round(TimeManager.time / samplePeriod) * samplePeriod;
  let prev_u = y_start;
  let y = y_start;

  return ({ u = 0 } = {}) => {
    u = u ?? 0;
    if (isFirst() || TimeManager.time >= nextSample) {
      y = prev_u;
      prev_u = u;
      nextSample += samplePeriod;
    }
    return { y };
  };
}

module.exports = unitDelay;
