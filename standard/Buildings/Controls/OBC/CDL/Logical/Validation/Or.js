
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Or
const or_de89f7dd = require("../Or");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Or.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Or.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 3, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Or.or1
  const or1Fn = or_de89f7dd({});

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const or1 = or1Fn({ u1: booPul1.y, u2: booPul2.y });

    return { booPul1: booPul1, booPul2: booPul2, or1: or1 };
  }
}
