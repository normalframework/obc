/**
 * Line block that outputs the value of the input x along a line specified by two points.
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.limitBelow - If true, limit input u to be no smaller than x1.
 * @param {boolean} params.limitAbove - If true, limit input u to be no larger than x2.
 * 
 * @returns {Function} - A function that calculates the value of the input x along the specified line.
 */

 function line({ limitBelow = true, limitAbove = true }) {
  return ({ x1, f1, x2, f2, u }) => {
    if ((limitBelow || limitAbove) && x2 <= x1) {
      throw new Error("x2 must be bigger than x1");
    }

    const b = (f2 - f1) / (x2 - x1);
    const a = f2 - b * x2;

    let xLim;
    if (limitBelow && limitAbove) {
      xLim = Math.min(x2, Math.max(x1, u));
    } else if (limitBelow) {
      xLim = Math.max(x1, u);
    } else if (limitAbove) {
      xLim = Math.min(x2, u);
    } else {
      xLim = u;
    }

    const y = a + b * xLim;
    return { y };
  };
}

module.exports = line;