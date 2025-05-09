
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID
const pid_5345d21d = require("../PID");
const constant_d2aca5e8 = require("../Sources/Constant");
const pulse_dac91fd5 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.const
  const _constFn = constant_d2aca5e8({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.pulse
  const pulseFn = pulse_dac91fd5({ period: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.limP
  const limPFn = pid_5345d21d({ controllerType: 0, Td: 1, Ti: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.limPD
  const limPDFn = pid_5345d21d({ controllerType: 2, Td: 1, Ti: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.limPI
  const limPIFn = pid_5345d21d({ controllerType: 1, Td: 1, Ti: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.limPID
  const limPIDFn = pid_5345d21d({ controllerType: 3, Td: 1, Ti: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PID.noLimPID
  const noLimPIDFn = pid_5345d21d({ controllerType: 3, Td: 1, Ti: 1, yMax: 1000000000000000, yMin: -1000000000000000 });

  return (
    {  }
  ) => {
    const _const = _constFn({});
    const pulse = pulseFn({});
    const limP = limPFn({ u_m: _const.y, u_s: pulse.y });
    const limPD = limPDFn({ u_m: _const.y, u_s: pulse.y });
    const limPI = limPIFn({ u_m: _const.y, u_s: pulse.y });
    const limPID = limPIDFn({ u_m: _const.y, u_s: pulse.y });
    const noLimPID = noLimPIDFn({ u_m: _const.y, u_s: pulse.y });

    return { _const: _const, pulse: pulse, limP: limP, limPD: limPD, limPI: limPI, limPID: limPID, noLimPID: noLimPID };
  }
}
