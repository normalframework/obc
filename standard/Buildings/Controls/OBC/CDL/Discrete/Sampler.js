/**
 * Sampler block that samples a continuous signal at specified intervals.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component.
 * 
 * @returns {Function} - A function that samples the input signal at specified intervals.
 */

function sampler({ samplePeriod = 0 }) {
  let t0 = Math.round((Date.now() / 1000) / samplePeriod) * samplePeriod;
  let y = 0;
  let triggered = false;

  return ({ u }) => {
    const currentTime = Math.round(Date.now() / 1000);
    const sampleTrigger = currentTime >= t0 && (currentTime - t0) % samplePeriod < 1E-3;


    if (sampleTrigger) {
      if (!triggered) {
        triggered = true;
        y = u;
      } else {
        y = 0;
        triggered = false;
      }
      t0 += samplePeriod;
    }

    return { y };
  };
}

module.exports = sampler;
