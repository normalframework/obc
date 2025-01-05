
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms
const booleantointeger_d87efb42 = require("../../../../../CDL/Conversions/BooleanToInteger");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const multiply_2099ee67 = require("../../../../../CDL/Integers/Multiply");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../CDL/Integers/Switch");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const truedelay_b49d8a1a = require("../../../../../CDL/Logical/TrueDelay");
const greater_b1da53cb = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const less_19683368 = require("../../../../../CDL/Reals/Less");
const lessthreshold_f64b25e3 = require("../../../../../CDL/Reals/LessThreshold");
const multiplybyparameter_13a4f29f = require("../../../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const assert_078ec840 = require("../../../../../CDL/Utilities/Assert");

module.exports = (
  {
		damPosHys = 0.05,
		fanOffTim = 600,
		floHys = 0.05,
		leaFloTim = 600,
		lowFloTim = 300,
		staPreMul,
		staTim = 1800,
		VCooMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.cooMaxFlo1
  const cooMaxFlo1Fn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.gai4
  const gai4Fn = multiplybyparameter_13a4f29f({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.gre3
  const gre3Fn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.not10
  const not10Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and7
  const and7Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.truDel6
  const truDel6Fn = truedelay_b49d8a1a({ delayTime: fanOffTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.booToInt6
  const booToInt6Fn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.leaDamAla2
  const leaDamAla2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.cloDam
  const cloDamFn = lessthreshold_f64b25e3({ h: 0.5*damPosHys, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.cloDam1
  const cloDam1Fn = lessthreshold_f64b25e3({ h: 0.5*damPosHys, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.cloBotDam
  const cloBotDamFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.leaDamAla1
  const leaDamAla1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.truDel7
  const truDel7Fn = truedelay_b49d8a1a({ delayTime: leaFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.booToInt7
  const booToInt7Fn = booleantointeger_d87efb42({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.conInt
  const conIntFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.les
  const lesFn = less_19683368({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.fanIni
  const fanIniFn = truedelay_b49d8a1a({ delayTime: staTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and10
  const and10Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.truDel
  const truDelFn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.truDel2
  const truDel2Fn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.conInt1
  const conInt1Fn = constant_baefa089({ k: staPreMul });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.occMod
  const occModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.isOcc
  const isOccFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.gre
  const greFn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and11
  const and11Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.truDel1
  const truDel1Fn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.and6
  const and6Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.lowFloAla
  const lowFloAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.booToInt1
  const booToInt1Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.proInt
  const proIntFn = multiply_2099ee67({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.assMes
  const assMesFn = assert_078ec840({ message: "Warning: airflow is less than 50% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.assMes1
  const assMes1Fn = assert_078ec840({ message: "Warning: airflow is less than 70% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.not9
  const not9Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.assMes6
  const assMes6Fn = assert_078ec840({ message: "Warning: airflow sensor should be calibrated." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.not11
  const not11Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Alarms.assMes7
  const assMes7Fn = assert_078ec840({ message: "Warning: the cold-duct or hot-dcut damper is leaking." });

  return (
    { uCooDam, uHeaDam, VActSet_flow, VDis_flow, uOpeMod, u1HeaFan }
  ) => {
    const cooMaxFlo1 = cooMaxFlo1Fn({});
    const gai4 = gai4Fn({ u: cooMaxFlo1.y });
    const gre3 = gre3Fn({ u1: VDis_flow, u2: gai4.y });
    const or2 = or2Fn({ u2: u1HeaFan });
    const not10 = not10Fn({ u: or2.y });
    const and7 = and7Fn({ u1: gre3.y, u2: not10.y });
    const truDel6 = truDel6Fn({ u: and7.y });
    const booToInt6 = booToInt6Fn({ u: truDel6.y });
    const leaDamAla2 = leaDamAla2Fn({ u1: gre3.y, u2: or2.y });
    const cloDam = cloDamFn({ u: uCooDam });
    const cloDam1 = cloDam1Fn({ u: uHeaDam });
    const cloBotDam = cloBotDamFn({ u1: cloDam.y, u2: cloDam1.y });
    const leaDamAla1 = leaDamAla1Fn({ u1: leaDamAla2.y, u2: cloBotDam.y });
    const truDel7 = truDel7Fn({ u: leaDamAla1.y });
    const booToInt7 = booToInt7Fn({ u: truDel7.y });
    const conInt = conIntFn({});
    const gai = gaiFn({ u: VActSet_flow });
    const les = lesFn({ u1: VDis_flow, u2: gai.y });
    const fanIni = fanIniFn({ u: or2.y });
    const and10 = and10Fn({ u1: les.y, u2: fanIni.y });
    const truDel = truDelFn({ u: and10.y });
    const greThr = greThrFn({ u: VActSet_flow });
    const truDel2 = truDel2Fn({ u: greThr.y });
    const and2 = and2Fn({ u1: truDel.y, u2: truDel2.y });
    const conInt1 = conInt1Fn({});
    const greThr1 = greThr1Fn({ u: conInt1.y });
    const and5 = and5Fn({ u1: and2.y, u2: greThr1.y });
    const occMod = occModFn({});
    const isOcc = isOccFn({ u1: uOpeMod, u2: occMod.y });
    const and3 = and3Fn({ u1: and5.y, u2: isOcc.y });
    const gai1 = gai1Fn({ u: VActSet_flow });
    const gre = greFn({ u1: gai1.y, u2: VDis_flow });
    const and11 = and11Fn({ u1: gre.y, u2: fanIni.y });
    const truDel1 = truDel1Fn({ u: and11.y });
    const and1 = and1Fn({ u1: truDel2.y, u2: truDel1.y });
    const and4 = and4Fn({ u1: and1.y, u2: greThr1.y });
    const and6 = and6Fn({ u1: and4.y, u2: isOcc.y });
    const booToInt = booToIntFn({ u: and6.y });
    const lowFloAla = lowFloAlaFn({ u1: conInt.y, u2: and3.y, u3: booToInt.y });
    const booToInt1 = booToInt1Fn({ u: greThr1.y });
    const proInt = proIntFn({ u1: lowFloAla.y, u2: booToInt1.y });
    const not1 = not1Fn({ u: and3.y });
    const assMes = assMesFn({ u: not1.y });
    const not2 = not2Fn({ u: and6.y });
    const assMes1 = assMes1Fn({ u: not2.y });
    const not9 = not9Fn({ u: truDel6.y });
    const assMes6 = assMes6Fn({ u: not9.y });
    const not11 = not11Fn({ u: truDel7.y });
    const assMes7 = assMes7Fn({ u: not11.y });

    return { yFloSenAla: booToInt6.y, yLeaDamAla: booToInt7.y, yLowFloAla: proInt.y };
  }
}
