
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.GreaterThreshold
const greaterthreshold_7c60ca3f = require("../GreaterThreshold");
const sin_f9d5a014 = require("../Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.GreaterThreshold.sin
  const sinFn = sin_f9d5a014({ amplitude: 8, freqHz: 1/10, offset: -2, startTime: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.GreaterThreshold.gre
  const greFn = greaterthreshold_7c60ca3f({ t: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.GreaterThreshold.greHys
  const greHysFn = greaterthreshold_7c60ca3f({ h: 1, t: 2 });

  return (
    {  }
  ) => {
    const sin = sinFn({});
    const gre = greFn({ u: sin.y });
    const greHys = greHysFn({ u: sin.y });

    return { sin: sin, gre: gre, greHys: greHys };
  }
}
