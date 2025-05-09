
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Limiter
const limiter_1f1ae13a = require("../Limiter");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Limiter.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Limiter.limiter1
  const limiter1Fn = limiter_1f1ae13a({ uMax: 2.5, uMin: 1.2 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const limiter1 = limiter1Fn({ u: ramp1.y });

    return { ramp1: ramp1, limiter1: limiter1 };
  }
}
