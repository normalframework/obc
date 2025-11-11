
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerNegativeStartTime
const triggeredsampler_3247bbb1 = require("../../../Discrete/TriggeredSampler");
const sampletrigger_8f6c989e = require("../SampleTrigger");
const ramp_40ddd056 = require("../../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerNegativeStartTime.samTri
  const samTriFn = sampletrigger_8f6c989e({ period: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerNegativeStartTime.ramp
  const rampFn = ramp_40ddd056({ duration: 5, height: 20, offset: 0, startTime: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerNegativeStartTime.triggeredSampler
  const triggeredSamplerFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerNegativeStartTime.samTri1
  const samTri1Fn = sampletrigger_8f6c989e({ period: 0.5, shift: 3.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerNegativeStartTime.triggeredSampler1
  const triggeredSampler1Fn = triggeredsampler_3247bbb1({});

  return (
    {  }
  ) => {
    const samTri = samTriFn({});
    const ramp = rampFn({});
    const triggeredSampler = triggeredSamplerFn({ trigger: samTri.y, u: ramp.y });
    const samTri1 = samTri1Fn({});
    const triggeredSampler1 = triggeredSampler1Fn({ trigger: samTri1.y, u: ramp.y });

    return { samTri: samTri, ramp: ramp, triggeredSampler: triggeredSampler, samTri1: samTri1, triggeredSampler1: triggeredSampler1 };
  }
}
