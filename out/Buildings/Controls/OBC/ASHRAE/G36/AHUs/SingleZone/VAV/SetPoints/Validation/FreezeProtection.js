
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection
const freezeprotection_9800594d = require("../FreezeProtection");
const not_6d646018 = require("../../../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const greaterthreshold_64a3c4e0 = require("../../../../../../../CDL/Reals/GreaterThreshold");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.mixTem
  const mixTemFn = ramp_3c414377({ duration: 3600, height: -5, offset: 273.15 +8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.supTem
  const supTemFn = ramp_3c414377({ duration: 3600, height: -4, offset: 273.15 +6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.freRes
  const freResFn = pulse_27dcacc8({ period: 3600, width: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.supFanSpe
  const supFanSpeFn = ramp_3c414377({ duration: 3600, height: 0.2, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ t: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.cooCoiPos
  const cooCoiPosFn = ramp_3c414377({ duration: 3600, height: 0.2, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.heaCoiPos
  const heaCoiPosFn = ramp_3c414377({ duration: 3000, height: 0.49, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.outDamPos
  const outDamPosFn = ramp_3c414377({ duration: 3600, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.outDamPosMin
  const outDamPosMinFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.retDamPos
  const retDamPosFn = ramp_3c414377({ duration: 3600, height: 0.2, offset: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.FreezeProtection.frePro
  const freProFn = freezeprotection_9800594d({ buiPreCon: 1, freSta: 0 });

  return (
    {  }
  ) => {
    const mixTem = mixTemFn({});
    const supTem = supTemFn({});
    const freRes = freResFn({});
    const not1 = not1Fn({ u: freRes.y });
    const supFanSpe = supFanSpeFn({});
    const greThr = greThrFn({ u: supFanSpe.y });
    const cooCoiPos = cooCoiPosFn({});
    const heaCoiPos = heaCoiPosFn({});
    const outDamPos = outDamPosFn({});
    const outDamPosMin = outDamPosMinFn({});
    const retDamPos = retDamPosFn({});
    const frePro = freProFn({ TAirMix: mixTem.y, TAirSup: supTem.y, u1SofSwiRes: not1.y, u1SupFan: greThr.y, uCooCoi: cooCoiPos.y, uHeaCoi: heaCoiPos.y, uOutDam: outDamPos.y, uOutDamPosMin: outDamPosMin.y, uRetDam: retDamPos.y, uSupFan: supFanSpe.y });

    return { mixTem: mixTem, supTem: supTem, freRes: freRes, not1: not1, supFanSpe: supFanSpe, greThr: greThr, cooCoiPos: cooCoiPos, heaCoiPos: heaCoiPos, outDamPos: outDamPos, outDamPosMin: outDamPosMin, retDamPos: retDamPos, frePro: frePro };
  }
}
