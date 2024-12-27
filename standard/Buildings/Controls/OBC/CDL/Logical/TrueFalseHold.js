/**
 * TrueFalseHold block that holds an output signal for at least a specified duration.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.trueHoldDuration - Duration to hold true signal.
 * @param {number} params.falseHoldDuration - Duration to hold false signal.
 * 
 * @returns {Function} - A function that holds the output signal for the specified durations.
 */

function trueFalseHold({ trueHoldDuration = 0, falseHoldDuration = trueHoldDuration }) {
  let entryTimeTrue = -Infinity;
  let entryTimeFalse = -Infinity;
  let prev_u = false;
  let y = false;

  return ({ u = false }) => {
    const currentTime = Date.now() / 1000;
    let y_new = y;

    if (currentTime >= entryTimeFalse + falseHoldDuration && currentTime >= entryTimeTrue + trueHoldDuration) {
      y_new = u;
    }

    if (y_new !== y) {
      if (y_new) {
        entryTimeTrue = currentTime;
      } else {
        entryTimeFalse = currentTime;
      }
    }

    y = y_new;
    prev_u = u;

    return { y };
  };
}

module.exports = trueFalseHold;
