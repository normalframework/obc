
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Less
const less_15730f47 = require("../Less");
const ramp_40ddd056 = require("../Sources/Ramp");
const sin_f9d5a014 = require("../Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Less.sin
  const sinFn = sin_f9d5a014({ amplitude: 3, freqHz: 1/10, offset: -2, startTime: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Less.ram1
  const ram1Fn = ramp_40ddd056({ duration: 10, height: 5, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Less.les
  const lesFn = less_15730f47({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Less.lesHys
  const lesHysFn = less_15730f47({ h: 1 });

  return (
    {  }
  ) => {
    const sin = sinFn({});
    const ram1 = ram1Fn({});
    const les = lesFn({ u1: sin.y, u2: ram1.y });
    const lesHys = lesHysFn({ u1: sin.y, u2: ram1.y });

    return { sin: sin, ram1: ram1, les: les, lesHys: lesHys };
  }
}
