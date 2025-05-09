
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus
const booleantoreal_df99be1a = require("../../../CDL/Conversions/BooleanToReal");
const and_6d642f1c = require("../../../CDL/Logical/And");
const not_6d646018 = require("../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../CDL/Logical/Sources/Constant");
const hysteresis_72a6bcc6 = require("../../../CDL/Reals/Hysteresis");
const multiply_a462b873 = require("../../../CDL/Reals/Multiply");
const subtract_029d2d63 = require("../../../CDL/Reals/Subtract");

module.exports = (
  {
		bouLim = 1,
		have_winSen,
		uHigh = 0.1,
		uLow = -0.1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.con
  const conFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.pro
  const proFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.sub3
  const sub3Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.hys3
  const hys3Fn = hysteresis_72a6bcc6({ uHigh: bouLim, uLow: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.sub4
  const sub4Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.hys4
  const hys4Fn = hysteresis_72a6bcc6({ uHigh: bouLim, uLow: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.hys1
  const hys1Fn = hysteresis_72a6bcc6({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.sub5
  const sub5Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.hys5
  const hys5Fn = hysteresis_72a6bcc6({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.sub
  const subFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.hys
  const hysFn = hysteresis_72a6bcc6({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.hys2
  const hys2Fn = hysteresis_72a6bcc6({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.pro1
  const pro1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneStatus.winOpe
  const winOpeFn = not_6d646018({});

  return (
    { cooDowTim, warUpTim, TOccHeaSet, TZon, TOccCooSet, TUnoHeaSet, TUnoCooSet, u1Win }
  ) => {
    const con = conFn({});
    const not1 = not1Fn({ u: con.y });
    const booToRea = booToReaFn({ u: not1.y });
    const pro = proFn({ u1: cooDowTim, u2: booToRea.y });
    const sub3 = sub3Fn({ u1: TZon, u2: TUnoHeaSet });
    const hys3 = hys3Fn({ u: sub3.y });
    const or2 = or2Fn({ u1: hys3.y, u2: con.y });
    const sub4 = sub4Fn({ u1: TUnoCooSet, u2: TZon });
    const hys4 = hys4Fn({ u: sub4.y });
    const or1 = or1Fn({ u1: hys4.y, u2: con.y });
    const sub1 = sub1Fn({ u1: TZon, u2: TOccCooSet });
    const hys1 = hys1Fn({ u: sub1.y });
    const and1 = and1Fn({ u1: hys1.y, u2: not1.y });
    const sub5 = sub5Fn({ u1: TZon, u2: TUnoCooSet });
    const hys5 = hys5Fn({ u: sub5.y });
    const and5 = and5Fn({ u1: hys5.y, u2: not1.y });
    const sub = subFn({ u1: TOccHeaSet, u2: TZon });
    const hys = hysFn({ u: sub.y });
    const and2 = and2Fn({ u1: hys.y, u2: not1.y });
    const sub2 = sub2Fn({ u1: TUnoHeaSet, u2: TZon });
    const hys2 = hys2Fn({ u: sub2.y });
    const and3 = and3Fn({ u1: hys2.y, u2: not1.y });
    const pro1 = pro1Fn({ u1: warUpTim, u2: booToRea.y });
    const winOpe = winOpeFn({ u: u1Win });

    return { yCooTim: pro.y, yEndSetBac: or2.y, yEndSetUp: or1.y, yHigOccCoo: and1.y, yHigUnoCoo: and5.y, yOccHeaHig: and2.y, yUnoHeaHig: and3.y, yWarTim: pro1.y };
  }
}
