const TimeManager = require("../../../../../TimeManager");

/**
 * TrueDelay block:
 *   Delay a rising edge of the Boolean input, but pass falling edges immediately.
 *
 * @param {Object} params
 * @param {number} params.delayTime    – delay on rising edge (s)
 * @param {boolean} params.delayOnInit – if true, delay an initial true input
 * @returns {(inputs: {u: boolean}) => {y: boolean}}
 */
const Initial = require("../../../../../Initial");

function trueDelay({ delayTime = 0, delayOnInit = false } = {}) {
  // Initialize "time before start" just like Modelica's t_past = time - 1000
  let t_past = TimeManager.time - 1_000;
  // Next scheduled event time
  let t_next;
  // Remember previous input to detect edges
  let prev_u = false;
  // Flag for initial call
  const isInitial = Initial();
  // Output value
  let y = false;

  return ({ u = false } = {}) => {
    const t = TimeManager.time;
    // Ensure dt never zero
    const dt = Math.max(TimeManager.dt, Number.EPSILON);

    if (isInitial()) {
      // === initial() branch ===
      t_next = (!delayOnInit)
        ? t_past
        : t + delayTime;
      // If we're not delaying an initial true, just pass it; else start false
      y = !(delayOnInit && delayTime > 0) ? u : false;
    }
    else {
      // === when u (rising edge) ===
      if (u && !prev_u) {
        t_next = t + delayTime;
        // if no delay, pass rising immediately; else hold false until t_next
        y = delayTime > 0 ? false : true;
      }
      // === when not u (falling edge) ===
      else if (!u && prev_u) {
        t_next = t_past;
        y = false;
      }
      // === when time >= t_next (scheduled event) ===
      else if (t >= t_next) {
        t_next = t_past;
        // at event time, just sample the current input
        y = u;
      }
    }

    // remember for next step
    prev_u = u;
    return { y };
  };
}

module.exports = trueDelay;