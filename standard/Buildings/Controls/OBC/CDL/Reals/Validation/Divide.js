
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Divide
const divide_777f36a7 = require("../Divide");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Divide.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Divide.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 2, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Divide.div1
  const div1Fn = divide_777f36a7({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const div1 = div1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, div1: div1 };
  }
}
