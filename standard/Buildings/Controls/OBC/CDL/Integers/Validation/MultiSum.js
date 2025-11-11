
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const multisum_83d85dd6 = require("../MultiSum");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.add1
  const add1Fn = multisum_83d85dd6({ nin: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.ramp3
  const ramp3Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.round3
  const round3Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.MultiSum.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});

  return (
    {  }
  ) => {
    const add1 = add1Fn({});
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const reaToInt = reaToIntFn({ u: round1.y });
    const ramp2 = ramp2Fn({});
    const round2 = round2Fn({ u: ramp2.y });
    const reaToInt1 = reaToInt1Fn({ u: round2.y });
    const ramp3 = ramp3Fn({});
    const round3 = round3Fn({ u: ramp3.y });
    const reaToInt2 = reaToInt2Fn({ u: round3.y });

    return { add1: add1, ramp1: ramp1, round1: round1, reaToInt: reaToInt, ramp2: ramp2, round2: round2, reaToInt1: reaToInt1, ramp3: ramp3, round3: round3, reaToInt2: reaToInt2 };
  }
}
