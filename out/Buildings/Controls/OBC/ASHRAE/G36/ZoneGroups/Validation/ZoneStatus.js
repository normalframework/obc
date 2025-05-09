
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus
const zonestatus_d9df93ac = require("../ZoneStatus");
const not_6d646018 = require("../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../CDL/Logical/Sources/Pulse");
const addparameter_26b0d2d7 = require("../../../../CDL/Reals/AddParameter");
const multiplybyparameter_13a4f29f = require("../../../../CDL/Reals/MultiplyByParameter");
const sin_a5fb3529 = require("../../../../CDL/Reals/Sin");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.cooDowTim
  const cooDowTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.TCooSetOcc
  const TCooSetOccFn = constant_baefa089({ k: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.THeaSetOcc
  const THeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.TCooSetUno
  const TCooSetUnoFn = constant_baefa089({ k: 303.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.THeaSetUno
  const THeaSetUnoFn = constant_baefa089({ k: 285.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.ramp2
  const ramp2Fn = ramp_3c414377({ duration: 24*3600, height: 6.2831852, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.sin2
  const sin2Fn = sin_a5fb3529({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 12.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.zonTem
  const zonTemFn = addparameter_26b0d2d7({ p: 273.15 +22.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.warUpTim
  const warUpTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.noWinZonSta
  const noWinZonStaFn = zonestatus_d9df93ac({ have_winSen: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.uWinSta
  const uWinStaFn = pulse_27dcacc8({ period: 43200, shift: 1800, width: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.ZoneStatus.witWinZonSta
  const witWinZonStaFn = zonestatus_d9df93ac({ have_winSen: true });

  return (
    {  }
  ) => {
    const cooDowTim = cooDowTimFn({});
    const TCooSetOcc = TCooSetOccFn({});
    const THeaSetOcc = THeaSetOccFn({});
    const TCooSetUno = TCooSetUnoFn({});
    const THeaSetUno = THeaSetUnoFn({});
    const ramp2 = ramp2Fn({});
    const sin2 = sin2Fn({ u: ramp2.y });
    const gai = gaiFn({ u: sin2.y });
    const zonTem = zonTemFn({ u: gai.y });
    const warUpTim = warUpTimFn({});
    const noWinZonSta = noWinZonStaFn({ cooDowTim: cooDowTim.y, TOccCooSet: TCooSetOcc.y, TOccHeaSet: THeaSetOcc.y, TUnoCooSet: TCooSetUno.y, TUnoHeaSet: THeaSetUno.y, TZon: zonTem.y, warUpTim: warUpTim.y });
    const uWinSta = uWinStaFn({});
    const not2 = not2Fn({ u: uWinSta.y });
    const witWinZonSta = witWinZonStaFn({ cooDowTim: cooDowTim.y, TOccCooSet: TCooSetOcc.y, TOccHeaSet: THeaSetOcc.y, TUnoCooSet: TCooSetUno.y, TUnoHeaSet: THeaSetUno.y, TZon: zonTem.y, u1Win: not2.y, warUpTim: warUpTim.y });

    return { cooDowTim: cooDowTim, TCooSetOcc: TCooSetOcc, THeaSetOcc: THeaSetOcc, TCooSetUno: TCooSetUno, THeaSetUno: THeaSetUno, ramp2: ramp2, sin2: sin2, gai: gai, zonTem: zonTem, warUpTim: warUpTim, noWinZonSta: noWinZonSta, uWinSta: uWinSta, not2: not2, witWinZonSta: witWinZonSta };
  }
}
