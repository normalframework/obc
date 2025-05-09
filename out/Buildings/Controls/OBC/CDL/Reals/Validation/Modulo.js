
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Modulo
const modulo_872760a4 = require("../Modulo");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Modulo.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Modulo.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 3, offset: 1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Modulo.mod1
  const mod1Fn = modulo_872760a4({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const mod1 = mod1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, mod1: mod1 };
  }
}
