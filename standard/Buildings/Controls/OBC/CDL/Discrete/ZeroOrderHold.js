/**
 * ZeroOrderHold block that outputs the input signal with a zero-order hold.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.samplePeriod - Sample period of the component.
 * 
 * @returns {Function} - A function that outputs the input signal with a zero-order hold.
 */

export default function zeroOrderHold({ samplePeriod }) {
  let t0 = Math.round((Date.now() / 1000) / samplePeriod) * samplePeriod;
  let ySample = 0;
  let firstTrigger = false;

  return ({ u }) => {
    const currentTime = Date.now() / 1000;
    const sampleTrigger = currentTime >= t0 && (currentTime - t0) % samplePeriod < 1E-3;

    if (sampleTrigger) {
      if (currentTime <= t0 + samplePeriod / 2) {
        firstTrigger = true;
      }
      ySample = u;
      t0 += samplePeriod;
    }

    const y = ySample;

    return { y };
  };
}
