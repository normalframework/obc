
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms
const booleantointeger_d87efb42 = require("../../../../../CDL/Conversions/BooleanToInteger");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const multiply_2099ee67 = require("../../../../../CDL/Integers/Multiply");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../CDL/Integers/Switch");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const truedelay_b49d8a1a = require("../../../../../CDL/Logical/TrueDelay");
const addparameter_26b0d2d7 = require("../../../../../CDL/Reals/AddParameter");
const greater_b1da53cb = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const less_19683368 = require("../../../../../CDL/Reals/Less");
const lessthreshold_f64b25e3 = require("../../../../../CDL/Reals/LessThreshold");
const multiplybyparameter_13a4f29f = require("../../../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const assert_078ec840 = require("../../../../../CDL/Utilities/Assert");

module.exports = (
  {
		comChaTim = 15,
		damPosHys = 0.05,
		dTHys = 0.25,
		fanOffTim = 600,
		floHys = 0.05,
		heaCoi = 1,
		hotWatRes,
		leaFloTim = 600,
		lowFloTim = 300,
		lowTemTim = 600,
		staPreMul,
		staTim = 1800,
		valCloTim = 900,
		valPosHys = 0.05,
		VCooMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.conInt4
  const conInt4Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not12
  const not12Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and11
  const and11Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel7
  const truDel7Fn = truedelay_b49d8a1a({ delayTime: comChaTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and17
  const and17Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not9
  const not9Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and10
  const and10Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel8
  const truDel8Fn = truedelay_b49d8a1a({ delayTime: comChaTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and16
  const and16Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt7
  const booToInt7Fn = booleantointeger_d87efb42({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.fanStaAla
  const fanStaAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.cooMaxFlo
  const cooMaxFloFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.gai2
  const gai2Fn = multiplybyparameter_13a4f29f({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.gre1
  const gre1Fn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not3
  const not3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel2
  const truDel2Fn = truedelay_b49d8a1a({ delayTime: fanOffTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt2
  const booToInt2Fn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.leaDamAla
  const leaDamAlaFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.cloDam
  const cloDamFn = lessthreshold_f64b25e3({ h: 0.5*damPosHys, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.leaDamAla1
  const leaDamAla1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel3
  const truDel3Fn = truedelay_b49d8a1a({ delayTime: leaFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt3
  const booToInt3Fn = booleantointeger_d87efb42({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.cloVal
  const cloValFn = lessthreshold_f64b25e3({ h: 0.5*valPosHys, t: valPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.leaValAla1
  const leaValAla1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.addPar2
  const addPar2Fn = addparameter_26b0d2d7({ p: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.gre2
  const gre2Fn = greater_b1da53cb({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.leaValAla2
  const leaValAla2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel6
  const truDel6Fn = truedelay_b49d8a1a({ delayTime: valCloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt6
  const booToInt6Fn = booleantointeger_d87efb42({ integerTrue: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.conInt
  const conIntFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.les
  const lesFn = less_19683368({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.fanIni
  const fanIniFn = truedelay_b49d8a1a({ delayTime: staTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and13
  const and13Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel
  const truDelFn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel9
  const truDel9Fn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.conInt1
  const conInt1Fn = constant_baefa089({ k: staPreMul });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and14
  const and14Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.occMod
  const occModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.isOcc
  const isOccFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and15
  const and15Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.gre
  const greFn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and12
  const and12Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel1
  const truDel1Fn = truedelay_b49d8a1a({ delayTime: lowFloTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.lowFloAla
  const lowFloAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt1
  const booToInt1Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.proInt
  const proIntFn = multiply_2099ee67({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.addPar
  const addParFn = addparameter_26b0d2d7({ p: -17 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.les1
  const les1Fn = less_19683368({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and6
  const and6Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel4
  const truDel4Fn = truedelay_b49d8a1a({ delayTime: lowTemTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.conInt3
  const conInt3Fn = constant_baefa089({ k: hotWatRes });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and7
  const and7Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and19
  const and19Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.addPar1
  const addPar1Fn = addparameter_26b0d2d7({ p: -8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.les2
  const les2Fn = less_19683368({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and8
  const and8Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.truDel5
  const truDel5Fn = truedelay_b49d8a1a({ delayTime: lowTemTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and9
  const and9Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.and18
  const and18Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt4
  const booToInt4Fn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.lowTemAla
  const lowTemAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.booToInt5
  const booToInt5Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.proInt1
  const proInt1Fn = multiply_2099ee67({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes
  const assMesFn = assert_078ec840({ message: "Warning: airflow is less than 50% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes1
  const assMes1Fn = assert_078ec840({ message: "Warning: airflow is less than 70% of the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not4
  const not4Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes2
  const assMes2Fn = assert_078ec840({ message: "Warning: airflow sensor should be calibrated." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not5
  const not5Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes3
  const assMes3Fn = assert_078ec840({ message: "Warning: the damper is leaking." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not6
  const not6Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes4
  const assMes4Fn = assert_078ec840({ message: "Warning: discharge air temperature is 17 degC less than the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not7
  const not7Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes5
  const assMes5Fn = assert_078ec840({ message: "Warning: discharge air temperature is 8 degC less than the setpoint." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not8
  const not8Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes6
  const assMes6Fn = assert_078ec840({ message: "Warning: the valve is leaking." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not10
  const not10Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes7
  const assMes7Fn = assert_078ec840({ message: "Warning: fan has been commanded ON but still OFF." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.not11
  const not11Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Alarms.assMes8
  const assMes8Fn = assert_078ec840({ message: "Warning: fan has been commanded OFF but still ON." });

  return (
    { TDisSet, TSup, u1TerFan, u1FanCom, u1HotPla, uDam, uVal, u1Fan, VActSet_flow, VPri_flow, TDis, uOpeMod }
  ) => {
    const conInt4 = conInt4Fn({});
    const not12 = not12Fn({ u: u1TerFan });
    const and11 = and11Fn({ u1: not12.y, u2: u1FanCom });
    const truDel7 = truDel7Fn({ u: u1FanCom });
    const and17 = and17Fn({ u1: and11.y, u2: truDel7.y });
    const not9 = not9Fn({ u: u1FanCom });
    const and10 = and10Fn({ u1: u1TerFan, u2: not9.y });
    const truDel8 = truDel8Fn({ u: not9.y });
    const and16 = and16Fn({ u1: and10.y, u2: truDel8.y });
    const booToInt7 = booToInt7Fn({ u: and16.y });
    const fanStaAla = fanStaAlaFn({ u1: conInt4.y, u2: and17.y, u3: booToInt7.y });
    const cooMaxFlo = cooMaxFloFn({});
    const gai2 = gai2Fn({ u: cooMaxFlo.y });
    const gre1 = gre1Fn({ u1: VPri_flow, u2: gai2.y });
    const not3 = not3Fn({ u: u1Fan });
    const and5 = and5Fn({ u1: gre1.y, u2: not3.y });
    const truDel2 = truDel2Fn({ u: and5.y });
    const booToInt2 = booToInt2Fn({ u: truDel2.y });
    const leaDamAla = leaDamAlaFn({ u1: gre1.y, u2: u1Fan });
    const cloDam = cloDamFn({ u: uDam });
    const leaDamAla1 = leaDamAla1Fn({ u1: leaDamAla.y, u2: cloDam.y });
    const truDel3 = truDel3Fn({ u: leaDamAla1.y });
    const booToInt3 = booToInt3Fn({ u: truDel3.y });
    const cloVal = cloValFn({ u: uVal });
    const leaValAla1 = leaValAla1Fn({ u1: cloVal.y, u2: u1Fan });
    const addPar2 = addPar2Fn({ u: TSup });
    const gre2 = gre2Fn({ u1: TDis, u2: addPar2.y });
    const leaValAla2 = leaValAla2Fn({ u1: leaValAla1.y, u2: gre2.y });
    const truDel6 = truDel6Fn({ u: leaValAla2.y });
    const booToInt6 = booToInt6Fn({ u: truDel6.y });
    const conInt = conIntFn({});
    const gai = gaiFn({ u: VActSet_flow });
    const les = lesFn({ u1: VPri_flow, u2: gai.y });
    const fanIni = fanIniFn({ u: u1Fan });
    const and13 = and13Fn({ u1: les.y, u2: fanIni.y });
    const truDel = truDelFn({ u: and13.y });
    const greThr = greThrFn({ u: VActSet_flow });
    const truDel9 = truDel9Fn({ u: greThr.y });
    const and2 = and2Fn({ u1: truDel.y, u2: truDel9.y });
    const conInt1 = conInt1Fn({});
    const greThr1 = greThr1Fn({ u: conInt1.y });
    const and14 = and14Fn({ u1: and2.y, u2: greThr1.y });
    const occMod = occModFn({});
    const isOcc = isOccFn({ u1: uOpeMod, u2: occMod.y });
    const and15 = and15Fn({ u1: and14.y, u2: isOcc.y });
    const gai1 = gai1Fn({ u: VActSet_flow });
    const gre = greFn({ u1: gai1.y, u2: VPri_flow });
    const and12 = and12Fn({ u1: gre.y, u2: fanIni.y });
    const truDel1 = truDel1Fn({ u: and12.y });
    const and1 = and1Fn({ u1: truDel9.y, u2: truDel1.y });
    const and4 = and4Fn({ u1: and1.y, u2: greThr1.y });
    const and3 = and3Fn({ u1: and4.y, u2: isOcc.y });
    const booToInt = booToIntFn({ u: and3.y });
    const lowFloAla = lowFloAlaFn({ u1: conInt.y, u2: and15.y, u3: booToInt.y });
    const booToInt1 = booToInt1Fn({ u: greThr1.y });
    const proInt = proIntFn({ u1: lowFloAla.y, u2: booToInt1.y });
    const conInt2 = conInt2Fn({});
    const addPar = addParFn({ u: TDisSet });
    const les1 = les1Fn({ u1: TDis, u2: addPar.y });
    const and6 = and6Fn({ u1: les1.y, u2: u1HotPla });
    const truDel4 = truDel4Fn({ u: and6.y });
    const conInt3 = conInt3Fn({});
    const greThr2 = greThr2Fn({ u: conInt3.y });
    const and7 = and7Fn({ u1: truDel4.y, u2: greThr2.y });
    const and19 = and19Fn({ u1: and7.y, u2: isOcc.y });
    const addPar1 = addPar1Fn({ u: TDisSet });
    const les2 = les2Fn({ u1: TDis, u2: addPar1.y });
    const and8 = and8Fn({ u1: les2.y, u2: u1HotPla });
    const truDel5 = truDel5Fn({ u: and8.y });
    const and9 = and9Fn({ u1: truDel5.y, u2: greThr2.y });
    const and18 = and18Fn({ u1: and9.y, u2: isOcc.y });
    const booToInt4 = booToInt4Fn({ u: and18.y });
    const lowTemAla = lowTemAlaFn({ u1: conInt2.y, u2: and19.y, u3: booToInt4.y });
    const booToInt5 = booToInt5Fn({ u: greThr2.y });
    const proInt1 = proInt1Fn({ u1: lowTemAla.y, u2: booToInt5.y });
    const not1 = not1Fn({ u: and15.y });
    const assMes = assMesFn({ u: not1.y });
    const not2 = not2Fn({ u: and3.y });
    const assMes1 = assMes1Fn({ u: not2.y });
    const not4 = not4Fn({ u: truDel2.y });
    const assMes2 = assMes2Fn({ u: not4.y });
    const not5 = not5Fn({ u: truDel3.y });
    const assMes3 = assMes3Fn({ u: not5.y });
    const not6 = not6Fn({ u: and19.y });
    const assMes4 = assMes4Fn({ u: not6.y });
    const not7 = not7Fn({ u: and18.y });
    const assMes5 = assMes5Fn({ u: not7.y });
    const not8 = not8Fn({ u: truDel6.y });
    const assMes6 = assMes6Fn({ u: not8.y });
    const not10 = not10Fn({ u: and17.y });
    const assMes7 = assMes7Fn({ u: not10.y });
    const not11 = not11Fn({ u: and16.y });
    const assMes8 = assMes8Fn({ u: not11.y });

    return { yFanStaAla: fanStaAla.y, yFloSenAla: booToInt2.y, yLeaDamAla: booToInt3.y, yLeaValAla: booToInt6.y, yLowFloAla: proInt.y, yLowTemAla: proInt1.y };
  }
}
