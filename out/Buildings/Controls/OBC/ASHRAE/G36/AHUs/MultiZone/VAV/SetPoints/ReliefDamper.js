
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper
const pid_a5fb25dc = require("../../../../../../CDL/Reals/PID");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		dpBuiSet = 12,
		k = 0.5,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper.conErr
  const conErrFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper.zer
  const zerFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper.conP
  const conPFn = pid_a5fb25dc({ controllerType: 0, k: k });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper.zerDam
  const zerDamFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReliefDamper.dpBuiSetPoi
  const dpBuiSetPoiFn = constant_baefa089({ k: dpBuiSet });

  return (
    { u1SupFan }
  ) => {
    const conErr = conErrFn({});
    const zer = zerFn({});
    const conP = conPFn({ u_m: conErr.y, u_s: zer.y });
    const zerDam = zerDamFn({});
    const swi = swiFn({ u1: conP.y, u2: u1SupFan, u3: zerDam.y });
    const dpBuiSetPoi = dpBuiSetPoiFn({});

    return { yRelDam: swi.y };
  }
}
