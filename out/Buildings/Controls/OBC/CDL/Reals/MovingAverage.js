/**
 * MovingAverage block to output the moving average of an input over a time horizon.
 * It integrates the input, delays that integral by δ, and computes (μ(t)−μ(t−δ))/δ once δ has elapsed,
 * otherwise uses (μ(t)−μ(t−δ))/(t−tStart+1e-3) for startup.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.delta - Time horizon over which the input is averaged (s).
 * @returns {Function} - The step function.
 * @returns {number} output.y - The moving average over the last δ seconds.
 */
const TimeManager = require("../../../../../TimeManager");
const Delay       = require("../../../../../Delay");

function movingAverage({ delta } = {}) {
  const delayBlock = Delay({ delayTime: delta });
  let mu = 0;
  const tStart = TimeManager.time;
  let mode = false;

  return ({ u = 0 } = {}) => {
    const t = TimeManager.time;
    const dt = Math.max(TimeManager.dt, Number.EPSILON);

    // integrate u
    mu += u * dt;
    // delayed integral
    const { y: muDel } = delayBlock({ u: mu });

    // switch to steady mode after delta elapses
    if (!mode && t >= tStart + delta) {
      mode = true;
    }

    const y = mode
      ? (mu - muDel) / delta
      : (mu - muDel) / (t - tStart + 1e-3);

    return { y };
  };
}

module.exports = movingAverage;
