
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
const latch_1952de0a = require("../../../../../CDL/Logical/Latch");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const constant_655d39b4 = require("../../../../../CDL/Logical/Sources/Constant");
const switch_1e2c142e = require("../../../../../CDL/Logical/Switch");
const truedelay_17dc655b = require("../../../../../CDL/Logical/TrueDelay");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const addparameter_2b4d5fb6 = require("../../../../../CDL/Reals/AddParameter");
const divide_777f36a7 = require("../../../../../CDL/Reals/Divide");
const greater_2582f78c = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_7c60ca3f = require("../../../../../CDL/Reals/GreaterThreshold");
const less_15730f47 = require("../../../../../CDL/Reals/Less");
const line_15731da2 = require("../../../../../CDL/Reals/Line");
const multiplybyparameter_8938fce0 = require("../../../../../CDL/Reals/MultiplyByParameter");
const pidwithreset_2293668c = require("../../../../../CDL/Reals/PIDWithReset");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const subtract_040901c2 = require("../../../../../CDL/Reals/Subtract");
const switch_91d77162 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeDam = 1,
		controllerTypeVal = 1,
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
  const addParFn = addparameter_2b4d5fb6({ p: dTDisZonSetMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conZer3
  const conZer3Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conHal
  const conHalFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conTDisHeaSet
  const conTDisHeaSetFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conInt
  const conIntFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.forZerFlo
  const forZerFloFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.zerFlo
  const zerFloFn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conInt1
  const conInt1Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.forCooMax
  const forCooMaxFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.cooMax
  const cooMaxFn = booleantoreal_552dc85b({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conInt2
  const conInt2Fn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.forMinFlo
  const forMinFloFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.minFlo
  const minFloFn = booleantoreal_552dc85b({ realTrue: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.add1
  const add1Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.or3
  const or3Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.sub2
  const sub2Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conZer
  const conZerFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conOne
  const conOneFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.lin
  const linFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi5
  const swi5Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi
  const swiFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi4
  const swi4Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.con1
  const con1Fn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.unOcc
  const unOccFn = constant_01efacbe({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.isUno
  const isUnoFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.con
  const conFn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.greThr2
  const greThr2Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 1.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.gre
  const greFn = greater_2582f78c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.truDel1
  const truDel1Fn = truedelay_17dc655b({ delayTime: 180 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.les
  const lesFn = less_15730f47({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.truDel7
  const truDel7Fn = truedelay_17dc655b({ delayTime: 60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.lat
  const latFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.logSwi
  const logSwiFn = switch_1e2c142e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.logSwi1
  const logSwi1Fn = switch_1e2c142e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.nomFlow
  const nomFlowFn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.VDis_flowNor
  const VDis_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conDam
  const conDamFn = pidwithreset_2293668c({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi3
  const swi3Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.conVal
  const conValFn = pidwithreset_2293668c({ controllerType: controllerTypeVal, k: kVal, Td: TdVal, Ti: TiVal, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi1
  const swi1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.DamperValves.swi2
  const swi2Fn = switch_91d77162({});

  return (
    { THeaSet, u1Fan, TSupSet, uHea, TDis, oveFloSet, VOAMin_flow, VPri_flow, uCoo, uOpeMod, VActMin_flow, VActCooMax_flow, TSup, TZon }
  ) => {
    const addPar = addParFn({ u: THeaSet });
    const conZer3 = conZer3Fn({});
    const conHal = conHalFn({});
    const conTDisHeaSet = conTDisHeaSetFn({ f1: TSupSet, f2: addPar.y, u: uHea, x1: conZer3.y, x2: conHal.y });
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
    const sub2 = sub2Fn({ u1: TSup, u2: TZon });
    const greThr = greThrFn({ u: sub2.y });
    const and4 = and4Fn({ u1: greThr1.y, u2: greThr.y });
    const conZer = conZerFn({});
    const conOne = conOneFn({});
    const lin = linFn({ f1: VActMin_flow, f2: VActCooMax_flow, u: uCoo, x1: conZer.y, x2: conOne.y });
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
    const les = lesFn({ u1: VPri_flow, u2: VOAMin_flow });
    const truDel7 = truDel7Fn({ u: les.y });
    const lat = latFn({ clr: truDel1.y, u: truDel7.y });
    const logSwi = logSwiFn({ u1: con.y, u2: greThr2.y, u3: lat.y });
    const logSwi1 = logSwi1Fn({ u1: con1.y, u2: isUno.y, u3: logSwi.y });
    const nomFlow = nomFlowFn({});
    const VDis_flowNor = VDis_flowNorFn({ u1: VPri_flow, u2: nomFlow.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: swi4.y, u2: nomFlow.y });
    const conDam = conDamFn({ trigger: u1Fan, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const swi3 = swi3Fn({ u1: conZer3.y, u2: isUno.y, u3: conDam.y });
    const conVal = conValFn({ trigger: greThr2.y, u_m: TDis, u_s: conTDisHeaSet.y });
    const swi1 = swi1Fn({ u1: conVal.y, u2: greThr2.y, u3: conZer3.y });
    const swi2 = swi2Fn({ u1: conZer3.y, u2: isUno.y, u3: swi1.y });

    return { THeaDisSet: conTDisHeaSet.y, VPri_flow_Set: swi4.y, y1Fan: logSwi1.y, yDam: swi3.y, yVal: swi2.y };
  }
}
