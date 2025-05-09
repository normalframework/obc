
// http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredSampler
const triggeredsampler_3247bbb1 = require("../TriggeredSampler");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const sin_5345e16a = require("../../Reals/Sin");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredSampler.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredSampler.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredSampler.sin1
  const sin1Fn = sin_5345e16a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredSampler.triSam
  const triSamFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredSampler.triSam1
  const triSam1Fn = triggeredsampler_3247bbb1({ y_start: 1 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });
    const triSam = triSamFn({ trigger: booPul.y, u: sin1.y });
    const triSam1 = triSam1Fn({ trigger: booPul.y, u: sin1.y });

    return { booPul: booPul, ramp1: ramp1, sin1: sin1, triSam: triSam, triSam1: triSam1 };
  }
}
