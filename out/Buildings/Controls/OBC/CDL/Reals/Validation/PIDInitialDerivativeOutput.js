
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialDerivativeOutput
const pid_5345d21d = require("../PID");
const constant_d2aca5e8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialDerivativeOutput.yMea
  const yMeaFn = constant_d2aca5e8({ k: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialDerivativeOutput.ySet
  const ySetFn = constant_d2aca5e8({ k: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialDerivativeOutput.limPD
  const limPDFn = pid_5345d21d({ controllerType: 2, k: 3, yd_start: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDInitialDerivativeOutput.limPID
  const limPIDFn = pid_5345d21d({ controllerType: 3, k: 3, yd_start: 0.2 });

  return (
    {  }
  ) => {
    const yMea = yMeaFn({});
    const ySet = ySetFn({});
    const limPD = limPDFn({ u_m: yMea.y, u_s: ySet.y });
    const limPID = limPIDFn({ u_m: yMea.y, u_s: ySet.y });

    return { yMea: yMea, ySet: ySet, limPD: limPD, limPID: limPID };
  }
}
