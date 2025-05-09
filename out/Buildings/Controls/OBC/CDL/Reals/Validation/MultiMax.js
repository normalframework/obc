
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiMax
const multimax_a5ce0819 = require("../MultiMax");
const constant_d2aca5e8 = require("../Sources/Constant");

module.exports = (
  {
		sizOfVec = 5,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiMax.con
  const conFn = constant_d2aca5e8({ k: "{1,2,3,4,5}" });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiMax.maxVal
  const maxValFn = multimax_a5ce0819({ nin: sizOfVec });

  return (
    {  }
  ) => {
    const con = conFn({});
    const maxVal = maxValFn({ u: con.y });

    return { con: con, maxVal: maxVal };
  }
}
