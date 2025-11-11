
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealVectorReplicator
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const realvectorreplicator_65391fdd = require("../RealVectorReplicator");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealVectorReplicator.ram
  const ramFn = ramp_40ddd056({ duration: "fill(1,2)", height: "fill(5,2)", offset: "fill(-2,2)" });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealVectorReplicator.reaRep
  const reaRepFn = realvectorreplicator_65391fdd({ nin: 2, nout: 3 });

  return (
    {  }
  ) => {
    const ram = ramFn({});
    const reaRep = reaRepFn({ u: ram.y });

    return { ram: ram, reaRep: reaRep };
  }
}
