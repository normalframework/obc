
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch
const latch_1952de0a = require("../Latch");
const not_f2b50019 = require("../Not");
const constant_655d39b4 = require("../Sources/Constant");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.fal
  const falFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.latInp
  const latInpFn = pulse_cdc9ff89({ period: 2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.falCleFalIni
  const falCleFalIniFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.falCleTruIni
  const falCleTruIniFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.cleInp
  const cleInpFn = pulse_cdc9ff89({ period: 6, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.swiCleInp
  const swiCleInpFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.swiCleInp1
  const swiCleInp1Fn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.tru
  const truFn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.truCleFalIni
  const truCleFalIniFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Latch.truCleTruIni
  const truCleTruIniFn = latch_1952de0a({});

  return (
    {  }
  ) => {
    const fal = falFn({});
    const latInp = latInpFn({});
    const not2 = not2Fn({ u: latInp.y });
    const falCleFalIni = falCleFalIniFn({ clr: fal.y, u: not2.y });
    const falCleTruIni = falCleTruIniFn({ clr: fal.y, u: latInp.y });
    const cleInp = cleInpFn({});
    const swiCleInp = swiCleInpFn({ clr: cleInp.y, u: latInp.y });
    const not1 = not1Fn({ u: cleInp.y });
    const swiCleInp1 = swiCleInp1Fn({ clr: not1.y, u: latInp.y });
    const tru = truFn({});
    const truCleFalIni = truCleFalIniFn({ clr: tru.y, u: not2.y });
    const truCleTruIni = truCleTruIniFn({ clr: tru.y, u: latInp.y });

    return { fal: fal, latInp: latInp, not2: not2, falCleFalIni: falCleFalIni, falCleTruIni: falCleTruIni, cleInp: cleInp, swiCleInp: swiCleInp, not1: not1, swiCleInp1: swiCleInp1, tru: tru, truCleFalIni: truCleFalIni, truCleTruIni: truCleTruIni };
  }
}
