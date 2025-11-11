
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorReplicator
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const integervectorreplicator_dc99f8a3 = require("../IntegerVectorReplicator");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorReplicator.ram
  const ramFn = ramp_40ddd056({ duration: "fill(1,2)", height: "fill(5,2)", offset: "fill(-2,2)" });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorReplicator.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorReplicator.intRep
  const intRepFn = integervectorreplicator_dc99f8a3({ nin: 2, nout: 3 });

  return (
    {  }
  ) => {
    const ram = ramFn({});
    const reaToInt = reaToIntFn({ u: ram.y });
    const intRep = intRepFn({ u: reaToInt.y });

    return { ram: ram, reaToInt: reaToInt, intRep: intRep };
  }
}
