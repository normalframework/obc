
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode
const operationmode_d69803fc = require("../OperationMode");
const booleantointeger_d87efb42 = require("../../../../CDL/Conversions/BooleanToInteger");
const constant_8c5ba27d = require("../../../../CDL/Integers/Sources/Constant");
const addparameter_26b0d2d7 = require("../../../../CDL/Reals/AddParameter");
const greater_b1da53cb = require("../../../../CDL/Reals/Greater");
const hysteresis_72a6bcc6 = require("../../../../CDL/Reals/Hysteresis");
const multiplybyparameter_13a4f29f = require("../../../../CDL/Reals/MultiplyByParameter");
const sin_a5fb3529 = require("../../../../CDL/Reals/Sin");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../CDL/Reals/Sources/Ramp");
const subtract_029d2d63 = require("../../../../CDL/Reals/Subtract");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.cooDowTim
  const cooDowTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.warUpTim
  const warUpTimFn = constant_baefa089({ k: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.TZonHeaSetUno
  const TZonHeaSetUnoFn = constant_baefa089({ k: 285.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.ramp1
  const ramp1Fn = ramp_3c414377({ duration: 172800, height: 6.2831852 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.sin1
  const sin1Fn = sin_a5fb3529({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 14.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.zonTem
  const zonTemFn = addparameter_26b0d2d7({ p: 295.65 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.greEqu2
  const greEqu2Fn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.booToInt
  const booToIntFn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.TZonCooSetUno
  const TZonCooSetUnoFn = constant_baefa089({ k: 303.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.greEqu3
  const greEqu3Fn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.booToInt1
  const booToInt1Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.dif2
  const dif2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.hys3
  const hys3Fn = hysteresis_72a6bcc6({ uHigh: 0.5, uLow: -0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.dif1
  const dif1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.hys1
  const hys1Fn = hysteresis_72a6bcc6({ uHigh: 0.5, uLow: -0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.TZonCooSetOcc
  const TZonCooSetOccFn = constant_baefa089({ k: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.higThaCooSet
  const higThaCooSetFn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.TZonHeaSetOcc
  const TZonHeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.lowThaHeaSet
  const lowThaHeaSetFn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.cloWin
  const cloWinFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.Validation.OperationMode.opeModSel
  const opeModSelFn = operationmode_d69803fc({ nZon: 1 });

  return (
    {  }
  ) => {
    const cooDowTim = cooDowTimFn({});
    const warUpTim = warUpTimFn({});
    const TZonHeaSetUno = TZonHeaSetUnoFn({});
    const ramp1 = ramp1Fn({});
    const sin1 = sin1Fn({ u: ramp1.y });
    const gai = gaiFn({ u: sin1.y });
    const zonTem = zonTemFn({ u: gai.y });
    const greEqu2 = greEqu2Fn({ u1: TZonHeaSetUno.y, u2: zonTem.y });
    const booToInt = booToIntFn({ u: greEqu2.y });
    const TZonCooSetUno = TZonCooSetUnoFn({});
    const greEqu3 = greEqu3Fn({ u1: zonTem.y, u2: TZonCooSetUno.y });
    const booToInt1 = booToInt1Fn({ u: greEqu3.y });
    const dif2 = dif2Fn({ u1: zonTem.y, u2: TZonHeaSetUno.y });
    const hys3 = hys3Fn({ u: dif2.y });
    const dif1 = dif1Fn({ u1: TZonCooSetUno.y, u2: zonTem.y });
    const hys1 = hys1Fn({ u: dif1.y });
    const TZonCooSetOcc = TZonCooSetOccFn({});
    const higThaCooSet = higThaCooSetFn({ u1: zonTem.y, u2: TZonCooSetOcc.y });
    const TZonHeaSetOcc = TZonHeaSetOccFn({});
    const lowThaHeaSet = lowThaHeaSetFn({ u1: TZonHeaSetOcc.y, u2: zonTem.y });
    const cloWin = cloWinFn({});
    const opeModSel = opeModSelFn({ maxCooDowTim: cooDowTim.y, maxWarUpTim: warUpTim.y, totColZon: booToInt.y, totHotZon: booToInt1.y, TZonMin: zonTem.y, u1EndSetBac: hys3.y, u1EndSetUp: hys1.y, u1HigOccCoo: higThaCooSet.y, u1OccHeaHig: lowThaHeaSet.y, u1SetBac: greEqu2.y, u1SetUp: greEqu3.y, uOpeWin: cloWin.y });

    return { cooDowTim: cooDowTim, warUpTim: warUpTim, TZonHeaSetUno: TZonHeaSetUno, ramp1: ramp1, sin1: sin1, gai: gai, zonTem: zonTem, greEqu2: greEqu2, booToInt: booToInt, TZonCooSetUno: TZonCooSetUno, greEqu3: greEqu3, booToInt1: booToInt1, dif2: dif2, hys3: hys3, dif1: dif1, hys1: hys1, TZonCooSetOcc: TZonCooSetOcc, higThaCooSet: higThaCooSet, TZonHeaSetOcc: TZonHeaSetOcc, lowThaHeaSet: lowThaHeaSet, cloWin: cloWin, opeModSel: opeModSel };
  }
}
