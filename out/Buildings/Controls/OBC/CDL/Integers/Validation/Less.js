
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Less
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const less_a699271d = require("../Less");
const timetable_9d9f373d = require("../../Reals/Sources/TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Less.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Less.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Less.intLes
  const intLesFn = less_a699271d({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Less.timTabLin
  const timTabLinFn = timetable_9d9f373d({ smoothness: 1, table: [[0,-1],[0.3,0.5],[0.5,0],[0.7,1],[1,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Less.timTabLin1
  const timTabLin1Fn = timetable_9d9f373d({ smoothness: 1, table: [[0,0],[0.35,1],[0.55,0],[0.7,1],[1,0]] });

  return (
    {  }
  ) => {
    const reaToInt = reaToIntFn({});
    const reaToInt1 = reaToInt1Fn({});
    const intLes = intLesFn({ u1: reaToInt.y, u2: reaToInt1.y });
    const timTabLin = timTabLinFn({});
    const timTabLin1 = timTabLin1Fn({});

    return { reaToInt: reaToInt, reaToInt1: reaToInt1, intLes: intLes, timTabLin: timTabLin, timTabLin1: timTabLin1 };
  }
}
