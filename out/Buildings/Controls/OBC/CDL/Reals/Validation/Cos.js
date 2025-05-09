
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Cos
const cos_5345a619 = require("../Cos");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Cos.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.283, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Cos.cos1
  const cos1Fn = cos_5345a619({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const cos1 = cos1Fn({ u: ramp1.y });

    return { ramp1: ramp1, cos1: cos1 };
  }
}
