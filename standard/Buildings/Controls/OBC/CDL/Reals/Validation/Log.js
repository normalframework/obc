
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Log
const log_5345c7d6 = require("../Log");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Log.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 5, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Log.log1
  const log1Fn = log_5345c7d6({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const log1 = log1Fn({ u: ramp1.y });

    return { ramp1: ramp1, log1: log1 };
  }
}
