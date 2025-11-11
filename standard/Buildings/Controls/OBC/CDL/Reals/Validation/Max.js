
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Max
const max_5345c9f6 = require("../Max");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Max.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Max.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Max.max1
  const max1Fn = max_5345c9f6({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const max1 = max1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, max1: max1 };
  }
}
