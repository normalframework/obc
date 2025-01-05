
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller
const controller_79841145 = require("../Controller");
const realtointeger_b3838f5e = require("../../../../../CDL/Conversions/RealToInteger");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const constant_48cc1015 = require("../../../../../CDL/Logical/Sources/Constant");
const pulse_27dcacc8 = require("../../../../../CDL/Logical/Sources/Pulse");
const round_13f7599f = require("../../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.parFanFlo
  const parFanFloFn = sin_9696c4d3({ amplitude: 0.6, freqHz: "1/28800", offset: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.oveDam
  const oveDamFn = ramp_3c414377({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.round3
  const round3Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.reaToInt3
  const reaToInt3Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.oveTerFan
  const oveTerFanFn = ramp_3c414377({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.round4
  const round4Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.reaToInt4
  const reaToInt4Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.oveFlo
  const oveFloFn = ramp_3c414377({ duration: 10000, height: 2, startTime: 35000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.CO2
  const CO2Fn = sin_9696c4d3({ amplitude: 400, freqHz: "1/28800", offset: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.CO2Set
  const CO2SetFn = constant_baefa089({ k: 894 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.cooSet
  const cooSetFn = constant_baefa089({ k: "273.15 +24" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.disAirTem
  const disAirTemFn = ramp_3c414377({ duration: 43200, height: 2, offset: "273.15 +15", startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.heaSet
  const heaSetFn = constant_baefa089({ k: "273.15 +20" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.TSup
  const TSupFn = sin_9696c4d3({ amplitude: 1, freqHz: "1/28800", offset: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.TSupSet
  const TSupSetFn = constant_baefa089({ k: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.TZon
  const TZonFn = sin_9696c4d3({ amplitude: 4, freqHz: "1/86400", offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.supFan
  const supFanFn = pulse_27dcacc8({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.hotPla
  const hotPlaFn = pulse_27dcacc8({ period: 7500, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.occ
  const occFn = pulse_27dcacc8({ period: 43200, shift: 28800, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.terFan
  const terFanFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.winSta
  const winStaFn = pulse_27dcacc8({ period: 43200, shift: 43200, width: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.heaOff
  const heaOffFn = pulse_27dcacc8({ period: 3600, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.opeMod
  const opeModFn = ramp_3c414377({ duration: 28800, height: 2, offset: 1, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.disFlo
  const disFloFn = sin_9696c4d3({ amplitude: 0.6, freqHz: "1/28800", offset: 1.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Validation.Controller.serFanCon
  const serFanConFn = controller_79841145({ controllerTypeVal: Math.PI, damPosHys: 0.01, floHys: 0.01, hotWatRes: 1, looHys: 0.01, maxRat: 2, staPreMul: 1, valPosHys: 0.01, VAreBreZon_flow: 0.006, VCooMax_flow: 1.5, venStd: 0, VMin_flow: 0.5, VPopBreZon_flow: 0.005 });

  return (
    {  }
  ) => {
    const parFanFlo = parFanFloFn({});
    const oveDam = oveDamFn({});
    const round3 = round3Fn({ u: oveDam.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const oveTerFan = oveTerFanFn({});
    const round4 = round4Fn({ u: oveTerFan.y });
    const reaToInt4 = reaToInt4Fn({ u: round4.y });
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const CO2 = CO2Fn({});
    const CO2Set = CO2SetFn({});
    const cooSet = cooSetFn({});
    const disAirTem = disAirTemFn({});
    const heaSet = heaSetFn({});
    const TSup = TSupFn({});
    const TSupSet = TSupSetFn({});
    const TZon = TZonFn({});
    const supFan = supFanFn({});
    const hotPla = hotPlaFn({});
    const occ = occFn({});
    const terFan = terFanFn({});
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const heaOff = heaOffFn({});
    const not1 = not1Fn({ u: heaOff.y });
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const disFlo = disFloFn({});
    const serFanCon = serFanConFn({ oveDamPos: reaToInt3.y, oveFan: reaToInt4.y, oveFloSet: reaToInt1.y, ppmCO2: CO2.y, ppmCO2Set: CO2Set.y, TCooSet: cooSet.y, TDis: disAirTem.y, THeaSet: heaSet.y, TSup: TSup.y, TSupSet: TSupSet.y, TZon: TZon.y, u1Fan: supFan.y, u1HotPla: hotPla.y, u1Occ: occ.y, u1TerFan: terFan.y, u1Win: not2.y, uHeaOff: not1.y, uOpeMod: reaToInt2.y, VPri_flow: disFlo.y });

    return {};
  }
}
