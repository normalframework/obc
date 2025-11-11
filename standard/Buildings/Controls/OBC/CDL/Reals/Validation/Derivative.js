
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative
const abs_53459d04 = require("../Abs");
const cos_5345a619 = require("../Cos");
const derivative_d0444cb5 = require("../Derivative");
const integratorwithreset_299c1be4 = require("../IntegratorWithReset");
const lessthreshold_854034e4 = require("../LessThreshold");
const multiplybyparameter_8938fce0 = require("../MultiplyByParameter");
const civiltime_a94bb59c = require("../Sources/CivilTime");
const subtract_040901c2 = require("../Subtract");
const constant_b8684894 = require("../../Logical/Sources/Constant");
const constant_b0edecc8 = require("../Sources/Constant");
const ramp_41958736 = require("../Sources/Ramp");
const assert_3c4eefbf = require("../../Utilities/Assert");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.con
  const conFn = constant_b0edecc8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.ram
  const ramFn = ramp_41958736({ duration: 10, height: 0.09, offset: 0.01, startTime: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.booSig
  const booSigFn = constant_b8684894({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.modTim
  const modTimFn = civiltime_a94bb59c({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.cos
  const cosFn = cos_5345a619({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.intWitRes
  const intWitResFn = integratorwithreset_299c1be4({ y_start: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.der1
  const der1Fn = derivative_d0444cb5({ y_start: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.sub
  const subFn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.abs
  const absFn = abs_53459d04({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.lesThr
  const lesThrFn = lessthreshold_854034e4({ h: 0.01, t: 0.1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.assMes
  const assMesFn = assert_3c4eefbf({ message: "Differentiated value differs more than threshold" });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.con2
  const con2Fn = constant_b0edecc8({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.T
  const TFn = constant_b0edecc8({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Derivative.der2
  const der2Fn = derivative_d0444cb5({ y_start: 0 });

  return (
    {  }
  ) => {
    const con = conFn({});
    const ram = ramFn({});
    const booSig = booSigFn({});
    const modTim = modTimFn({});
    const gai = gaiFn({ u: modTim.y });
    const cos = cosFn({ u: gai.y });
    const intWitRes = intWitResFn({ trigger: booSig.y, y_reset_in: cos.y });
    const der1 = der1Fn({ k: con.y, T: ram.y, u: intWitRes.y });
    const sub = subFn({ u1: der1.y, u2: cos.y });
    const abs = absFn({ u: sub.y });
    const lesThr = lesThrFn({ u: abs.y });
    const assMes = assMesFn({ u: lesThr.y });
    const con2 = con2Fn({});
    const T = TFn({});
    const der2 = der2Fn({ k: con2.y, T: T.y, u: intWitRes.y });

    return { con: con, ram: ram, booSig: booSig, modTim: modTim, gai: gai, cos: cos, intWitRes: intWitRes, der1: der1, sub: sub, abs: abs, lesThr: lesThr, assMes: assMes, con2: con2, T: T, der2: der2 };
  }
}
