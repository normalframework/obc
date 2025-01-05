
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.ActiveAirFlow
const activeairflow_4b069e0f = require("../ActiveAirFlow");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.ActiveAirFlow.opeMod
  const opeModFn = ramp_3c414377({ duration: 3600, height: 5, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.ActiveAirFlow.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.ActiveAirFlow.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.ActiveAirFlow.minFlo
  const minFloFn = sin_9696c4d3({ amplitude: 0.3, freqHz: "1/3600", offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.ActiveAirFlow.actAirSet
  const actAirSetFn = activeairflow_4b069e0f({ VCooMax_flow: 0.5 });

  return (
    {  }
  ) => {
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const minFlo = minFloFn({});
    const actAirSet = actAirSetFn({ uOpeMod: reaToInt2.y, VOccMin_flow: minFlo.y });

    return {};
  }
}
