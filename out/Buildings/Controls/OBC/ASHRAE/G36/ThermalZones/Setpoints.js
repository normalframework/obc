
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints
const booleantoreal_df99be1a = require("../../../CDL/Conversions/BooleanToReal");
const realtointeger_b3838f5e = require("../../../CDL/Conversions/RealToInteger");
const triggeredsampler_bcb3b170 = require("../../../CDL/Discrete/TriggeredSampler");
const equal_2ac2bdd1 = require("../../../CDL/Integers/Equal");
const greaterthreshold_360fc6d4 = require("../../../CDL/Integers/GreaterThreshold");
const constant_8c5ba27d = require("../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../CDL/Logical/And");
const edge_3f236118 = require("../../../CDL/Logical/Edge");
const not_6d646018 = require("../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../CDL/Logical/Sources/Constant");
const timer_a61e7f4a = require("../../../CDL/Logical/Timer");
const truehold_60ac3548 = require("../../../CDL/Logical/TrueHold");
const add_a5faf0f2 = require("../../../CDL/Reals/Add");
const addparameter_26b0d2d7 = require("../../../CDL/Reals/AddParameter");
const greater_b1da53cb = require("../../../CDL/Reals/Greater");
const less_19683368 = require("../../../CDL/Reals/Less");
const limiter_ab723d79 = require("../../../CDL/Reals/Limiter");
const multiply_a462b873 = require("../../../CDL/Reals/Multiply");
const constant_baefa089 = require("../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../CDL/Reals/Switch");

module.exports = (
  {
		decTSetDem_1 = 0.5,
		decTSetDem_2 = 1,
		decTSetDem_3 = 2,
		have_locAdj = true,
		have_occSen,
		have_winSen,
		ignDemLim = true,
		incTSetDem_1 = 0.5,
		incTSetDem_2 = 1,
		incTSetDem_3 = 2,
		sepAdj = true,
		TActCoo_max = 300.15,
		TActCoo_min = 295.15,
		TActHea_max = 295.15,
		TActHea_min = 291.15,
		TWinOpeCooSet = 322.15,
		TWinOpeHeaSet = 277.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.cooSetWinOpe
  const cooSetWinOpeFn = constant_baefa089({ k: TWinOpeCooSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conFal
  const conFalFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu2
  const intEqu2Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conTru
  const conTruFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.not4
  const not4Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.and10
  const and10Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.tim
  const timFn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.truHol
  const truHolFn = truehold_60ac3548({ duration: 60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.edg1
  const edg1Fn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt
  const conIntFn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu1
  const intEqu1Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or6
  const or6Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or9
  const or9Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.con3
  const con3Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.cooSetAdjCon
  const cooSetAdjConFn = constant_48cc1015({ k: have_locAdj });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.con
  const conFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi4
  const swi4Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.con2
  const con2Fn = constant_48cc1015({ k: ignDemLim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intGreThr
  const intGreThrFn = greaterthreshold_360fc6d4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intGreThr1
  const intGreThr1Fn = greaterthreshold_360fc6d4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.not3
  const not3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or5
  const or5Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt3
  const conInt3Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu3
  const intEqu3Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt4
  const conInt4Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu4
  const intEqu4Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt5
  const conInt5Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu5
  const intEqu5Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or7
  const or7Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea6
  const booToRea6Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.edg
  const edgFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.cooSetFre
  const cooSetFreFn = triggeredsampler_bcb3b170({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro6
  const pro6Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar2
  const addPar2Fn = addparameter_26b0d2d7({ p: incTSetDem_1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro
  const proFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add3
  const add3Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar1
  const addPar1Fn = addparameter_26b0d2d7({ p: incTSetDem_2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro1
  const pro1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar3
  const addPar3Fn = addparameter_26b0d2d7({ p: incTSetDem_3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea2
  const booToRea2Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro2
  const pro2Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add4
  const add4Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add5
  const add5Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi10
  const swi10Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.cooSetSam
  const cooSetSamFn = triggeredsampler_bcb3b170({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.cooSetInc
  const cooSetIncFn = addparameter_26b0d2d7({ p: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi12
  const swi12Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.have_occSenCon
  const have_occSenConFn = constant_48cc1015({ k: have_occSen });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi20
  const swi20Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi14
  const swi14Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.winSenCon
  const winSenConFn = constant_48cc1015({ k: have_winSen });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi22
  const swi22Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.cooSetLim
  const cooSetLimFn = limiter_ab723d79({ uMax: TActCoo_max, uMin: TActCoo_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi17
  const swi17Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.les
  const lesFn = less_19683368({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi9
  const swi9Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar
  const addParFn = addparameter_26b0d2d7({ p: -0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.heaSetWinOpe
  const heaSetWinOpeFn = constant_baefa089({ k: TWinOpeHeaSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.con4
  const con4Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.heaSetAdjCon
  const heaSetAdjConFn = constant_48cc1015({ k: have_locAdj });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.con1
  const con1Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi6
  const swi6Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add1
  const add1Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt6
  const conInt6Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu6
  const intEqu6Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt7
  const conInt7Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu7
  const intEqu7Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.conInt8
  const conInt8Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.intEqu8
  const intEqu8Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.or8
  const or8Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea7
  const booToRea7Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.heaSetFre
  const heaSetFreFn = triggeredsampler_bcb3b170({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro7
  const pro7Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar6
  const addPar6Fn = addparameter_26b0d2d7({ p: -decTSetDem_1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea3
  const booToRea3Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro3
  const pro3Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add6
  const add6Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar5
  const addPar5Fn = addparameter_26b0d2d7({ p: -decTSetDem_2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea4
  const booToRea4Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro4
  const pro4Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.addPar4
  const addPar4Fn = addparameter_26b0d2d7({ p: -decTSetDem_3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.booToRea5
  const booToRea5Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.pro5
  const pro5Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add7
  const add7Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.add8
  const add8Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi11
  const swi11Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.heaSetSam
  const heaSetSamFn = triggeredsampler_bcb3b170({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.heaSetDec
  const heaSetDecFn = addparameter_26b0d2d7({ p: -0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi13
  const swi13Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi19
  const swi19Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi15
  const swi15Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi21
  const swi21Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.heaSetLim
  const heaSetLimFn = limiter_ab723d79({ uMax: TActHea_max, uMin: TActHea_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi18
  const swi18Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.gre
  const greFn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi8
  const swi8Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.gre2
  const gre2Fn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi7
  const swi7Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.alaFou
  const alaFouFn = constant_baefa089({ k: 3.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.not5
  const not5Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.and11
  const and11Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.alaZer
  const alaZerFn = constant_baefa089({ k: -0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.swi16
  const swi16Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.reaToInt
  const reaToIntFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Setpoints.winOpe
  const winOpeFn = not_6d646018({});

  return (
    { TUnoHeaSet, uOpeMod, uCooDemLimLev, uHeaDemLimLev, TUnoCooSet, TOccCooSet, TOccHeaSet, u1Win }
  ) => {
    const cooSetWinOpe = cooSetWinOpeFn({});
    const conFal = conFalFn({});
    const conInt2 = conInt2Fn({});
    const intEqu2 = intEqu2Fn({ u1: uOpeMod, u2: conInt2.y });
    const conTru = conTruFn({});
    const not4 = not4Fn({ u: conTru.y });
    const and10 = and10Fn({ u1: intEqu2.y, u2: not4.y });
    const tim = timFn({ u: and10.y });
    const truHol = truHolFn({ u: tim.passed });
    const edg1 = edg1Fn({ u: truHol.y });
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: uOpeMod, u2: conInt.y });
    const conInt1 = conInt1Fn({});
    const intEqu1 = intEqu1Fn({ u1: uOpeMod, u2: conInt1.y });
    const or6 = or6Fn({ u1: intEqu.y, u2: intEqu1.y });
    const or9 = or9Fn({ u1: or6.y, u2: intEqu2.y });
    const swi = swiFn({ u1: TOccCooSet, u2: or9.y, u3: TUnoCooSet });
    const con3 = con3Fn({});
    const cooSetAdjCon = cooSetAdjConFn({});
    const con = conFn({});
    const swi4 = swi4Fn({ u1: con3.y, u2: cooSetAdjCon.y, u3: con.y });
    const add2 = add2Fn({ u1: swi.y, u2: swi4.y });
    const swi2 = swi2Fn({ u1: add2.y, u2: or9.y, u3: swi.y });
    const con2 = con2Fn({});
    const intGreThr = intGreThrFn({ u: uCooDemLimLev });
    const intGreThr1 = intGreThr1Fn({ u: uHeaDemLimLev });
    const or2 = or2Fn({ u1: intGreThr.y, u2: intGreThr1.y });
    const not3 = not3Fn({ u: or2.y });
    const or5 = or5Fn({ u1: con2.y, u2: not3.y });
    const conInt3 = conInt3Fn({});
    const intEqu3 = intEqu3Fn({ u1: uCooDemLimLev, u2: conInt3.y });
    const conInt4 = conInt4Fn({});
    const intEqu4 = intEqu4Fn({ u1: uCooDemLimLev, u2: conInt4.y });
    const or1 = or1Fn({ u1: intEqu3.y, u2: intEqu4.y });
    const conInt5 = conInt5Fn({});
    const intEqu5 = intEqu5Fn({ u1: uCooDemLimLev, u2: conInt5.y });
    const or7 = or7Fn({ u1: or1.y, u2: intEqu5.y });
    const not1 = not1Fn({ u: or7.y });
    const booToRea6 = booToRea6Fn({ u: not1.y });
    const edg = edgFn({ u: or2.y });
    const cooSetFre = cooSetFreFn({ trigger: edg.y, u: swi2.y });
    const pro6 = pro6Fn({ u1: booToRea6.y, u2: cooSetFre.y });
    const addPar2 = addPar2Fn({ u: cooSetFre.y });
    const booToRea = booToReaFn({ u: intEqu3.y });
    const pro = proFn({ u1: addPar2.y, u2: booToRea.y });
    const add3 = add3Fn({ u1: pro6.y, u2: pro.y });
    const addPar1 = addPar1Fn({ u: cooSetFre.y });
    const booToRea1 = booToRea1Fn({ u: intEqu4.y });
    const pro1 = pro1Fn({ u1: addPar1.y, u2: booToRea1.y });
    const addPar3 = addPar3Fn({ u: cooSetFre.y });
    const booToRea2 = booToRea2Fn({ u: intEqu5.y });
    const pro2 = pro2Fn({ u1: addPar3.y, u2: booToRea2.y });
    const add4 = add4Fn({ u1: pro1.y, u2: pro2.y });
    const add5 = add5Fn({ u1: add3.y, u2: add4.y });
    const swi10 = swi10Fn({ u1: swi2.y, u2: or5.y, u3: add5.y });
    const cooSetSam = cooSetSamFn({ trigger: edg1.y, u: swi10.y });
    const cooSetInc = cooSetIncFn({ u: cooSetSam.y });
    const swi12 = swi12Fn({ u1: cooSetInc.y, u2: truHol.y, u3: swi10.y });
    const have_occSenCon = have_occSenConFn({});
    const swi20 = swi20Fn({ u1: swi12.y, u2: have_occSenCon.y, u3: swi10.y });
    const swi14 = swi14Fn({ u1: cooSetWinOpe.y, u2: conFal.y, u3: swi20.y });
    const winSenCon = winSenConFn({});
    const swi22 = swi22Fn({ u1: swi14.y, u2: winSenCon.y, u3: swi20.y });
    const cooSetLim = cooSetLimFn({ u: swi22.y });
    const swi17 = swi17Fn({ u1: cooSetLim.y, u2: intEqu2.y, u3: swi22.y });
    const les = lesFn({ u1: swi17.y, u2: TUnoCooSet });
    const swi9 = swi9Fn({ u1: swi17.y, u2: les.y, u3: TUnoCooSet });
    const addPar = addParFn({ u: swi9.y });
    const heaSetWinOpe = heaSetWinOpeFn({});
    const swi1 = swi1Fn({ u1: TOccHeaSet, u2: or9.y, u3: TUnoHeaSet });
    const con4 = con4Fn({});
    const heaSetAdjCon = heaSetAdjConFn({});
    const con1 = con1Fn({});
    const swi6 = swi6Fn({ u1: con4.y, u2: heaSetAdjCon.y, u3: con1.y });
    const add1 = add1Fn({ u1: swi1.y, u2: swi6.y });
    const swi3 = swi3Fn({ u1: add1.y, u2: intEqu2.y, u3: swi1.y });
    const conInt6 = conInt6Fn({});
    const intEqu6 = intEqu6Fn({ u1: uHeaDemLimLev, u2: conInt6.y });
    const conInt7 = conInt7Fn({});
    const intEqu7 = intEqu7Fn({ u1: uHeaDemLimLev, u2: conInt7.y });
    const or4 = or4Fn({ u1: intEqu6.y, u2: intEqu7.y });
    const conInt8 = conInt8Fn({});
    const intEqu8 = intEqu8Fn({ u1: uHeaDemLimLev, u2: conInt8.y });
    const or8 = or8Fn({ u1: or4.y, u2: intEqu8.y });
    const not2 = not2Fn({ u: or8.y });
    const booToRea7 = booToRea7Fn({ u: not2.y });
    const heaSetFre = heaSetFreFn({ trigger: edg.y, u: swi3.y });
    const pro7 = pro7Fn({ u1: booToRea7.y, u2: heaSetFre.y });
    const addPar6 = addPar6Fn({ u: heaSetFre.y });
    const booToRea3 = booToRea3Fn({ u: intEqu6.y });
    const pro3 = pro3Fn({ u1: addPar6.y, u2: booToRea3.y });
    const add6 = add6Fn({ u1: pro7.y, u2: pro3.y });
    const addPar5 = addPar5Fn({ u: heaSetFre.y });
    const booToRea4 = booToRea4Fn({ u: intEqu7.y });
    const pro4 = pro4Fn({ u1: addPar5.y, u2: booToRea4.y });
    const addPar4 = addPar4Fn({ u: heaSetFre.y });
    const booToRea5 = booToRea5Fn({ u: intEqu8.y });
    const pro5 = pro5Fn({ u1: addPar4.y, u2: booToRea5.y });
    const add7 = add7Fn({ u1: pro4.y, u2: pro5.y });
    const add8 = add8Fn({ u1: add6.y, u2: add7.y });
    const swi11 = swi11Fn({ u1: swi3.y, u2: or5.y, u3: add8.y });
    const heaSetSam = heaSetSamFn({ trigger: edg1.y, u: swi11.y });
    const heaSetDec = heaSetDecFn({ u: heaSetSam.y });
    const swi13 = swi13Fn({ u1: heaSetDec.y, u2: truHol.y, u3: swi11.y });
    const swi19 = swi19Fn({ u1: swi13.y, u2: have_occSenCon.y, u3: swi11.y });
    const swi15 = swi15Fn({ u1: heaSetWinOpe.y, u2: conFal.y, u3: swi19.y });
    const swi21 = swi21Fn({ u1: swi15.y, u2: winSenCon.y, u3: swi19.y });
    const heaSetLim = heaSetLimFn({ u: swi21.y });
    const swi18 = swi18Fn({ u1: heaSetLim.y, u2: intEqu2.y, u3: swi21.y });
    const gre = greFn({ u1: swi18.y, u2: TUnoHeaSet });
    const swi8 = swi8Fn({ u1: swi18.y, u2: gre.y, u3: TUnoHeaSet });
    const gre2 = gre2Fn({ u1: swi8.y, u2: addPar.y });
    const swi7 = swi7Fn({ u1: addPar.y, u2: gre2.y, u3: swi8.y });
    const alaFou = alaFouFn({});
    const not5 = not5Fn({ u: intEqu2.y });
    const and11 = and11Fn({ u1: not5.y, u2: conFal.y });
    const alaZer = alaZerFn({});
    const swi16 = swi16Fn({ u1: alaFou.y, u2: and11.y, u3: alaZer.y });
    const reaToInt = reaToIntFn({ u: swi16.y });
    const winOpe = winOpeFn({ u: u1Win });

    return { TCooSet: swi9.y, THeaSet: swi7.y, yAla: reaToInt.y };
  }
}
