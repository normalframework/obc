
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiMin
const multimin_a5ce0907 = require("../MultiMin");
const constant_d2aca5e8 = require("../Sources/Constant");

module.exports = (
  {
		sizOfVec = 5,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiMin.con
  const conFn = constant_d2aca5e8({ k: [1,2,3,4,5] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiMin.minVal
  const minValFn = multimin_a5ce0907({ nin: sizOfVec });

  return (
    {  }
  ) => {
    const con = conFn({});
    const minVal = minValFn({});

    return { con: con, minVal: minVal };
  }
}
