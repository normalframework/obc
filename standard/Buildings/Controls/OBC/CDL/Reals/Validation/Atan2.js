
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan2
const atan2_985a64a4 = require("../Atan2");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan2.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan2.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 2, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Atan2.atan2_1
  const atan2_1Fn = atan2_985a64a4({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const atan2_1 = atan2_1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, atan2_1: atan2_1 };
  }
}
