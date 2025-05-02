/**
 * ZeroOrderHold block that outputs the input signal with a zero-order hold.
 * It samples the input u at fixed intervals and holds that value until the next sample.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component (s).
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.sampleTrigger - True at each sample instant.
 * @returns {boolean} output.firstTrigger - True only at the very first sample instant.
 * @returns {number}  output.y - Held (sampled) value of the input signal.
 */
const TimeManager = require("../../../../../TimeManager");
const Initial = require("../../../../../Initial");

function zeroOrderHold({ samplePeriod } = {}) {
  const isInitial = Initial();
  // Determine first sample instant
  const t0 = Math.round(TimeManager.time / samplePeriod) * samplePeriod;
  let nextSample = t0;
  let ySample = 0;
  let prev_ySample = 0;
  let firstTriggerFired = false;

  return ({ u = 0 } = {}) => {
    const now = TimeManager.time;
    let sampleTrigger = false;
    let firstTrigger = false;

    if (isInitial() || now >= nextSample) {
      sampleTrigger = true;
      firstTrigger = !firstTriggerFired;
      firstTriggerFired = true;
      nextSample += samplePeriod;

      prev_ySample = ySample;
      ySample = u;
    }

    const y = prev_ySample;
    return { sampleTrigger, firstTrigger, y };
  };
}

module.exports = zeroOrderHold;
