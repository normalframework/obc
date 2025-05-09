
// http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.UnitDelay
const unitdelay_c1704a5f = require("../UnitDelay");
const sin_5345e16a = require("../../Reals/Sin");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.UnitDelay.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.UnitDelay.sin1
  const sin1Fn = sin_5345e16a({});
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.UnitDelay.unitDelay1
  const unitDelay1Fn = unitdelay_c1704a5f({ samplePeriod: 0.2 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });
    const unitDelay1 = unitDelay1Fn({ u: sin1.y });

    return { ramp1: ramp1, sin1: sin1, unitDelay1: unitDelay1 };
  }
}
