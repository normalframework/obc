const TimeManager = require("../../../../../../TimeManager");

const Smoothness = {
  LinearSegments: 0,
  ConstantSegments: 1,
}
const Extrapolation = {
  Periodic: 0,
  HoldLastPoint: 1,
  LastTwoPoints: 2,
}

/**
 * TimeTable
 * Table look-up with respect to time and linear or periodic extrapolation.
 *
 * @param {Object} params
 * @param {number[][]} params.table
 *   Two-dimensional array, first column = time (seconds), remaining columns = outputs.
 * @param {number} [params.smoothness=Smoothness.LinearSegments]
 *   Interpolation method.
 * @param {number} [params.extrapolation=Extrapolation.Periodic]
 *   Extrapolation behavior.
 * @param {number[]} [params.offset]  - Offset added to each output column.
 * @param {number} [params.timeScale=1] - Time scale of the first column (1=seconds, 3600=hours).
 *
 * @returns {Function} step() → {y: number[]}
 */
function TimeTable({
  table,
  smoothness = Smoothness.LinearSegments,
  extrapolation = Extrapolation.Periodic,
  offset,
  timeScale = 1,
}) {
  if (!Array.isArray(table) || table.length === 0)
    throw new Error("TimeTable: 'table' must be a non-empty 2D array.");

  const nout = table[0].length - 1;
  const offs = offset ?? Array(nout).fill(0);

  const times = table.map((row) => row[0] * timeScale);
  const values = table.map((row) => row.slice(1));
  const tMin = times[0];
  const tMax = times[times.length - 1];
  const timeRange = tMax - tMin;
  const linear = smoothness === Smoothness.LinearSegments;

  return () => {
    let t = TimeManager.time;
    let y = [];

    // --- Periodic extrapolation ---
    if (extrapolation === Extrapolation.Periodic && timeRange > 0) {
      const nCycles = Math.floor((t - tMin) / timeRange);
      t = t - nCycles * timeRange;
    }

    // --- Before first sample ---
    if (t < tMin) {
      if (extrapolation === Extrapolation.HoldLastPoint) {
        for (let j = 0; j < nout; j++) y[j] = offs[j] + values[0][j];
        return { y };
      }
      if (extrapolation === Extrapolation.LastTwoPoints && times.length > 1) {
        const t1 = times[0];
        const t2 = times[1];
        const dt = t2 - t1;
        const α = (t - t1) / dt;
        for (let j = 0; j < nout; j++) {
          const v1 = values[0][j];
          const v2 = values[1][j];
          y[j] = offs[j] + v1 + α * (v2 - v1);
        }
        return { y };
      }
    }

    // --- After last sample ---
    if (t > tMax) {
      if (extrapolation === Extrapolation.HoldLastPoint) {
        for (let j = 0; j < nout; j++)
          y[j] = offs[j] + values[values.length - 1][j];
        return { y };
      }
      if (extrapolation === Extrapolation.LastTwoPoints && times.length > 1) {
        const t1 = times[times.length - 2];
        const t2 = times[times.length - 1];
        const dt = t2 - t1;
        const α = (t - t2) / dt;
        for (let j = 0; j < nout; j++) {
          const v1 = values[values.length - 2][j];
          const v2 = values[values.length - 1][j];
          // true linear extrapolation: extend line using slope (v2 - v1)/dt
          y[j] = offs[j] + v2 + (t - t2) * ((v2 - v1) / dt);
        }
        return { y };
      }
    }

    // --- Normal interpolation ---
    let i = 0;
    while (i < times.length - 2 && t > times[i + 1]) i++;

    if (linear && i < times.length - 1) {
      const t1 = times[i];
      const t2 = times[i + 1];
      const α = (t - t1) / (t2 - t1);
      for (let j = 0; j < nout; j++)
        y[j] = offs[j] + values[i][j] + α * (values[i + 1][j] - values[i][j]);
    } else {
      for (let j = 0; j < nout; j++) y[j] = offs[j] + values[i][j];
    }

    return { y };
  };
}

module.exports = TimeTable;
