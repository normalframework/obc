
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves
const dampervalves_b9da1abc = require("../DamperValves");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.oveFlo
  const oveFloFn = ramp_3c414377({ duration: 2000, height: 3, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.TDis
  const TDisFn = sin_9696c4d3({ amplitude: 1.2, freqHz: "1/3600", offset: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.THeaSet
  const THeaSetFn = constant_baefa089({ k: "273.15 +20" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.TSup
  const TSupFn = sin_9696c4d3({ amplitude: 1, freqHz: "1/3600", offset: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.TSupSet
  const TSupSetFn = constant_baefa089({ k: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.TZon
  const TZonFn = constant_baefa089({ k: "273.15 +22" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.booPul
  const booPulFn = pulse_27dcacc8({ period: 4800, shift: 180, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.uCoo
  const uCooFn = ramp_3c414377({ duration: 3600, height: -1, offset: 1, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.uHea
  const uHeaFn = ramp_3c414377({ duration: 3600, height: 1, startTime: 5500 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.opeMod
  const opeModFn = ramp_3c414377({ duration: 90000, height: 3, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.VActCooMax_flow
  const VActCooMax_flowFn = constant_baefa089({ k: 0.075 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.VActCooMin_flow
  const VActCooMin_flowFn = constant_baefa089({ k: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.VActHeaMax_flow
  const VActHeaMax_flowFn = constant_baefa089({ k: 0.06 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.VActHeaMin_flow
  const VActHeaMin_flowFn = constant_baefa089({ k: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.VActMin_flow
  const VActMin_flowFn = constant_baefa089({ k: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.disAir
  const disAirFn = ramp_3c414377({ duration: 7200, height: 0.06, offset: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.DamperValves.damValFan1
  const damValFan1Fn = dampervalves_b9da1abc({ kDam: 1, VCooMax_flow: 0.09, VHeaMax_flow: 0.08, VMin_flow: 0.01 });

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
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const VActCooMax_flow = VActCooMax_flowFn({});
    const VActCooMin_flow = VActCooMin_flowFn({});
    const VActHeaMax_flow = VActHeaMax_flowFn({});
    const VActHeaMin_flow = VActHeaMin_flowFn({});
    const VActMin_flow = VActMin_flowFn({});
    const disAir = disAirFn({});
    const damValFan1 = damValFan1Fn({ oveFloSet: reaToInt1.y, TDis: TDis.y, THeaSet: THeaSet.y, TSup: TSup.y, TSupSet: TSupSet.y, TZon: TZon.y, u1Fan: booPul.y, uCoo: uCoo.y, uHea: uHea.y, uOpeMod: reaToInt2.y, VActCooMax_flow: VActCooMax_flow.y, VActCooMin_flow: VActCooMin_flow.y, VActHeaMax_flow: VActHeaMax_flow.y, VActHeaMin_flow: VActHeaMin_flow.y, VActMin_flow: VActMin_flow.y, VDis_flow: disAir.y });

    return {};
  }
}
