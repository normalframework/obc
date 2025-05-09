
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal
const constant_01efacbe = require("../../Integers/Sources/Constant");
const pulse_02f178bf = require("../../Integers/Sources/Pulse");
const integerextractsignal_2d08d8c8 = require("../IntegerExtractSignal");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal.conInt2
  const conInt2Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal.conInt3
  const conInt3Fn = constant_01efacbe({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal.extIntSig
  const extIntSigFn = integerextractsignal_2d08d8c8({ extract: "{3,2,4}", nin: 4, nout: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal.extIntSig1
  const extIntSig1Fn = integerextractsignal_2d08d8c8({ extract: "{3,2,4,2,3}", nin: 4, nout: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 1, period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerExtractSignal.intPul1
  const intPul1Fn = pulse_02f178bf({ amplitude: 2, offset: -1, period: 0.3 });

  return (
    {  }
  ) => {
    const conInt2 = conInt2Fn({});
    const conInt3 = conInt3Fn({});
    const extIntSig = extIntSigFn({});
    const extIntSig1 = extIntSig1Fn({});
    const intPul = intPulFn({});
    const intPul1 = intPul1Fn({});

    return { conInt2: conInt2, conInt3: conInt3, extIntSig: extIntSig, extIntSig1: extIntSig1, intPul: intPul, intPul1: intPul1 };
  }
}
