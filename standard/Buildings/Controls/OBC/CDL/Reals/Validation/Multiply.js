
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Multiply
const multiply_a5ce8cd2 = require("../Multiply");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Multiply.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Multiply.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Multiply.product1
  const product1Fn = multiply_a5ce8cd2({});

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const product1 = product1Fn({ u1: ramp1.y, u2: ramp2.y });

    return { ramp1: ramp1, ramp2: ramp2, product1: product1 };
  }
}
