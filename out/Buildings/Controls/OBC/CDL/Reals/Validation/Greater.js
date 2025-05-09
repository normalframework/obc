
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Greater
const greater_2582f78c = require("../Greater");
const ramp_40ddd056 = require("../Sources/Ramp");
const sin_f9d5a014 = require("../Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Greater.sin
  const sinFn = sin_f9d5a014({ amplitude: 3, freqHz: 1/10, offset: -2, startTime: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Greater.ram1
  const ram1Fn = ramp_40ddd056({ duration: 10, height: 5, offset: -1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Greater.gre
  const greFn = greater_2582f78c({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Greater.greHys
  const greHysFn = greater_2582f78c({ h: 1 });

  return (
    {  }
  ) => {
    const sin = sinFn({});
    const ram1 = ram1Fn({});
    const gre = greFn({ u1: sin.y, u2: ram1.y });
    const greHys = greHysFn({ u1: sin.y, u2: ram1.y });

    return { sin: sin, ram1: ram1, gre: gre, greHys: greHys };
  }
}
