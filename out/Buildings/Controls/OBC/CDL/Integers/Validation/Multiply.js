
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Multiply
const realtointeger_2917999f = require("../../Conversions/RealToInteger");
const multiply_83d8c9a8 = require("../Multiply");
const timetable_9d9f373d = require("../../Reals/Sources/TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Multiply.reaToInt1
  const reaToInt1Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Multiply.reaToInt2
  const reaToInt2Fn = realtointeger_2917999f({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Multiply.product
  const productFn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Multiply.timTabLin
  const timTabLinFn = timetable_9d9f373d({ smoothness: 1, table: [0,-1;0.3,0.5;0.5,0;0.7,1;1,0] });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Multiply.timTabLin1
  const timTabLin1Fn = timetable_9d9f373d({ smoothness: 1, table: [0,0;0.35,1;0.55,0;0.7,1;1,0] });

  return (
    {  }
  ) => {
    const reaToInt1 = reaToInt1Fn({});
    const reaToInt2 = reaToInt2Fn({});
    const product = productFn({ u1: reaToInt1.y, u2: reaToInt2.y });
    const timTabLin = timTabLinFn({});
    const timTabLin1 = timTabLin1Fn({});

    return { reaToInt1: reaToInt1, reaToInt2: reaToInt2, product: product, timTabLin: timTabLin, timTabLin1: timTabLin1 };
  }
}
