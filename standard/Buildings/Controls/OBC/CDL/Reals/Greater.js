/**
 * Greater block that outputs true if input u1 is greater than input u2, with optional hysteresis.
 * If h ≥ 1e-10, y toggles true when u1 > u2 and false when u1 ≤ u2 – h; otherwise y = (u1 > u2).
 *
 * @param {Object} params - The parameters object.
 * @param {number} params.h - Hysteresis amount (min 0).
 * @param {boolean} params.pre_y_start - Initial output value when using hysteresis.
 *
 * @returns {Function} - The step function.
 * @returns {Object} output - The output object.
 * @returns {boolean} output.y - True when u1 > u2 (with hysteresis if enabled).
 */
function greater({ h = 0, pre_y_start = false } = {}) {
  const haveHysteresis = h >= 1e-10;

  function greaterNoHysteresis() {
    return ({ u1 = 0, u2 = 0 } = {}) => ({ y: u1 > u2 });
  }

  function greaterWithHysteresis({ h, pre_y_start }) {
    let prevY = pre_y_start;
    return ({ u1 = 0, u2 = 0 } = {}) => {
      const y = (!prevY && u1 > u2) || (prevY && u1 > u2 - h);
      prevY = y;
      return { y };
    };
  }

  const step = haveHysteresis
    ? greaterWithHysteresis({ h, pre_y_start })
    : greaterNoHysteresis();

  return step;
}

module.exports = greater;
