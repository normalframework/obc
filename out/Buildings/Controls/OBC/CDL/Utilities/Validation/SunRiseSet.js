
// http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.SunRiseSet
const sunriseset_38197e06 = require("../SunRiseSet");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.SunRiseSet.sunRiseSetAntarctic
  const sunRiseSetAntarcticFn = sunriseset_38197e06({ lat: -1.3089969389957, lon: 0.99483767363677, timZon: 14400 });
  // http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.SunRiseSet.sunRiseSetArctic
  const sunRiseSetArcticFn = sunriseset_38197e06({ lat: 1.2566370614359, lon: -1.2566370614359, timZon: -18000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.SunRiseSet.sunRiseSetSf
  const sunRiseSetSfFn = sunriseset_38197e06({ lat: 0.6457718232379, lon: -2.1293016874331, timZon: -28800 });
  // http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.SunRiseSet.sunRiseSetSyd
  const sunRiseSetSydFn = sunriseset_38197e06({ lat: -0.59341194567807, lon: 2.6354471705114, timZon: 36000 });

  return (
    {  }
  ) => {
    const sunRiseSetAntarctic = sunRiseSetAntarcticFn({});
    const sunRiseSetArctic = sunRiseSetArcticFn({});
    const sunRiseSetSf = sunRiseSetSfFn({});
    const sunRiseSetSyd = sunRiseSetSydFn({});

    return { sunRiseSetAntarctic: sunRiseSetAntarctic, sunRiseSetArctic: sunRiseSetArctic, sunRiseSetSf: sunRiseSetSf, sunRiseSetSyd: sunRiseSetSyd };
  }
}
