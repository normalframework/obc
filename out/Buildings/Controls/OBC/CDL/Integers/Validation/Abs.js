
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Abs
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const abs_4fb2326e = require("../Abs");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Abs.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Abs.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Abs.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Abs.abs1
  const abs1Fn = abs_4fb2326e({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const reaToInt = reaToIntFn({ u: round1.y });
    const abs1 = abs1Fn({ u: reaToInt.y });

    return { ramp1: ramp1, round1: round1, reaToInt: reaToInt, abs1: abs1 };
  }
}
