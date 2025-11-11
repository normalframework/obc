
// http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.IntegerToReal
const integertoreal_a92d34f1 = require("../IntegerToReal");
const realtointeger_2917999f = require("../RealToInteger");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.IntegerToReal.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.IntegerToReal.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.IntegerToReal.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.IntegerToReal.intToRea
  const intToReaFn = integertoreal_a92d34f1({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round2 = round2Fn({ u: ramp1.y });
    const reaToInt1 = reaToInt1Fn({ u: round2.y });
    const intToRea = intToReaFn({ u: reaToInt1.y });

    return { ramp1: ramp1, round2: round2, reaToInt1: reaToInt1, intToRea: intToRea };
  }
}
