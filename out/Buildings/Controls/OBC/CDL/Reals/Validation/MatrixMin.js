
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin
const matrixmin_9a36e1e3 = require("../MatrixMin");
const constant_b0edecc8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin.con
  const conFn = constant_b0edecc8({ k: "{{-1,-2,-3},{-6,-4,-2},{-3,-9,-6}}" });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin.matMin
  const matMinFn = matrixmin_9a36e1e3({ nCol: 3, nRow: 3, rowMin: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin.con1
  const con1Fn = constant_b0edecc8({ k: "{{-1,-4,-3},{-2,-2,-6}}" });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin.matMin1
  const matMin1Fn = matrixmin_9a36e1e3({ nCol: 3, nRow: 2, rowMin: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin.con2
  const con2Fn = constant_b0edecc8({ k: "{{-1,-2,-3},{-6,-4,-2}}" });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMin.matMin2
  const matMin2Fn = matrixmin_9a36e1e3({ nCol: 3, nRow: 2, rowMin: true });

  return (
    {  }
  ) => {
    const con = conFn({});
    const matMin = matMinFn({ u: con.y });
    const con1 = con1Fn({});
    const matMin1 = matMin1Fn({ u: con1.y });
    const con2 = con2Fn({});
    const matMin2 = matMin2Fn({ u: con2.y });

    return { con: con, matMin: matMin, con1: con1, matMin1: matMin1, con2: con2, matMin2: matMin2 };
  }
}
