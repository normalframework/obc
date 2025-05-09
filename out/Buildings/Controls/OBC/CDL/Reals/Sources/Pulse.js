const TimeManager = require("../../../../../../TimeManager");
/**
 * Pulse block that generates a pulse signal of type Real.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.amplitude - Amplitude of pulse.
 * @param {number} params.width - Width of pulse in fraction of period.
 * @param {number} params.period - Time for one period.
 * @param {number} params.shift - Shift time for output.
 * @param {number} params.offset - Offset of output signals.
 * 
 * @returns {Function} - A function that generates a pulse signal.
 */

 function pulse({ amplitude = 1.0, width = 0.5, period, shift = 0, offset = 0.0 }) {
  if (width <= 0 || width > 1) {
    throw new Error("width must be between Constants.small and 1");
  }
  if (period <= 0) {
    throw new Error("period must be greater than Constants.small");
  }

  return () => {
    const currentTime = (TimeManager.time + shift) % period;
    const pulseValue = currentTime < width * period ? amplitude : 0;
    const y = pulseValue + offset;

    return { y };
  };
}

module.exports = pulse;
