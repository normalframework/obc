
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanScalarReplicator
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const booleanscalarreplicator_85f98ef6 = require("../BooleanScalarReplicator");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanScalarReplicator.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanScalarReplicator.booRep
  const booRepFn = booleanscalarreplicator_85f98ef6({ nout: 3 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booRep = booRepFn({ u: booPul.y });

    return { booPul: booPul, booRep: booRep };
  }
}
