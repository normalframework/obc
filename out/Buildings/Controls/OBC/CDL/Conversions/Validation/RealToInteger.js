
// http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.RealToInteger
const realtointeger_2917999f = require("../RealToInteger");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.RealToInteger.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.RealToInteger.reaToInt
  const reaToIntFn = realtointeger_2917999f({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const reaToInt = reaToIntFn({ u: ramp1.y });

    return { ramp1: ramp1, reaToInt: reaToInt };
  }
}
