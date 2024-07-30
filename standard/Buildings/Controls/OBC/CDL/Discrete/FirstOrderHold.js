/**
 * FirstOrderHold block that performs first-order hold of a sampled-data system.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component.
 * 
 * @returns {Function} - A function that outputs the first-order held signal.
 */

export default function firstOrderHold({ samplePeriod }) {
  let t0 = Math.round((Date.now() / 1000) / samplePeriod) * samplePeriod;
  let tSample = t0;
  let uSample = 0;
  let prev_uSample = 0;
  let c = 0;

  return ({ u }) => {
    const currentTime = Date.now() / 1000;
    const sampleTrigger = currentTime >= t0 && (currentTime - t0) % samplePeriod < 1E-3;

    if (sampleTrigger) {
      tSample = currentTime;
      prev_uSample = uSample;
      uSample = u;
      c = (uSample - prev_uSample) / samplePeriod;
      t0 += samplePeriod;
    }

    const y = prev_uSample + c * (currentTime - tSample);

    return { y };
  };
}
