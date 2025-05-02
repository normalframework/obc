const TimeManager = require("../../../../../../TimeManager");
/**
 * Sin block that generates a sine signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.amplitude - Amplitude of sine wave.
 * @param {number} params.freqHz - Frequency of sine wave.
 * @param {number} params.phase - Phase of sine wave.
 * @param {number} params.offset - Offset of output signal.
 * @param {number} params.startTime - Output = offset for time < startTime.
 * 
 * @returns {Function} - A function that generates a sine signal.
 */

 function Sin({ amplitude = 1, freqHz = 1, phase = 0, offset = 0, startTime = 0 }) {
  const pi = Math.PI;

  return () => {
    const currentTime = TimeManager.time;
    let y;

    if (currentTime < startTime) {
      y = offset;
    } else {
      y = offset + amplitude * Math.sin(2 * pi * freqHz * (currentTime - startTime) + phase);
    }

    return { y };
  };
}

module.exports = Sin;