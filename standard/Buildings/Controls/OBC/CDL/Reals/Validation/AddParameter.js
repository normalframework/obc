
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.AddParameter
const addparameter_2b4d5fb6 = require("../AddParameter");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.AddParameter.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.AddParameter.addPar
  const addParFn = addparameter_2b4d5fb6({ p: 0.5 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const addPar = addParFn({ u: ramp1.y });

    return { ramp1: ramp1, addPar: addPar };
  }
}
