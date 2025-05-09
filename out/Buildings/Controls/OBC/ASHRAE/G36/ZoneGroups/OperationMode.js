
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode
const booleantointeger_d87efb42 = require("../../../CDL/Conversions/BooleanToInteger");
const booleantoreal_df99be1a = require("../../../CDL/Conversions/BooleanToReal");
const realtointeger_b3838f5e = require("../../../CDL/Conversions/RealToInteger");
const add_2aeed27e = require("../../../CDL/Integers/Add");
const equal_2ac2bdd1 = require("../../../CDL/Integers/Equal");
const greaterthreshold_360fc6d4 = require("../../../CDL/Integers/GreaterThreshold");
const constant_8c5ba27d = require("../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../CDL/Logical/And");
const edge_3f236118 = require("../../../CDL/Logical/Edge");
const latch_a5aa3a49 = require("../../../CDL/Logical/Latch");
const not_6d646018 = require("../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../CDL/Logical/Or");
const truefalsehold_5efae599 = require("../../../CDL/Logical/TrueFalseHold");
const hysteresis_72a6bcc6 = require("../../../CDL/Reals/Hysteresis");
const constant_baefa089 = require("../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../CDL/Reals/Switch");
const assert_078ec840 = require("../../../CDL/Utilities/Assert");

module.exports = (
  {
		nZon,
		preWarCooTim = 10800,
		TZonFreProOff = 280.15,
		TZonFreProOn = 277.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.occModInd
  const occModIndFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.unoPerInd
  const unoPerIndFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.occMod
  const occModFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.maxWarCooTime
  const maxWarCooTimeFn = constant_baefa089({ k: preWarCooTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.sub3
  const sub3Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.hys2
  const hys2Fn = hysteresis_72a6bcc6({ pre_y_start: true, uHigh: 0, uLow: -60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.corCooDowTim
  const corCooDowTimFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.sub5
  const sub5Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.hys4
  const hys4Fn = hysteresis_72a6bcc6({ pre_y_start: false, uHigh: 0, uLow: -60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.edg1
  const edg1Fn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.truFalHol
  const truFalHolFn = truefalsehold_5efae599({ trueHoldDuration: preWarCooTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.booToRea
  const booToReaFn = booleantoreal_df99be1a({ realTrue: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.setBacMod1
  const setBacMod1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.sub4
  const sub4Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.hys3
  const hys3Fn = hysteresis_72a6bcc6({ pre_y_start: true, uHigh: 0, uLow: -60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.corWarUpTim
  const corWarUpTimFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.sub6
  const sub6Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.hys5
  const hys5Fn = hysteresis_72a6bcc6({ pre_y_start: false, uHigh: 0, uLow: -60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.edg
  const edgFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.truFalHol1
  const truFalHol1Fn = truefalsehold_5efae599({ trueHoldDuration: preWarCooTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({ realTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.setBacMod2
  const setBacMod2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt
  const addIntFn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt1
  const addInt1Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or9
  const or9Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or8
  const or8Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.endSetBac
  const endSetBacFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.intGreThr
  const intGreThrFn = greaterthreshold_360fc6d4({ t: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt6
  const addInt6Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.totZon
  const totZonFn = constant_8c5ba27d({ k: nZon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.allCol
  const allColFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.booToRea3
  const booToRea3Fn = booleantoreal_df99be1a({ realTrue: 5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.setBacMod
  const setBacModFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.endFreProTem
  const endFreProTemFn = constant_baefa089({ k: TZonFreProOff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.hys10
  const hys10Fn = hysteresis_72a6bcc6({ pre_y_start: false, uHigh: 0.1, uLow: -0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.actFreProTem
  const actFreProTemFn = constant_baefa089({ k: TZonFreProOn });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.hys9
  const hys9Fn = hysteresis_72a6bcc6({ pre_y_start: false, uHigh: 0.1, uLow: -0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.lat1
  const lat1Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.booToRea4
  const booToRea4Fn = booleantoreal_df99be1a({ realTrue: 6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.swi4
  const swi4Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.freProSetBacMod
  const freProSetBacModFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt2
  const addInt2Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.endSetUp
  const endSetUpFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.intGreThr2
  const intGreThr2Fn = greaterthreshold_360fc6d4({ t: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt7
  const addInt7Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.allHot
  const allHotFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or7
  const or7Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.lat2
  const lat2Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.booToRea6
  const booToRea6Fn = booleantoreal_df99be1a({ realTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.swi5
  const swi5Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.setUpMod
  const setUpModFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt3
  const addInt3Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or5
  const or5Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or10
  const or10Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.or6
  const or6Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.booToInt3
  const booToInt3Fn = booleantointeger_d87efb42({ integerTrue: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt4
  const addInt4Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.addInt5
  const addInt5Fn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.not5
  const not5Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.assMes
  const assMesFn = assert_078ec840({ message: "Level 3 alarm: freeze protection setback" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.intGreThr1
  const intGreThr1Fn = greaterthreshold_360fc6d4({ t: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.notOcc
  const notOccFn = greaterthreshold_360fc6d4({ t: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.OperationMode.winOpe
  const winOpeFn = assert_078ec840({ message: "Level 4 alarm: window open during modes other than occupied mode" });

  return (
    { uOpeWin, totColZon, totHotZon, u1HigOccCoo, u1OccHeaHig, maxCooDowTim, maxWarUpTim, u1EndSetBac, u1EndSetUp, u1SetBac, u1SetUp, u1Occ, TZonMin, tNexOcc }
  ) => {
    const occModInd = occModIndFn({});
    const unoPerInd = unoPerIndFn({});
    const swi = swiFn({ u1: occModInd.y, u2: u1Occ, u3: unoPerInd.y });
    const occMod = occModFn({ u: swi.y });
    const maxWarCooTime = maxWarCooTimeFn({});
    const sub3 = sub3Fn({ u1: maxWarCooTime.y, u2: maxCooDowTim });
    const hys2 = hys2Fn({ u: sub3.y });
    const corCooDowTim = corCooDowTimFn({ u1: maxCooDowTim, u2: hys2.y, u3: maxWarCooTime.y });
    const sub5 = sub5Fn({ u1: corCooDowTim.y, u2: tNexOcc });
    const hys4 = hys4Fn({ u: sub5.y });
    const and2 = and2Fn({ u1: hys4.y, u2: u1HigOccCoo });
    const edg1 = edg1Fn({ u: and2.y });
    const truFalHol = truFalHolFn({ u: edg1.y });
    const and4 = and4Fn({ u1: hys4.y, u2: truFalHol.y });
    const booToRea = booToReaFn({ u: and4.y });
    const swi1 = swi1Fn({ u1: unoPerInd.y, u2: u1Occ, u3: booToRea.y });
    const setBacMod1 = setBacMod1Fn({ u: swi1.y });
    const sub4 = sub4Fn({ u1: maxWarCooTime.y, u2: maxWarUpTim });
    const hys3 = hys3Fn({ u: sub4.y });
    const corWarUpTim = corWarUpTimFn({ u1: maxWarUpTim, u2: hys3.y, u3: maxWarCooTime.y });
    const sub6 = sub6Fn({ u1: corWarUpTim.y, u2: tNexOcc });
    const hys5 = hys5Fn({ u: sub6.y });
    const and5 = and5Fn({ u1: hys5.y, u2: u1OccHeaHig });
    const edg = edgFn({ u: and5.y });
    const truFalHol1 = truFalHol1Fn({ u: edg.y });
    const and1 = and1Fn({ u1: hys5.y, u2: truFalHol1.y });
    const booToRea1 = booToRea1Fn({ u: and1.y });
    const swi2 = swi2Fn({ u1: unoPerInd.y, u2: u1Occ, u3: booToRea1.y });
    const setBacMod2 = setBacMod2Fn({ u: swi2.y });
    const addInt = addIntFn({ u1: setBacMod1.y, u2: setBacMod2.y });
    const addInt1 = addInt1Fn({ u1: occMod.y, u2: addInt.y });
    const or9 = or9Fn({ u1: and1.y, u2: and4.y });
    const or8 = or8Fn({ u1: or9.y, u2: u1Occ });
    const endSetBac = endSetBacFn({ u: u1EndSetBac });
    const intGreThr = intGreThrFn({ u: totColZon });
    const addInt6 = addInt6Fn({ u1: uOpeWin, u2: totColZon });
    const totZon = totZonFn({});
    const allCol = allColFn({ u1: addInt6.y, u2: totZon.y });
    const or1 = or1Fn({ u1: intGreThr.y, u2: allCol.y });
    const or2 = or2Fn({ u1: or1.y, u2: u1SetBac });
    const lat = latFn({ clr: endSetBac.y, u: or2.y });
    const booToRea3 = booToRea3Fn({ u: lat.y });
    const swi3 = swi3Fn({ u1: unoPerInd.y, u2: or8.y, u3: booToRea3.y });
    const setBacMod = setBacModFn({ u: swi3.y });
    const endFreProTem = endFreProTemFn({});
    const sub1 = sub1Fn({ u1: TZonMin, u2: endFreProTem.y });
    const hys10 = hys10Fn({ u: sub1.y });
    const actFreProTem = actFreProTemFn({});
    const sub2 = sub2Fn({ u1: actFreProTem.y, u2: TZonMin });
    const hys9 = hys9Fn({ u: sub2.y });
    const lat1 = lat1Fn({ clr: hys10.y, u: hys9.y });
    const booToRea4 = booToRea4Fn({ u: lat1.y });
    const swi4 = swi4Fn({ u1: unoPerInd.y, u2: or8.y, u3: booToRea4.y });
    const freProSetBacMod = freProSetBacModFn({ u: swi4.y });
    const addInt2 = addInt2Fn({ u1: setBacMod.y, u2: freProSetBacMod.y });
    const endSetUp = endSetUpFn({ u: u1EndSetUp });
    const intGreThr2 = intGreThr2Fn({ u: totHotZon });
    const addInt7 = addInt7Fn({ u1: uOpeWin, u2: totHotZon });
    const allHot = allHotFn({ u1: addInt7.y, u2: totZon.y });
    const or4 = or4Fn({ u1: intGreThr2.y, u2: allHot.y });
    const or7 = or7Fn({ u1: or4.y, u2: u1SetUp });
    const lat2 = lat2Fn({ clr: endSetUp.y, u: or7.y });
    const booToRea6 = booToRea6Fn({ u: lat2.y });
    const swi5 = swi5Fn({ u1: unoPerInd.y, u2: or8.y, u3: booToRea6.y });
    const setUpMod = setUpModFn({ u: swi5.y });
    const addInt3 = addInt3Fn({ u1: addInt2.y, u2: setUpMod.y });
    const or5 = or5Fn({ u1: lat2.y, u2: lat1.y });
    const or10 = or10Fn({ u1: or5.y, u2: lat.y });
    const or6 = or6Fn({ u1: or10.y, u2: or8.y });
    const not2 = not2Fn({ u: or6.y });
    const booToInt3 = booToInt3Fn({ u: not2.y });
    const addInt4 = addInt4Fn({ u1: addInt3.y, u2: booToInt3.y });
    const addInt5 = addInt5Fn({ u1: addInt1.y, u2: addInt4.y });
    const not5 = not5Fn({ u: lat1.y });
    const assMes = assMesFn({ u: not5.y });
    const intGreThr1 = intGreThr1Fn({ u: uOpeWin });
    const notOcc = notOccFn({ u: addInt5.y });
    const and3 = and3Fn({ u1: intGreThr1.y, u2: notOcc.y });
    const not1 = not1Fn({ u: and3.y });
    const winOpe = winOpeFn({ u: not1.y });

    return { yOpeMod: addInt5.y };
  }
}
