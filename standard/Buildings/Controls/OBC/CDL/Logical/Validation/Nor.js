
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nor
const nor_f2b50017 = require("../Nor");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nor.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nor.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nor.nor1
  const nor1Fn = nor_f2b50017({});

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const nor1 = nor1Fn({ u1: booPul1.y, u2: booPul2.y });

    return { booPul1: booPul1, booPul2: booPul2, nor1: nor1 };
  }
}
