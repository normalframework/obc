
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller
const controller_b94b6f37 = require("../Controller");
const realtointeger_2917999f = require("../../../../../CDL/Conversions/RealToInteger");
const not_f2b50019 = require("../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../CDL/Logical/Sources/Pulse");
const round_9947f9a0 = require("../../../../../CDL/Reals/Round");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const ramp_40ddd056 = require("../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.oveColDam
  const oveColDamFn = ramp_40ddd056({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.round3
  const round3Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.reaToInt3
  const reaToInt3Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.oveFlo
  const oveFloFn = ramp_40ddd056({ duration: 10000, height: 2, startTime: 35000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.oveHotDam
  const oveHotDamFn = ramp_40ddd056({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.round4
  const round4Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.reaToInt4
  const reaToInt4Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.CO2
  const CO2Fn = sin_f9d5a014({ amplitude: 400, freqHz: 1/28800, offset: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.CO2Set
  const CO2SetFn = constant_d2aca5e8({ k: 894 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.colSupAirTem
  const colSupAirTemFn = ramp_40ddd056({ duration: 43200, height: 2, offset: 273.15 +14 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.cooSet
  const cooSetFn = constant_d2aca5e8({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.disAirTem
  const disAirTemFn = ramp_40ddd056({ duration: 43200, height: 2, offset: 273.15 +15, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.heaSet
  const heaSetFn = constant_d2aca5e8({ k: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.hotSupAirTem
  const hotSupAirTemFn = ramp_40ddd056({ duration: 43200, height: 2, offset: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.TZon
  const TZonFn = sin_f9d5a014({ amplitude: 4, freqHz: 1/86400, offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.cooSupFanSta
  const cooSupFanStaFn = pulse_cdc9ff89({ period: 73200, shift: 18800, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.heaSupFanSta
  const heaSupFanStaFn = pulse_cdc9ff89({ period: 73200, shift: 18800, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.occ
  const occFn = pulse_cdc9ff89({ period: 43200, shift: 28800, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.winSta
  const winStaFn = pulse_cdc9ff89({ period: 43200, shift: 43200, width: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.opeMod
  const opeModFn = ramp_40ddd056({ duration: 28800, height: 2, offset: 1, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.VColDis_flow
  const VColDis_flowFn = sin_f9d5a014({ amplitude: 0.6, freqHz: 1/28800, offset: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.VHotDis_flow
  const VHotDis_flowFn = sin_f9d5a014({ amplitude: 0.6, freqHz: 1/28800, offset: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Validation.Controller.duaDucCon
  const duaDucConFn = controller_b94b6f37({ damPosHys: 0.01, floHys: 0.01, have_duaSen: true, looHys: 0.01, staPreMul: 1, VAreBreZon_flow: 0.006, VAreMin_flow: 0, VCooMax_flow: 1.5, venStd: 0, VHeaMax_flow: 1.2, VMin_flow: 0.5, VOccMin_flow: 0, VPopBreZon_flow: 0.005 });

  return (
    {  }
  ) => {
    const oveColDam = oveColDamFn({});
    const round3 = round3Fn({ u: oveColDam.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const oveHotDam = oveHotDamFn({});
    const round4 = round4Fn({ u: oveHotDam.y });
    const reaToInt4 = reaToInt4Fn({ u: round4.y });
    const CO2 = CO2Fn({});
    const CO2Set = CO2SetFn({});
    const colSupAirTem = colSupAirTemFn({});
    const cooSet = cooSetFn({});
    const disAirTem = disAirTemFn({});
    const heaSet = heaSetFn({});
    const hotSupAirTem = hotSupAirTemFn({});
    const TZon = TZonFn({});
    const cooSupFanSta = cooSupFanStaFn({});
    const heaSupFanSta = heaSupFanStaFn({});
    const occ = occFn({});
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const VColDis_flow = VColDis_flowFn({});
    const VHotDis_flow = VHotDis_flowFn({});
    const duaDucCon = duaDucConFn({ oveCooDamPos: reaToInt3.y, oveFloSet: reaToInt1.y, oveHeaDamPos: reaToInt4.y, ppmCO2: CO2.y, ppmCO2Set: CO2Set.y, TColSup: colSupAirTem.y, TCooSet: cooSet.y, TDis: disAirTem.y, THeaSet: heaSet.y, THotSup: hotSupAirTem.y, TZon: TZon.y, u1CooAHU: cooSupFanSta.y, u1HeaAHU: heaSupFanSta.y, u1Occ: occ.y, u1Win: not2.y, uOpeMod: reaToInt2.y, VColDucDis_flow: VColDis_flow.y, VHotDucDis_flow: VHotDis_flow.y });

    return { oveColDam: oveColDam, round3: round3, reaToInt3: reaToInt3, oveFlo: oveFlo, round1: round1, reaToInt1: reaToInt1, oveHotDam: oveHotDam, round4: round4, reaToInt4: reaToInt4, CO2: CO2, CO2Set: CO2Set, colSupAirTem: colSupAirTem, cooSet: cooSet, disAirTem: disAirTem, heaSet: heaSet, hotSupAirTem: hotSupAirTem, TZon: TZon, cooSupFanSta: cooSupFanSta, heaSupFanSta: heaSupFanSta, occ: occ, winSta: winSta, not2: not2, opeMod: opeMod, round2: round2, reaToInt2: reaToInt2, VColDis_flow: VColDis_flow, VHotDis_flow: VHotDis_flow, duaDucCon: duaDucCon };
  }
}
