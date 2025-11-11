
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const greater_4572c7f6 = require("../Greater");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 10, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 5, offset: -1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Greater.intGre
  const intGreFn = greater_4572c7f6({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const reaToInt = reaToIntFn({ u: round1.y });
    const ramp2 = ramp2Fn({});
    const round2 = round2Fn({ u: ramp2.y });
    const reaToInt1 = reaToInt1Fn({ u: round2.y });
    const intGre = intGreFn({ u1: reaToInt.y, u2: reaToInt1.y });

    return { ramp1: ramp1, round1: round1, reaToInt: reaToInt, ramp2: ramp2, round2: round2, reaToInt1: reaToInt1, intGre: intGre };
  }
}
