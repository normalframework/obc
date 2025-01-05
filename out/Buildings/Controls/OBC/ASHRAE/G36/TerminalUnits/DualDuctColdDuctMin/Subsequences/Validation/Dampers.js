
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers
const dampers_0a9c9745 = require("../Dampers");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.TCooSup
  const TCooSupFn = constant_baefa089({ k: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.THeaSup
  const THeaSupFn = constant_baefa089({ k: "273.15 +25" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.TZon
  const TZonFn = constant_baefa089({ k: "273.15 +22" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.cooAhu
  const cooAhuFn = pulse_27dcacc8({ period: 7200, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.heaAhu
  const heaAhuFn = pulse_27dcacc8({ period: 7200, shift: 5000, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.uCoo
  const uCooFn = ramp_3c414377({ duration: 3600, height: -1, offset: 1, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.uHea
  const uHeaFn = ramp_3c414377({ duration: 3600, height: 1, startTime: 5500 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.VActCooMax_flow
  const VActCooMax_flowFn = constant_baefa089({ k: 0.075 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.VActHeaMax_flow
  const VActHeaMax_flowFn = constant_baefa089({ k: 0.07 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.VActMin_flow
  const VActMin_flowFn = constant_baefa089({ k: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.VColDuc
  const VColDucFn = sin_9696c4d3({ amplitude: 0.002, freqHz: "1/3600", offset: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.VHotDuc
  const VHotDucFn = sin_9696c4d3({ amplitude: 0.002, freqHz: "1/3600", offset: 0.015 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Dampers.dam1
  const dam1Fn = dampers_0a9c9745({ kDam: 1, VCooMax_flow: 0.08, VHeaMax_flow: 0.06 });

  return (
    {  }
  ) => {
    const TCooSup = TCooSupFn({});
    const THeaSup = THeaSupFn({});
    const TZon = TZonFn({});
    const cooAhu = cooAhuFn({});
    const heaAhu = heaAhuFn({});
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const VActCooMax_flow = VActCooMax_flowFn({});
    const VActHeaMax_flow = VActHeaMax_flowFn({});
    const VActMin_flow = VActMin_flowFn({});
    const VColDuc = VColDucFn({});
    const VHotDuc = VHotDucFn({});
    const dam1 = dam1Fn({ TColSup: TCooSup.y, THotSup: THeaSup.y, TZon: TZon.y, u1CooAHU: cooAhu.y, u1HeaAHU: heaAhu.y, uCoo: uCoo.y, uHea: uHea.y, VActCooMax_flow: VActCooMax_flow.y, VActHeaMax_flow: VActHeaMax_flow.y, VActMin_flow: VActMin_flow.y, VColDucDis_flow: VColDuc.y, VHotDucDis_flow: VHotDuc.y });

    return {};
  }
}
