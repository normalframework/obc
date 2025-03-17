/**
 * UnitDelay block that outputs the input signal with a unit delay.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of component.
 * @param {number} params.y_start - Initial value of output signal.
 * 
 * @returns {Function} - The inner function with input parameters.
 * @returns {Object} innerInput - The inner input object.
 * @returns {number} innerInput.u - Continuous input signal.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Continuous output signal.
 */

function unitDelay({ samplePeriod = 0, y_start = 0 }) {
  let y = y_start;
  let t0 = Math.round((Date.now() / 1000) / samplePeriod) * samplePeriod;
  let prev_u = y_start;

  return ({ u = 0 }) => {
    const currentTime = Math.round(Date.now() / 1000);
    const sampleTrigger = currentTime >= t0 && (currentTime - t0) % samplePeriod < 1E-3;

    if (sampleTrigger) {
      y = prev_u;
      prev_u = u;
      t0 += samplePeriod;
    }

    return { y };
  };
}

module.exports = unitDelay;