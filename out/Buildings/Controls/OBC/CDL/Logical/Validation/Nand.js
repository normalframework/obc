
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nand
const nand_63eace23 = require("../Nand");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nand.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nand.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Nand.nand1
  const nand1Fn = nand_63eace23({});

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const nand1 = nand1Fn({ u1: booPul1.y, u2: booPul2.y });

    return { booPul1: booPul1, booPul2: booPul2, nand1: nand1 };
  }
}
