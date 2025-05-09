
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../../CDL/Integers/Switch");
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const edge_3f236118 = require("../../../../../../CDL/Logical/Edge");
const fallingedge_fb103129 = require("../../../../../../CDL/Logical/FallingEdge");
const latch_a5aa3a49 = require("../../../../../../CDL/Logical/Latch");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../../../../CDL/Logical/Sources/Constant");
const switch_1cc03fcf = require("../../../../../../CDL/Logical/Switch");
const timer_a61e7f4a = require("../../../../../../CDL/Logical/Timer");
const truefalsehold_5efae599 = require("../../../../../../CDL/Logical/TrueFalseHold");
const greaterthreshold_64a3c4e0 = require("../../../../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../../../../CDL/Reals/LessThreshold");
const max_a5fb1db5 = require("../../../../../../CDL/Reals/Max");
const multiplybyparameter_13a4f29f = require("../../../../../../CDL/Reals/MultiplyByParameter");
const pid_a5fb25dc = require("../../../../../../CDL/Reals/PID");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");
const assert_078ec840 = require("../../../../../../CDL/Utilities/Assert");

module.exports = (
  {
		buiPreCon = 1,
		cooCoi = 1,
		freSta = 0,
		have_frePro = true,
		heaCoi = 1,
		heaCoiCon = 1,
		k = 1,
		minHotWatReq = 2,
		minOADes = 0,
		Td = 0.1,
		Thys = 0.25,
		Ti = 0.5,
		yMax = 1,
		yMin = 0,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.norFal
  const norFalFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.falEdg
  const falEdgFn = fallingedge_fb103129({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.lesThr1
  const lesThr1Fn = lessthreshold_f64b25e3({ h: Thys, t: 273.15 +3.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.tim3
  const tim3Fn = timer_a61e7f4a({ t: 900 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.lesThr2
  const lesThr2Fn = lessthreshold_f64b25e3({ h: Thys, t: 273.15 +1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.tim4
  const tim4Fn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or7
  const or7Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.con2
  const con2Fn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or8
  const or8Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.lat1
  const lat1Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.con5
  const con5Fn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.tim2
  const tim2Fn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.holSta2
  const holSta2Fn = truefalsehold_5efae599({ falseHoldDuration: 0, trueHoldDuration: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.tim5
  const tim5Fn = timer_a61e7f4a({ t: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.endStaTwo
  const endStaTwoFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.lat2
  const lat2Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.minOutDam3
  const minOutDam3Fn = switch_1cc03fcf({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.minOutDam1
  const minOutDam1Fn = switch_1cc03fcf({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.norSta2
  const norSta2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.norSta3
  const norSta3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.norSta1
  const norSta1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt4
  const conInt4Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt5
  const conInt5Fn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.intSwi1
  const intSwi1Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.intSwi3
  const intSwi3Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.con1
  const con1Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.cooCoiVal
  const cooCoiValFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt9
  const conInt9Fn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt10
  const conInt10Fn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai10
  const gai10Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai5
  const gai5Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai13
  const gai13Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai4
  const gai4Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai12
  const gai12Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai11
  const gai11Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.disMinVenWar
  const disMinVenWarFn = assert_078ec840({ message: "Warning: minimum ventilation was interrupted by freeze protection!" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai14
  const gai14Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai15
  const gai15Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai2
  const gai2Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai3
  const gai3Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai6
  const gai6Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai7
  const gai7Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai8
  const gai8Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.gai9
  const gai9Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.max1
  const max1Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.con4
  const con4Fn = constant_baefa089({ k: 273.15 +27 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.heaCoiMod
  const heaCoiModFn = pid_a5fb25dc({ controllerType: heaCoiCon, k: k, Td: Td, Ti: Ti, yMax: yMax, yMin: yMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.supTemSet
  const supTemSetFn = constant_baefa089({ k: 273.15 +6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.heaCoiCon1
  const heaCoiCon1Fn = pid_a5fb25dc({ controllerType: heaCoiCon, k: k, Td: Td, Ti: Ti, yMax: yMax, yMin: yMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: Thys, t: 273.15 +7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.tim1
  const tim1Fn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.endStaOne
  const endStaOneFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.lesThr
  const lesThrFn = lessthreshold_f64b25e3({ h: Thys, t: 273.15 +4.4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.tim
  const timFn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.heaCoi1
  const heaCoi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.heaCoiPos
  const heaCoiPosFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt3
  const conInt3Fn = constant_8c5ba27d({ k: minHotWatReq });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt
  const conIntFn = constant_8c5ba27d({ k: minHotWatReq });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.hotWatPlaReq
  const hotWatPlaReqFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.hotWatPlaReq3
  const hotWatPlaReq3Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt6
  const conInt6Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt7
  const conInt7Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.conInt8
  const conInt8Fn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.intSwi5
  const intSwi5Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.intSwi4
  const intSwi4Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.intSwi2
  const intSwi2Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.con3
  const con3Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.con
  const conFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.minOutDam2
  const minOutDam2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.minOutDam
  const minOutDamFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or5
  const or5Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.or6
  const or6Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.minVen
  const minVenFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.outDam2
  const outDam2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.outDam
  const outDamFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.relFan
  const relFanFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.retDam2
  const retDam2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.retDam
  const retDamFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.retFan
  const retFanFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.shuDowWar
  const shuDowWarFn = assert_078ec840({ message: "Warning: the unit is shut down by freeze protection!" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.FreezeProtection.supFan
  const supFanFn = switch_6d141143({});

  return (
    { u1RetFan, u1SupFan, u1RelFan, uCooCoi, uHeaCoi, uMinOutDam, uSupFan, uRetFan, uRelFan, uRetDam, uOutDam, TAirSup, TAirMix, u1MinOutDam, uOutDamPosMin, u1FreSta }
  ) => {
    const norFal = norFalFn({ u: u1FreSta });
    const falEdg = falEdgFn({ u: norFal.y });
    const lesThr1 = lesThr1Fn({ u: TAirSup });
    const tim3 = tim3Fn({ u: lesThr1.y });
    const lesThr2 = lesThr2Fn({ u: TAirSup });
    const tim4 = tim4Fn({ u: lesThr2.y });
    const or7 = or7Fn({ u1: tim3.passed, u2: tim4.passed });
    const con2 = con2Fn({});
    const or8 = or8Fn({ u1: or7.y, u2: con2.y });
    const lat1 = lat1Fn({ clr: falEdg.y, u: or8.y });
    const con5 = con5Fn({});
    const tim2 = tim2Fn({ u: lesThr1.y });
    const holSta2 = holSta2Fn({ u: tim2.passed });
    const tim5 = tim5Fn({ u: holSta2.y });
    const endStaTwo = endStaTwoFn({ u: tim5.passed });
    const lat2 = lat2Fn({ clr: endStaTwo.y, u: holSta2.y });
    const minOutDam3 = minOutDam3Fn({ u1: con5.y, u2: lat2.y, u3: u1MinOutDam });
    const minOutDam1 = minOutDam1Fn({ u1: con5.y, u2: lat1.y, u3: minOutDam3.y });
    const norSta2 = norSta2Fn({ u: lat1.y });
    const and3 = and3Fn({ u1: u1RelFan, u2: norSta2.y });
    const norSta3 = norSta3Fn({ u: lat1.y });
    const and1 = and1Fn({ u1: u1RetFan, u2: norSta3.y });
    const norSta1 = norSta1Fn({ u: lat1.y });
    const and2 = and2Fn({ u1: u1SupFan, u2: norSta1.y });
    const conInt4 = conInt4Fn({});
    const conInt1 = conInt1Fn({});
    const conInt5 = conInt5Fn({});
    const intSwi1 = intSwi1Fn({ u1: conInt1.y, u2: lat2.y, u3: conInt5.y });
    const intSwi3 = intSwi3Fn({ u1: conInt4.y, u2: lat1.y, u3: intSwi1.y });
    const con1 = con1Fn({});
    const cooCoiVal = cooCoiValFn({ u1: con1.y, u2: lat1.y, u3: uCooCoi });
    const conInt9 = conInt9Fn({});
    const gai = gaiFn({ u: uHeaCoi });
    const conInt10 = conInt10Fn({});
    const gai10 = gai10Fn({ u: uMinOutDam });
    const gai5 = gai5Fn({ u: uOutDam });
    const gai13 = gai13Fn({ u: uRelFan });
    const gai4 = gai4Fn({ u: uRetDam });
    const gai12 = gai12Fn({ u: uRetFan });
    const gai11 = gai11Fn({ u: uSupFan });
    const not2 = not2Fn({ u: lat2.y });
    const disMinVenWar = disMinVenWarFn({ u: not2.y });
    const gai1 = gai1Fn({ u: uCooCoi });
    const gai14 = gai14Fn({ u: uCooCoi });
    const gai15 = gai15Fn({ u: uHeaCoi });
    const gai2 = gai2Fn({ u: uRelFan });
    const gai3 = gai3Fn({ u: uRetFan });
    const gai6 = gai6Fn({ u: uMinOutDam });
    const gai7 = gai7Fn({ u: uSupFan });
    const gai8 = gai8Fn({ u: uRetDam });
    const gai9 = gai9Fn({ u: uOutDam });
    const max1 = max1Fn({ u1: TAirSup, u2: TAirMix });
    const con4 = con4Fn({});
    const heaCoiMod = heaCoiModFn({ u_m: max1.y, u_s: con4.y });
    const supTemSet = supTemSetFn({});
    const heaCoiCon1 = heaCoiCon1Fn({ u_m: TAirSup, u_s: supTemSet.y });
    const greThr = greThrFn({ u: TAirSup });
    const tim1 = tim1Fn({ u: greThr.y });
    const endStaOne = endStaOneFn({ u: tim1.passed });
    const lesThr = lesThrFn({ u: TAirSup });
    const tim = timFn({ u: lesThr.y });
    const or2 = or2Fn({ u1: tim.passed, u2: endStaTwo.y });
    const lat = latFn({ clr: endStaOne.y, u: or2.y });
    const heaCoi1 = heaCoi1Fn({ u1: heaCoiCon1.y, u2: lat.y, u3: uHeaCoi });
    const heaCoiPos = heaCoiPosFn({ u1: heaCoiMod.y, u2: lat1.y, u3: heaCoi1.y });
    const conInt3 = conInt3Fn({});
    const conInt = conIntFn({});
    const conInt2 = conInt2Fn({});
    const hotWatPlaReq = hotWatPlaReqFn({ u1: conInt.y, u2: lat.y, u3: conInt2.y });
    const hotWatPlaReq3 = hotWatPlaReq3Fn({ u1: conInt3.y, u2: lat1.y, u3: hotWatPlaReq.y });
    const conInt6 = conInt6Fn({});
    const conInt7 = conInt7Fn({});
    const conInt8 = conInt8Fn({});
    const intSwi5 = intSwi5Fn({ u1: conInt7.y, u2: lat.y, u3: conInt8.y });
    const intSwi4 = intSwi4Fn({ u1: conInt6.y, u2: lat2.y, u3: intSwi5.y });
    const intSwi2 = intSwi2Fn({ u1: conInt1.y, u2: lat1.y, u3: intSwi4.y });
    const con3 = con3Fn({});
    const con = conFn({});
    const minOutDam2 = minOutDam2Fn({ u1: con.y, u2: lat2.y, u3: uMinOutDam });
    const minOutDam = minOutDamFn({ u1: con3.y, u2: lat1.y, u3: minOutDam2.y });
    const or1 = or1Fn({ u2: u1RelFan });
    const or4 = or4Fn({ u2: u1RetFan });
    const or5 = or5Fn({ u2: u1MinOutDam });
    const or6 = or6Fn({ u2: u1SupFan });
    const minVen = minVenFn({ u1: uOutDamPosMin, u2: lat.y, u3: uOutDam });
    const outDam2 = outDam2Fn({ u1: con.y, u2: lat2.y, u3: minVen.y });
    const outDam = outDamFn({ u1: con3.y, u2: lat1.y, u3: outDam2.y });
    const relFan = relFanFn({ u1: con3.y, u2: lat1.y, u3: uRelFan });
    const retDam2 = retDam2Fn({ u1: con1.y, u2: lat2.y, u3: uRetDam });
    const retDam = retDamFn({ u1: con3.y, u2: lat1.y, u3: retDam2.y });
    const retFan = retFanFn({ u1: con3.y, u2: lat1.y, u3: uRetFan });
    const not1 = not1Fn({ u: lat1.y });
    const shuDowWar = shuDowWarFn({ u: not1.y });
    const supFan = supFanFn({ u1: con3.y, u2: lat1.y, u3: uSupFan });

    return { y1EneCHWPum: lat1.y, y1MinOutDam: minOutDam1.y, y1RelFan: and3.y, y1RetFan: and1.y, y1SupFan: and2.y, yAla: intSwi3.y, yCooCoi: cooCoiVal.y, yFreProSta: conInt9.y, yHeaCoi: gai.y, yHotWatPlaReq: conInt10.y, yMinOutDam: gai10.y, yOutDam: gai5.y, yRelFan: gai13.y, yRetDam: gai4.y, yRetFan: gai12.y, ySupFan: gai11.y };
  }
}
