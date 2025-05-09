
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Not
const not_f2b50019 = require("../Not");
const pulse_cdc9ff89 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Not.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.Not.not1
  const not1Fn = not_f2b50019({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const not1 = not1Fn({ u: booPul.y });

    return { booPul: booPul, not1: not1 };
  }
}
