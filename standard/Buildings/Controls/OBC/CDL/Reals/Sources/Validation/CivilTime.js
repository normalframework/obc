
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.CivilTime
const civiltime_a94bb59c = require("../CivilTime");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.CivilTime.civTim
  const civTimFn = civiltime_a94bb59c({});

  return (
    {  }
  ) => {
    const civTim = civTimFn({});

    return { civTim: civTim };
  }
}
