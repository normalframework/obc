
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LessThreshold
const lessthreshold_854034e4 = require("../LessThreshold");
const sin_f9d5a014 = require("../Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LessThreshold.sin
  const sinFn = sin_f9d5a014({ amplitude: 8, freqHz: 1/10, offset: -2, startTime: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LessThreshold.les
  const lesFn = lessthreshold_854034e4({ t: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LessThreshold.lesHys
  const lesHysFn = lessthreshold_854034e4({ h: 1, t: 2 });

  return (
    {  }
  ) => {
    const sin = sinFn({});
    const les = lesFn({ u: sin.y });
    const lesHys = lesHysFn({ u: sin.y });

    return { sin: sin, les: les, lesHys: lesHys };
  }
}
