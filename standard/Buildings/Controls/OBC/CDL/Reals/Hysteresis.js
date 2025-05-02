/**
 * Hysteresis block that transforms a Real input to a Boolean signal with hysteresis.
 * Switches y true when u > uHigh, and switches y false when u < uLow.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.uLow - If y=true and u < uLow, switch to y=false.
 * @param {number} params.uHigh - If y=false and u > uHigh, switch to y=true.
 * @param {boolean} [params.pre_y_start=false] - Initial output value.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Boolean output signal.
 */
function hysteresis({ uLow, uHigh, pre_y_start = false } = {}) {
  if (uHigh <= uLow) {
    throw new Error("Hysteresis limits wrong: uHigh must be larger than uLow");
  }
  let prevY = pre_y_start;
  return ({ u = 0 } = {}) => {
    const y = (!prevY && u > uHigh) || (prevY && u >= uLow);
    prevY = y;
    return { y };
  };
}

module.exports = hysteresis;
