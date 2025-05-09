
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides
const overrides_6f2aa088 = require("../Overrides");
const realtointeger_2917999f = require("../../../../../../CDL/Conversions/RealToInteger");
const round_9947f9a0 = require("../../../../../../CDL/Reals/Round");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.oveDam
  const oveDamFn = ramp_40ddd056({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.oveFlo
  const oveFloFn = ramp_40ddd056({ duration: 2000, height: 3, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.round2
  const round2Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.oveDam1
  const oveDam1Fn = ramp_40ddd056({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.round3
  const round3Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.reaToInt3
  const reaToInt3Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.cooDamPos
  const cooDamPosFn = ramp_40ddd056({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.heaDamPos
  const heaDamPosFn = ramp_40ddd056({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.disAirSet
  const disAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Validation.Overrides.ove
  const oveFn = overrides_6f2aa088({ VCooMax_flow: 0.9, VHeaMax_flow: 0.8, VMin_flow: 0.1 });

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

    return { oveDam: oveDam, round1: round1, reaToInt1: reaToInt1, oveFlo: oveFlo, round2: round2, reaToInt2: reaToInt2, oveDam1: oveDam1, round3: round3, reaToInt3: reaToInt3, cooDamPos: cooDamPos, heaDamPos: heaDamPos, disAirSet: disAirSet, ove: ove };
  }
}
