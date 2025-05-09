
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor
const constant_01efacbe = require("../../Integers/Sources/Constant");
const pulse_02f178bf = require("../../Integers/Sources/Pulse");
const constant_655d39b4 = require("../../Logical/Sources/Constant");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const booleanextractor_37604839 = require("../BooleanExtractor");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 0.3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.con
  const conFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.con1
  const con1Fn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.conInt
  const conIntFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.extIndBoo
  const extIndBooFn = booleanextractor_37604839({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.conInt1
  const conInt1Fn = constant_01efacbe({ k: 6 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.extIndBoo1
  const extIndBoo1Fn = booleanextractor_37604839({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.conInt2
  const conInt2Fn = constant_01efacbe({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.extIndBoo2
  const extIndBoo2Fn = booleanextractor_37604839({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 3, offset: -1, period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.extIndBoo3
  const extIndBoo3Fn = booleanextractor_37604839({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.intPul1
  const intPul1Fn = pulse_02f178bf({ amplitude: -3, offset: 3, period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractor.extIndBoo4
  const extIndBoo4Fn = booleanextractor_37604839({ nin: 4 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booPul1 = booPul1Fn({});
    const con = conFn({});
    const con1 = con1Fn({});
    const conInt = conIntFn({});
    const extIndBoo = extIndBooFn({ index: conInt.y });
    const conInt1 = conInt1Fn({});
    const extIndBoo1 = extIndBoo1Fn({ index: conInt1.y });
    const conInt2 = conInt2Fn({});
    const extIndBoo2 = extIndBoo2Fn({ index: conInt2.y });
    const intPul = intPulFn({});
    const extIndBoo3 = extIndBoo3Fn({ index: intPul.y });
    const intPul1 = intPul1Fn({});
    const extIndBoo4 = extIndBoo4Fn({ index: intPul1.y });

    return { booPul: booPul, booPul1: booPul1, con: con, con1: con1, conInt: conInt, extIndBoo: extIndBoo, conInt1: conInt1, extIndBoo1: extIndBoo1, conInt2: conInt2, extIndBoo2: extIndBoo2, intPul: intPul, extIndBoo3: extIndBoo3, intPul1: intPul1, extIndBoo4: extIndBoo4 };
  }
}
