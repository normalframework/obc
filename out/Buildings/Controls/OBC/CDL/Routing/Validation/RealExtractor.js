
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor
const constant_01efacbe = require("../../Integers/Sources/Constant");
const pulse_02f178bf = require("../../Integers/Sources/Pulse");
const pulse_dac91fd5 = require("../../Reals/Sources/Pulse");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const realextractor_ca8eb1e9 = require("../RealExtractor");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.conInt
  const conIntFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.extIndSig
  const extIndSigFn = realextractor_ca8eb1e9({ nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.conInt1
  const conInt1Fn = constant_01efacbe({ k: 6 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.extIndSig1
  const extIndSig1Fn = realextractor_ca8eb1e9({ nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.conInt2
  const conInt2Fn = constant_01efacbe({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.extIndSig2
  const extIndSig2Fn = realextractor_ca8eb1e9({ nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 3, offset: -1, period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.extIndSig3
  const extIndSig3Fn = realextractor_ca8eb1e9({ nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.intPul1
  const intPul1Fn = pulse_02f178bf({ amplitude: -3, offset: 3, period: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.extIndSig4
  const extIndSig4Fn = realextractor_ca8eb1e9({ nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.pul
  const pulFn = pulse_dac91fd5({ amplitude: 0.5, period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.pul1
  const pul1Fn = pulse_dac91fd5({ amplitude: 1.5, offset: -0.2, period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.ram
  const ramFn = ramp_40ddd056({ duration: 1, height: 5, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.ram1
  const ram1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractor.ram2
  const ram2Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -2 });

  return (
    {  }
  ) => {
    const conInt = conIntFn({});
    const extIndSig = extIndSigFn({ index: conInt.y });
    const conInt1 = conInt1Fn({});
    const extIndSig1 = extIndSig1Fn({ index: conInt1.y });
    const conInt2 = conInt2Fn({});
    const extIndSig2 = extIndSig2Fn({ index: conInt2.y });
    const intPul = intPulFn({});
    const extIndSig3 = extIndSig3Fn({ index: intPul.y });
    const intPul1 = intPul1Fn({});
    const extIndSig4 = extIndSig4Fn({ index: intPul1.y });
    const pul = pulFn({});
    const pul1 = pul1Fn({});
    const ram = ramFn({});
    const ram1 = ram1Fn({});
    const ram2 = ram2Fn({});

    return { conInt: conInt, extIndSig: extIndSig, conInt1: conInt1, extIndSig1: extIndSig1, conInt2: conInt2, extIndSig2: extIndSig2, intPul: intPul, extIndSig3: extIndSig3, intPul1: intPul1, extIndSig4: extIndSig4, pul: pul, pul1: pul1, ram: ram, ram1: ram1, ram2: ram2 };
  }
}
