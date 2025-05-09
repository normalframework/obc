
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable
const freezeprotection_67d5a0ee = require("../FreezeProtection");
const greaterthreshold_64a3c4e0 = require("../../../../../../../CDL/Reals/GreaterThreshold");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.supFanSpe
  const supFanSpeFn = ramp_3c414377({ duration: 3600, height: 0.2, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.cooCoiPos
  const cooCoiPosFn = ramp_3c414377({ duration: 3600, height: 0.2, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.heaCoiPos
  const heaCoiPosFn = ramp_3c414377({ duration: 3600, height: 0.46, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.minOutDamPos
  const minOutDamPosFn = constant_baefa089({ k: 0.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.outDamPos
  const outDamPosFn = ramp_3c414377({ duration: 3600, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.retDamPos
  const retDamPosFn = ramp_3c414377({ duration: 3600, height: 0.2, offset: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.FreezeProtection_Disable.frePro
  const freProFn = freezeprotection_67d5a0ee({ buiPreCon: 1, freSta: 0, have_frePro: false, minOADes: 0 });

  return (
    {  }
  ) => {
    const supFanSpe = supFanSpeFn({});
    const greThr = greThrFn({ u: supFanSpe.y });
    const cooCoiPos = cooCoiPosFn({});
    const heaCoiPos = heaCoiPosFn({});
    const minOutDamPos = minOutDamPosFn({});
    const outDamPos = outDamPosFn({});
    const retDamPos = retDamPosFn({});
    const frePro = freProFn({ u1SupFan: greThr.y, uCooCoi: cooCoiPos.y, uHeaCoi: heaCoiPos.y, uMinOutDam: minOutDamPos.y, uOutDam: outDamPos.y, uRetDam: retDamPos.y, uSupFan: supFanSpe.y });

    return { supFanSpe: supFanSpe, greThr: greThr, cooCoiPos: cooCoiPos, heaCoiPos: heaCoiPos, minOutDamPos: minOutDamPos, outDamPos: outDamPos, retDamPos: retDamPos, frePro: frePro };
  }
}
