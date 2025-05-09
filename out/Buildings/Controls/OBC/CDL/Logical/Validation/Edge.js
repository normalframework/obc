
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Edge
const triggeredsampler_3247bbb1 = require("../../Discrete/TriggeredSampler");
const edge_63e6c137 = require("../Edge");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Edge.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Edge.edge1
  const edge1Fn = edge_63e6c137({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Edge.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 5, height: 20, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Edge.triggeredSampler
  const triggeredSamplerFn = triggeredsampler_3247bbb1({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const edge1 = edge1Fn({ u: booPul.y });
    const ramp2 = ramp2Fn({});
    const triggeredSampler = triggeredSamplerFn({ trigger: edge1.y, u: ramp2.y });

    return { booPul: booPul, edge1: edge1, ramp2: ramp2, triggeredSampler: triggeredSampler };
  }
}
