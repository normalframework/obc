
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TimeSuppressionPositiveStartTime
const timesuppression_ee14a4af = require("../TimeSuppression");
const ramp_3c414377 = require("../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TimeSuppressionPositiveStartTime.cooSet
  const cooSetFn = ramp_3c414377({ duration: 600, height: 5, offset: 295.15, startTime: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TimeSuppressionPositiveStartTime.zonTem
  const zonTemFn = sin_9696c4d3({ amplitude: 2, freqHz: 1/7200, offset: 298.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TimeSuppressionPositiveStartTime.timSupAla
  const timSupAlaFn = timesuppression_ee14a4af({ chaRat: 1080, maxTim: 7200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TimeSuppressionPositiveStartTime.timSupCooReq
  const timSupCooReqFn = timesuppression_ee14a4af({});

  return (
    {  }
  ) => {
    const cooSet = cooSetFn({});
    const zonTem = zonTemFn({});
    const timSupAla = timSupAlaFn({ TSet: cooSet.y, TZon: zonTem.y });
    const timSupCooReq = timSupCooReqFn({ TSet: cooSet.y, TZon: zonTem.y });

    return { cooSet: cooSet, zonTem: zonTem, timSupAla: timSupAla, timSupCooReq: timSupCooReq };
  }
}
