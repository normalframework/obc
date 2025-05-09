
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller
const realtointeger_2917999f = require("../../../../../CDL/Conversions/RealToInteger");
const not_f2b50019 = require("../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../CDL/Logical/Sources/Pulse");
const round_9947f9a0 = require("../../../../../CDL/Reals/Round");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const ramp_40ddd056 = require("../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.CO2
  const CO2Fn = sin_f9d5a014({ amplitude: 400, freqHz: 1/28800, offset: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.CO2Set
  const CO2SetFn = constant_d2aca5e8({ k: 894 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.cooSet
  const cooSetFn = constant_d2aca5e8({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.disAirTem
  const disAirTemFn = ramp_40ddd056({ duration: 43200, height: 2, offset: 273.15 +15, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.disFlo
  const disFloFn = sin_f9d5a014({ amplitude: 0.6, freqHz: 1/28800, offset: 1.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.heaSet
  const heaSetFn = constant_d2aca5e8({ k: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.hotPla
  const hotPlaFn = pulse_cdc9ff89({ period: 7500, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.heaOff
  const heaOffFn = pulse_cdc9ff89({ period: 3600, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.winSta
  const winStaFn = pulse_cdc9ff89({ period: 43200, shift: 43200, width: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.occ
  const occFn = pulse_cdc9ff89({ period: 43200, shift: 28800, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.parFanFlo
  const parFanFloFn = sin_f9d5a014({ amplitude: 0.6, freqHz: 1/28800, offset: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.oveFlo
  const oveFloFn = ramp_40ddd056({ duration: 10000, height: 2, startTime: 35000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.opeMod
  const opeModFn = ramp_40ddd056({ duration: 28800, height: 2, offset: 1, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.oveDam
  const oveDamFn = ramp_40ddd056({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.round3
  const round3Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.reaToInt3
  const reaToInt3Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.supFan
  const supFanFn = pulse_cdc9ff89({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.TSup
  const TSupFn = sin_f9d5a014({ amplitude: 1, freqHz: 1/28800, offset: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.TSupSet
  const TSupSetFn = constant_d2aca5e8({ k: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Validation.Controller.TZon
  const TZonFn = sin_f9d5a014({ amplitude: 4, freqHz: 1/86400, offset: 299.15 });

  return (
    {  }
  ) => {
    const CO2 = CO2Fn({});
    const CO2Set = CO2SetFn({});
    const cooSet = cooSetFn({});
    const disAirTem = disAirTemFn({});
    const disFlo = disFloFn({});
    const heaSet = heaSetFn({});
    const hotPla = hotPlaFn({});
    const heaOff = heaOffFn({});
    const not1 = not1Fn({ u: heaOff.y });
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const occ = occFn({});
    const parFanFlo = parFanFloFn({});
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const oveDam = oveDamFn({});
    const round3 = round3Fn({ u: oveDam.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const supFan = supFanFn({});
    const TSup = TSupFn({});
    const TSupSet = TSupSetFn({});
    const TZon = TZonFn({});

    return { CO2: CO2, CO2Set: CO2Set, cooSet: cooSet, disAirTem: disAirTem, disFlo: disFlo, heaSet: heaSet, hotPla: hotPla, heaOff: heaOff, not1: not1, winSta: winSta, not2: not2, occ: occ, parFanFlo: parFanFlo, oveFlo: oveFlo, round1: round1, reaToInt1: reaToInt1, opeMod: opeMod, round2: round2, reaToInt2: reaToInt2, oveDam: oveDam, round3: round3, reaToInt3: reaToInt3, supFan: supFan, TSup: TSup, TSupSet: TSupSet, TZon: TZon };
  }
}
