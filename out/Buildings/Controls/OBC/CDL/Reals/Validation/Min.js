
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Min
const min_5345cae4 = require("../Min");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Min.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Min.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Min.min1
  const min1Fn = min_5345cae4({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const min1 = min1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, min1: min1 };
  }
}
