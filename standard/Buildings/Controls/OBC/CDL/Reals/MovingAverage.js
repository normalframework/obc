/**
 * MovingAverage block that outputs the moving average of the input signal.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.delta - Time horizon over which the input is averaged, in seconds.
 * 
 * @returns {Function} - A function that calculates the moving average of the input signal.
 */

function movingAverage({ delta = 0 }) {
  if (delta < 1E-5) {
    throw new Error("delta must be greater than or equal to 1E-5");
  }

  let tStart = Date.now() / 1000; // Start time in seconds
  let mu = 0;
  let mode = false;

  return ({ u = 0 }) => {
    const currentTime = Date.now() / 1000; // Current time in seconds
    const dt = 0.001; // Small time step for numerical integration, can be adjusted

    mu += u * dt;

    const muDel = mu - (u * delta);

    if (currentTime >= tStart + delta) {
      mode = true;
    }

    let y;
    if (mode) {
      y = (mu - muDel) / delta;
    } else {
      y = (mu - muDel) / (currentTime - tStart + 1E-3);
    }

    return { y };
  };
}

module.exports = movingAverage;