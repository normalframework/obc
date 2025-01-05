/**
 * TimerAccumulating block that accumulates time until reset by an input signal.
 *
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Input that switches timer on if true, and off if false.
 * @param {boolean} input.reset - Signal that sets timer to zero if it switches to true.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.t - Threshold time for comparison.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Elapsed time.
 * @returns {boolean} output.passed - True if the elapsed time is greater than the threshold.
 */

function timerAccumulating({ t = 0 }) {
    let entryTime = 0;
    let yAcc = 0;
    let prev_u = false;
    let prev_reset = false;
    let passed = t <= 0;

    return ({ u = false, reset = false }) => {
        const currentTime = Date.now() / 1000;

        if (reset && !prev_reset) {
            entryTime = currentTime;
            passed = t <= 0;
            yAcc = 0;
        } else if (u && !prev_u) {
            entryTime = currentTime;
            passed = t <= yAcc;
        } else if (u && currentTime >= t + entryTime - yAcc) {
            passed = true;
        } else if (!u) {
            passed = passed;
        }

        const y = u ? yAcc + currentTime - entryTime : yAcc;

        prev_u = u;
        prev_reset = reset;

        return { y, passed };
    };
}

module.exports = timerAccumulating;