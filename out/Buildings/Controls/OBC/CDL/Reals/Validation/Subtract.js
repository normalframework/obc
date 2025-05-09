
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Subtract
const ramp_40ddd056 = require("../Sources/Ramp");
const subtract_040901c2 = require("../Subtract");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Subtract.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Subtract.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 2, offset: -0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Subtract.sub
  const subFn = subtract_040901c2({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const sub = subFn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, sub: sub };
  }
}
