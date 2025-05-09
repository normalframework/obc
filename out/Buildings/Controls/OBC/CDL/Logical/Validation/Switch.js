
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Switch
const pulse_cdc9ff89 = require("../Sources/Pulse");
const switch_1e2c142e = require("../Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Switch.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.7 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Switch.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 3, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Switch.booPul3
  const booPul3Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Switch.logicalSwitch
  const logicalSwitchFn = switch_1e2c142e({});

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const booPul3 = booPul3Fn({});
    const logicalSwitch = logicalSwitchFn({ u1: booPul1.y, u2: booPul2.y, u3: booPul3.y });

    return { booPul1: booPul1, booPul2: booPul2, booPul3: booPul3, logicalSwitch: logicalSwitch };
  }
}
