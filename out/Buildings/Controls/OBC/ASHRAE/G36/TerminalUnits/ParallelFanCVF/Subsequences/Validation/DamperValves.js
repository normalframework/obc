
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves
const dampervalves_0abddf40 = require("../DamperValves");
const realtointeger_2917999f = require("../../../../../../CDL/Conversions/RealToInteger");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_9947f9a0 = require("../../../../../../CDL/Reals/Round");
const constant_d2aca5e8 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.cooAhu
  const cooAhuFn = pulse_cdc9ff89({ period: 7200, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.oveFlo
  const oveFloFn = ramp_40ddd056({ duration: 2000, height: 3, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.TDis
  const TDisFn = sin_f9d5a014({ amplitude: 1.2, freqHz: 1/3600, offset: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.TZonHeaSet
  const TZonHeaSetFn = constant_d2aca5e8({ k: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.TSup
  const TSupFn = sin_f9d5a014({ amplitude: 1, freqHz: 1/3600, offset: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.TSupSet
  const TSupSetFn = constant_d2aca5e8({ k: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.TZon
  const TZonFn = constant_d2aca5e8({ k: 273.15 +22 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.booPul
  const booPulFn = pulse_cdc9ff89({ period: 4800, shift: 180, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.uCoo
  const uCooFn = ramp_40ddd056({ duration: 3600, height: -1, offset: 1, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.uHea
  const uHeaFn = ramp_40ddd056({ duration: 3600, height: 1, offset: 0, startTime: 5500 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.opeMod
  const opeModFn = ramp_40ddd056({ duration: 90000, height: 3, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.VActCooMax_flow
  const VActCooMax_flowFn = constant_d2aca5e8({ k: 0.075 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.VActMin_flow
  const VActMin_flowFn = constant_d2aca5e8({ k: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.VOAMin_flow
  const VOAMin_flowFn = constant_d2aca5e8({ k: 0.005 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.disAir
  const disAirFn = ramp_40ddd056({ duration: 7200, height: 0.06, offset: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Validation.DamperValves.damValFan1
  const damValFan1Fn = dampervalves_0abddf40({ kDam: 1, VCooMax_flow: 0.09, VMin_flow: 0.01 });

  return (
    {  }
  ) => {
    const cooAhu = cooAhuFn({});
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const TDis = TDisFn({});
    const TZonHeaSet = TZonHeaSetFn({});
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
    const VActMin_flow = VActMin_flowFn({});
    const VOAMin_flow = VOAMin_flowFn({});
    const disAir = disAirFn({});
    const damValFan1 = damValFan1Fn({ oveFloSet: reaToInt1.y, TDis: TDis.y, THeaSet: TZonHeaSet.y, TSup: TSup.y, TSupSet: TSupSet.y, TZon: TZon.y, u1Fan: booPul.y, uCoo: uCoo.y, uHea: uHea.y, uOpeMod: reaToInt2.y, VActCooMax_flow: VActCooMax_flow.y, VActMin_flow: VActMin_flow.y, VOAMin_flow: VOAMin_flow.y, VPri_flow: disAir.y });

    return { cooAhu: cooAhu, oveFlo: oveFlo, round1: round1, reaToInt1: reaToInt1, TDis: TDis, TZonHeaSet: TZonHeaSet, TSup: TSup, TSupSet: TSupSet, TZon: TZon, booPul: booPul, uCoo: uCoo, uHea: uHea, opeMod: opeMod, round2: round2, reaToInt2: reaToInt2, VActCooMax_flow: VActCooMax_flow, VActMin_flow: VActMin_flow, VOAMin_flow: VOAMin_flow, disAir: disAir, damValFan1: damValFan1 };
  }
}
