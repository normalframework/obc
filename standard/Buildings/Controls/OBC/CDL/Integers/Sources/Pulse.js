const TimeManager = require("../../../../../../TimeManager");

/**
 * Pulse block that generates a pulse signal of type Integer.
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

 function Pulse({ amplitude = 1, width = 0.5, period = 1, shift = 0, offset = 0 }) {
  const t0 = Math.round((TimeManager.time / period) * period) + (shift % period);
  const t1 = t0 + width * period;

  return () => {
    const currentTime = TimeManager.time;
    let y;

    if (t0 < t1) {
      y = currentTime >= t0 && currentTime < t1 ? offset + amplitude : offset;
    } else {
      y = !(currentTime >= t1 && currentTime < t0) ? offset + amplitude : offset;
    }

    return { y };
  };
}

module.exports = Pulse;
