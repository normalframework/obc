/**
 * LessThreshold block that outputs true if input u is less than threshold t, with optional hysteresis.
 * When h ≥ 1e-10, y switches true when u < t and switches false when u ≥ t + h.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold for comparison.
 * @param {number} params.h - Hysteresis amount (min 0).
 * @param {boolean} params.pre_y_start - Initial output value when using hysteresis.
 * 
 * @returns {Function} - The step function.
 * @returns {boolean} output.y - True when u < t (with hysteresis if enabled).
 */
function lessThreshold({ t = 0, h = 0, pre_y_start = false } = {}) {
  const haveHysteresis = h >= 1e-10;

  function lessNoHysteresis({ u = 0 } = {}) {
    return { y: u < t };
  }

  function lessWithHysteresis() {
    let prevY = pre_y_start;
    return ({ u = 0 } = {}) => {
      const rising  = !prevY && u < t;
      const falling =  prevY && u >= t + h;
      const y = rising || (!falling && prevY);
      prevY = y;
      return { y };
    };
  }

  const step = haveHysteresis
    ? lessWithHysteresis()
    : lessNoHysteresis;

  return step;
}

module.exports = lessThreshold;
