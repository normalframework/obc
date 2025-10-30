const TimeManager = require("./TimeManager");
/**
 * Delay block that delays a rising edge of the Boolean input but not a falling edge.
 * 
 * @param {Object} params
 * @param {number} params.delayTime    – delay on rising edge (s)
 * @param {boolean} params.delayOnInit – if true, delay an initial true input
 * @returns {Function} step function receiving { u: boolean } and returning { y: boolean }
 */
function delay({ delayTime = 0, delayOnInit = false } = {}) {
  let t_past = TimeManager.time - 1_000;
  let t_next;
  let prev_u = false;
  let firstCall = true;
  let y = false;

  return ({ u = false } = {}) => {
    const t = TimeManager.time;

    if (firstCall) {
      t_next = delayOnInit ? t + delayTime : t_past;
      y      = !(delayOnInit && delayTime > 0) ? u : false;
      firstCall = false;
    } else if (u && !prev_u) {
      t_next = t + delayTime;
      y      = delayTime > 0 ? false : true;
    } else if (!u && prev_u) {
      t_next = t_past;
      y      = false;
    } else if (t >= t_next) {
      t_next = t_past;
      y      = u;
    }

    prev_u = u;
    return { y };
  };
}

module.exports = delay;
