
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanAirflowTracking
const pid_a5fb25dc = require("../../../../../../CDL/Reals/PID");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		conTyp = 1,
		difFloSet,
		k = 1,
		maxSpe = 1,
		minSpe = 0,
		Td = 0.1,
		Ti = 0.5,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanAirflowTracking.difFlo
  const difFloFn = constant_baefa089({ k: difFloSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanAirflowTracking.conErr
  const conErrFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanAirflowTracking.conP
  const conPFn = pid_a5fb25dc({ controllerType: conTyp, k: k, Td: Td, Ti: Ti, yMax: maxSpe, yMin: minSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanAirflowTracking.zerSpe
  const zerSpeFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanAirflowTracking.swi
  const swiFn = switch_6d141143({});

  return (
    { VAirSup_flow, VAirRet_flow, u1SupFan }
  ) => {
    const difFlo = difFloFn({});
    const conErr = conErrFn({ u1: VAirSup_flow, u2: difFlo.y });
    const conP = conPFn({ u_m: VAirRet_flow, u_s: conErr.y });
    const zerSpe = zerSpeFn({});
    const swi = swiFn({ u1: conP.y, u2: u1SupFan, u3: zerSpe.y });

    return { y1RetFan: u1SupFan, yRetFan: swi.y };
  }
}
