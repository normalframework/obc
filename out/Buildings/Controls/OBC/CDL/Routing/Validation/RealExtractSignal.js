
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal
const pulse_dac91fd5 = require("../../Reals/Sources/Pulse");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");
const realextractsignal_6e8b8bce = require("../RealExtractSignal");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.extSig
  const extSigFn = realextractsignal_6e8b8bce({ extract: "{1,2,5}", nin: 5, nout: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.extSig1
  const extSig1Fn = realextractsignal_6e8b8bce({ extract: "{1,2,5,3,4,2}", nin: 5, nout: 6 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.pul
  const pulFn = pulse_dac91fd5({ amplitude: 0.5, period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.pul1
  const pul1Fn = pulse_dac91fd5({ amplitude: 1.5, offset: -0.2, period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.ram
  const ramFn = ramp_40ddd056({ duration: 1, height: 5, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.ram1
  const ram1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealExtractSignal.ram2
  const ram2Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -2 });

  return (
    {  }
  ) => {
    const extSig = extSigFn({});
    const extSig1 = extSig1Fn({});
    const pul = pulFn({});
    const pul1 = pul1Fn({});
    const ram = ramFn({});
    const ram1 = ram1Fn({});
    const ram2 = ram2Fn({});

    return { extSig: extSig, extSig1: extSig1, pul: pul, pul1: pul1, ram: ram, ram1: ram1, ram2: ram2 };
  }
}
