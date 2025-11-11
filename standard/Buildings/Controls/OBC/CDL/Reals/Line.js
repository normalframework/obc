/**
 * Line block that outputs the value of the input u along the line specified by points (x1, f1) and (x2, f2).
 * It computes y = a + b * xLim, where b = (f2 - f1)/(x2 - x1) and a = f2 - b * x2, and xLim is u optionally limited between x1 and x2.
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.limitBelow - If true, limit u to be no smaller than x1.
 * @param {boolean} params.limitAbove - If true, limit u to be no larger than x2.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Interpolated (and limited) value along the specified line.
 */
function line({ limitBelow = true, limitAbove = true } = {}) {
  return ({ x1 = 0, f1 = 0, x2 = 0, f2 = 0, u = 0 } = {}) => {
    x1 = x1 ?? 0;
    f1 = f1 ?? 0;
    x2 = x2 ?? 0;
    f2 = f2 ?? 0;
    u = u ?? 0;
    if ((limitBelow || limitAbove) && x2 <= x1) {
      throw new Error("Line: x2 must be greater than x1");
    }
    const b = (f2 - f1) / (x2 - x1);
    const a = f2 - b * x2;

    let xLim = u;
    if (limitBelow && limitAbove) {
      xLim = Math.min(x2, Math.max(x1, u));
    } else if (limitBelow) {
      xLim = Math.max(x1, u);
    } else if (limitAbove) {
      xLim = Math.min(x2, u);
    }
    const y = a + b * xLim;
    return { y };
  };
}

module.exports = line;
