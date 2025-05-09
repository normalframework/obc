
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqualThreshold
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const greaterequalthreshold_0027e52d = require("../GreaterEqualThreshold");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqualThreshold.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 10, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqualThreshold.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqualThreshold.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqualThreshold.intGreEquThr
  const intGreEquThrFn = greaterequalthreshold_0027e52d({ t: 2 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const reaToInt = reaToIntFn({ u: round1.y });
    const intGreEquThr = intGreEquThrFn({ u: reaToInt.y });

    return { ramp1: ramp1, round1: round1, reaToInt: reaToInt, intGreEquThr: intGreEquThr };
  }
}
