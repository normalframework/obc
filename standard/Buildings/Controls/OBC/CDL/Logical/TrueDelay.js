/**
 * TrueDelay block that delays a rising edge of the input, but does not delay a falling edge.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.delayTime - Delay time.
 * @param {boolean} params.delayOnInit - Set to true to delay initial true input.
 * 
 * @returns {Function} - A function that takes input and returns output.
 * @returns {Object} output - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal.
 */

function trueDelay({ delayTime = 0, delayOnInit = false }) {
  let t_past = Date.now() / 1000 - 1000;
  let prev_u = false;
  let t_next = t_past;
  let y = delayOnInit && delayTime > 0 ? false : true;

  return ({ u = false }) => {
    const currentTime = Date.now() / 1000;

    if (u && !prev_u) {
      t_next = currentTime + delayTime;
      y = delayTime > 0 ? false : true;
    } else if (!u && prev_u) {
      t_next = t_past;
      y = false;
    } else if (currentTime >= t_next) {
      t_next = t_past;
      y = u;
    }

    prev_u = u;

    return { y };
  };
}

module.exports = trueDelay;