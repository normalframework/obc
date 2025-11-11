
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle
const not_f2b50019 = require("../Not");
const constant_655d39b4 = require("../Sources/Constant");
const pulse_cdc9ff89 = require("../Sources/Pulse");
const toggle_1f6f184e = require("../Toggle");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.fal
  const falFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.togInp
  const togInpFn = pulse_cdc9ff89({ period: 2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.falCleFalIni
  const falCleFalIniFn = toggle_1f6f184e({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.falCleTruIni
  const falCleTruIniFn = toggle_1f6f184e({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.cleInp
  const cleInpFn = pulse_cdc9ff89({ period: 6, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.swiCleInp
  const swiCleInpFn = toggle_1f6f184e({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.swiCleInp1
  const swiCleInp1Fn = toggle_1f6f184e({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.tru
  const truFn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.truCleFalIni
  const truCleFalIniFn = toggle_1f6f184e({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Toggle.truCleTruIni
  const truCleTruIniFn = toggle_1f6f184e({});

  return (
    {  }
  ) => {
    const fal = falFn({});
    const togInp = togInpFn({});
    const not2 = not2Fn({ u: togInp.y });
    const falCleFalIni = falCleFalIniFn({ clr: fal.y, u: not2.y });
    const falCleTruIni = falCleTruIniFn({ clr: fal.y, u: togInp.y });
    const cleInp = cleInpFn({});
    const swiCleInp = swiCleInpFn({ clr: cleInp.y, u: togInp.y });
    const not1 = not1Fn({ u: cleInp.y });
    const swiCleInp1 = swiCleInp1Fn({ clr: not1.y, u: togInp.y });
    const tru = truFn({});
    const truCleFalIni = truCleFalIniFn({ clr: tru.y, u: not2.y });
    const truCleTruIni = truCleTruIniFn({ clr: tru.y, u: togInp.y });

    return { fal: fal, togInp: togInp, not2: not2, falCleFalIni: falCleFalIni, falCleTruIni: falCleTruIni, cleInp: cleInp, swiCleInp: swiCleInp, not1: not1, swiCleInp1: swiCleInp1, tru: tru, truCleFalIni: truCleFalIni, truCleTruIni: truCleTruIni };
  }
}
