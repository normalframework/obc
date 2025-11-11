
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor
const constant_01efacbe = require("../../Integers/Sources/Constant");
const pulse_02f178bf = require("../../Integers/Sources/Pulse");
const integerextractor_205d8be3 = require("../IntegerExtractor");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.conInt2
  const conInt2Fn = constant_01efacbe({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.conInt3
  const conInt3Fn = constant_01efacbe({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.conInt
  const conIntFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.extIndInt
  const extIndIntFn = integerextractor_205d8be3({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.conInt1
  const conInt1Fn = constant_01efacbe({ k: 6 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.extIndInt1
  const extIndInt1Fn = integerextractor_205d8be3({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.conInt4
  const conInt4Fn = constant_01efacbe({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.extIndInt2
  const extIndInt2Fn = integerextractor_205d8be3({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.intPul2
  const intPul2Fn = pulse_02f178bf({ amplitude: 3, offset: -1, period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.extIndInt3
  const extIndInt3Fn = integerextractor_205d8be3({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.intPul3
  const intPul3Fn = pulse_02f178bf({ amplitude: -3, offset: 3, period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.extIndInt4
  const extIndInt4Fn = integerextractor_205d8be3({ nin: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 1, period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractor.intPul1
  const intPul1Fn = pulse_02f178bf({ amplitude: 2, offset: -1, period: 0.3 });

  return (
    {  }
  ) => {
    const conInt2 = conInt2Fn({});
    const conInt3 = conInt3Fn({});
    const conInt = conIntFn({});
    const extIndInt = extIndIntFn({ index: conInt.y });
    const conInt1 = conInt1Fn({});
    const extIndInt1 = extIndInt1Fn({ index: conInt1.y });
    const conInt4 = conInt4Fn({});
    const extIndInt2 = extIndInt2Fn({ index: conInt4.y });
    const intPul2 = intPul2Fn({});
    const extIndInt3 = extIndInt3Fn({ index: intPul2.y });
    const intPul3 = intPul3Fn({});
    const extIndInt4 = extIndInt4Fn({ index: intPul3.y });
    const intPul = intPulFn({});
    const intPul1 = intPul1Fn({});

    return { conInt2: conInt2, conInt3: conInt3, conInt: conInt, extIndInt: extIndInt, conInt1: conInt1, extIndInt1: extIndInt1, conInt4: conInt4, extIndInt2: extIndInt2, intPul2: intPul2, extIndInt3: extIndInt3, intPul3: intPul3, extIndInt4: extIndInt4, intPul: intPul, intPul1: intPul1 };
  }
}
