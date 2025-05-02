/**
 * TimerAccumulating block that accumulates elapsed time while the input is true and can be reset.
 * It resets the timer when the reset signal becomes true, accumulates time during u, and holds its value when u is false.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold time for comparison (s).
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Elapsed or accumulated time (s).
 * @returns {boolean} output.passed - True if accumulated time ≥ t.
 */
const Initial = require("../../../../../Initial");

function timerAccumulating({ t = 0 } = {}) {
  const isInitial = Initial();
  let entryTime;
  let yAcc = 0;
  let passed;
  let prev_u = false;
  let prev_reset = false;

  return ({ u = false, reset = false } = {}) => {
    const now = TimeManager.time;

    if (isInitial()) {
      entryTime = now;
      passed = t <= 0;
      yAcc = 0;
    } else if (reset && !prev_reset) {
      entryTime = now;
      passed = t <= 0;
      yAcc = 0;
    } else if (u && !prev_u) {
      entryTime = now;
      passed = t <= yAcc;
    } else if (u && now >= t + entryTime - yAcc) {
      passed = true;
    } else if (!u && prev_u) {
      yAcc = yAcc + (now - entryTime);
      // passed remains as before
    }

    const y = u ? (yAcc + (now - entryTime)) : yAcc;

    prev_u = u;
    prev_reset = reset;
    return { y, passed };
  };
}

module.exports = timerAccumulating;
