
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sqrt
const ramp_40ddd056 = require("../Sources/Ramp");
const sqrt_15766ace = require("../Sqrt");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sqrt.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 9, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sqrt.sqrt1
  const sqrt1Fn = sqrt_15766ace({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const sqrt1 = sqrt1Fn({ u: ramp1.y });

    return { ramp1: ramp1, sqrt1: sqrt1 };
  }
}
