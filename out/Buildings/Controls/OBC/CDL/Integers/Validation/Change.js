
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const triggeredsampler_3247bbb1 = require("../../Discrete/TriggeredSampler");
const change_55b24834 = require("../Change");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const timetable_9d9f373d = require("../../Reals/Sources/TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.cha
  const chaFn = change_55b24834({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 20, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.changeSampler
  const changeSamplerFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.decreaseSampler
  const decreaseSamplerFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.increaseSampler
  const increaseSamplerFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Change.timTabLin
  const timTabLinFn = timetable_9d9f373d({ smoothness: 1, table: [0,-1;0.3,0.5;0.5,0;0.7,1;1,0] });

  return (
    {  }
  ) => {
    const reaToInt = reaToIntFn({});
    const cha = chaFn({ u: reaToInt.y });
    const ramp2 = ramp2Fn({});
    const changeSampler = changeSamplerFn({ trigger: cha.y, u: ramp2.y });
    const decreaseSampler = decreaseSamplerFn({ trigger: cha.down, u: ramp2.y });
    const increaseSampler = increaseSamplerFn({ trigger: cha.up, u: ramp2.y });
    const timTabLin = timTabLinFn({});

    return { reaToInt: reaToInt, cha: cha, ramp2: ramp2, changeSampler: changeSampler, decreaseSampler: decreaseSampler, increaseSampler: increaseSampler, timTabLin: timTabLin };
  }
}
