
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const sampler_dd234808 = require("../../../../../CDL/Discrete/Sampler");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
const fallingedge_8a05402a = require("../../../../../CDL/Logical/FallingEdge");
const latch_1952de0a = require("../../../../../CDL/Logical/Latch");
const not_f2b50019 = require("../../../../../CDL/Logical/Not");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const divide_777f36a7 = require("../../../../../CDL/Reals/Divide");
const greaterthreshold_7c60ca3f = require("../../../../../CDL/Reals/GreaterThreshold");
const line_15731da2 = require("../../../../../CDL/Reals/Line");
const max_5345c9f6 = require("../../../../../CDL/Reals/Max");
const multiply_a5ce8cd2 = require("../../../../../CDL/Reals/Multiply");
const pidwithreset_2293668c = require("../../../../../CDL/Reals/PIDWithReset");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const subtract_040901c2 = require("../../../../../CDL/Reals/Subtract");
const switch_91d77162 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeDam = 1,
		dTHys = 0.25,
		iniDam = 0.01,
		kDam = 0.5,
		looHys = 0.05,
		samplePeriod,
		TdDam = 0.1,
		TiDam = 300,
		VCooMax_flow,
		VHeaMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.sub2
  const sub2Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conZer
  const conZerFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conOne
  const conOneFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.lin
  const linFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.swi5
  const swi5Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.greThr2
  const greThr2Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.falEdg
  const falEdgFn = fallingedge_8a05402a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.samCoo
  const samCooFn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.greThr4
  const greThr4Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.and3
  const and3Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.lat
  const latFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conZer2
  const conZer2Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.swi2
  const swi2Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.swi
  const swiFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.booToRea1
  const booToRea1Fn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.mul2
  const mul2Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.sub1
  const sub1Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.greThr3
  const greThr3Fn = greaterthreshold_7c60ca3f({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.and1
  const and1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conZer1
  const conZer1Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conOne1
  const conOne1Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.lin1
  const lin1Fn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.swi1
  const swi1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.samHea
  const samHeaFn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.greThr5
  const greThr5Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.and2
  const and2Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.lat1
  const lat1Fn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.swi3
  const swi3Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.swi4
  const swi4Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.booToRea
  const booToReaFn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.mul
  const mulFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conZer3
  const conZer3Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.not3
  const not3Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.cooMax1
  const cooMax1Fn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.heaMax1
  const heaMax1Fn = constant_d2aca5e8({ k: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.max2
  const max2Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.VDis_flowNor
  const VDis_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conCooDam
  const conCooDamFn = pidwithreset_2293668c({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.mul3
  const mul3Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.cooDamPos
  const cooDamPosFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.VDis_flowNor1
  const VDis_flowNor1Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.VDisSet_flowNor1
  const VDisSet_flowNor1Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.conHeaDam
  const conHeaDamFn = pidwithreset_2293668c({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersDualSensors.heaDamPos
  const heaDamPosFn = switch_91d77162({});

  return (
    { u1CooAHU, u1HeaAHU, uCoo, uHea, VActMin_flow, VActCooMax_flow, VActHeaMax_flow, TZon, THotSup, TColSup, VColDucDis_flow, VHotDucDis_flow }
  ) => {
    const greThr1 = greThr1Fn({ u: uCoo });
    const sub2 = sub2Fn({ u1: TColSup, u2: TZon });
    const greThr = greThrFn({ u: sub2.y });
    const and4 = and4Fn({ u1: greThr1.y, u2: greThr.y });
    const conZer = conZerFn({});
    const conOne = conOneFn({});
    const lin = linFn({ f1: VActMin_flow, f2: VActCooMax_flow, u: uCoo, x1: conZer.y, x2: conOne.y });
    const swi5 = swi5Fn({ u1: VActMin_flow, u2: and4.y, u3: lin.y });
    const greThr2 = greThr2Fn({ u: uHea });
    const or2 = or2Fn({ u1: greThr1.y, u2: greThr2.y });
    const not1 = not1Fn({ u: or2.y });
    const falEdg = falEdgFn({ u: not1.y });
    const samCoo = samCooFn({ u: uCoo });
    const greThr4 = greThr4Fn({ u: samCoo.y });
    const and3 = and3Fn({ u1: greThr4.y, u2: not1.y });
    const lat = latFn({ clr: falEdg.y, u: and3.y });
    const conZer2 = conZer2Fn({});
    const swi2 = swi2Fn({ u1: VActMin_flow, u2: lat.y, u3: conZer2.y });
    const swi = swiFn({ u1: swi5.y, u2: greThr1.y, u3: swi2.y });
    const booToRea1 = booToRea1Fn({ u: greThr2.y });
    const mul2 = mul2Fn({ u1: swi.y, u2: booToRea1.y });
    const sub1 = sub1Fn({ u1: TZon, u2: THotSup });
    const greThr3 = greThr3Fn({ u: sub1.y });
    const and1 = and1Fn({ u1: greThr3.y, u2: greThr2.y });
    const conZer1 = conZer1Fn({});
    const conOne1 = conOne1Fn({});
    const lin1 = lin1Fn({ f1: VActMin_flow, f2: VActHeaMax_flow, u: uHea, x1: conZer1.y, x2: conOne1.y });
    const swi1 = swi1Fn({ u1: VActMin_flow, u2: and1.y, u3: lin1.y });
    const samHea = samHeaFn({ u: uHea });
    const greThr5 = greThr5Fn({ u: samHea.y });
    const and2 = and2Fn({ u1: not1.y, u2: greThr5.y });
    const lat1 = lat1Fn({ clr: falEdg.y, u: and2.y });
    const swi3 = swi3Fn({ u1: VActMin_flow, u2: lat1.y, u3: conZer2.y });
    const swi4 = swi4Fn({ u1: swi1.y, u2: greThr2.y, u3: swi3.y });
    const booToRea = booToReaFn({ u: greThr1.y });
    const mul = mulFn({ u1: swi4.y, u2: booToRea.y });
    const add2 = add2Fn({ u1: mul.y, u2: mul2.y });
    const conZer3 = conZer3Fn({});
    const not3 = not3Fn({ u: u1CooAHU });
    const cooMax1 = cooMax1Fn({});
    const heaMax1 = heaMax1Fn({});
    const max2 = max2Fn({ u1: cooMax1.y, u2: heaMax1.y });
    const VDis_flowNor = VDis_flowNorFn({ u1: VColDucDis_flow, u2: max2.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: mul2.y, u2: max2.y });
    const conCooDam = conCooDamFn({ trigger: u1CooAHU, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const mul3 = mul3Fn({ u1: conCooDam.y, u2: booToRea1.y });
    const cooDamPos = cooDamPosFn({ u1: conZer3.y, u2: not3.y, u3: mul3.y });
    const not2 = not2Fn({ u: u1HeaAHU });
    const VDis_flowNor1 = VDis_flowNor1Fn({ u1: VHotDucDis_flow, u2: max2.y });
    const VDisSet_flowNor1 = VDisSet_flowNor1Fn({ u1: mul.y, u2: max2.y });
    const conHeaDam = conHeaDamFn({ trigger: u1HeaAHU, u_m: VDis_flowNor1.y, u_s: VDisSet_flowNor1.y });
    const mul1 = mul1Fn({ u1: conHeaDam.y, u2: booToRea.y });
    const heaDamPos = heaDamPosFn({ u1: conZer3.y, u2: not2.y, u3: mul1.y });

    return { VColDucDis_flow_Set: mul2.y, VDis_flow_Set: add2.y, VHotDucDis_flow_Set: mul.y, yCooDam: cooDamPos.y, yHeaDam: heaDamPos.y };
  }
}
