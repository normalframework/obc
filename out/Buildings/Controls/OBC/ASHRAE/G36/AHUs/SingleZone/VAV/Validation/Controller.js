
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller
const controller_5a34e910 = require("../Controller");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");
const not_2b643d37 = require("../../../../../../CDL/Logical/Not");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.cooDowTim
  const cooDowTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.zerAdj
  const zerAdjFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.winSta
  const winStaFn = pulse_27dcacc8({ period: 14400, shift: 1200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.not2
  const not2Fn = not_2b643d37({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.cooSetAdj
  const cooSetAdjFn = sin_9696c4d3({ freqHz: 1/28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.heaSetAdj
  const heaSetAdjFn = sin_9696c4d3({ amplitude: 0.5, freqHz: 1/28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.mixTem
  const mixTemFn = ramp_3c414377({ duration: 3600, height: -5, offset: 273.15 +8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.TSup
  const TSupFn = ramp_3c414377({ duration: 86400, height: 2, offset: 273.15 +22.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.TCooSetOcc
  const TCooSetOccFn = constant_baefa089({ k: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.THeaSetOcc
  const THeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.TOut
  const TOutFn = constant_baefa089({ k: 273.15 +17 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.TCooSetUno
  const TCooSetUnoFn = constant_baefa089({ k: 303.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.THeaSetUno
  const THeaSetUnoFn = constant_baefa089({ k: 285.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.TZon
  const TZonFn = ramp_3c414377({ duration: 86400, height: 6, offset: 273.15 +16 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.occSta
  const occStaFn = pulse_27dcacc8({ period: 28800, width: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.freRes
  const freResFn = pulse_27dcacc8({ period: 86400, width: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.cooCoi
  const cooCoiFn = ramp_3c414377({ duration: 86400, height: -0.3, offset: 0.96, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.demLimLev
  const demLimLevFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.heaCoi
  const heaCoiFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.outDam
  const outDamFn = ramp_3c414377({ duration: 86400, height: 0.6, offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.warUpTim
  const warUpTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Validation.Controller.conVAV
  const conVAVFn = controller_5a34e910({ ashCliZon: 1, buiPreCon: 1, ecoHigLimCon: 0, eneStd: 0, freSta: 0, have_CO2Sen: false, have_occSen: true, have_winSen: true, kHea: 1, kMod: 1, maxCooSpe: 1, maxHeaSpe: 0.7, minSpe: 0.1, relDam_max: 0.6, relDam_min: 0.1, TSup_max: 297.15, TSup_min: 285.15, TSupDew_max: 297.15, VAreBreZon_flow: 0.015, venStd: 0, VOutDes_flow: 0.25, VOutMin_flow: 0.006, VPopBreZon_flow: 0.0075 });

  return (
    {  }
  ) => {
    const cooDowTim = cooDowTimFn({});
    const zerAdj = zerAdjFn({});
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const cooSetAdj = cooSetAdjFn({});
    const swi2 = swi2Fn({ u1: zerAdj.y, u2: not2.y, u3: cooSetAdj.y });
    const heaSetAdj = heaSetAdjFn({});
    const swi1 = swi1Fn({ u1: zerAdj.y, u2: not2.y, u3: heaSetAdj.y });
    const mixTem = mixTemFn({});
    const TSup = TSupFn({});
    const TCooSetOcc = TCooSetOccFn({});
    const THeaSetOcc = THeaSetOccFn({});
    const TOut = TOutFn({});
    const TCooSetUno = TCooSetUnoFn({});
    const THeaSetUno = THeaSetUnoFn({});
    const TZon = TZonFn({});
    const occSta = occStaFn({});
    const freRes = freResFn({});
    const not1 = not1Fn({ u: freRes.y });
    const cooCoi = cooCoiFn({});
    const demLimLev = demLimLevFn({});
    const heaCoi = heaCoiFn({});
    const outDam = outDamFn({});
    const warUpTim = warUpTimFn({});
    const conVAV = conVAVFn({ cooDowTim: cooDowTim.y, cooSetAdj: swi2.y, heaSetAdj: swi1.y, TAirMix: mixTem.y, TAirSup: TSup.y, TOccCooSet: TCooSetOcc.y, TOccHeaSet: THeaSetOcc.y, TOut: TOut.y, TUnoCooSet: TCooSetUno.y, TUnoHeaSet: THeaSetUno.y, TZon: TZon.y, u1OccSen: occSta.y, u1SofSwiRes: not1.y, u1Win: not2.y, uCooCoi_actual: cooCoi.y, uHeaDemLimLev: demLimLev.y, uHeaCoi_actual: heaCoi.y, uOutDam: outDam.y, warUpTim: warUpTim.y });

    return { cooDowTim: cooDowTim, zerAdj: zerAdj, winSta: winSta, not2: not2, cooSetAdj: cooSetAdj, swi2: swi2, heaSetAdj: heaSetAdj, swi1: swi1, mixTem: mixTem, TSup: TSup, TCooSetOcc: TCooSetOcc, THeaSetOcc: THeaSetOcc, TOut: TOut, TCooSetUno: TCooSetUno, THeaSetUno: THeaSetUno, TZon: TZon, occSta: occSta, freRes: freRes, not1: not1, cooCoi: cooCoi, demLimLev: demLimLev, heaCoi: heaCoi, outDam: outDam, warUpTim: warUpTim, conVAV: conVAV };
  }
}
