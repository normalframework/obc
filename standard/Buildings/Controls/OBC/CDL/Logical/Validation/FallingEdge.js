
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.FallingEdge
const triggeredsampler_3247bbb1 = require("../../Discrete/TriggeredSampler");
const fallingedge_8a05402a = require("../FallingEdge");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.FallingEdge.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.FallingEdge.falEdg
  const falEdgFn = fallingedge_8a05402a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.FallingEdge.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 5, height: 20, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.FallingEdge.triggeredSampler
  const triggeredSamplerFn = triggeredsampler_3247bbb1({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const falEdg = falEdgFn({ u: booPul.y });
    const ramp2 = ramp2Fn({});
    const triggeredSampler = triggeredSamplerFn({ trigger: falEdg.y, u: ramp2.y });

    return { booPul: booPul, falEdg: falEdg, ramp2: ramp2, triggeredSampler: triggeredSampler };
  }
}
