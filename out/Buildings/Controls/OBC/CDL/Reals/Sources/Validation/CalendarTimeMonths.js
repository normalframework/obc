
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.CalendarTimeMonths
const calendartime_af0cf36f = require("../CalendarTime");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.CalendarTimeMonths.calTim
  const calTimFn = calendartime_af0cf36f({ zerTim: 10 });

  return (
    {  }
  ) => {
    const calTim = calTimFn({});

    return { calTim: calTim };
  }
}
