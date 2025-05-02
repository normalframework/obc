const TimeManager = require("../../../../../TimeManager");

/**
 * TrueFalseHold block:
 *   Holds the output for at least a specified time whenever it changes.
 *
 * @param {Object} params
 * @param {number} params.trueHoldDuration   – minimum time to hold true (s)
 * @param {number} [params.falseHoldDuration] – minimum time to hold false (s); defaults to trueHoldDuration
 * @param {boolean} [params.pre_u_start=false] – assumed value of u just before t=0
 * @returns {(inputs: {u: boolean}) => {y: boolean}}
 */
const Initial = require("../../../../../Initial");

function trueFalseHold({
  trueHoldDuration,
  falseHoldDuration = trueHoldDuration,
  pre_u_start = false
} = {}) {
  // State: last times when output went true/false
  let entryTimeTrue = Number.NEGATIVE_INFINITY;
  let entryTimeFalse = Number.NEGATIVE_INFINITY;
  // State: previous input & output
  let prev_u = pre_u_start;
  let y = pre_u_start;
  // One‐time init flag
  const isInitial = Initial();

  return ({ u = false } = {}) => {
    const t = TimeManager.time;

    if (isInitial()) {
      // === initial() ===
      y = u;
      entryTimeTrue  = y ? t : entryTimeTrue;
      entryTimeFalse = !y ? t : entryTimeFalse;
    } else {
      // compute whether both hold‐periods have expired
      const canUpdate = 
        t >= entryTimeTrue  + trueHoldDuration  &&
        t >= entryTimeFalse + falseHoldDuration;

      // reevaluate only on input change or when hold‐times expire
      if (u !== prev_u || canUpdate) {
        const newY = canUpdate ? u : y;
        // if output actually toggles, record the time
        if (newY !== y) {
          if (newY) entryTimeTrue  = t;
          else      entryTimeFalse = t;
        }
        y = newY;
      }
    }

    prev_u = u;
    return { y };
  };
}

module.exports = trueFalseHold;
