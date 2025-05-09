
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime
const constant_655d39b4 = require("../Sources/Constant");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const timeraccumulating_baf7504a = require("../TimerAccumulating");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.con
  const conFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.booPul
  const booPulFn = pulse_cdc9ff89({ period: 4, shift: -11, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.noThr
  const noThrFn = timeraccumulating_baf7504a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.resTim
  const resTimFn = pulse_cdc9ff89({ period: 3.5, shift: -5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.noThrWitRes
  const noThrWitResFn = timeraccumulating_baf7504a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.thrTim
  const thrTimFn = timeraccumulating_baf7504a({ t: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TimerAccumulatingNegativeStartTime.thrTimWitRes
  const thrTimWitResFn = timeraccumulating_baf7504a({ t: 1 });

  return (
    {  }
  ) => {
    const con = conFn({});
    const booPul = booPulFn({});
    const noThr = noThrFn({ reset: con.y, u: booPul.y });
    const resTim = resTimFn({});
    const noThrWitRes = noThrWitResFn({ reset: resTim.y, u: booPul.y });
    const thrTim = thrTimFn({ reset: con.y, u: booPul.y });
    const thrTimWitRes = thrTimWitResFn({ reset: resTim.y, u: booPul.y });

    return { con: con, booPul: booPul, noThr: noThr, resTim: resTim, noThrWitRes: noThrWitRes, thrTim: thrTim, thrTimWitRes: thrTimWitRes };
  }
}
