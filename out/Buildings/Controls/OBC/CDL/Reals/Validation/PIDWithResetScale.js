
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale
const integratorwithreset_299c1be4 = require("../IntegratorWithReset");
const multiplybyparameter_8938fce0 = require("../MultiplyByParameter");
const pidwithreset_2293668c = require("../PIDWithReset");
const pulse_dac91fd5 = require("../Sources/Pulse");
const constant_b8684894 = require("../../Logical/Sources/Constant");
const pulse_50d45ca9 = require("../../Logical/Sources/Pulse");
const constant_b0edecc8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.resSig
  const resSigFn = constant_b8684894({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.booPul
  const booPulFn = pulse_50d45ca9({ period: 30 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.pulse
  const pulseFn = pulse_dac91fd5({ amplitude: 1000, period: 50 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: 1/1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.pidNoSca
  const pidNoScaFn = pidwithreset_2293668c({ controllerType: 3, k: 2, Td: 2, Ti: 1, y_reset: 0, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.resVal
  const resValFn = constant_b0edecc8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.pla2
  const pla2Fn = integratorwithreset_299c1be4({ k: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 1/1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.pidSca
  const pidScaFn = pidwithreset_2293668c({ controllerType: 3, k: 2, r: 1000, Td: 2, Ti: 1, y_reset: 0, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithResetScale.pla1
  const pla1Fn = integratorwithreset_299c1be4({ k: 1000 });

  return (
    {  }
  ) => {
    const resSig = resSigFn({});
    const booPul = booPulFn({});
    const pulse = pulseFn({});
    const gai = gaiFn({ u: pulse.y });
    const pidNoSca = pidNoScaFn({ trigger: booPul.y, u_s: gai.y });
    const resVal = resValFn({});
    const pla2 = pla2Fn({ trigger: resSig.y, u: pidNoSca.y, y_reset_in: resVal.y });
    const gai1 = gai1Fn({ u: pla2.y });
    const pidSca = pidScaFn({ trigger: booPul.y, u_s: pulse.y });
    const pla1 = pla1Fn({ trigger: resSig.y, u: pidSca.y, y_reset_in: resVal.y });

    return { resSig: resSig, booPul: booPul, pulse: pulse, gai: gai, pidNoSca: pidNoSca, resVal: resVal, pla2: pla2, gai1: gai1, pidSca: pidSca, pla1: pla1 };
  }
}
