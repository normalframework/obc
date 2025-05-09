
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints
const modeandsetpoints_487fe58e = require("../ModeAndSetPoints");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const addparameter_26b0d2d7 = require("../../../../../../../CDL/Reals/AddParameter");
const multiplybyparameter_13a4f29f = require("../../../../../../../CDL/Reals/MultiplyByParameter");
const sin_a5fb3529 = require("../../../../../../../CDL/Reals/Sin");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../../CDL/Reals/Sources/Sin");
const switch_6d141143 = require("../../../../../../../CDL/Reals/Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.cooDowTim
  const cooDowTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.zerAdj
  const zerAdjFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.winSta
  const winStaFn = pulse_27dcacc8({ period: 14400, shift: 1200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.winOpe
  const winOpeFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.cooSetAdj
  const cooSetAdjFn = sin_9696c4d3({ freqHz: 1/28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.heaSetAdj
  const heaSetAdjFn = sin_9696c4d3({ amplitude: 0.5, freqHz: 1/28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.TCooSetOcc
  const TCooSetOccFn = constant_baefa089({ k: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.THeaSetOcc
  const THeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.TCooSetUno
  const TCooSetUnoFn = constant_baefa089({ k: 303.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.THeaSetUno
  const THeaSetUnoFn = constant_baefa089({ k: 285.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.ramp2
  const ramp2Fn = ramp_3c414377({ duration: 24*3600, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.sin2
  const sin2Fn = sin_a5fb3529({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 12.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.zonTem
  const zonTemFn = addparameter_26b0d2d7({ p: 273.15 +22.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.occSta
  const occStaFn = pulse_27dcacc8({ period: 14400, width: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.cooDemLimLev
  const cooDemLimLevFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.heaDemLimLev
  const heaDemLimLevFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.warUpTim
  const warUpTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ModeAndSetPoints.modSetPoi
  const modSetPoiFn = modeandsetpoints_487fe58e({ have_locAdj: true, have_occSen: true, have_winSen: false, ignDemLim: false, sepAdj: true });

  return (
    {  }
  ) => {
    const cooDowTim = cooDowTimFn({});
    const zerAdj = zerAdjFn({});
    const winSta = winStaFn({});
    const winOpe = winOpeFn({ u: winSta.y });
    const cooSetAdj = cooSetAdjFn({});
    const swi2 = swi2Fn({ u1: zerAdj.y, u2: winOpe.y, u3: cooSetAdj.y });
    const heaSetAdj = heaSetAdjFn({});
    const swi1 = swi1Fn({ u1: zerAdj.y, u2: winOpe.y, u3: heaSetAdj.y });
    const TCooSetOcc = TCooSetOccFn({});
    const THeaSetOcc = THeaSetOccFn({});
    const TCooSetUno = TCooSetUnoFn({});
    const THeaSetUno = THeaSetUnoFn({});
    const ramp2 = ramp2Fn({});
    const sin2 = sin2Fn({ u: ramp2.y });
    const gai = gaiFn({ u: sin2.y });
    const zonTem = zonTemFn({ u: gai.y });
    const occSta = occStaFn({});
    const cooDemLimLev = cooDemLimLevFn({});
    const heaDemLimLev = heaDemLimLevFn({});
    const warUpTim = warUpTimFn({});
    const modSetPoi = modSetPoiFn({ cooDowTim: cooDowTim.y, cooSetAdj: swi2.y, heaSetAdj: swi1.y, TOccCooSet: TCooSetOcc.y, TOccHeaSet: THeaSetOcc.y, TUnoCooSet: TCooSetUno.y, TUnoHeaSet: THeaSetUno.y, TZon: zonTem.y, u1OccSen: occSta.y, uCooDemLimLev: cooDemLimLev.y, uHeaDemLimLev: heaDemLimLev.y, warUpTim: warUpTim.y });

    return { cooDowTim: cooDowTim, zerAdj: zerAdj, winSta: winSta, winOpe: winOpe, cooSetAdj: cooSetAdj, swi2: swi2, heaSetAdj: heaSetAdj, swi1: swi1, TCooSetOcc: TCooSetOcc, THeaSetOcc: THeaSetOcc, TCooSetUno: TCooSetUno, THeaSetUno: THeaSetUno, ramp2: ramp2, sin2: sin2, gai: gai, zonTem: zonTem, occSta: occSta, cooDemLimLev: cooDemLimLev, heaDemLimLev: heaDemLimLev, warUpTim: warUpTim, modSetPoi: modSetPoi };
  }
}
