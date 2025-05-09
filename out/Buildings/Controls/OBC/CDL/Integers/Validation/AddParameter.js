
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.AddParameter
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const addparameter_4da1418c = require("../AddParameter");
const round_9947f9a0 = require("../../Reals/Round");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.AddParameter.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.AddParameter.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.AddParameter.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.AddParameter.addPar
  const addParFn = addparameter_4da1418c({ p: 5 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const reaToInt = reaToIntFn({ u: round1.y });
    const addPar = addParFn({ u: reaToInt.y });

    return { ramp1: ramp1, round1: round1, reaToInt: reaToInt, addPar: addPar };
  }
}
