
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers
const dampers_958937ce = require("../Dampers");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.oveDam
  const oveDamFn = ramp_3c414377({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.round3
  const round3Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.reaToInt3
  const reaToInt3Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.oveFlo
  const oveFloFn = ramp_3c414377({ duration: 2000, height: 3, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.TSup
  const TSupFn = constant_baefa089({ k: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.TZon
  const TZonFn = constant_baefa089({ k: "273.15 +22" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.booPul
  const booPulFn = pulse_27dcacc8({ period: 4800, shift: 180, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.uCoo
  const uCooFn = ramp_3c414377({ duration: 3600, height: 1, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.zonSta
  const zonStaFn = ramp_3c414377({ duration: 1000, height: -2, offset: 3, startTime: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.VActCooMax_flow
  const VActCooMax_flowFn = constant_baefa089({ k: 0.075 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.VActMin_flow
  const VActMin_flowFn = constant_baefa089({ k: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.VDis_flow
  const VDis_flowFn = sin_9696c4d3({ amplitude: 0.002, freqHz: "1/3600", offset: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Dampers.dam1
  const dam1Fn = dampers_958937ce({ kDam: 1, VCooMax_flow: 0.09, VMin_flow: 0.01 });

  return (
    {  }
  ) => {
    const oveDam = oveDamFn({});
    const round3 = round3Fn({ u: oveDam.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const oveFlo = oveFloFn({});
    const round1 = round1Fn({ u: oveFlo.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const TSup = TSupFn({});
    const TZon = TZonFn({});
    const booPul = booPulFn({});
    const uCoo = uCooFn({});
    const zonSta = zonStaFn({});
    const round2 = round2Fn({ u: zonSta.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const VActCooMax_flow = VActCooMax_flowFn({});
    const VActMin_flow = VActMin_flowFn({});
    const VDis_flow = VDis_flowFn({});
    const dam1 = dam1Fn({ oveDamPos: reaToInt3.y, oveFloSet: reaToInt1.y, TSup: TSup.y, TZon: TZon.y, u1Fan: booPul.y, uCoo: uCoo.y, uZonSta: reaToInt2.y, VActCooMax_flow: VActCooMax_flow.y, VActMin_flow: VActMin_flow.y, VDis_flow: VDis_flow.y });

    return {};
  }
}
