
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqual
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const greaterequal_8dfb38de = require("../GreaterEqual");
const timetable_9d9f373d = require("../../Reals/Sources/TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqual.reaToInt
  const reaToIntFn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqual.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqual.intGreEqu
  const intGreEquFn = greaterequal_8dfb38de({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqual.timTabLin
  const timTabLinFn = timetable_9d9f373d({ smoothness: 1, table: [[0,-1],[0.3,0.5],[0.5,0],[0.7,1],[1,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.GreaterEqual.timTabLin1
  const timTabLin1Fn = timetable_9d9f373d({ smoothness: 1, table: [[0,0],[0.35,1],[0.55,0],[0.7,1],[1,0]] });

  return (
    {  }
  ) => {
    const reaToInt = reaToIntFn({});
    const reaToInt1 = reaToInt1Fn({});
    const intGreEqu = intGreEquFn({ u1: reaToInt.y, u2: reaToInt1.y });
    const timTabLin = timTabLinFn({});
    const timTabLin1 = timTabLin1Fn({});

    return { reaToInt: reaToInt, reaToInt1: reaToInt1, intGreEqu: intGreEqu, timTabLin: timTabLin, timTabLin1: timTabLin1 };
  }
}
