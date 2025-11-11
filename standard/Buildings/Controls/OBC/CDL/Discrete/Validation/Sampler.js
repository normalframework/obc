
// http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.Sampler
const sampler_dd234808 = require("../Sampler");
const sin_5345e16a = require("../../Reals/Sin");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.Sampler.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.Sampler.sin1
  const sin1Fn = sin_5345e16a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.Sampler.sampler1
  const sampler1Fn = sampler_dd234808({ samplePeriod: 0.2 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });
    const sampler1 = sampler1Fn({ u: sin1.y });

    return { ramp1: ramp1, sin1: sin1, sampler1: sampler1 };
  }
}
