const TimeManager = require("../../../../../../TimeManager");

/**
 * SampleTrigger block that generates a sample trigger signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.period - Sample period.
 * @param {number} params.shift - Shift time for output.
 * 
 * @returns {Function} - A function that generates a sample trigger signal.
 */

function sampleTrigger({ period = 0, shift = 0 }) {
  if (period <= 0) {
    throw new Error("SampleTrigger: `period` must be > 0");
  }

  const phaseOffset = ((shift % period) + period) % period;

  return () => {
    const t = TimeManager.time;
    const dt = TimeManager.dt;
    // Compute phase within the current cycle:
    const phase = ((t - phaseOffset) % period + period) % period;
    // Fire exactly when phase just wrapped around:
    const y = phase < dt;
    return { y };
  };
}

module.exports = sampleTrigger;