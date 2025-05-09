
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch
const booleantointeger_8f143d61 = require("../../Conversions/BooleanToInteger");
const multiply_83d8c9a8 = require("../Multiply");
const constant_01efacbe = require("../Sources/Constant");
const switch_71d6ebb8 = require("../Switch");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.conInt
  const conIntFn = constant_01efacbe({ k: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1.5, width: 0.7 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.booToInt
  const booToIntFn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.proInt
  const proIntFn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 3, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.conInt1
  const conInt1Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.booPul3
  const booPul3Fn = pulse_cdc9ff89({ period: 5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.booToInt1
  const booToInt1Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.proInt1
  const proInt1Fn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.Switch.integerSwitch
  const integerSwitchFn = switch_71d6ebb8({});

  return (
    {  }
  ) => {
    const conInt = conIntFn({});
    const booPul1 = booPul1Fn({});
    const booToInt = booToIntFn({ u: booPul1.y });
    const proInt = proIntFn({ u1: conInt.y, u2: booToInt.y });
    const booPul2 = booPul2Fn({});
    const conInt1 = conInt1Fn({});
    const booPul3 = booPul3Fn({});
    const booToInt1 = booToInt1Fn({ u: booPul3.y });
    const proInt1 = proInt1Fn({ u1: conInt1.y, u2: booToInt1.y });
    const integerSwitch = integerSwitchFn({ u1: proInt.y, u2: booPul2.y, u3: proInt1.y });

    return { conInt: conInt, booPul1: booPul1, booToInt: booToInt, proInt: proInt, booPul2: booPul2, conInt1: conInt1, booPul3: booPul3, booToInt1: booToInt1, proInt1: proInt1, integerSwitch: integerSwitch };
  }
}
