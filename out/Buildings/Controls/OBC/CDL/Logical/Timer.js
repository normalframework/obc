/**
 * Timer block that measures the time from the instant where the Boolean input became true.
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Input that switches the timer on if true, and off if false.
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold time for comparison (in seconds).
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Elapsed time since input became true (in seconds).
 * @returns {boolean} output.passed - True if the elapsed time is greater than the threshold time.
 */

function timer({ t = 0 }) {
  let elapsedTime = 0;
  let lastInputState = false;
  let startTime = 0;

  return function ({ u = false }) {
    if (u && !lastInputState) {
      startTime = Date.now();
      elapsedTime = 0;
    } else if (u) {
      elapsedTime = (Date.now() - startTime) / 1000; // Calculate elapsed time in seconds
    } else {
      elapsedTime = 0;
    }

    lastInputState = u;

    const passed = elapsedTime > t;

    return { y: elapsedTime, passed };
  };
}


module.exports = timer;