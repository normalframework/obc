
// https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold
const not_6d646018 = require("../Not");
const pulse_27dcacc8 = require("../Sources/Pulse");
const truehold_60ac3548 = require("../TrueHold");

module.exports = (
  
) => {
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.booPul
  const booPulFn = pulse_27dcacc8({ period: 9000, shift: 300 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.booPul1
  const booPul1Fn = pulse_27dcacc8({ period: 3600 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.booPul2
  const booPul2Fn = pulse_27dcacc8({ period: 9000, shift: 300 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.booPul3
  const booPul3Fn = pulse_27dcacc8({ period: 3600 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.not2
  const not2Fn = not_6d646018({});
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.not3
  const not3Fn = not_6d646018({});
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.truHol
  const truHolFn = truehold_60ac3548({ duration: 3600 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.truHol1
  const truHol1Fn = truehold_60ac3548({ duration: 600 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.truHol2
  const truHol2Fn = truehold_60ac3548({ duration: 3600 });
  // https://data.ashrae.org/S231P#Buildings.Controls.OBC.CDL.Logical.Validation.TrueHold.truHol3
  const truHol3Fn = truehold_60ac3548({ duration: 600 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const booPul3 = booPul3Fn({});
    const not2 = not2Fn({});
    const not3 = not3Fn({});
    const truHol = truHolFn({});
    const truHol1 = truHol1Fn({});
    const truHol2 = truHol2Fn({});
    const truHol3 = truHol3Fn({});

    return { booPul: booPul, booPul1: booPul1, booPul2: booPul2, booPul3: booPul3, not2: not2, not3: not3, truHol: truHol, truHol1: truHol1, truHol2: truHol2, truHol3: truHol3 };
  }
}
