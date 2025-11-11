const TimeManager = require("../../../../../../TimeManager");

function TimeTable({
  table,
  period,
  timeScale = 1,
}) {
  if (!Array.isArray(table) || table.length === 0)
    throw new Error("TimeTable: 'table' must be a non-empty 2D array.");

  const nT = table.length;
  const nout = table[0].length - 1;

  if (nout < 1)
    throw new Error("IntegerTimeTable: table must contain outputs.");

  const sorted = [...table].sort((a, b) =>
    (a[0] * timeScale) - (b[0] * timeScale)
  );
  let timeStamps = sorted.map(row => row[0] * timeScale);


  if (timeStamps[timeStamps.length - 1] >= period) {
    timeStamps[timeStamps.length - 1] = period - 1e-6;
  }

  if (Math.abs(timeStamps[0]) > 1e-9)
    throw new Error("IntegerTimeTable: First timestamp must be 0.");
  const val = sorted.map(row => Math.round(row[1]));

  function getIndex(time) {
    const tS = ((time % period) + period) % period; // periodic wrap

    for (let i = nT - 1; i >= 0; i--) {
      if (tS >= timeStamps[i] - 1e-6)
        return i;
    }
    return 0; // fallback
  }

  return function step() {
    const t = TimeManager.time;
    const idx = getIndex(t);
    return { y: val[idx] > 0 };
  };
}

module.exports = TimeTable;
