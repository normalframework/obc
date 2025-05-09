
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Abs
const abs_53459d04 = require("../Abs");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Abs.ramp
  const rampFn = ramp_40ddd056({ duration: 1, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Abs.abs1
  const abs1Fn = abs_53459d04({});

  return (
    {  }
  ) => {
    const ramp = rampFn({});
    const abs1 = abs1Fn({ u: ramp.y });

    return { ramp: ramp, abs1: abs1 };
  }
}
