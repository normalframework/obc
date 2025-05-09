
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
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
		TdDam = 0.1,
		TiDam = 300,
		VCooMax_flow,
		VHeaMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.sub2
  const sub2Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conZer
  const conZerFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conOne
  const conOneFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.lin
  const linFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.swi5
  const swi5Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.greThr2
  const greThr2Fn = greaterthreshold_7c60ca3f({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.booToRea2
  const booToRea2Fn = booleantoreal_552dc85b({ realFalse: 0, realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conZer3
  const conZer3Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.sub1
  const sub1Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.greThr3
  const greThr3Fn = greaterthreshold_7c60ca3f({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.and1
  const and1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conZer1
  const conZer1Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conOne1
  const conOne1Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.lin1
  const lin1Fn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.swi2
  const swi2Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.swi3
  const swi3Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.sub3
  const sub3Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.max1
  const max1Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.mul3
  const mul3Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.swi1
  const swi1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.swi
  const swiFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.not3
  const not3Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.cooMax1
  const cooMax1Fn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.heaMax1
  const heaMax1Fn = constant_d2aca5e8({ k: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.max2
  const max2Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.VDis_flowNor
  const VDis_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.VDisSet_flowNor
  const VDisSet_flowNorFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conCooDam
  const conCooDamFn = pidwithreset_2293668c({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.cooDamPos
  const cooDamPosFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.VDis_flowNor1
  const VDis_flowNor1Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.VDisSet_flowNor1
  const VDisSet_flowNor1Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.conHeaDam
  const conHeaDamFn = pidwithreset_2293668c({ controllerType: controllerTypeDam, k: kDam, Td: TdDam, Ti: TiDam, y_reset: iniDam, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.or1
  const or1Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.booToRea1
  const booToRea1Fn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Dampers.heaDamPos
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
    const booToRea2 = booToRea2Fn({ u: greThr2.y });
    const conZer3 = conZer3Fn({});
    const sub1 = sub1Fn({ u1: TZon, u2: THotSup });
    const greThr3 = greThr3Fn({ u: sub1.y });
    const and1 = and1Fn({ u1: greThr3.y, u2: greThr2.y });
    const conZer1 = conZer1Fn({});
    const conOne1 = conOne1Fn({});
    const lin1 = lin1Fn({ x1: conZer1.y, f2: VActHeaMax_flow, u: uHea, x2: conOne1.y });
    const swi2 = swi2Fn({ u1: VActMin_flow, u2: and1.y, u3: lin1.y });
    const swi3 = swi3Fn({ u1: swi2.y, u2: greThr2.y, u3: conZer3.y });
    const sub3 = sub3Fn({ u1: VActMin_flow, u2: swi3.y });
    const max1 = max1Fn({ u1: conZer3.y, u2: sub3.y });
    const mul3 = mul3Fn({ u1: booToRea2.y, u2: max1.y });
    const swi1 = swi1Fn({ u1: VActMin_flow, u2: not1.y, u3: mul3.y });
    const swi = swiFn({ u1: swi5.y, u2: greThr1.y, u3: swi1.y });
    const add2 = add2Fn({ u1: swi.y, u2: swi3.y });
    const not3 = not3Fn({ u: u1CooAHU });
    const cooMax1 = cooMax1Fn({});
    const heaMax1 = heaMax1Fn({});
    const max2 = max2Fn({ u1: cooMax1.y, u2: heaMax1.y });
    const VDis_flowNor = VDis_flowNorFn({ u1: VColDucDis_flow, u2: max2.y });
    const VDisSet_flowNor = VDisSet_flowNorFn({ u1: swi.y, u2: max2.y });
    const conCooDam = conCooDamFn({ trigger: u1CooAHU, u_m: VDis_flowNor.y, u_s: VDisSet_flowNor.y });
    const cooDamPos = cooDamPosFn({ u1: conZer3.y, u2: not3.y, u3: conCooDam.y });
    const VDis_flowNor1 = VDis_flowNor1Fn({ u1: VHotDucDis_flow, u2: max2.y });
    const VDisSet_flowNor1 = VDisSet_flowNor1Fn({ u1: swi3.y, u2: max2.y });
    const conHeaDam = conHeaDamFn({ trigger: u1HeaAHU, u_m: VDis_flowNor1.y, u_s: VDisSet_flowNor1.y });
    const or1 = or1Fn({ u1: greThr1.y, u2: or2.y });
    const booToRea1 = booToRea1Fn({ u: or1.y });
    const mul1 = mul1Fn({ u1: conHeaDam.y, u2: booToRea1.y });
    const heaDamPos = heaDamPosFn({ u1: mul1.y, u2: u1HeaAHU, u3: conZer3.y });

    return { VColDucDis_flow_Set: swi.y, VDis_flow_Set: add2.y, VHotDucDis_flow_Set: swi3.y, yCooDam: cooDamPos.y, yHeaDam: heaDamPos.y };
  }
}
