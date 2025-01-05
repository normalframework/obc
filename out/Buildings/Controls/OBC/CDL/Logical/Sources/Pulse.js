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

function pulse({ width = 0.5, period = 0, shift = 0 }) {
  const t0 = Math.round((Date.now() / 1000) / period) * period + (shift % period);
  const t1 = t0 + width * period;

  return () => {
    const currentTime = Date.now() / 1000;
    let y;

    if (t0 < t1) {
      y = currentTime >= t0 && currentTime < t1;
    } else {
      y = !(currentTime >= t1 && currentTime < t0);
    }

    return { y };
  };
}

module.exports = pulse;