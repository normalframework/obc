
// http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMax
const triggeredmax_acfc5d8d = require("../TriggeredMax");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const sin_5345e16a = require("../../Reals/Sin");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMax.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMax.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMax.sin1
  const sin1Fn = sin_5345e16a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMax.triggeredMax
  const triggeredMaxFn = triggeredmax_acfc5d8d({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });
    const triggeredMax = triggeredMaxFn({ trigger: booPul.y, u: sin1.y });

    return { booPul: booPul, ramp1: ramp1, sin1: sin1, triggeredMax: triggeredMax };
  }
}
