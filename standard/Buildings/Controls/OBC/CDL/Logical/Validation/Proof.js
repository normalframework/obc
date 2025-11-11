
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof
const proof_1992e50a = require("../Proof");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.latInp
  const latInpFn = pulse_cdc9ff89({ period: 10, shift: 1, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.latInp1
  const latInp1Fn = pulse_cdc9ff89({ period: 10, shift: 1, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.pro
  const proFn = proof_1992e50a({ debounce: 0.5, feedbackDelay: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.latInp2
  const latInp2Fn = pulse_cdc9ff89({ period: 10, shift: 1, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.pro1
  const pro1Fn = proof_1992e50a({ debounce: 0.5, feedbackDelay: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.pro2
  const pro2Fn = proof_1992e50a({ debounce: 0.5, feedbackDelay: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.pro3
  const pro3Fn = proof_1992e50a({ debounce: 0.5, feedbackDelay: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.pro4
  const pro4Fn = proof_1992e50a({ debounce: 0.5, feedbackDelay: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.latInp3
  const latInp3Fn = pulse_cdc9ff89({ period: 2, shift: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.latInp4
  const latInp4Fn = pulse_cdc9ff89({ period: 12, shift: 0.5, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Proof.pro5
  const pro5Fn = proof_1992e50a({ debounce: 2, feedbackDelay: 2 });

  return (
    {  }
  ) => {
    const latInp = latInpFn({});
    const latInp1 = latInp1Fn({});
    const pro = proFn({ u_m: latInp.y, u_s: latInp1.y });
    const latInp2 = latInp2Fn({});
    const pro1 = pro1Fn({ u_m: latInp1.y, u_s: latInp2.y });
    const pro2 = pro2Fn({ u_m: latInp2.y, u_s: latInp1.y });
    const pro3 = pro3Fn({ u_m: latInp2.y, u_s: latInp1.y });
    const pro4 = pro4Fn({ u_m: latInp1.y, u_s: latInp2.y });
    const latInp3 = latInp3Fn({});
    const latInp4 = latInp4Fn({});
    const pro5 = pro5Fn({ u_m: latInp3.y, u_s: latInp4.y });

    return { latInp: latInp, latInp1: latInp1, pro: pro, latInp2: latInp2, pro1: pro1, pro2: pro2, pro3: pro3, pro4: pro4, latInp3: latInp3, latInp4: latInp4, pro5: pro5 };
  }
}
