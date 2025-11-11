
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Acos
const acos_156e0734 = require("../Acos");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Acos.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Acos.arcCos
  const arcCosFn = acos_156e0734({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const arcCos = arcCosFn({ u: ramp1.y });

    return { ramp1: ramp1, arcCos: arcCos };
  }
}
