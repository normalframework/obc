
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan
const atan_156e454e = require("../Atan");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan.atan1
  const atan1Fn = atan_156e454e({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const atan1 = atan1Fn({ u: ramp1.y });

    return { ramp1: ramp1, atan1: atan1 };
  }
}
