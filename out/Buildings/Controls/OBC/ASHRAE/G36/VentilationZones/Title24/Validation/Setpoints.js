
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints
const setpoints_aa6b5c6d = require("../Setpoints");
const booleantointeger_d87efb42 = require("../../../../../CDL/Conversions/BooleanToInteger");
const realtointeger_b3838f5e = require("../../../../../CDL/Conversions/RealToInteger");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../CDL/Logical/Sources/Pulse");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.co2Con
  const co2ConFn = ramp_3c414377({ duration: 7200, height: 300, offset: 800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.CO2Set
  const CO2SetFn = constant_baefa089({ k: 894 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.ram
  const ramFn = ramp_3c414377({ duration: 7200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ t: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerFalse: 2, integerTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.co2SenSZVAV
  const co2SenSZVAVFn = setpoints_aa6b5c6d({ have_CO2Sen: true, have_SZVAV: true, VAreMin_flow: 0.012, VMin_flow: 0.018, VOccMin_flow: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.co2SenZon
  const co2SenZonFn = setpoints_aa6b5c6d({ have_CO2Sen: true, have_typTerUni: true, VAreMin_flow: 0.012, VMin_flow: 0.018, VOccMin_flow: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.ram1
  const ram1Fn = ramp_3c414377({ duration: 7200, height: 2.6, offset: 0.6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.reaToInt
  const reaToIntFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.parFanFlo
  const parFanFloFn = sin_9696c4d3({ amplitude: 0.01, freqHz: 1/7200, offset: 0.008 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.co2SenZonParFan
  const co2SenZonParFanFn = setpoints_aa6b5c6d({ have_CO2Sen: true, have_parFanPowUni: true, VAreMin_flow: 0.012, VMin_flow: 0.018, VOccMin_flow: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.noSenZon
  const noSenZonFn = setpoints_aa6b5c6d({ VAreMin_flow: 0.012, VMin_flow: 0.018, VOccMin_flow: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.occSta
  const occStaFn = pulse_27dcacc8({ period: 7200, width: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.occSenZon
  const occSenZonFn = setpoints_aa6b5c6d({ have_occSen: true, VAreMin_flow: 0.012, VMin_flow: 0.018, VOccMin_flow: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.winSta
  const winStaFn = pulse_27dcacc8({ period: 7200, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Validation.Setpoints.winSenZon
  const winSenZonFn = setpoints_aa6b5c6d({ have_winSen: true, VAreMin_flow: 0.012, VMin_flow: 0.018, VOccMin_flow: 0.015 });

  return (
    {  }
  ) => {
    const co2Con = co2ConFn({});
    const CO2Set = CO2SetFn({});
    const ram = ramFn({});
    const greThr = greThrFn({ u: ram.y });
    const not1 = not1Fn({ u: greThr.y });
    const booToInt = booToIntFn({ u: not1.y });
    const co2SenSZVAV = co2SenSZVAVFn({ ppmCO2: co2Con.y, ppmCO2Set: CO2Set.y, uOpeMod: booToInt.y });
    const co2SenZon = co2SenZonFn({ ppmCO2: co2Con.y, ppmCO2Set: CO2Set.y, uOpeMod: booToInt.y });
    const ram1 = ram1Fn({});
    const reaToInt = reaToIntFn({ u: ram1.y });
    const parFanFlo = parFanFloFn({});
    const co2SenZonParFan = co2SenZonParFanFn({ ppmCO2: co2Con.y, ppmCO2Set: CO2Set.y, uOpeMod: booToInt.y, uZonSta: reaToInt.y, VParFan_flow: parFanFlo.y });
    const noSenZon = noSenZonFn({});
    const occSta = occStaFn({});
    const occSenZon = occSenZonFn({ u1Occ: occSta.y });
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const winSenZon = winSenZonFn({ u1Win: not2.y });

    return { co2Con: co2Con, CO2Set: CO2Set, ram: ram, greThr: greThr, not1: not1, booToInt: booToInt, co2SenSZVAV: co2SenSZVAV, co2SenZon: co2SenZon, ram1: ram1, reaToInt: reaToInt, parFanFlo: parFanFlo, co2SenZonParFan: co2SenZonParFan, noSenZon: noSenZon, occSta: occSta, occSenZon: occSenZon, winSta: winSta, not2: not2, winSenZon: winSenZon };
  }
}
