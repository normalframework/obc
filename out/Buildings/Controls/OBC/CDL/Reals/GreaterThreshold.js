/**
 * Greater block that outputs true if input u1 is greater than input u2.
 * Supports optional hysteresis: when h ≥ 1e-10, y toggles true when u1 > u2 and false when u1 ≤ u2 - h.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.h - Hysteresis amount (min 0).
 * @param {boolean} params.pre_y_start - Initial output value when using hysteresis.
 * 
 * @returns {Function} - The step function.
 * @returns {boolean} output.y - True when u1 > u2 (with hysteresis if enabled).
 */
function greaterThreshold({ h = 0, t = 0, pre_y_start = false } = {}) {
  const haveHysteresis = h >= 1e-10;

  function greaterNoHysteresis() {
    return ({ u = 0 } = {}) => ({ y: (u ?? 0) > (t ?? 0) });
  }

  function greaterWithHysteresis({ h, pre_y_start }) {
    let prevY = pre_y_start;
    return ({ u = 0 } = {}) => {
      u = u ?? 0;
      h = h ?? 0;
      t = t ?? 0;
      const rising  = !prevY && u > t;
      const falling =  prevY && u <= t - h;
      const y = rising || (!falling && prevY);
      prevY = y;
      return { y };
    };
  }

  const step = haveHysteresis
    ? greaterWithHysteresis({ h, pre_y_start })
    : greaterNoHysteresis();

  return step;
}

module.exports = greaterThreshold;
