
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Asin
const asin_156e4285 = require("../Asin");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Asin.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Asin.arcSin
  const arcSinFn = asin_156e4285({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const arcSin = arcSinFn({ u: ramp1.y });

    return { ramp1: ramp1, arcSin: arcSin };
  }
}
