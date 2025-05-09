
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay
const not_f2b50019 = require("../Not");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const truedelay_17dc655b = require("../TrueDelay");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay0
  const onDelay0Fn = truedelay_17dc655b({ delayTime: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay00
  const onDelay00Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay1
  const onDelay1Fn = truedelay_17dc655b({ delayTime: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay11
  const onDelay11Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay2
  const onDelay2Fn = truedelay_17dc655b({ delayTime: 0.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay22
  const onDelay22Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 0.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay3
  const onDelay3Fn = truedelay_17dc655b({ delayTime: 1.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay33
  const onDelay33Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 1.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay4
  const onDelay4Fn = truedelay_17dc655b({ delayTime: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay44
  const onDelay44Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay5
  const onDelay5Fn = truedelay_17dc655b({ delayTime: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay55
  const onDelay55Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay6
  const onDelay6Fn = truedelay_17dc655b({ delayTime: 0.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay66
  const onDelay66Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 0.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay7
  const onDelay7Fn = truedelay_17dc655b({ delayTime: 1.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.TrueDelay.onDelay77
  const onDelay77Fn = truedelay_17dc655b({ delayOnInit: true, delayTime: 1.8 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const onDelay0 = onDelay0Fn({ u: booPul.y });
    const booPul1 = booPul1Fn({});
    const onDelay00 = onDelay00Fn({ u: booPul1.y });
    const onDelay1 = onDelay1Fn({ u: booPul.y });
    const onDelay11 = onDelay11Fn({ u: booPul1.y });
    const onDelay2 = onDelay2Fn({ u: booPul.y });
    const onDelay22 = onDelay22Fn({ u: booPul1.y });
    const onDelay3 = onDelay3Fn({ u: booPul.y });
    const onDelay33 = onDelay33Fn({ u: booPul1.y });
    const not1 = not1Fn({ u: booPul.y });
    const onDelay4 = onDelay4Fn({ u: not1.y });
    const not2 = not2Fn({ u: booPul1.y });
    const onDelay44 = onDelay44Fn({ u: not2.y });
    const onDelay5 = onDelay5Fn({ u: not1.y });
    const onDelay55 = onDelay55Fn({ u: not2.y });
    const onDelay6 = onDelay6Fn({ u: not1.y });
    const onDelay66 = onDelay66Fn({ u: not2.y });
    const onDelay7 = onDelay7Fn({ u: not1.y });
    const onDelay77 = onDelay77Fn({ u: not2.y });

    return { booPul: booPul, onDelay0: onDelay0, booPul1: booPul1, onDelay00: onDelay00, onDelay1: onDelay1, onDelay11: onDelay11, onDelay2: onDelay2, onDelay22: onDelay22, onDelay3: onDelay3, onDelay33: onDelay33, not1: not1, onDelay4: onDelay4, not2: not2, onDelay44: onDelay44, onDelay5: onDelay5, onDelay55: onDelay55, onDelay6: onDelay6, onDelay66: onDelay66, onDelay7: onDelay7, onDelay77: onDelay77 };
  }
}
