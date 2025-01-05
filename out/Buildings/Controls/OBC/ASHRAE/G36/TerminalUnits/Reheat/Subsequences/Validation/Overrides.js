
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides
const overrides_189addbb = require("../Overrides");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.oveDam
  const oveDamFn = ramp_3c414377({ duration: 2000, height: 2, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.round1
  const round1Fn = round_13f7599f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.damPos
  const damPosFn = ramp_3c414377({ duration: 3600, height: 0.5, offset: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.heaOff
  const heaOffFn = pulse_27dcacc8({ period: 3600, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Validation.Overrides.heaValPos
  const heaValPosFn = ramp_3c414377({ duration: 3600, height: 0.5, offset: 0.5 });
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

    return {};
  }
}
