
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Log10
const log10_98f33075 = require("../Log10");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Log10.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 9, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Log10.log10_1
  const log10_1Fn = log10_98f33075({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const log10_1 = log10_1Fn({ u: ramp1.y });

    return { ramp1: ramp1, log10_1: log10_1 };
  }
}
