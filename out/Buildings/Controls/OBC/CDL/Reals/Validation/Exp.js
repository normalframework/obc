
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Exp
const exp_5345aeaf = require("../Exp");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Exp.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 2, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Exp.Exp1
  const Exp1Fn = exp_5345aeaf({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const Exp1 = Exp1Fn({ u: ramp1.y });

    return { ramp1: ramp1, Exp1: Exp1 };
  }
}
