
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealScalarReplicator
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const realscalarreplicator_6941df46 = require("../RealScalarReplicator");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealScalarReplicator.ram
  const ramFn = ramp_40ddd056({ duration: 1, height: 5, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealScalarReplicator.reaRep
  const reaRepFn = realscalarreplicator_6941df46({ nout: 3 });

  return (
    {  }
  ) => {
    const ram = ramFn({});
    const reaRep = reaRepFn({ u: ram.y });

    return { ram: ram, reaRep: reaRep };
  }
}
