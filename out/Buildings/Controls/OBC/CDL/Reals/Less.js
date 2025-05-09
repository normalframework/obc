/**
 * Less block that outputs true if input u1 is less than input u2, with optional hysteresis.
 * When h ≥ 1e-10, y switches true when u1 < u2 and switches false when u1 ≥ u2 + h.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.h - Hysteresis amount (min 0).
 * @param {boolean} params.pre_y_start - Initial output value when using hysteresis.
 * 
 * @returns {Function} - The step function.
 * @returns {boolean} output.y - True when u1 < u2 (with hysteresis if enabled).
 */
function less({ h = 0, pre_y_start = false } = {}) {
  const haveHysteresis = h >= 1e-10;

  function lessNoHysteresis() {
    return ({ u1 = 0, u2 = 0 } = {}) => ({ y: u1 < u2 });
  }

  function lessWithHysteresis({ h, pre_y_start }) {
    let prevY = pre_y_start;
    return ({ u1 = 0, u2 = 0 } = {}) => {
      const rising  = !prevY && u1 < u2;
      const falling =  prevY && u1 >= u2 + h;
      const y = rising || (!falling && prevY);
      prevY = y;
      return { y };
    };
  }

  const step = haveHysteresis
    ? lessWithHysteresis({ h, pre_y_start })
    : lessNoHysteresis();

  return step;
}

module.exports = less;
