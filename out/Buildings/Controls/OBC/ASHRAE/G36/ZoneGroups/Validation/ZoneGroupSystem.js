
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneGroupSystem
const zonegroupsystem_df7eba14 = require("../ZoneGroupSystem");
const constant_8c5ba27d = require("../../../../CDL/Integers/Sources/Constant");
const pulse_eb347360 = require("../../../../CDL/Integers/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneGroupSystem.ahuMod
  const ahuModFn = zonegroupsystem_df7eba14({ nGro: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneGroupSystem.groOne
  const groOneFn = pulse_eb347360({ offset: 1, period: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneGroupSystem.groThr
  const groThrFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneGroupSystem.groTwo
  const groTwoFn = pulse_eb347360({ amplitude: 2, offset: 1, period: 10 });

  return (
    {  }
  ) => {
    const ahuMod = ahuModFn({});
    const groOne = groOneFn({});
    const groThr = groThrFn({});
    const groTwo = groTwoFn({});

    return { ahuMod: ahuMod, groOne: groOne, groThr: groThr, groTwo: groTwo };
  }
}
