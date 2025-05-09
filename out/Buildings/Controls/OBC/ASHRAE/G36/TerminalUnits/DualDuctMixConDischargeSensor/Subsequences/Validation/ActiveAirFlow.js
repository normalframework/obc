
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.ActiveAirFlow
const activeairflow_a914e1a7 = require("../ActiveAirFlow");
const realtointeger_2917999f = require("../../../../../../CDL/Conversions/RealToInteger");
const round_9947f9a0 = require("../../../../../../CDL/Reals/Round");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.ActiveAirFlow.opeMod
  const opeModFn = ramp_40ddd056({ duration: 3600, height: 5, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.ActiveAirFlow.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.ActiveAirFlow.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.ActiveAirFlow.minFlo
  const minFloFn = sin_f9d5a014({ amplitude: 0.3, freqHz: 1/3600, offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.ActiveAirFlow.actAirSet
  const actAirSetFn = activeairflow_a914e1a7({ VCooMax_flow: 0.5, VHeaMax_flow: 0.4 });

  return (
    {  }
  ) => {
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const minFlo = minFloFn({});
    const actAirSet = actAirSetFn({ uOpeMod: reaToInt2.y, VOccMin_flow: minFlo.y });

    return { opeMod: opeMod, round2: round2, reaToInt2: reaToInt2, minFlo: minFlo, actAirSet: actAirSet };
  }
}
