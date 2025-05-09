
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse
const pulse_cdc9ff89 = require("../Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_a1
  const booPul_a1Fn = pulse_cdc9ff89({ period: 2, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_a2
  const booPul_a2Fn = pulse_cdc9ff89({ period: 2, shift: 2, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_a3
  const booPul_a3Fn = pulse_cdc9ff89({ period: 2, shift: 4, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_a4
  const booPul_a4Fn = pulse_cdc9ff89({ period: 2, shift: -2, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_a5
  const booPul_a5Fn = pulse_cdc9ff89({ period: 2, shift: -4, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_b1
  const booPul_b1Fn = pulse_cdc9ff89({ period: 2, shift: 0.1, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_b2
  const booPul_b2Fn = pulse_cdc9ff89({ period: 2, shift: 2.1, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_b3
  const booPul_b3Fn = pulse_cdc9ff89({ period: 2, shift: 4.1, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_b4
  const booPul_b4Fn = pulse_cdc9ff89({ period: 2, shift: -1.9, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_b5
  const booPul_b5Fn = pulse_cdc9ff89({ period: 2, shift: -3.9, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_c1
  const booPul_c1Fn = pulse_cdc9ff89({ period: 2, shift: 0.6, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_c2
  const booPul_c2Fn = pulse_cdc9ff89({ period: 2, shift: 2.6, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_c3
  const booPul_c3Fn = pulse_cdc9ff89({ period: 2, shift: 4.6, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_c4
  const booPul_c4Fn = pulse_cdc9ff89({ period: 2, shift: -1.4, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Pulse.booPul_c5
  const booPul_c5Fn = pulse_cdc9ff89({ period: 2, shift: -3.4, width: 0.2 });

  return (
    {  }
  ) => {
    const booPul_a1 = booPul_a1Fn({});
    const booPul_a2 = booPul_a2Fn({});
    const booPul_a3 = booPul_a3Fn({});
    const booPul_a4 = booPul_a4Fn({});
    const booPul_a5 = booPul_a5Fn({});
    const booPul_b1 = booPul_b1Fn({});
    const booPul_b2 = booPul_b2Fn({});
    const booPul_b3 = booPul_b3Fn({});
    const booPul_b4 = booPul_b4Fn({});
    const booPul_b5 = booPul_b5Fn({});
    const booPul_c1 = booPul_c1Fn({});
    const booPul_c2 = booPul_c2Fn({});
    const booPul_c3 = booPul_c3Fn({});
    const booPul_c4 = booPul_c4Fn({});
    const booPul_c5 = booPul_c5Fn({});

    return { booPul_a1: booPul_a1, booPul_a2: booPul_a2, booPul_a3: booPul_a3, booPul_a4: booPul_a4, booPul_a5: booPul_a5, booPul_b1: booPul_b1, booPul_b2: booPul_b2, booPul_b3: booPul_b3, booPul_b4: booPul_b4, booPul_b5: booPul_b5, booPul_c1: booPul_c1, booPul_c2: booPul_c2, booPul_c3: booPul_c3, booPul_c4: booPul_c4, booPul_c5: booPul_c5 };
  }
}
