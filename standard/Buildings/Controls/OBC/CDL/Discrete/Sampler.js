/**
 * Sampler block that samples a continuous signal at specified intervals.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component.
 * 
 * @returns {Function} - A function that samples the input signal at specified intervals.
 */

function sampler({ samplePeriod }) {
  let t0 = Math.round((Date.now() / 1000) / samplePeriod) * samplePeriod;
  let y = 0;

  return ({ u }) => {
    const currentTime = Date.now() / 1000;
    const sampleTrigger = currentTime >= t0 && (currentTime - t0) % samplePeriod < 1E-3;

    if (sampleTrigger) {
      y = u;
      t0 += samplePeriod;
    }

    return { y };
  };
}

module.exports = sampler;
