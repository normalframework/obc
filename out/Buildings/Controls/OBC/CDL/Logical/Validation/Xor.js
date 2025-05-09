
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Xor
const pulse_cdc9ff89 = require("../Sources/Pulse");
const xor_f2b525a1 = require("../Xor");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Xor.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Xor.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Xor.xor1
  const xor1Fn = xor_f2b525a1({});

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const xor1 = xor1Fn({ u1: booPul1.y, u2: booPul2.y });

    return { booPul1: booPul1, booPul2: booPul2, xor1: xor1 };
  }
}
