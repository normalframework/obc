
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerScalarReplicator
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const integerscalarreplicator_e0a2b80c = require("../IntegerScalarReplicator");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerScalarReplicator.ram
  const ramFn = ramp_40ddd056({ duration: 1, height: 5, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerScalarReplicator.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerScalarReplicator.intRep
  const intRepFn = integerscalarreplicator_e0a2b80c({ nout: 3 });

  return (
    {  }
  ) => {
    const ram = ramFn({});
    const reaToInt = reaToIntFn({ u: ram.y });
    const intRep = intRepFn({ u: reaToInt.y });

    return { ram: ram, reaToInt: reaToInt, intRep: intRep };
  }
}
