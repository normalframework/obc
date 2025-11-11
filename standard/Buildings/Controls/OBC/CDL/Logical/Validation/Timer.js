
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Timer
const pulse_cdc9ff89 = require("../Sources/Pulse");
const timer_19c7230b = require("../Timer");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Timer.booPul
  const booPulFn = pulse_cdc9ff89({ period: 2, width: 0.7 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Timer.noThr
  const noThrFn = timer_19c7230b({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Timer.thrTim
  const thrTimFn = timer_19c7230b({ t: 0.3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Timer.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 2, shift: -1, width: 0.7 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Timer.thrTim1
  const thrTim1Fn = timer_19c7230b({ t: 0.3 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const noThr = noThrFn({ u: booPul.y });
    const thrTim = thrTimFn({ u: booPul.y });
    const booPul1 = booPul1Fn({});
    const thrTim1 = thrTim1Fn({ u: booPul1.y });

    return { booPul: booPul, noThr: noThr, thrTim: thrTim, booPul1: booPul1, thrTim1: thrTim1 };
  }
}
