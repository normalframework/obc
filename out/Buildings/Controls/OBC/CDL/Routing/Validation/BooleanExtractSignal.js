
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal
const constant_655d39b4 = require("../../Logical/Sources/Constant");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const booleanextractsignal_51097a1e = require("../BooleanExtractSignal");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 0.3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal.con
  const conFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal.con1
  const con1Fn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal.extBooSig
  const extBooSigFn = booleanextractsignal_51097a1e({ extract: "{3,2,4}", nin: 4, nout: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanExtractSignal.extBooSig1
  const extBooSig1Fn = booleanextractsignal_51097a1e({ extract: "{3,2,4,1,1}", nin: 4, nout: 5 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const booPul1 = booPul1Fn({});
    const con = conFn({});
    const con1 = con1Fn({});
    const extBooSig = extBooSigFn({});
    const extBooSig1 = extBooSig1Fn({});

    return { booPul: booPul, booPul1: booPul1, con: con, con1: con1, extBooSig: extBooSig, extBooSig1: extBooSig1 };
  }
}
