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
  const Initial = require("../../../../../Initial");
  const isInitial = Initial();
  // Calculate initial sample instant
  const t0 = Math.round(TimeManager.time / samplePeriod) * samplePeriod;
  let nextSample = t0;
  let tSample = t0;
  let uSample = 0;
  let prev_uSample = 0;
  let c = 0;

  return ({ u = 0 } = {}) => {
    u = u ?? 0;
    const now = TimeManager.time;

    if (isInitial()) {
      tSample = now;
      uSample = u;
      prev_uSample = u;
      nextSample += samplePeriod;
      c = (uSample - prev_uSample) / samplePeriod;
    } else if (now >= nextSample) {
      nextSample += samplePeriod;
      tSample = now;
      prev_uSample = uSample;
      uSample = u;
      c = (uSample - prev_uSample) / samplePeriod;
    }

    // Reconstruct output via first-order hold
    const y = prev_uSample + c * (now - tSample);

    return { y };
  };
}

module.exports = firstOrderHold;
