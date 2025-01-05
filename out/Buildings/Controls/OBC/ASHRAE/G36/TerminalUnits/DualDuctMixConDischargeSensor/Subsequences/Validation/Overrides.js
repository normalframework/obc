
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides
const overrides_20de029c = require("../Overrides");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.oveDam
  const oveDamFn = ramp_3c414377({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.oveFlo
  const oveFloFn = ramp_3c414377({ duration: 2000, height: 3, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.round2
  const round2Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.oveDam1
  const oveDam1Fn = ramp_3c414377({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.round3
  const round3Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.reaToInt3
  const reaToInt3Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.cooDamPos
  const cooDamPosFn = ramp_3c414377({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.heaDamPos
  const heaDamPosFn = ramp_3c414377({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.disAirSet
  const disAirSetFn = ramp_3c414377({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Overrides.ove
  const oveFn = overrides_20de029c({ VCooMax_flow: 0.9, VHeaMax_flow: 0.8, VMin_flow: 0.1 });

  return (
    {  }
  ) => {
    const oveDam = oveDamFn({});
    const round1 = round1Fn({ u: oveDam.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const oveFlo = oveFloFn({});
    const round2 = round2Fn({ u: oveFlo.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const oveDam1 = oveDam1Fn({});
    const round3 = round3Fn({ u: oveDam1.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const cooDamPos = cooDamPosFn({});
    const heaDamPos = heaDamPosFn({});
    const disAirSet = disAirSetFn({});
    const ove = oveFn({ oveCooDamPos: reaToInt1.y, oveFloSet: reaToInt2.y, oveHeaDamPos: reaToInt3.y, uCooDam: cooDamPos.y, uHeaDam: heaDamPos.y, VActSet_flow: disAirSet.y });

    return {};
  }
}
