
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Tan
const ramp_40ddd056 = require("../Sources/Ramp");
const tan_5345e433 = require("../Tan");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Tan.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Tan.tan1
  const tan1Fn = tan_5345e433({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const tan1 = tan1Fn({ u: ramp1.y });

    return { ramp1: ramp1, tan1: tan1 };
  }
}
