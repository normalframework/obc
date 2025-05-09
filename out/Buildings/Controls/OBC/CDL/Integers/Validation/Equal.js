
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Equal
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const equal_2c2e9230 = require("../Equal");
const timetable_9d9f373d = require("../../Reals/Sources/TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Equal.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Equal.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Equal.intEqu
  const intEquFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Equal.timTabLin
  const timTabLinFn = timetable_9d9f373d({ smoothness: 1, table: [0,0;0.3,1;0.5,0;0.7,1;1,0] });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Equal.timTabLin1
  const timTabLin1Fn = timetable_9d9f373d({ smoothness: 1, table: [0,0;0.35,1;0.55,0;0.7,1;1,0] });

  return (
    {  }
  ) => {
    const reaToInt = reaToIntFn({});
    const reaToInt1 = reaToInt1Fn({});
    const intEqu = intEquFn({ u1: reaToInt.y, u2: reaToInt1.y });
    const timTabLin = timTabLinFn({});
    const timTabLin1 = timTabLin1Fn({});

    return { reaToInt: reaToInt, reaToInt1: reaToInt1, intEqu: intEqu, timTabLin: timTabLin, timTabLin1: timTabLin1 };
  }
}
