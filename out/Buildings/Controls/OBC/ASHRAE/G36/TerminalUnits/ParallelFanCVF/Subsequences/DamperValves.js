
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves
const booleantoreal_df99be1a = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const latch_a5aa3a49 = require("../../../../../CDL/Logical/Latch");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../../../CDL/Logical/Sources/Constant");
const switch_1cc03fcf = require("../../../../../CDL/Logical/Switch");
const truedelay_b49d8a1a = require("../../../../../CDL/Logical/TrueDelay");
const add_a5faf0f2 = require("../../../../../CDL/Reals/Add");
const addparameter_26b0d2d7 = require("../../../../../CDL/Reals/AddParameter");
const divide_52bbd688 = require("../../../../../CDL/Reals/Divide");
const greater_b1da53cb = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const less_19683368 = require("../../../../../CDL/Reals/Less");
const line_196841c3 = require("../../../../../CDL/Reals/Line");
const multiplybyparameter_13a4f29f = require("../../../../../CDL/Reals/MultiplyByParameter");
const pidwithreset_1df6d9ad = require("../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeDam = Math.PI,
		controllerTypeVal = Math.PI,
		dTDisZonSetMax = 11,
		dTHys = 0.25,
		floHys = 0.01,
		iniDam = 0.01,
		kDam = 0.5,
		kVal = 0.5,
		looHys = 0.05,
		TdDam = 0.1,
		TdVal = 0.1,
		TiDam = 300,
		TiVal = 300,
		VCooMax_flow,
		VMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.addPar
  const addParFn = addparameter_26b0d2d7({ p: dTDisZonSetMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conZer3
  const conZer3Fn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conHal
  const conHalFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conTDisHeaSet
  const conTDisHeaSetFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conInt
  const conIntFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.forZerFlo
  const forZerFloFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.zerFlo
  const zerFloFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.forCooMax
  const forCooMaxFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.cooMax
  const cooMaxFn = booleantoreal_df99be1a({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.forMinFlo
  const forMinFloFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.minFlo
  const minFloFn = booleantoreal_df99be1a({ realTrue: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.add1
  const add1Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conZer
  const conZerFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conOne
  const conOneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.lin
  const linFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi5
  const swi5Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi4
  const swi4Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.con1
  const con1Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.unOcc
  const unOccFn = constant_8c5ba27d({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.isUno
  const isUnoFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.con
  const conFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 1.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.gre
  const greFn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.truDel1
  const truDel1Fn = truedelay_b49d8a1a({ delayTime: 180 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.les
  const lesFn = less_19683368({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.truDel7
  const truDel7Fn = truedelay_b49d8a1a({ delayTime: 60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.logSwi
  const logSwiFn = switch_1cc03fcf({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.logSwi1
  const logSwi1Fn = switch_1cc03fcf({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.nomFlow
  const nomFlowFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.VDis_flowNor
  const VDis_flowNorFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conDam
  const conDamFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conVal
  const conValFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeVal, k: kVal, Td: TdVal, Ti: TiVal, yMax: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi2
  const swi2Fn = switch_6d141143({});

  return (
    { THeaSet, u1Fan, uHea, oveFloSet, VOAMin_flow, VPri_flow, uCoo, uOpeMod, TZon, VActMin_flow }
  ) => {
    const addPar = addParFn({ u: THeaSet });
    const conZer3 = conZer3Fn({});
    const conHal = conHalFn({});
    const conTDisHeaSet = conTDisHeaSetFn({ u: uHea, f2: addPar.y, x1: conZer3.y, x2: conHal.y });
    const conInt = conIntFn({});
    const forZerFlo = forZerFloFn({ u1: oveFloSet, u2: conInt.y });
    const zerFlo = zerFloFn({ u: forZerFlo.y });
    const conInt1 = conInt1Fn({});
    const forCooMax = forCooMaxFn({ u1: oveFloSet, u2: conInt1.y });
    const cooMax = cooMaxFn({ u: forCooMax.y });
    const conInt2 = conInt2Fn({});
    const forMinFlo = forMinFloFn({ u1: oveFloSet, u2: conInt2.y });
    const minFlo = minFloFn({ u: forMinFlo.y });
    const add2 = add2Fn({ u1: cooMax.y, u2: minFlo.y });
    const add1 = add1Fn({ u1: zerFlo.y, u2: add2.y });
    const or3 = or3Fn({ u1: forZerFlo.y, u2: forCooMax.y });
    const or2 = or2Fn({ u1: forMinFlo.y, u2: or3.y });
    const greThr1 = greThr1Fn({ u: uCoo });
    const sub2 = sub2Fn({ u2: TZon });
    const greThr = greThrFn({ u: sub2.y });
    const and4 = and4Fn({ u1: greThr1.y, u2: greThr.y });
    const conZer = conZerFn({});
    const conOne = conOneFn({});
    const lin = linFn({ u: uCoo, x1: conZer.y, x2: conOne.y });
    const swi5 = swi5Fn({ u1: VActMin_flow, u2: and4.y, u3: lin.y });
    const swi = swiFn({ u1: swi5.y, u2: greThr1.y, u3: VActMin_flow });
    const swi4 = swi4Fn({ u1: add1.y, u2: or2.y, u3: swi.y });
    const con1 = con1Fn({});
    const unOcc = unOccFn({});
    const isUno = isUnoFn({ u1: unOcc.y, u2: uOpeMod });
    const con = conFn({});
    const greThr2 = greThr2Fn({ u: uHea });
    const gai1 = gai1Fn({ u: VOAMin_flow });
    const gre = greFn({ u1: VPri_flow, u2: gai1.y });
    const truDel1 = truDel1Fn({ u: gre.y });
    const les = lesFn({ u2: VOAMin_flow });
    const truDel7 = truDel7Fn({ u: les.y });
    const lat = latFn({ clr: truDel1.y, u: truDel7.y });
    const logSwi = logSwiFn({ u1: con.y, u2: greThr2.y, u3: lat.y });
    const logSwi1 = logSwi1Fn({ u1: con1.y, u2: isUno.y, u3: logSwi.y });
    const nomFlow = nomFlowFn({});
    const VDis_flowNor = VDis_flowNorFn({ u1: VPri_flow, u2: nomFlow.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: swi4.y, u2: nomFlow.y });
    const conDam = conDamFn({ trigger: u1Fan, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const swi3 = swi3Fn({ u1: conZer3.y, u2: isUno.y, u3: conDam.y });
    const conVal = conValFn({ trigger: greThr2.y });
    const swi1 = swi1Fn({ u1: conVal.y, u2: greThr2.y, u3: conZer3.y });
    const swi2 = swi2Fn({ u1: conZer3.y, u2: isUno.y, u3: swi1.y });

    return { THeaDisSet: conTDisHeaSet.y, VPri_flow_Set: swi4.y, y1Fan: logSwi1.y, yDam: swi3.y, yVal: swi2.y };
  }
}
