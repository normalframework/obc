
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage
const stage_2cf4edfa = require("../Stage");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage.sin
  const sinFn = sin_f9d5a014({ amplitude: 0.5, freqHz: 1/5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage.lesHolTim
  const lesHolTimFn = stage_2cf4edfa({ holdDuration: 1, n: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 10, height: 1, startTime: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage.sta
  const staFn = stage_2cf4edfa({ holdDuration: 5, n: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage.sta1
  const sta1Fn = stage_2cf4edfa({ holdDuration: 2, n: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Stage.zerHolTim
  const zerHolTimFn = stage_2cf4edfa({ holdDuration: 0, n: 4 });

  return (
    {  }
  ) => {
    const sin = sinFn({});
    const lesHolTim = lesHolTimFn({ u: sin.y });
    const ramp1 = ramp1Fn({});
    const sta = staFn({ u: ramp1.y });
    const sta1 = sta1Fn({ u: sin.y });
    const zerHolTim = zerHolTimFn({ u: ramp1.y });

    return { sin: sin, lesHolTim: lesHolTim, ramp1: ramp1, sta: sta, sta1: sta1, zerHolTim: zerHolTim };
  }
}
