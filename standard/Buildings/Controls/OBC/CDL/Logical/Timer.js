/**
 * Timer block measuring the time from when the Boolean input became true.
 * It outputs the elapsed time since u turned true and a flag when the elapsed
 * time exceeds the threshold t.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold time for comparison (s).
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Elapsed time since u became true (s).
 * @returns {boolean} output.passed - True if elapsed time ≥ t.
 */
const Initial = require("../../../../../Initial");
const TimeManager = require("../../../../../TimeManager");

function timer({ t = 0 } = {}) {
  const isInitial = Initial();
  let entryTime;
  let passed;
  let prev_u;

  return ({ u = false } = {}) => {
    const now = TimeManager.time;

    if (isInitial()) {
      entryTime = now;
      passed = (t <= 0);
      prev_u = u;
    } else if (u && !prev_u) {
      entryTime = now;
      passed = (t <= 0);
    } else if (u && now >= t + entryTime) {
      passed = true;
    } else if (!u && prev_u) {
      passed = false;
    }

    prev_u = u;
    const y = u ? (now - entryTime) : 0.0;
    return { y: y, passed };
  };
}

module.exports = timer;
