
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Change
const triggeredsampler_3247bbb1 = require("../../Discrete/TriggeredSampler");
const change_020770aa = require("../Change");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Change.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Change.change
  const changeFn = change_020770aa({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Change.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 5, height: 20, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Change.triggeredSampler
  const triggeredSamplerFn = triggeredsampler_3247bbb1({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const change = changeFn({ u: booPul.y });
    const ramp2 = ramp2Fn({});
    const triggeredSampler = triggeredSamplerFn({ trigger: change.y, u: ramp2.y });

    return { booPul: booPul, change: change, ramp2: ramp2, triggeredSampler: triggeredSampler };
  }
}
