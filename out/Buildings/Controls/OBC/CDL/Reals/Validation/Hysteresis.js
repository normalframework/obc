
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis
const hysteresis_c86ef565 = require("../Hysteresis");
const multiplybyparameter_8938fce0 = require("../MultiplyByParameter");
const sin_5345e16a = require("../Sin");
const ramp_40ddd056 = require("../Sources/Ramp");
const sin_f9d5a014 = require("../Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.sin1
  const sin1Fn = sin_5345e16a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.gain1
  const gain1Fn = multiplybyparameter_8938fce0({ k: 2.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.hysteresis
  const hysteresisFn = hysteresis_c86ef565({ uHigh: 1, uLow: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.sin
  const sinFn = sin_f9d5a014({ amplitude: 1, freqHz: 10 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.hysteresis1
  const hysteresis1Fn = hysteresis_c86ef565({ pre_y_start: true, uHigh: 1, uLow: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.sin2
  const sin2Fn = sin_f9d5a014({ amplitude: 1, freqHz: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Hysteresis.hysteresis2
  const hysteresis2Fn = hysteresis_c86ef565({ uHigh: 1 -0.01, uLow: 0 +0.01 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });
    const gain1 = gain1Fn({ u: sin1.y });
    const hysteresis = hysteresisFn({ u: gain1.y });
    const sin = sinFn({});
    const hysteresis1 = hysteresis1Fn({ u: sin.y });
    const sin2 = sin2Fn({});
    const hysteresis2 = hysteresis2Fn({ u: sin2.y });

    return { ramp1: ramp1, sin1: sin1, gain1: gain1, hysteresis: hysteresis, sin: sin, hysteresis1: hysteresis1, sin2: sin2, hysteresis2: hysteresis2 };
  }
}
