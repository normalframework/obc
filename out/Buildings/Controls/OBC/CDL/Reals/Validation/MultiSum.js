
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum
const multisum_a5ce2100 = require("../MultiSum");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.mulSum_1
  const mulSum_1Fn = multisum_a5ce2100({ k: "{1}", nin: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.mulSum_2
  const mulSum_2Fn = multisum_a5ce2100({ k: "{1,0.5}", nin: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.mulSum_3
  const mulSum_3Fn = multisum_a5ce2100({ nin: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.mulSum_5
  const mulSum_5Fn = multisum_a5ce2100({ k: "{1,0.5,0.1,1,2}", nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.ramp3
  const ramp3Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.ramp4
  const ramp4Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiSum.ramp5
  const ramp5Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -3 });

  return (
    {  }
  ) => {
    const mulSum_1 = mulSum_1Fn({});
    const mulSum_2 = mulSum_2Fn({});
    const mulSum_3 = mulSum_3Fn({});
    const mulSum_5 = mulSum_5Fn({});
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const ramp3 = ramp3Fn({});
    const ramp4 = ramp4Fn({});
    const ramp5 = ramp5Fn({});

    return { mulSum_1: mulSum_1, mulSum_2: mulSum_2, mulSum_3: mulSum_3, mulSum_5: mulSum_5, ramp1: ramp1, ramp2: ramp2, ramp3: ramp3, ramp4: ramp4, ramp5: ramp5 };
  }
}
