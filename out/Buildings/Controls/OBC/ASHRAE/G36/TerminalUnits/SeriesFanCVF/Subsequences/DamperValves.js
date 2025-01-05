
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves
const booleantoreal_df99be1a = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const edge_3f236118 = require("../../../../../CDL/Logical/Edge");
const fallingedge_fb103129 = require("../../../../../CDL/Logical/FallingEdge");
const latch_a5aa3a49 = require("../../../../../CDL/Logical/Latch");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const timer_a61e7f4a = require("../../../../../CDL/Logical/Timer");
const add_a5faf0f2 = require("../../../../../CDL/Reals/Add");
const addparameter_26b0d2d7 = require("../../../../../CDL/Reals/AddParameter");
const divide_52bbd688 = require("../../../../../CDL/Reals/Divide");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../../../CDL/Reals/LessThreshold");
const line_196841c3 = require("../../../../../CDL/Reals/Line");
const multiply_a462b873 = require("../../../../../CDL/Reals/Multiply");
const pidwithreset_1df6d9ad = require("../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeDam = Math.PI,
		controllerTypeVal = Math.PI,
		damPosHys = 0.05,
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.addPar
  const addParFn = addparameter_26b0d2d7({ p: dTDisZonSetMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conZer3
  const conZer3Fn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conHal
  const conHalFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conTDisHeaSet
  const conTDisHeaSetFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conInt
  const conIntFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.forZerFlo
  const forZerFloFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.zerFlo
  const zerFloFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.forCooMax
  const forCooMaxFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.cooMax
  const cooMaxFn = booleantoreal_df99be1a({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.forMinFlo
  const forMinFloFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.minFlo
  const minFloFn = booleantoreal_df99be1a({ realTrue: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.add1
  const add1Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conZer
  const conZerFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conOne
  const conOneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.lin
  const linFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.swi5
  const swi5Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.swi8
  const swi8Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.or5
  const or5Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.occ
  const occFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.isOcc
  const isOccFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.falEdg
  const falEdgFn = fallingedge_fb103129({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.cloDam
  const cloDamFn = lessthreshold_f64b25e3({ h: damPosHys/2, t: damPosHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.lat1
  const lat1Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.unOcc
  const unOccFn = constant_8c5ba27d({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.isUno
  const isUnoFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.nomFlow
  const nomFlowFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.VDis_flowNor
  const VDis_flowNorFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conDam
  const conDamFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.tim
  const timFn = timer_a61e7f4a({ t: 15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.edg
  const edgFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.booToRea
  const booToReaFn = booleantoreal_df99be1a({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.mul
  const mulFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.conVal
  const conValFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeVal, k: kVal, Td: TdVal, Ti: TiVal, yMax: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.DamperValves.swi2
  const swi2Fn = switch_6d141143({});

  return (
    { THeaSet, uDam, u1Fan, uHea, oveFloSet, uCoo, uOpeMod, TZon, VActMin_flow, u1TerFan, VPri_flow }
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
    const or1 = or1Fn({ u1: forZerFlo.y, u2: forCooMax.y });
    const or2 = or2Fn({ u1: forMinFlo.y, u2: or1.y });
    const greThr1 = greThr1Fn({ u: uCoo });
    const sub2 = sub2Fn({ u2: TZon });
    const greThr = greThrFn({ u: sub2.y });
    const and4 = and4Fn({ u1: greThr1.y, u2: greThr.y });
    const conZer = conZerFn({});
    const conOne = conOneFn({});
    const lin = linFn({ u: uCoo, x1: conZer.y, x2: conOne.y });
    const swi5 = swi5Fn({ u1: VActMin_flow, u2: and4.y, u3: lin.y });
    const swi = swiFn({ u1: swi5.y, u2: greThr1.y, u3: VActMin_flow });
    const swi8 = swi8Fn({ u1: add1.y, u2: or2.y, u3: swi.y });
    const greThr2 = greThr2Fn({ u: uHea });
    const or5 = or5Fn({ u1: greThr1.y, u2: greThr2.y });
    const occ = occFn({});
    const isOcc = isOccFn({ u1: uOpeMod, u2: occ.y });
    const or4 = or4Fn({ u1: or5.y, u2: isOcc.y });
    const falEdg = falEdgFn({ u: or4.y });
    const cloDam = cloDamFn({ u: uDam });
    const and2 = and2Fn({ u1: cloDam.y, u2: or4.y });
    const lat1 = lat1Fn({ clr: falEdg.y, u: and2.y });
    const unOcc = unOccFn({});
    const isUno = isUnoFn({ u1: unOcc.y, u2: uOpeMod });
    const nomFlow = nomFlowFn({});
    const VDis_flowNor = VDis_flowNorFn({ u1: VPri_flow, u2: nomFlow.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: swi8.y, u2: nomFlow.y });
    const conDam = conDamFn({ trigger: u1Fan, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const swi3 = swi3Fn({ u1: conZer3.y, u2: isUno.y, u3: conDam.y });
    const tim = timFn({ u: u1TerFan });
    const edg = edgFn({ u: or4.y });
    const lat = latFn({ clr: tim.passed, u: edg.y });
    const booToRea = booToReaFn({ u: lat.y });
    const mul = mulFn({ u1: swi3.y, u2: booToRea.y });
    const conVal = conValFn({ trigger: greThr2.y });
    const swi1 = swi1Fn({ u1: conVal.y, u2: greThr2.y, u3: conZer3.y });
    const swi2 = swi2Fn({ u1: conZer3.y, u2: isUno.y, u3: swi1.y });

    return { THeaDisSet: conTDisHeaSet.y, VPri_flow_Set: swi8.y, y1Fan: lat1.y, yDam: mul.y, yVal: swi2.y };
  }
}
