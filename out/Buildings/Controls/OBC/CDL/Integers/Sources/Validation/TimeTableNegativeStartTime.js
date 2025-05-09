
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.TimeTableNegativeStartTime
const timetable_56bd0b27 = require("../TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.TimeTableNegativeStartTime.intTimTab
  const intTimTabFn = timetable_56bd0b27({ period: 5, table: [0,1,4;1.3,2,2;2.9,0,-1;4,3,7] });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.TimeTableNegativeStartTime.intTimTab1
  const intTimTab1Fn = timetable_56bd0b27({ period: 11, table: [0,-1,-2;6,1,4;7.3,2,2;8.9,0,-1;10,3,7] });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.TimeTableNegativeStartTime.tabOneRow
  const tabOneRowFn = timetable_56bd0b27({ period: 2, table: [0,-1] });

  return (
    {  }
  ) => {
    const intTimTab = intTimTabFn({});
    const intTimTab1 = intTimTab1Fn({});
    const tabOneRow = tabOneRowFn({});

    return { intTimTab: intTimTab, intTimTab1: intTimTab1, tabOneRow: tabOneRow };
  }
}
