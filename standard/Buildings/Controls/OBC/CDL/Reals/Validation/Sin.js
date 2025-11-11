
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sin
const sin_5345e16a = require("../Sin");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sin.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sin.sin1
  const sin1Fn = sin_5345e16a({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });

    return { ramp1: ramp1, sin1: sin1 };
  }
}
