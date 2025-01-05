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
  const t0 = Math.round((Date.now() / 1000) / period) * period + (shift % period);

  return () => {
    const currentTime = Date.now() / 1000;
    const y = ((currentTime - t0) % period) < 0.01; // Adjust 0.01 as needed for the sample window
    return { y };
  };
}

module.exports = sampleTrigger;