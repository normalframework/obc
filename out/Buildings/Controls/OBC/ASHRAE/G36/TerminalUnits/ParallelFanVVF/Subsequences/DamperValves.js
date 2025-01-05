
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves
const booleantoreal_df99be1a = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const latch_a5aa3a49 = require("../../../../../CDL/Logical/Latch");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const add_a5faf0f2 = require("../../../../../CDL/Reals/Add");
const addparameter_26b0d2d7 = require("../../../../../CDL/Reals/AddParameter");
const divide_52bbd688 = require("../../../../../CDL/Reals/Divide");
const greater_b1da53cb = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const line_196841c3 = require("../../../../../CDL/Reals/Line");
const max_a5fb1db5 = require("../../../../../CDL/Reals/Max");
const multiply_a462b873 = require("../../../../../CDL/Reals/Multiply");
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
		maxRat,
		minRat,
		TdDam = 0.1,
		TdVal = 0.1,
		TiDam = 300,
		TiVal = 300,
		VCooMax_flow,
		VMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.addPar
  const addParFn = addparameter_26b0d2d7({ p: dTDisZonSetMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conZer3
  const conZer3Fn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conHal
  const conHalFn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conTDisHeaSet
  const conTDisHeaSetFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.uno
  const unoFn = constant_8c5ba27d({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.isUno
  const isUnoFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.gre1
  const gre1Fn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.minFan
  const minFanFn = constant_baefa089({ k: minRat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.sub
  const subFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.gre
  const greFn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conInt
  const conIntFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.forZerFlo
  const forZerFloFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.zerFlo
  const zerFloFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.forCooMax
  const forCooMaxFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.cooMax
  const cooMaxFn = booleantoreal_df99be1a({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.forMinFlo
  const forMinFloFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.minFlo
  const minFloFn = booleantoreal_df99be1a({ realTrue: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.add1
  const add1Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conZer
  const conZerFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conOne
  const conOneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.lin
  const linFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi5
  const swi5Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi8
  const swi8Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.max1
  const max1Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.mul
  const mulFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.occ
  const occFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.isOcc
  const isOccFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.gre2
  const gre2Fn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.mul1
  const mul1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.cooHea
  const cooHeaFn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.booToRea2
  const booToRea2Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.max2
  const max2Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.maxFan
  const maxFanFn = constant_baefa089({ k: maxRat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conHal1
  const conHal1Fn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conHal2
  const conHal2Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.heaFanRat
  const heaFanRatFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.mul2
  const mul2Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi6
  const swi6Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi4
  const swi4Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi7
  const swi7Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.greThr3
  const greThr3Fn = greaterthreshold_64a3c4e0({ h: floHys/2, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.nomFlow
  const nomFlowFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.VDis_flowNor
  const VDis_flowNorFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conDam
  const conDamFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.conVal
  const conValFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeVal, k: kVal, Td: TdVal, Ti: TiVal, yMax: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.DamperValves.swi2
  const swi2Fn = switch_6d141143({});

  return (
    { THeaSet, u1Fan, uHea, oveFloSet, VPri_flow, VOAMin_flow, uCoo, uOpeMod, TZon, VActMin_flow }
  ) => {
    const addPar = addParFn({ u: THeaSet });
    const conZer3 = conZer3Fn({});
    const conHal = conHalFn({});
    const conTDisHeaSet = conTDisHeaSetFn({ u: uHea, f2: addPar.y, x1: conZer3.y, x2: conHal.y });
    const uno = unoFn({});
    const isUno = isUnoFn({ u1: uno.y, u2: uOpeMod });
    const gre1 = gre1Fn({ u2: VOAMin_flow });
    const minFan = minFanFn({});
    const gai1 = gai1Fn({ u: minFan.y });
    const sub = subFn({ u1: VOAMin_flow, u2: gai1.y });
    const gre = greFn({ u1: sub.y, u2: VPri_flow });
    const lat = latFn({ clr: gre1.y, u: gre.y });
    const booToRea = booToReaFn({ u: lat.y });
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
    const swi8 = swi8Fn({ u1: add1.y, u2: or2.y, u3: swi.y });
    const sub1 = sub1Fn({ u1: VOAMin_flow, u2: swi8.y });
    const max1 = max1Fn({ u1: conZer3.y, u2: sub1.y });
    const mul = mulFn({ u1: booToRea.y, u2: max1.y });
    const occ = occFn({});
    const isOcc = isOccFn({ u1: uOpeMod, u2: occ.y });
    const and1 = and1Fn({ u1: isOcc.y, u2: greThr1.y });
    const gre2 = gre2Fn({ u1: VOAMin_flow, u2: swi8.y });
    const booToRea1 = booToRea1Fn({ u: gre2.y });
    const mul1 = mul1Fn({ u1: max1.y, u2: booToRea1.y });
    const greThr2 = greThr2Fn({ u: uHea });
    const cooHea = cooHeaFn({ u1: greThr1.y, u2: greThr2.y });
    const not1 = not1Fn({ u: cooHea.y });
    const booToRea2 = booToRea2Fn({ u: greThr2.y });
    const max2 = max2Fn({ u1: minFan.y, u2: mul1.y });
    const maxFan = maxFanFn({});
    const conHal1 = conHal1Fn({});
    const conHal2 = conHal2Fn({});
    const heaFanRat = heaFanRatFn({ f1: max2.y, f2: maxFan.y, u: uHea, x1: conHal1.y, x2: conHal2.y });
    const mul2 = mul2Fn({ u1: booToRea2.y, u2: heaFanRat.y });
    const swi6 = swi6Fn({ u1: mul1.y, u2: not1.y, u3: mul2.y });
    const swi4 = swi4Fn({ u1: mul.y, u2: and1.y, u3: swi6.y });
    const swi7 = swi7Fn({ u1: conZer3.y, u2: isUno.y, u3: swi4.y });
    const greThr3 = greThr3Fn({ u: swi7.y });
    const nomFlow = nomFlowFn({});
    const VDis_flowNor = VDis_flowNorFn({ u1: VPri_flow, u2: nomFlow.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: swi8.y, u2: nomFlow.y });
    const conDam = conDamFn({ trigger: u1Fan, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const swi3 = swi3Fn({ u1: conZer3.y, u2: isUno.y, u3: conDam.y });
    const conVal = conValFn({ trigger: greThr2.y });
    const swi1 = swi1Fn({ u1: conVal.y, u2: greThr2.y, u3: conZer3.y });
    const swi2 = swi2Fn({ u1: conZer3.y, u2: isUno.y, u3: swi1.y });

    return { THeaDisSet: conTDisHeaSet.y, VFan_flow_Set: swi7.y, VPri_flow_Set: swi8.y, y1Fan: greThr3.y, yDam: swi3.y, yVal: swi2.y };
  }
}
