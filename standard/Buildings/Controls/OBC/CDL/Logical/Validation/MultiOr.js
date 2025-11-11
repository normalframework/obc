
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr
const multior_66b1b742 = require("../MultiOr");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.booPul3
  const booPul3Fn = pulse_cdc9ff89({ period: 3, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.booPul4
  const booPul4Fn = pulse_cdc9ff89({ period: 4, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.booPul5
  const booPul5Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.mulOr0
  const mulOr0Fn = multior_66b1b742({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.mulOr1
  const mulOr1Fn = multior_66b1b742({ nin: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.mulOr2
  const mulOr2Fn = multior_66b1b742({ nin: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.MultiOr.mulOr5
  const mulOr5Fn = multior_66b1b742({ nin: 5 });

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const booPul2 = booPul2Fn({});
    const booPul3 = booPul3Fn({});
    const booPul4 = booPul4Fn({});
    const booPul5 = booPul5Fn({});
    const mulOr0 = mulOr0Fn({});
    const mulOr1 = mulOr1Fn({});
    const mulOr2 = mulOr2Fn({});
    const mulOr5 = mulOr5Fn({});

    return { booPul1: booPul1, booPul2: booPul2, booPul3: booPul3, booPul4: booPul4, booPul5: booPul5, mulOr0: mulOr0, mulOr1: mulOr1, mulOr2: mulOr2, mulOr5: mulOr5 };
  }
}
