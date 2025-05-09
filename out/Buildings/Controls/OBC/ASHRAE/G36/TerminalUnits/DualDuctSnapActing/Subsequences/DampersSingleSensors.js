
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const sampler_dd234808 = require("../../../../../CDL/Discrete/Sampler");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
const fallingedge_8a05402a = require("../../../../../CDL/Logical/FallingEdge");
const latch_1952de0a = require("../../../../../CDL/Logical/Latch");
const not_f2b50019 = require("../../../../../CDL/Logical/Not");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const divide_777f36a7 = require("../../../../../CDL/Reals/Divide");
const greaterthreshold_7c60ca3f = require("../../../../../CDL/Reals/GreaterThreshold");
const line_15731da2 = require("../../../../../CDL/Reals/Line");
const max_5345c9f6 = require("../../../../../CDL/Reals/Max");
const multiply_a5ce8cd2 = require("../../../../../CDL/Reals/Multiply");
const pidwithreset_2293668c = require("../../../../../CDL/Reals/PIDWithReset");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");
const switch_91d77162 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeDam = 1,
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.conZer
  const conZerFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.conOne
  const conOneFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.lin
  const linFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.conZer1
  const conZer1Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.conOne1
  const conOne1Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.lin1
  const lin1Fn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.greThr2
  const greThr2Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.heaFloSet
  const heaFloSetFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.cooFloSet
  const cooFloSetFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.falEdg
  const falEdgFn = fallingedge_8a05402a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.samCoo
  const samCooFn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.greThr4
  const greThr4Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.and3
  const and3Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.lat
  const latFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.or3
  const or3Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.and1
  const and1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.samHea
  const samHeaFn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.greThr5
  const greThr5Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.and2
  const and2Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.lat1
  const lat1Fn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.or4
  const or4Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.or1
  const or1Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.cooMax1
  const cooMax1Fn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.heaMax1
  const heaMax1Fn = constant_d2aca5e8({ k: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.max2
  const max2Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.VDis_flowNor
  const VDis_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.conCooDam
  const conCooDamFn = pidwithreset_2293668c({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.conZer3
  const conZer3Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.damPos
  const damPosFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.booToRea
  const booToReaFn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.cooDamPos
  const cooDamPosFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.booToRea1
  const booToRea1Fn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.mul2
  const mul2Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.DampersSingleSensors.heaDamPos
  const heaDamPosFn = switch_91d77162({});

  return (
    { u1CooAHU, u1HeaAHU, uCoo, uHea, VActMin_flow, VActCooMax_flow, VActHeaMax_flow, VDis_flow }
  ) => {
    const conZer = conZerFn({});
    const conOne = conOneFn({});
    const lin = linFn({ f1: VActMin_flow, f2: VActCooMax_flow, u: uCoo, x1: conZer.y, x2: conOne.y });
    const greThr1 = greThr1Fn({ u: uCoo });
    const conZer1 = conZer1Fn({});
    const conOne1 = conOne1Fn({});
    const lin1 = lin1Fn({ f1: VActMin_flow, f2: VActHeaMax_flow, u: uHea, x1: conZer1.y, x2: conOne1.y });
    const greThr2 = greThr2Fn({ u: uHea });
    const heaFloSet = heaFloSetFn({ u1: lin1.y, u2: greThr2.y, u3: VActMin_flow });
    const cooFloSet = cooFloSetFn({ u1: lin.y, u2: greThr1.y, u3: heaFloSet.y });
    const or2 = or2Fn({ u1: greThr1.y, u2: greThr2.y });
    const not1 = not1Fn({ u: or2.y });
    const falEdg = falEdgFn({ u: not1.y });
    const samCoo = samCooFn({ u: uCoo });
    const greThr4 = greThr4Fn({ u: samCoo.y });
    const and3 = and3Fn({ u1: greThr4.y, u2: not1.y });
    const lat = latFn({ clr: falEdg.y, u: and3.y });
    const or3 = or3Fn({ u1: greThr1.y, u2: lat.y });
    const and1 = and1Fn({ u1: u1CooAHU, u2: or3.y });
    const samHea = samHeaFn({ u: uHea });
    const greThr5 = greThr5Fn({ u: samHea.y });
    const and2 = and2Fn({ u1: not1.y, u2: greThr5.y });
    const lat1 = lat1Fn({ clr: falEdg.y, u: and2.y });
    const or4 = or4Fn({ u1: greThr2.y, u2: lat1.y });
    const and4 = and4Fn({ u1: u1HeaAHU, u2: or4.y });
    const or1 = or1Fn({ u1: u1CooAHU, u2: u1HeaAHU });
    const cooMax1 = cooMax1Fn({});
    const heaMax1 = heaMax1Fn({});
    const max2 = max2Fn({ u1: cooMax1.y, u2: heaMax1.y });
    const VDis_flowNor = VDis_flowNorFn({ u1: VDis_flow, u2: max2.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: cooFloSet.y, u2: max2.y });
    const conCooDam = conCooDamFn({ trigger: or1.y, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const conZer3 = conZer3Fn({});
    const damPos = damPosFn({ u1: conCooDam.y, u2: or1.y, u3: conZer3.y });
    const booToRea = booToReaFn({ u: u1CooAHU });
    const mul1 = mul1Fn({ u1: damPos.y, u2: booToRea.y });
    const cooDamPos = cooDamPosFn({ u1: mul1.y, u2: or3.y, u3: conZer3.y });
    const booToRea1 = booToRea1Fn({ u: u1HeaAHU });
    const mul2 = mul2Fn({ u1: damPos.y, u2: booToRea1.y });
    const heaDamPos = heaDamPosFn({ u1: mul2.y, u2: or4.y, u3: conZer3.y });

    return { VDis_flow_Set: cooFloSet.y, y1CooDam: and1.y, y1HeaDam: and4.y, yCooDam: cooDamPos.y, yHeaDam: heaDamPos.y };
  }
}
