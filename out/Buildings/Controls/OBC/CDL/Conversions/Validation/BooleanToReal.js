
// http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.BooleanToReal
const booleantoreal_552dc85b = require("../BooleanToReal");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.BooleanToReal.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Conversions.Validation.BooleanToReal.booToRea
  const booToReaFn = booleantoreal_552dc85b({});

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booToRea = booToReaFn({ u: booPul.y });

    return { booPul: booPul, booToRea: booToRea };
  }
}
