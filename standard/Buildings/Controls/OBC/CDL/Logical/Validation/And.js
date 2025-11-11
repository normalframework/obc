
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.And
const and_f2b4cf1d = require("../And");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.And.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.And.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.And.and1
  const and1Fn = and_f2b4cf1d({});

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const and1 = and1Fn({ u1: booPul1.y, u2: booPul2.y });

    return { booPul1: booPul1, booPul2: booPul2, and1: and1 };
  }
}
