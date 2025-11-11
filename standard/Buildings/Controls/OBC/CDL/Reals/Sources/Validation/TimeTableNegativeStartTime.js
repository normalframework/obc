
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.TimeTableNegativeStartTime
const timetable_9d9f373d = require("../TimeTable");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.TimeTableNegativeStartTime.timTabCon
  const timTabConFn = timetable_9d9f373d({ smoothness: 1, table: [[0,0],[6*3600,1],[18*3600,0.5],[24*3600,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.TimeTableNegativeStartTime.timTabLin
  const timTabLinFn = timetable_9d9f373d({ smoothness: 0, table: [[0,0],[6*3600,1],[18*3600,0.5],[24*3600,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.TimeTableNegativeStartTime.timTabLinCon
  const timTabLinConFn = timetable_9d9f373d({ smoothness: 0, table: [[0,0],[6*3600,0],[6*3600,1],[18*3600,0.5],[24*3600,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.TimeTableNegativeStartTime.timTabLinDer
  const timTabLinDerFn = timetable_9d9f373d({ extrapolation: 1, smoothness: 0, table: [[0,0],[6*3600,1],[18*3600,0.5],[24*3600,0]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.TimeTableNegativeStartTime.timTabLinHol
  const timTabLinHolFn = timetable_9d9f373d({ extrapolation: 0, smoothness: 0, table: [[0,0],[6*3600,1],[18*3600,0.5],[24*3600,0]] });

  return (
    {  }
  ) => {
    const timTabCon = timTabConFn({});
    const timTabLin = timTabLinFn({});
    const timTabLinCon = timTabLinConFn({});
    const timTabLinDer = timTabLinDerFn({});
    const timTabLinHol = timTabLinHolFn({});

    return { timTabCon: timTabCon, timTabLin: timTabLin, timTabLinCon: timTabLinCon, timTabLinDer: timTabLinDer, timTabLinHol: timTabLinHol };
  }
}
