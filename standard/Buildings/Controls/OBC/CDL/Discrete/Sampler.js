/**
 * Sampler block that ideal-samples a continuous signal at a fixed period.
 * It outputs the input value at each sample instant and holds it between samples.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component (s).
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.sampleTrigger - True at each sample instant.
 * @returns {boolean} output.firstTrigger - True only at the very first sample instant.
 * @returns {number}  output.y            - Sampled value of the input.
 */
function sampler({ samplePeriod } = {}) {
  const TimeManager = require("../../../../../TimeManager");
  const t0 = Math.round(TimeManager.time / samplePeriod) * samplePeriod;
  let nextSample = t0;
  let firstTriggerFired = false;
  let y = 0;
  let firstCall = true;

  return ({ u = 0 } = {}) => {
    const now = TimeManager.time;
    let sampleTrigger = false;
    let firstTrigger = false;

    if (firstCall) {
      y = u;
      sampleTrigger = true;
      firstTrigger = true;
      firstCall = false;
      firstTriggerFired = true;
      nextSample += samplePeriod;
    } else if (now >= nextSample) {
      sampleTrigger = true;
      firstTrigger = !firstTriggerFired;
      firstTriggerFired = true;
      nextSample += samplePeriod;
      y = u;
    }

    return { sampleTrigger, firstTrigger, y };
  };
}

module.exports = sampler;
