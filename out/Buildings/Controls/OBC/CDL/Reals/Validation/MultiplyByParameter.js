
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiplyByParameter
const multiplybyparameter_8938fce0 = require("../MultiplyByParameter");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiplyByParameter.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 2, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MultiplyByParameter.gain1
  const gain1Fn = multiplybyparameter_8938fce0({ k: 2.5 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const gain1 = gain1Fn({ u: ramp1.y });

    return { ramp1: ramp1, gain1: gain1 };
  }
}
