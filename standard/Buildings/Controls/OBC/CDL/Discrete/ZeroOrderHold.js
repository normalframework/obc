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
function zeroOrderHold({ samplePeriod } = {}) {
  const TimeManager = require("../../../../../TimeManager");
  const Initial = require("../../../../../Initial");
  const isInitial = Initial();
  const t0 = Math.round(TimeManager.time / samplePeriod) * samplePeriod;
  let nextSample = t0;
  let y = 0;

  return ({ u = 0 } = {}) => {
    u = u ?? 0;
    let prevY = y;
    const now = TimeManager.time;

    if (isInitial()) {
      y = u;
      prevY = u;
      nextSample += samplePeriod;
    } else if (now >= nextSample) {
      nextSample += samplePeriod;
      y = u;
    }
    return { y: prevY }


  };
}

module.exports = zeroOrderHold;
