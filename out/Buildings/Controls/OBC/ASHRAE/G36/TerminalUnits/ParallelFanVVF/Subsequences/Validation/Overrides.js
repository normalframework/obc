
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides
const overrides_80ae3304 = require("../Overrides");
const realtointeger_2917999f = require("../../../../../../CDL/Conversions/RealToInteger");
const not_f2b50019 = require("../../../../../../CDL/Logical/Not");
const constant_655d39b4 = require("../../../../../../CDL/Logical/Sources/Constant");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_9947f9a0 = require("../../../../../../CDL/Reals/Round");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.oveDam
  const oveDamFn = ramp_40ddd056({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.oveDam1
  const oveDam1Fn = ramp_40ddd056({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.round3
  const round3Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.reaToInt3
  const reaToInt3Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.terFan
  const terFanFn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.damPos
  const damPosFn = ramp_40ddd056({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.heaOff
  const heaOffFn = pulse_cdc9ff89({ period: 3600, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.heaValPos
  const heaValPosFn = ramp_40ddd056({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Overrides.ove
  const oveFn = overrides_80ae3304({});

  return (
    {  }
  ) => {
    const oveDam = oveDamFn({});
    const round1 = round1Fn({ u: oveDam.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const oveDam1 = oveDam1Fn({});
    const round3 = round3Fn({ u: oveDam1.y });
    const reaToInt3 = reaToInt3Fn({ u: round3.y });
    const terFan = terFanFn({});
    const damPos = damPosFn({});
    const heaOff = heaOffFn({});
    const not1 = not1Fn({ u: heaOff.y });
    const heaValPos = heaValPosFn({});
    const ove = oveFn({ oveDamPos: reaToInt1.y, oveFan: reaToInt3.y, u1Fan: terFan.y, uDam: damPos.y, uHeaOff: not1.y, uVal: heaValPos.y });

    return { oveDam: oveDam, round1: round1, reaToInt1: reaToInt1, oveDam1: oveDam1, round3: round3, reaToInt3: reaToInt3, terFan: terFan, damPos: damPos, heaOff: heaOff, not1: not1, heaValPos: heaValPos, ove: ove };
  }
}
