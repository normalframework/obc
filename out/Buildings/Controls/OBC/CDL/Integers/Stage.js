const TimeManager = require("../../../../../TimeManager");

/**
 * Stage block that outputs the total number of stages that should be enabled.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Real input for specifying stages (min: 0, max: 1).
 * @param {Object} params - The parameters object.
 * @param {number} params.n - Number of stages that could be enabled (final min=1).
 * @param {number} params.holdDuration - Minimum time that the output needs to be held constant (in seconds, min: 0).
 * @param {number} params.h - Hysteresis for comparing input with threshold (min: 0.001/n, max: 0.5/n).
 * @param {number} params.pre_y_start - Initial value of pre(y).
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Total number of stages that should be enabled (min: 1, max: n).
 */

 function stage({ n = 0, holdDuration = 0, h = 0, pre_y_start = false }) {
  const staThr = Array.from({ length: n }, (_, i) => i / n);
  let upperThreshold = 0;
  let lowerThreshold = 0;
  let checkUpper = false;
  let checkLower = true;
  let tNext = TimeManager.time + holdDuration;
  let y = pre_y_start ?? 0;  

  return ({ u = 0 }) => {
    u = u ?? 0;
    const currentTime = TimeManager.time;

    checkUpper = (!checkUpper && u > upperThreshold + h) || (checkUpper && u >= upperThreshold - h);
    checkLower = (!checkLower && u > lowerThreshold + h) || (checkLower && u >= lowerThreshold - h);

    if (currentTime >= tNext && (checkUpper || !checkLower)) {
      tNext = currentTime + holdDuration;
      y = (u >= staThr[n]) ? n : staThr.findIndex((thr, i) => u < thr && u >= staThr[i - 1]) - 1;
      upperThreshold = (y === n) ? staThr[n] : staThr[y + 1];
      lowerThreshold = (y === 0) ? lowerThreshold : staThr[y];
    }

    return { y };
  };
}

module.exports = stage;