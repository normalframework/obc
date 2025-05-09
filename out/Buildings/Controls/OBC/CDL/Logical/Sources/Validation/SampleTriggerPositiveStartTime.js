
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerPositiveStartTime
const triggeredsampler_3247bbb1 = require("../../../Discrete/TriggeredSampler");
const sampletrigger_8f6c989e = require("../SampleTrigger");
const ramp_40ddd056 = require("../../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerPositiveStartTime.samTri
  const samTriFn = sampletrigger_8f6c989e({ period: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerPositiveStartTime.ramp
  const rampFn = ramp_40ddd056({ duration: 5, height: 20, offset: 0, startTime: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerPositiveStartTime.triggeredSampler
  const triggeredSamplerFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerPositiveStartTime.samTri1
  const samTri1Fn = sampletrigger_8f6c989e({ period: 0.5, shift: 0.3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.SampleTriggerPositiveStartTime.triggeredSampler1
  const triggeredSampler1Fn = triggeredsampler_3247bbb1({ y_start: -2 });

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
