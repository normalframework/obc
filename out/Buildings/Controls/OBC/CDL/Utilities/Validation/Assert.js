
// http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.Assert
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const assert_5d5700df = require("../Assert");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.Assert.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Utilities.Validation.Assert.assert
  const assertFn = assert_5d5700df({ message: "input became false" });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const assert = assertFn({ u: booPul.y });

    return { booPul: booPul, assert: assert };
  }
}
