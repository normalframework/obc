
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax
const matrixmax_9a36e0f5 = require("../MatrixMax");
const constant_b0edecc8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax.con
  const conFn = constant_b0edecc8({ k: ["{1",2,"3}","{6",4,"2}","{3",9,"6}"] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax.matMax
  const matMaxFn = matrixmax_9a36e0f5({ nCol: 3, nRow: 3, rowMax: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax.con1
  const con1Fn = constant_b0edecc8({ k: ["{1",4,"3}","{2",2,"6}"] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax.matMax1
  const matMax1Fn = matrixmax_9a36e0f5({ nCol: 3, nRow: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax.con2
  const con2Fn = constant_b0edecc8({ k: ["{1",2,"3}","{6",4,"2}"] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixMax.matMax2
  const matMax2Fn = matrixmax_9a36e0f5({ nCol: 3, nRow: 2 });

  return (
    {  }
  ) => {
    const con = conFn({});
    const matMax = matMaxFn({ u: con.y });
    const con1 = con1Fn({});
    const matMax1 = matMax1Fn({ u: con1.y });
    const con2 = con2Fn({});
    const matMax2 = matMax2Fn({ u: con2.y });

    return { con: con, matMax: matMax, con1: con1, matMax1: matMax1, con2: con2, matMax2: matMax2 };
  }
}
