
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors
const damperssinglesensors_8adb6dac = require("../DampersSingleSensors");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.cooAhu
  const cooAhuFn = pulse_27dcacc8({ period: 7200, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.heaAhu
  const heaAhuFn = pulse_27dcacc8({ period: 7200, shift: 5000, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.uCoo
  const uCooFn = ramp_3c414377({ duration: 3600, height: -1, offset: 1, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.uHea
  const uHeaFn = ramp_3c414377({ duration: 3600, height: 1, startTime: 5500 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.VActCooMax_flow
  const VActCooMax_flowFn = constant_baefa089({ k: 0.075 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.VActHeaMax_flow
  const VActHeaMax_flowFn = constant_baefa089({ k: 0.07 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.VActMin_flow
  const VActMin_flowFn = constant_baefa089({ k: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.VDis
  const VDisFn = sin_9696c4d3({ amplitude: 0.002, freqHz: "1/3600", offset: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.DampersSingleSensors.dam1
  const dam1Fn = damperssinglesensors_8adb6dac({ kDam: 1, samplePeriod: 120, VCooMax_flow: 0.08, VHeaMax_flow: 0.06 });

  return (
    {  }
  ) => {
    const cooAhu = cooAhuFn({});
    const heaAhu = heaAhuFn({});
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const VActCooMax_flow = VActCooMax_flowFn({});
    const VActHeaMax_flow = VActHeaMax_flowFn({});
    const VActMin_flow = VActMin_flowFn({});
    const VDis = VDisFn({});
    const dam1 = dam1Fn({ u1CooAHU: cooAhu.y, u1HeaAHU: heaAhu.y, uCoo: uCoo.y, uHea: uHea.y, VActCooMax_flow: VActCooMax_flow.y, VActHeaMax_flow: VActHeaMax_flow.y, VActMin_flow: VActMin_flow.y, VDis_flow: VDis.y });

    return {};
  }
}
