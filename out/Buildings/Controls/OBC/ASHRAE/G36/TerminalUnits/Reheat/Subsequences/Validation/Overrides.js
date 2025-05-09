
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides
const overrides_189addbb = require("../Overrides");
const realtointeger_2917999f = require("../../../../../../CDL/Conversions/RealToInteger");
const not_f2b50019 = require("../../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_9947f9a0 = require("../../../../../../CDL/Reals/Round");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.oveDam
  const oveDamFn = ramp_40ddd056({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.damPos
  const damPosFn = ramp_40ddd056({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.heaOff
  const heaOffFn = pulse_cdc9ff89({ period: 3600, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.heaValPos
  const heaValPosFn = ramp_40ddd056({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.ove
  const oveFn = overrides_189addbb({});

  return (
    {  }
  ) => {
    const oveDam = oveDamFn({});
    const round1 = round1Fn({ u: oveDam.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const damPos = damPosFn({});
    const heaOff = heaOffFn({});
    const not1 = not1Fn({ u: heaOff.y });
    const heaValPos = heaValPosFn({});
    const ove = oveFn({ oveDamPos: reaToInt1.y, uDam: damPos.y, uHeaOff: not1.y, uVal: heaValPos.y });

    return { oveDam: oveDam, round1: round1, reaToInt1: reaToInt1, damPos: damPos, heaOff: heaOff, not1: not1, heaValPos: heaValPos, ove: ove };
  }
}
