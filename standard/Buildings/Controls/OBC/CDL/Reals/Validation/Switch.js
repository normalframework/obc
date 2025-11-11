
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Switch
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const ramp_40ddd056 = require("../Sources/Ramp");
const switch_91d77162 = require("../Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Switch.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 5, height: 6, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Switch.booPul
  const booPulFn = pulse_cdc9ff89({ period: 2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Switch.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 5, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Switch.switch1
  const switch1Fn = switch_91d77162({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const booPul = booPulFn({});
    const ramp2 = ramp2Fn({});
    const switch1 = switch1Fn({ u1: ramp1.y, u2: booPul.y, u3: ramp2.y });

    return { ramp1: ramp1, booPul: booPul, ramp2: ramp2, switch1: switch1 };
  }
}
