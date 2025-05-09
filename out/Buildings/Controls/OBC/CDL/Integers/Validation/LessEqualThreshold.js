
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.LessEqualThreshold
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const lessequalthreshold_83a93414 = require("../LessEqualThreshold");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.LessEqualThreshold.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 10, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.LessEqualThreshold.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.LessEqualThreshold.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.LessEqualThreshold.intLesEquThr
  const intLesEquThrFn = lessequalthreshold_83a93414({ t: 2 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const reaToInt = reaToIntFn({ u: round1.y });
    const intLesEquThr = intLesEquThrFn({ u: reaToInt.y });

    return { ramp1: ramp1, round1: round1, reaToInt: reaToInt, intLesEquThr: intLesEquThr };
  }
}
