
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.TimeTable
const timetable_61011cf1 = require("../TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.TimeTable.booTimTab
  const booTimTabFn = timetable_61011cf1({ period: 5, table: [[0,1,0],[1.3,1,1],[2.9,0,0],[4,1,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.TimeTable.booTimTabOneRow
  const booTimTabOneRowFn = timetable_61011cf1({ period: 1, table: [0,1,0] });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.TimeTable.booTimTabTwi
  const booTimTabTwiFn = timetable_61011cf1({ period: 10, table: [[0,1,0],[1.3,1,1],[2.9,0,0],[4,1,0]], timeScale: 2 });

  return (
    {  }
  ) => {
    const booTimTab = booTimTabFn({});
    const booTimTabOneRow = booTimTabOneRowFn({});
    const booTimTabTwi = booTimTabTwiFn({});

    return { booTimTab: booTimTab, booTimTabOneRow: booTimTabOneRow, booTimTabTwi: booTimTabTwi };
  }
}
