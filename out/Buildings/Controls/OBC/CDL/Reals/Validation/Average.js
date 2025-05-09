
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Average
const average_eef869af = require("../Average");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Average.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Average.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 3, offset: 1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Average.avg1
  const avg1Fn = average_eef869af({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const avg1 = avg1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, avg1: avg1 };
  }
}
