
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms
const booleantointeger_8f143d61 = require("../../../../../CDL/Conversions/BooleanToInteger");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const multiply_83d8c9a8 = require("../../../../../CDL/Integers/Multiply");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const switch_71d6ebb8 = require("../../../../../CDL/Integers/Switch");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
const not_f2b50019 = require("../../../../../CDL/Logical/Not");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const truedelay_17dc655b = require("../../../../../CDL/Logical/TrueDelay");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const greater_2582f78c = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_7c60ca3f = require("../../../../../CDL/Reals/GreaterThreshold");
const less_15730f47 = require("../../../../../CDL/Reals/Less");
const lessthreshold_854034e4 = require("../../../../../CDL/Reals/LessThreshold");
const multiplybyparameter_8938fce0 = require("../../../../../CDL/Reals/MultiplyByParameter");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const assert_5d5700df = require("../../../../../CDL/Utilities/Assert");

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
		VHeaMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.cooMaxFlo
  const cooMaxFloFn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gai2
  const gai2Fn = multiplybyparameter_8938fce0({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gre1
  const gre1Fn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not3
  const not3Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and5
  const and5Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel2
  const truDel2Fn = truedelay_17dc655b({ delayTime: fanOffTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.booToInt2
  const booToInt2Fn = booleantointeger_8f143d61({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.leaDamAla
  const leaDamAlaFn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.cloDam
  const cloDamFn = lessthreshold_854034e4({ h: 0.5*damPosHys, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.leaDamAla2
  const leaDamAla2Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel3
  const truDel3Fn = truedelay_17dc655b({ delayTime: leaFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.booToInt3
  const booToInt3Fn = booleantointeger_8f143d61({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.heaMaxFlo
  const heaMaxFloFn = constant_d2aca5e8({ k: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gai3
  const gai3Fn = multiplybyparameter_8938fce0({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gre2
  const gre2Fn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not6
  const not6Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and6
  const and6Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel4
  const truDel4Fn = truedelay_17dc655b({ delayTime: fanOffTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.booToInt4
  const booToInt4Fn = booleantointeger_8f143d61({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.leaDamAla1
  const leaDamAla1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.cloDam1
  const cloDam1Fn = lessthreshold_854034e4({ h: 0.5*damPosHys, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.leaDamAla3
  const leaDamAla3Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel5
  const truDel5Fn = truedelay_17dc655b({ delayTime: leaFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.booToInt5
  const booToInt5Fn = booleantointeger_8f143d61({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.conInt
  const conIntFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.les
  const lesFn = less_15730f47({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.fanOn
  const fanOnFn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.fanIni
  const fanIniFn = truedelay_17dc655b({ delayTime: staTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and10
  const and10Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel
  const truDelFn = truedelay_17dc655b({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel6
  const truDel6Fn = truedelay_17dc655b({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and2
  const and2Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.conInt1
  const conInt1Fn = constant_d2aca5e8({ k: staPreMul });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and7
  const and7Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.occMod
  const occModFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.isOcc
  const isOccFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and3
  const and3Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.gre
  const greFn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and11
  const and11Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.truDel1
  const truDel1Fn = truedelay_17dc655b({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and1
  const and1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.and8
  const and8Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.booToInt
  const booToIntFn = booleantointeger_8f143d61({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.lowFloAla
  const lowFloAlaFn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.booToInt1
  const booToInt1Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.proInt
  const proIntFn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.assMes
  const assMesFn = assert_5d5700df({ message: "Warning: airflow is less than 50% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.assMes1
  const assMes1Fn = assert_5d5700df({ message: "Warning: airflow is less than 70% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not4
  const not4Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.assMes2
  const assMes2Fn = assert_5d5700df({ message: "Warning: cold-duct airflow sensor should be calibrated." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not5
  const not5Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.assMes3
  const assMes3Fn = assert_5d5700df({ message: "Warning: the cold-duct damper is leaking." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not7
  const not7Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.assMes4
  const assMes4Fn = assert_5d5700df({ message: "Warning: hot-duct airflow sensor should be calibrated." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.not8
  const not8Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Alarms.assMes5
  const assMes5Fn = assert_5d5700df({ message: "Warning: the hot-duct damper is leaking." });

  return (
    { VColDucDis_flow, VHotDucDis_flow, uCooDam, uHeaDam, u1HeaFan, u1CooFan, VActSet_flow, uOpeMod }
  ) => {
    const cooMaxFlo = cooMaxFloFn({});
    const gai2 = gai2Fn({ u: cooMaxFlo.y });
    const gre1 = gre1Fn({ u1: VColDucDis_flow, u2: gai2.y });
    const not3 = not3Fn({ u: u1CooFan });
    const and5 = and5Fn({ u1: gre1.y, u2: not3.y });
    const truDel2 = truDel2Fn({ u: and5.y });
    const booToInt2 = booToInt2Fn({ u: truDel2.y });
    const leaDamAla = leaDamAlaFn({ u1: gre1.y, u2: u1CooFan });
    const cloDam = cloDamFn({ u: uCooDam });
    const leaDamAla2 = leaDamAla2Fn({ u1: leaDamAla.y, u2: cloDam.y });
    const truDel3 = truDel3Fn({ u: leaDamAla2.y });
    const booToInt3 = booToInt3Fn({ u: truDel3.y });
    const heaMaxFlo = heaMaxFloFn({});
    const gai3 = gai3Fn({ u: heaMaxFlo.y });
    const gre2 = gre2Fn({ u1: VHotDucDis_flow, u2: gai3.y });
    const not6 = not6Fn({ u: u1HeaFan });
    const and6 = and6Fn({ u1: gre2.y, u2: not6.y });
    const truDel4 = truDel4Fn({ u: and6.y });
    const booToInt4 = booToInt4Fn({ u: truDel4.y });
    const leaDamAla1 = leaDamAla1Fn({ u1: gre2.y, u2: u1HeaFan });
    const cloDam1 = cloDam1Fn({ u: uHeaDam });
    const leaDamAla3 = leaDamAla3Fn({ u1: leaDamAla1.y, u2: cloDam1.y });
    const truDel5 = truDel5Fn({ u: leaDamAla3.y });
    const booToInt5 = booToInt5Fn({ u: truDel5.y });
    const conInt = conIntFn({});
    const add2 = add2Fn({ u1: VColDucDis_flow, u2: VHotDucDis_flow });
    const gai = gaiFn({ u: VActSet_flow });
    const les = lesFn({ u1: add2.y, u2: gai.y });
    const fanOn = fanOnFn({ u1: u1HeaFan, u2: u1CooFan });
    const fanIni = fanIniFn({ u: fanOn.y });
    const and10 = and10Fn({ u1: les.y, u2: fanIni.y });
    const truDel = truDelFn({ u: and10.y });
    const greThr = greThrFn({ u: VActSet_flow });
    const truDel6 = truDel6Fn({ u: greThr.y });
    const and2 = and2Fn({ u1: truDel.y, u2: truDel6.y });
    const conInt1 = conInt1Fn({});
    const greThr1 = greThr1Fn({ u: conInt1.y });
    const and7 = and7Fn({ u1: and2.y, u2: greThr1.y });
    const occMod = occModFn({});
    const isOcc = isOccFn({ u1: uOpeMod, u2: occMod.y });
    const and3 = and3Fn({ u1: and7.y, u2: isOcc.y });
    const gai1 = gai1Fn({ u: VActSet_flow });
    const gre = greFn({ u1: gai1.y, u2: add2.y });
    const and11 = and11Fn({ u1: gre.y, u2: fanIni.y });
    const truDel1 = truDel1Fn({ u: and11.y });
    const and1 = and1Fn({ u1: truDel6.y, u2: truDel1.y });
    const and4 = and4Fn({ u1: and1.y, u2: greThr1.y });
    const and8 = and8Fn({ u1: and4.y, u2: isOcc.y });
    const booToInt = booToIntFn({ u: and8.y });
    const lowFloAla = lowFloAlaFn({ u1: conInt.y, u2: and3.y, u3: booToInt.y });
    const booToInt1 = booToInt1Fn({ u: greThr1.y });
    const proInt = proIntFn({ u1: lowFloAla.y, u2: booToInt1.y });
    const not1 = not1Fn({ u: and3.y });
    const assMes = assMesFn({ u: not1.y });
    const not2 = not2Fn({ u: and8.y });
    const assMes1 = assMes1Fn({ u: not2.y });
    const not4 = not4Fn({ u: truDel2.y });
    const assMes2 = assMes2Fn({ u: not4.y });
    const not5 = not5Fn({ u: truDel3.y });
    const assMes3 = assMes3Fn({ u: not5.y });
    const not7 = not7Fn({ u: truDel4.y });
    const assMes4 = assMes4Fn({ u: not7.y });
    const not8 = not8Fn({ u: truDel5.y });
    const assMes5 = assMes5Fn({ u: not8.y });

    return { yColFloSenAla: booToInt2.y, yColLeaDamAla: booToInt3.y, yHotFloSenAla: booToInt4.y, yHotLeaDamAla: booToInt5.y, yLowFloAla: proInt.y };
  }
}
