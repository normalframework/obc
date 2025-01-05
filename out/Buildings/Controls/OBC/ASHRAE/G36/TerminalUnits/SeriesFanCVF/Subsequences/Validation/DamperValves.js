
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves
const dampervalves_47aeda70 = require("../DamperValves");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.oveFlo
  const oveFloFn = ramp_3c414377({ duration: 2000, height: 3, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.TDis
  const TDisFn = sin_9696c4d3({ amplitude: 1.2, freqHz: "1/3600", offset: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.THeaSet
  const THeaSetFn = constant_baefa089({ k: "273.15 +20" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.TSup
  const TSupFn = sin_9696c4d3({ amplitude: 1, freqHz: "1/3600", offset: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.TSupSet
  const TSupSetFn = constant_baefa089({ k: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.TZon
  const TZonFn = constant_baefa089({ k: "273.15 +22" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.booPul
  const booPulFn = pulse_27dcacc8({ period: 4800, shift: 180, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.terFan
  const terFanFn = pulse_27dcacc8({ period: 7200, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.uCoo
  const uCooFn = ramp_3c414377({ duration: 3600, height: -1, offset: 1, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.damPos
  const damPosFn = ramp_3c414377({ duration: 3600, height: 1, startTime: 5500 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.uHea
  const uHeaFn = ramp_3c414377({ duration: 3600, height: 1, startTime: 5500 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.opeMod
  const opeModFn = ramp_3c414377({ duration: 90000, height: 3, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.VActCooMax_flow
  const VActCooMax_flowFn = constant_baefa089({ k: 0.075 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.VActMin_flow
  const VActMin_flowFn = constant_baefa089({ k: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.disAir
  const disAirFn = ramp_3c414377({ duration: 7200, height: 0.06, offset: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.DamperValves.damValFan1
  const damValFan1Fn = dampervalves_47aeda70({ kDam: 1, VCooMax_flow: 0.09, VMin_flow: 0.01 });

  return (
    {  }
  ) => {
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const TDis = TDisFn({});
    const THeaSet = THeaSetFn({});
    const TSup = TSupFn({});
    const TSupSet = TSupSetFn({});
    const TZon = TZonFn({});
    const booPul = booPulFn({});
    const terFan = terFanFn({});
    const uCoo = uCooFn({});
    const damPos = damPosFn({});
    const uHea = uHeaFn({});
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const VActCooMax_flow = VActCooMax_flowFn({});
    const VActMin_flow = VActMin_flowFn({});
    const disAir = disAirFn({});
    const damValFan1 = damValFan1Fn({ oveFloSet: reaToInt1.y, TDis: TDis.y, THeaSet: THeaSet.y, TSup: TSup.y, TSupSet: TSupSet.y, TZon: TZon.y, u1Fan: booPul.y, u1TerFan: terFan.y, uCoo: uCoo.y, uDam: damPos.y, uHea: uHea.y, uOpeMod: reaToInt2.y, VActCooMax_flow: VActCooMax_flow.y, VActMin_flow: VActMin_flow.y, VPri_flow: disAir.y });

    return {};
  }
}
