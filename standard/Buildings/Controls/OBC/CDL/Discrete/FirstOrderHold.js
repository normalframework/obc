/**
 * FirstOrderHold block that implements a first-order hold of a sampled-data system.
 * It triggers sampling of the continuous input u every samplePeriod seconds, computes
 * a slope based on the difference between successive samples, and reconstructs a
 * continuous output y between samples.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component (s).
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.sampleTrigger - True at each sample instant.
 * @returns {boolean} output.firstTrigger - True only at the very first sample instant.
 * @returns {number}  output.y            - Continuous output signal reconstructed by first-order hold.
 */
function firstOrderHold({ samplePeriod } = {}) {
  const TimeManager = require("../../../../../TimeManager");
  // Calculate initial sample instant
  const t0 = Math.round(TimeManager.time / samplePeriod) * samplePeriod;
  let nextSample = t0;
  let tSample = t0;
  let uSample = 0;
  let prev_uSample = 0;
  let c = 0;
  let firstTriggerFired = false;

  return ({ u = 0 } = {}) => {
    const now = TimeManager.time;
    let sampleTrigger = false;
    let firstTrigger = false;

    if (now >= nextSample) {
      sampleTrigger = true;
      firstTrigger = !firstTriggerFired;
      firstTriggerFired = true;
      nextSample += samplePeriod;

      // Update samples and compute slope
      tSample = now;
      prev_uSample = uSample;
      uSample = u;
      c = firstTrigger ? 0 : (uSample - prev_uSample) / samplePeriod;
    }

    // Reconstruct output via first-order hold
    const y = prev_uSample + c * (now - tSample);

    return { sampleTrigger, firstTrigger, y };
  };
}

module.exports = firstOrderHold;
