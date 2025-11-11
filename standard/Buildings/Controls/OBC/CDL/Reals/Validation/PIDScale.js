
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale
const integratorwithreset_299c1be4 = require("../IntegratorWithReset");
const multiplybyparameter_8938fce0 = require("../MultiplyByParameter");
const pid_5345d21d = require("../PID");
const pulse_dac91fd5 = require("../Sources/Pulse");
const constant_b8684894 = require("../../Logical/Sources/Constant");
const constant_b0edecc8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.resSig
  const resSigFn = constant_b8684894({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.pulse
  const pulseFn = pulse_dac91fd5({ amplitude: 1000, period: 50 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: 1/1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.pidNoSca
  const pidNoScaFn = pid_5345d21d({ controllerType: 3, k: 2, Td: 2, Ti: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.resVal
  const resValFn = constant_b0edecc8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.pla2
  const pla2Fn = integratorwithreset_299c1be4({ k: 1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 1/1000 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.pidSca
  const pidScaFn = pid_5345d21d({ controllerType: 3, k: 2, r: 1000, Td: 2, Ti: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDScale.pla1
  const pla1Fn = integratorwithreset_299c1be4({ k: 1000 });

  return (
    {  }
  ) => {
    const resSig = resSigFn({});
    const pulse = pulseFn({});
    const gai = gaiFn({ u: pulse.y });
    const pidNoSca = pidNoScaFn({ u_s: gai.y });
    const resVal = resValFn({});
    const pla2 = pla2Fn({ trigger: resSig.y, u: pidNoSca.y, y_reset_in: resVal.y });
    const gai1 = gai1Fn({ u: pla2.y });
    const pidSca = pidScaFn({ u_s: pulse.y });
    const pla1 = pla1Fn({ trigger: resSig.y, u: pidSca.y, y_reset_in: resVal.y });

    return { resSig: resSig, pulse: pulse, gai: gai, pidNoSca: pidNoSca, resVal: resVal, pla2: pla2, gai1: gai1, pidSca: pidSca, pla1: pla1 };
  }
}
