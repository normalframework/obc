
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller
const controller_a37e7a0d = require("../Controller");
const realtointeger_b3838f5e = require("../../../../../CDL/Conversions/RealToInteger");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../CDL/Logical/Sources/Pulse");
const round_13f7599f = require("../../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.oveColDam
  const oveColDamFn = ramp_3c414377({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.round3
  const round3Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.reaToInt3
  const reaToInt3Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.oveFlo
  const oveFloFn = ramp_3c414377({ duration: 10000, height: 2, startTime: 35000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.oveHotDam
  const oveHotDamFn = ramp_3c414377({ duration: 5000, height: 2, startTime: 60000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.round4
  const round4Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.reaToInt4
  const reaToInt4Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.CO2
  const CO2Fn = sin_9696c4d3({ amplitude: 400, freqHz: "1/28800", offset: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.CO2Set
  const CO2SetFn = constant_baefa089({ k: 894 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.colSupAirTem
  const colSupAirTemFn = ramp_3c414377({ duration: 43200, height: 2, offset: "273.15 +14" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.cooSet
  const cooSetFn = constant_baefa089({ k: "273.15 +24" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.disAirTem
  const disAirTemFn = ramp_3c414377({ duration: 43200, height: 2, offset: "273.15 +15", startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.heaSet
  const heaSetFn = constant_baefa089({ k: "273.15 +20" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.hotSupAirTem
  const hotSupAirTemFn = ramp_3c414377({ duration: 43200, height: 2, offset: "273.15 +24" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.TZon
  const TZonFn = sin_9696c4d3({ amplitude: 4, freqHz: "1/86400", offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.cooSupFanSta
  const cooSupFanStaFn = pulse_27dcacc8({ period: 73200, shift: 18800, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.heaSupFanSta
  const heaSupFanStaFn = pulse_27dcacc8({ period: 73200, shift: 18800, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.occ
  const occFn = pulse_27dcacc8({ period: 43200, shift: 28800, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.winSta
  const winStaFn = pulse_27dcacc8({ period: 43200, shift: 43200, width: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.opeMod
  const opeModFn = ramp_3c414377({ duration: 28800, height: 2, offset: 1, startTime: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.VDis_flow
  const VDis_flowFn = sin_9696c4d3({ amplitude: 0.6, freqHz: "1/28800", offset: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Validation.Controller.duaDucCon
  const duaDucConFn = controller_a37e7a0d({ damPosHys: 0.01, floHys: 0.01, looHys: 0.01, staPreMul: 1, VAreBreZon_flow: 0.006, VCooMax_flow: 1.5, venStd: 0, VHeaMax_flow: 1.2, VMin_flow: 0.5, VPopBreZon_flow: 0.005 });

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
    const VDis_flow = VDis_flowFn({});
    const duaDucCon = duaDucConFn({ oveCooDamPos: reaToInt3.y, oveFloSet: reaToInt1.y, oveHeaDamPos: reaToInt4.y, ppmCO2: CO2.y, ppmCO2Set: CO2Set.y, TColSup: colSupAirTem.y, TCooSet: cooSet.y, TDis: disAirTem.y, THeaSet: heaSet.y, THotSup: hotSupAirTem.y, TZon: TZon.y, u1CooAHU: cooSupFanSta.y, u1HeaAHU: heaSupFanSta.y, u1Occ: occ.y, u1Win: not2.y, uOpeMod: reaToInt2.y, VDis_flow: VDis_flow.y });

    return {};
  }
}
