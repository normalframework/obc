
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd
const multiand_6f84fc58 = require("../MultiAnd");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.booPul3
  const booPul3Fn = pulse_cdc9ff89({ period: 3, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.booPul4
  const booPul4Fn = pulse_cdc9ff89({ period: 4, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.booPul5
  const booPul5Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.mulAnd0
  const mulAnd0Fn = multiand_6f84fc58({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.mulAnd1
  const mulAnd1Fn = multiand_6f84fc58({ nin: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.mulAnd2
  const mulAnd2Fn = multiand_6f84fc58({ nin: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiAnd.mulAnd5
  const mulAnd5Fn = multiand_6f84fc58({ nin: 5 });

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const booPul3 = booPul3Fn({});
    const booPul4 = booPul4Fn({});
    const booPul5 = booPul5Fn({});
    const mulAnd0 = mulAnd0Fn({});
    const mulAnd1 = mulAnd1Fn({});
    const mulAnd2 = mulAnd2Fn({});
    const mulAnd5 = mulAnd5Fn({});

    return { booPul1: booPul1, booPul2: booPul2, booPul3: booPul3, booPul4: booPul4, booPul5: booPul5, mulAnd0: mulAnd0, mulAnd1: mulAnd1, mulAnd2: mulAnd2, mulAnd5: mulAnd5 };
  }
}
