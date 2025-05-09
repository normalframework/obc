const TimeManager = require("../../../../../../TimeManager");

/**
 * Pulse block that generates a pulse signal of type Boolean.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.width - Width of pulse in fraction of period.
 * @param {number} params.period - Time for one period.
 * @param {number} params.shift - Shift time for output.
 * 
 * @returns {Function} - A function that generates a pulse signal.
 */

function pulse({ width = 0.5, period = 1, shift = 0 } = {}) {
  if (period <= 0) {
    throw new Error("`period` must be > 0");
  }
  // clamp width to [0,1]
  const w = Math.max(0, Math.min(1, width));

  return () => {
    const t = TimeManager.time;                    // current time
    // compute phase in [0, period)
    const phase = ((t - shift) % period + period) % period;
    // output high when phase is less than width*period
    const y = phase < (w * period);
    return { y };
  };
}
module.exports = pulse;