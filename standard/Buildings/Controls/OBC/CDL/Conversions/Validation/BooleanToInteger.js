
// http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.BooleanToInteger
const booleantointeger_8f143d61 = require("../BooleanToInteger");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.BooleanToInteger.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.BooleanToInteger.booToInt
  const booToIntFn = booleantointeger_8f143d61({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booToInt = booToIntFn({ u: booPul.y });

    return { booPul: booPul, booToInt: booToInt };
  }
}
