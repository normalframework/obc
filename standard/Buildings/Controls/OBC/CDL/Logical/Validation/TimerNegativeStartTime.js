
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerNegativeStartTime
const pulse_cdc9ff89 = require("../Sources/Pulse");
const timer_19c7230b = require("../Timer");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerNegativeStartTime.booPul
  const booPulFn = pulse_cdc9ff89({ period: 2, shift: -5, width: 0.7 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerNegativeStartTime.noThr
  const noThrFn = timer_19c7230b({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerNegativeStartTime.thrTim
  const thrTimFn = timer_19c7230b({ t: 0.3 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const noThr = noThrFn({ u: booPul.y });
    const thrTim = thrTimFn({ u: booPul.y });

    return { booPul: booPul, noThr: noThr, thrTim: thrTim };
  }
}
