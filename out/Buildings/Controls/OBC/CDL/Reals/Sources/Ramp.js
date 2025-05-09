const TimeManager = require("../../../../../../TimeManager");
/**
 * Ramp block that generates a ramp signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.height - Height of ramps.
 * @param {number} params.duration - Duration of ramp.
 * @param {number} params.offset - Offset of output signal.
 * @param {number} params.startTime - Output = offset for time < startTime.
 * 
 * @returns {Function} - A function that generates a ramp signal.
 */

 function ramp({ height = 1, duration, offset = 0, startTime = 0 }) {
  if (duration <= 0) {
    throw new Error("duration must be greater than Constants.small");
  }

  const start = TimeManager.time + startTime;

  return () => {
    const currentTime = TimeManager.time;
    let y;

    if (currentTime < start) {
      y = offset;
    } else if (currentTime < (start + duration)) {
      y = offset + (currentTime - start) * height / duration;
    } else {
      y = offset + height;
    }

    return { y };
  };
}

module.exports = ramp;