
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const divide_777f36a7 = require("../../../../../CDL/Reals/Divide");
const greater_2582f78c = require("../../../../../CDL/Reals/Greater");
const line_15731da2 = require("../../../../../CDL/Reals/Line");
const pidwithreset_2293668c = require("../../../../../CDL/Reals/PIDWithReset");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const switch_91d77162 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		damCon = 1,
		dTHys = 0.25,
		iniDam = 0.01,
		kDam = 0.5,
		TdDam = 0.1,
		TiDam = 300,
		VCooMax_flow,
		VMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conInt1
  const conInt1Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.forZerFlo
  const forZerFloFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.zerFlo
  const zerFloFn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conInt2
  const conInt2Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.forCooMax
  const forCooMaxFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.cooMax
  const cooMaxFn = booleantoreal_552dc85b({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conInt3
  const conInt3Fn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.forMinFlo
  const forMinFloFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.minFlo
  const minFloFn = booleantoreal_552dc85b({ realTrue: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.add1
  const add1Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.or3
  const or3Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.or1
  const or1Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.gre
  const greFn = greater_2582f78c({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.con
  const conFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.con1
  const con1Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.lin
  const linFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.swi
  const swiFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conInt
  const conIntFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.cooSta
  const cooStaFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.actFlo
  const actFloFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.swi1
  const swi1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conInt4
  const conInt4Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.intEqu3
  const intEqu3Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.cloDam
  const cloDamFn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conInt5
  const conInt5Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.intEqu4
  const intEqu4Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.opeDam
  const opeDamFn = booleantoreal_552dc85b({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.add3
  const add3Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.nomFlow
  const nomFlowFn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.VDis_flowNor
  const VDis_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.conPID
  const conPIDFn = pidwithreset_2293668c({ controllerType: damCon, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Dampers.swi2
  const swi2Fn = switch_91d77162({});

  return (
    { VActMin_flow, u1Fan, uZonSta, oveFloSet, TSup, TZon, oveDamPos, VActCooMax_flow, uCoo, VDis_flow }
  ) => {
    const conInt1 = conInt1Fn({});
    const forZerFlo = forZerFloFn({ u1: oveFloSet, u2: conInt1.y });
    const zerFlo = zerFloFn({ u: forZerFlo.y });
    const conInt2 = conInt2Fn({});
    const forCooMax = forCooMaxFn({ u1: oveFloSet, u2: conInt2.y });
    const cooMax = cooMaxFn({ u: forCooMax.y });
    const conInt3 = conInt3Fn({});
    const forMinFlo = forMinFloFn({ u1: oveFloSet, u2: conInt3.y });
    const minFlo = minFloFn({ u: forMinFlo.y });
    const add2 = add2Fn({ u1: cooMax.y, u2: minFlo.y });
    const add1 = add1Fn({ u1: zerFlo.y, u2: add2.y });
    const or3 = or3Fn({ u1: forCooMax.y, u2: forZerFlo.y });
    const or1 = or1Fn({ u1: forMinFlo.y, u2: or3.y });
    const gre = greFn({ u1: TSup, u2: TZon });
    const con = conFn({});
    const con1 = con1Fn({});
    const lin = linFn({ f1: VActMin_flow, f2: VActCooMax_flow, u: uCoo, x1: con.y, x2: con1.y });
    const swi = swiFn({ u1: VActMin_flow, u2: gre.y, u3: lin.y });
    const conInt = conIntFn({});
    const cooSta = cooStaFn({ u1: conInt.y, u2: uZonSta });
    const actFlo = actFloFn({ u1: swi.y, u2: cooSta.y, u3: VActMin_flow });
    const swi1 = swi1Fn({ u1: add1.y, u2: or1.y, u3: actFlo.y });
    const conInt4 = conInt4Fn({});
    const intEqu3 = intEqu3Fn({ u1: oveDamPos, u2: conInt4.y });
    const cloDam = cloDamFn({ u: intEqu3.y });
    const conInt5 = conInt5Fn({});
    const intEqu4 = intEqu4Fn({ u1: oveDamPos, u2: conInt5.y });
    const opeDam = opeDamFn({ u: intEqu4.y });
    const add3 = add3Fn({ u1: cloDam.y, u2: opeDam.y });
    const or2 = or2Fn({ u1: intEqu3.y, u2: intEqu4.y });
    const nomFlow = nomFlowFn({});
    const VDis_flowNor = VDis_flowNorFn({ u1: VDis_flow, u2: nomFlow.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: swi1.y, u2: nomFlow.y });
    const conPID = conPIDFn({ trigger: u1Fan, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const swi2 = swi2Fn({ u1: add3.y, u2: or2.y, u3: conPID.y });

    return { VSet_flow: swi1.y, yDam: swi2.y };
  }
}
