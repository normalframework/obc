
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialState
const pid_5345d21d = require("../PID");
const constant_d2aca5e8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialState.yMea
  const yMeaFn = constant_d2aca5e8({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialState.ySet
  const ySetFn = constant_d2aca5e8({ k: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialState.limPI
  const limPIFn = pid_5345d21d({ controllerType: 1, k: 3, xi_start: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialState.limPID
  const limPIDFn = pid_5345d21d({ controllerType: 3, k: 3, xi_start: 0.25 });

  return (
    {  }
  ) => {
    const yMea = yMeaFn({});
    const ySet = ySetFn({});
    const limPI = limPIFn({ u_m: yMea.y, u_s: ySet.y });
    const limPID = limPIDFn({ u_m: yMea.y, u_s: ySet.y });

    return { yMea: yMea, ySet: ySet, limPI: limPI, limPID: limPID };
  }
}
