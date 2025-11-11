
// http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.FirstOrderHold
const firstorderhold_5b3be45d = require("../FirstOrderHold");
const cos_5345a619 = require("../../Reals/Cos");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.FirstOrderHold.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.FirstOrderHold.cos1
  const cos1Fn = cos_5345a619({});
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.FirstOrderHold.firOrdHol
  const firOrdHolFn = firstorderhold_5b3be45d({ samplePeriod: 0.2 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const cos1 = cos1Fn({ u: ramp1.y });
    const firOrdHol = firOrdHolFn({ u: cos1.y });

    return { ramp1: ramp1, cos1: cos1, firOrdHol: firOrdHol };
  }
}
