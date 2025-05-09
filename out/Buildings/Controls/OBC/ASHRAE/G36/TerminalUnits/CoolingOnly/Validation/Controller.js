
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller
const controller_c1fe9160 = require("../Controller");
const realtointeger_2917999f = require("../../../../../CDL/Conversions/RealToInteger");
const not_f2b50019 = require("../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../CDL/Logical/Sources/Pulse");
const round_9947f9a0 = require("../../../../../CDL/Reals/Round");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const ramp_40ddd056 = require("../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.oveDam
  const oveDamFn = ramp_40ddd056({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.round3
  const round3Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.reaToInt3
  const reaToInt3Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.oveFlo
  const oveFloFn = ramp_40ddd056({ duration: 10000, height: 2, startTime: 35000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.CO2
  const CO2Fn = sin_f9d5a014({ amplitude: 400, freqHz: 1/28800, offset: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.CO2Set
  const CO2SetFn = constant_d2aca5e8({ k: 894 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.cooSet
  const cooSetFn = constant_d2aca5e8({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.disAirTem
  const disAirTemFn = ramp_40ddd056({ duration: 43200, height: 2, offset: 273.15 +15, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.heaSet
  const heaSetFn = constant_d2aca5e8({ k: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.supAirTem
  const supAirTemFn = ramp_40ddd056({ duration: 43200, height: 2, offset: 273.15 +14 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.TZon
  const TZonFn = sin_f9d5a014({ amplitude: 4, freqHz: 1/86400, offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.supFanSta
  const supFanStaFn = pulse_cdc9ff89({ period: 73200, shift: 18800, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.occ
  const occFn = pulse_cdc9ff89({ period: 43200, shift: 28800, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.winSta
  const winStaFn = pulse_cdc9ff89({ period: 43200, shift: 43200, width: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.opeMod
  const opeModFn = ramp_40ddd056({ duration: 28800, height: 2, offset: 1, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.VDis_flow
  const VDis_flowFn = sin_f9d5a014({ amplitude: 0.6, freqHz: 1/28800, offset: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Validation.Controller.cooBoxCon
  const cooBoxConFn = controller_c1fe9160({ damPosHys: 0.01, floHys: 0.01, looHys: 0.01, staPreMul: 1, VAreBreZon_flow: 0.006, VAreMin_flow: 0, VCooMax_flow: 1.5, venStd: 0, VMin_flow: 0.5, VOccMin_flow: 0, VPopBreZon_flow: 0.005 });

  return (
    {  }
  ) => {
    const oveDam = oveDamFn({});
    const round3 = round3Fn({ u: oveDam.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const CO2 = CO2Fn({});
    const CO2Set = CO2SetFn({});
    const cooSet = cooSetFn({});
    const disAirTem = disAirTemFn({});
    const heaSet = heaSetFn({});
    const supAirTem = supAirTemFn({});
    const TZon = TZonFn({});
    const supFanSta = supFanStaFn({});
    const occ = occFn({});
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const VDis_flow = VDis_flowFn({});
    const cooBoxCon = cooBoxConFn({ oveDamPos: reaToInt3.y, oveFloSet: reaToInt1.y, ppmCO2: CO2.y, ppmCO2Set: CO2Set.y, TCooSet: cooSet.y, TDis: disAirTem.y, THeaSet: heaSet.y, TSup: supAirTem.y, TZon: TZon.y, u1Fan: supFanSta.y, u1Occ: occ.y, u1Win: not2.y, uOpeMod: reaToInt2.y, VDis_flow: VDis_flow.y });

    return { oveDam: oveDam, round3: round3, reaToInt3: reaToInt3, oveFlo: oveFlo, round1: round1, reaToInt1: reaToInt1, CO2: CO2, CO2Set: CO2Set, cooSet: cooSet, disAirTem: disAirTem, heaSet: heaSet, supAirTem: supAirTem, TZon: TZon, supFanSta: supFanSta, occ: occ, winSta: winSta, not2: not2, opeMod: opeMod, round2: round2, reaToInt2: reaToInt2, VDis_flow: VDis_flow, cooBoxCon: cooBoxCon };
  }
}
