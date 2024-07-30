
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms
const booleantointeger_d87efb42 = require("../../../../../CDL/Conversions/BooleanToInteger");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const multiply_2099ee67 = require("../../../../../CDL/Integers/Multiply");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../CDL/Integers/Switch");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
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
		fanOffTim = 600,
		leaFloTim = 600,
		lowFloTim = 300,
		staTim = 1800,
		damPosHys,
		floHys,
		staPreMul,
		VCooMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.cooMaxFlo
  const cooMaxFloFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.gai2
  const gai2Fn = multiplybyparameter_13a4f29f({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.gre1
  const gre1Fn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.not3
  const not3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.truDel2
  const truDel2Fn = truedelay_b49d8a1a({ delayTime: fanOffTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.occMod
  const occModFn = constant_8c5ba27d({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.isOcc
  const isOccFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and6
  const and6Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.booToInt2
  const booToInt2Fn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.cloDam
  const cloDamFn = lessthreshold_f64b25e3({ h: 0.5*damPosHys, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.leaDamAla1
  const leaDamAla1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.leaDamAla2
  const leaDamAla2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.truDel3
  const truDel3Fn = truedelay_b49d8a1a({ delayTime: leaFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.booToInt3
  const booToInt3Fn = booleantointeger_d87efb42({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.conInt
  const conIntFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.les
  const lesFn = less_19683368({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.fanIni
  const fanIniFn = truedelay_b49d8a1a({ delayTime: staTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and10
  const and10Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.truDel
  const truDelFn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.truDel4
  const truDel4Fn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.conInt1
  const conInt1Fn = constant_baefa089({ k: staPreMul });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and8
  const and8Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and7
  const and7Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.gre
  const greFn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and11
  const and11Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.truDel1
  const truDel1Fn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.lowFloAla
  const lowFloAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.booToInt1
  const booToInt1Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.proInt
  const proIntFn = multiply_2099ee67({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.assMes
  const assMesFn = assert_078ec840({ message: "Warning: airflow is less than 50% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.assMes1
  const assMes1Fn = assert_078ec840({ message: "Warning: airflow is less than 70% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.not4
  const not4Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.assMes2
  const assMes2Fn = assert_078ec840({ message: "Warning: airflow sensor should be calibrated." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.not5
  const not5Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Alarms.assMes3
  const assMes3Fn = assert_078ec840({ message: "Warning: the damper is leaking." });

  return (
    { uDam, u1Fan, VActSet_flow, VDis_flow, uOpeMod }
  ) => {
    const cooMaxFlo = cooMaxFloFn({});
    const gai2 = gai2Fn({ u: cooMaxFlo.y });
    const gre1 = gre1Fn({ u1: VDis_flow, u2: gai2.y });
    const not3 = not3Fn({ u: u1Fan });
    const and5 = and5Fn({ u1: gre1.y, u2: not3.y });
    const truDel2 = truDel2Fn({ u: and5.y });
    const occMod = occModFn({});
    const isOcc = isOccFn({ u1: uOpeMod, u2: occMod.y });
    const and6 = and6Fn({ u1: truDel2.y, u2: isOcc.y });
    const booToInt2 = booToInt2Fn({ u: and6.y });
    const cloDam = cloDamFn({ u: uDam });
    const leaDamAla1 = leaDamAla1Fn({ u1: u1Fan, u2: cloDam.y });
    const leaDamAla2 = leaDamAla2Fn({ u1: leaDamAla1.y, u2: gre1.y });
    const truDel3 = truDel3Fn({ u: leaDamAla2.y });
    const booToInt3 = booToInt3Fn({ u: truDel3.y });
    const conInt = conIntFn({});
    const gai = gaiFn({ u: VActSet_flow });
    const les = lesFn({ u1: VDis_flow, u2: gai.y });
    const fanIni = fanIniFn({ u: u1Fan });
    const and10 = and10Fn({ u1: les.y, u2: fanIni.y });
    const truDel = truDelFn({ u: and10.y });
    const greThr = greThrFn({ u: VActSet_flow });
    const truDel4 = truDel4Fn({ u: greThr.y });
    const and2 = and2Fn({ u1: truDel.y, u2: truDel4.y });
    const conInt1 = conInt1Fn({});
    const greThr1 = greThr1Fn({ u: conInt1.y });
    const and8 = and8Fn({ u1: and2.y, u2: greThr1.y });
    const and7 = and7Fn({ u1: and8.y, u2: isOcc.y });
    const gai1 = gai1Fn({ u: VActSet_flow });
    const gre = greFn({ u1: gai1.y, u2: VDis_flow });
    const and11 = and11Fn({ u1: gre.y, u2: fanIni.y });
    const truDel1 = truDel1Fn({ u: and11.y });
    const and1 = and1Fn({ u1: truDel4.y, u2: truDel1.y });
    const and4 = and4Fn({ u1: and1.y, u2: greThr1.y });
    const and3 = and3Fn({ u1: and4.y, u2: isOcc.y });
    const booToInt = booToIntFn({ u: and3.y });
    const lowFloAla = lowFloAlaFn({ u1: conInt.y, u2: and7.y, u3: booToInt.y });
    const booToInt1 = booToInt1Fn({ u: greThr1.y });
    const proInt = proIntFn({ u1: lowFloAla.y, u2: booToInt1.y });
    const not1 = not1Fn({ u: and7.y });
    const assMes = assMesFn({ u: not1.y });
    const not2 = not2Fn({ u: and3.y });
    const assMes1 = assMes1Fn({ u: not2.y });
    const not4 = not4Fn({ u: and6.y });
    const assMes2 = assMes2Fn({ u: not4.y });
    const not5 = not5Fn({ u: truDel3.y });
    const assMes3 = assMes3Fn({ u: not5.y });

    return { yFloSenAla: booToInt2.y, yLeaDamAla: booToInt3.y, yLowFloAla: proInt.y };
  }
}
