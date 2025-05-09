
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Sin
const sin_f9d5a014 = require("../Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Sin.sin
  const sinFn = sin_f9d5a014({ amplitude: 5, freqHz: 1/60, offset: 10, phase: 0, startTime: 10 });

  return (
    {  }
  ) => {
    const sin = sinFn({});

    return { sin: sin };
  }
}
