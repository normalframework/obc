
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanVectorReplicator
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const booleanvectorreplicator_81f0cf8d = require("../BooleanVectorReplicator");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanVectorReplicator.booPul
  const booPulFn = pulse_cdc9ff89({ period: "fill(0.2,2)" });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanVectorReplicator.booRep
  const booRepFn = booleanvectorreplicator_81f0cf8d({ nin: 2, nout: 3 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booRep = booRepFn({ u: booPul.y });

    return { booPul: booPul, booRep: booRep };
  }
}
