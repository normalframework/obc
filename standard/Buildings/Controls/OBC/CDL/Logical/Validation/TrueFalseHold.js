
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold
const edge_63e6c137 = require("../Edge");
const not_f2b50019 = require("../Not");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const truefalsehold_04e8385a = require("../TrueFalseHold");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1500, shift: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol
  const truFalHolFn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1000, shift: 0, width: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol1
  const truFalHol1Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 1500, shift: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol2
  const truFalHol2Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul3
  const booPul3Fn = pulse_cdc9ff89({ period: 1000, shift: 0, width: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.not3
  const not3Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol3
  const truFalHol3Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul4
  const booPul4Fn = pulse_cdc9ff89({ period: 1500, shift: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol4
  const truFalHol4Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul5
  const booPul5Fn = pulse_cdc9ff89({ period: 1000, shift: 100, width: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol5
  const truFalHol5Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul6
  const booPul6Fn = pulse_cdc9ff89({ period: 1500, shift: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol6
  const truFalHol6Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.booPul7
  const booPul7Fn = pulse_cdc9ff89({ period: 1000, shift: 100, width: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.not4
  const not4Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol7
  const truFalHol7Fn = truefalsehold_04e8385a({ trueHoldDuration: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.edg
  const edgFn = edge_63e6c137({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueFalseHold.truFalHol8
  const truFalHol8Fn = truefalsehold_04e8385a({ falseHoldDuration: 1000, trueHoldDuration: 0 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const truFalHol = truFalHolFn({ u: booPul.y });
    const booPul1 = booPul1Fn({});
    const truFalHol1 = truFalHol1Fn({ u: booPul1.y });
    const booPul2 = booPul2Fn({});
    const not1 = not1Fn({ u: booPul2.y });
    const truFalHol2 = truFalHol2Fn({ u: not1.y });
    const booPul3 = booPul3Fn({});
    const not3 = not3Fn({ u: booPul3.y });
    const truFalHol3 = truFalHol3Fn({ u: not3.y });
    const booPul4 = booPul4Fn({});
    const truFalHol4 = truFalHol4Fn({ u: booPul4.y });
    const booPul5 = booPul5Fn({});
    const truFalHol5 = truFalHol5Fn({ u: booPul5.y });
    const booPul6 = booPul6Fn({});
    const not2 = not2Fn({ u: booPul6.y });
    const truFalHol6 = truFalHol6Fn({ u: not2.y });
    const booPul7 = booPul7Fn({});
    const not4 = not4Fn({ u: booPul7.y });
    const truFalHol7 = truFalHol7Fn({ u: not4.y });
    const edg = edgFn({ u: booPul6.y });
    const truFalHol8 = truFalHol8Fn({ u: edg.y });

    return { booPul: booPul, truFalHol: truFalHol, booPul1: booPul1, truFalHol1: truFalHol1, booPul2: booPul2, not1: not1, truFalHol2: truFalHol2, booPul3: booPul3, not3: not3, truFalHol3: truFalHol3, booPul4: booPul4, truFalHol4: truFalHol4, booPul5: booPul5, truFalHol5: truFalHol5, booPul6: booPul6, not2: not2, truFalHol6: truFalHol6, booPul7: booPul7, not4: not4, truFalHol7: truFalHol7, edg: edg, truFalHol8: truFalHol8 };
  }
}
