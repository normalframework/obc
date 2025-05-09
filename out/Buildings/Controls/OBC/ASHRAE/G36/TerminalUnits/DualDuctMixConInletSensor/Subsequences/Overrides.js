
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const switch_91d77162 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  {
		VCooMax_flow,
		VHeaMax_flow,
		VMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt
  const conIntFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.forZerFlo
  const forZerFloFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.zerFlo
  const zerFloFn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt1
  const conInt1Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.forCooMax
  const forCooMaxFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.cooMax
  const cooMaxFn = booleantoreal_552dc85b({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt2
  const conInt2Fn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.forMinFlo
  const forMinFloFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.minFlo
  const minFloFn = booleantoreal_552dc85b({ realTrue: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt5
  const conInt5Fn = constant_01efacbe({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.forMinFlo1
  const forMinFlo1Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.heaMax
  const heaMaxFn = booleantoreal_552dc85b({ realTrue: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.add4
  const add4Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.add1
  const add1Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.or3
  const or3Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.or5
  const or5Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.or1
  const or1Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.swi
  const swiFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt3
  const conInt3Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.intEqu3
  const intEqu3Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.cloDam
  const cloDamFn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt4
  const conInt4Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.intEqu4
  const intEqu4Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.opeDam
  const opeDamFn = booleantoreal_552dc85b({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.add3
  const add3Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.swi1
  const swi1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt6
  const conInt6Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.intEqu1
  const intEqu1Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.cloDam1
  const cloDam1Fn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.conInt7
  const conInt7Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.intEqu2
  const intEqu2Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.opeDam1
  const opeDam1Fn = booleantoreal_552dc85b({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.add5
  const add5Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.or4
  const or4Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Subsequences.Overrides.swi2
  const swi2Fn = switch_91d77162({});

  return (
    { oveFloSet, oveHeaDamPos, oveCooDamPos, VActSet_flow, uCooDam, uHeaDam }
  ) => {
    const conInt = conIntFn({});
    const forZerFlo = forZerFloFn({ u1: oveFloSet, u2: conInt.y });
    const zerFlo = zerFloFn({ u: forZerFlo.y });
    const conInt1 = conInt1Fn({});
    const forCooMax = forCooMaxFn({ u1: oveFloSet, u2: conInt1.y });
    const cooMax = cooMaxFn({ u: forCooMax.y });
    const conInt2 = conInt2Fn({});
    const forMinFlo = forMinFloFn({ u1: oveFloSet, u2: conInt2.y });
    const minFlo = minFloFn({ u: forMinFlo.y });
    const conInt5 = conInt5Fn({});
    const forMinFlo1 = forMinFlo1Fn({ u1: oveFloSet, u2: conInt5.y });
    const heaMax = heaMaxFn({ u: forMinFlo1.y });
    const add4 = add4Fn({ u1: minFlo.y, u2: heaMax.y });
    const add2 = add2Fn({ u1: cooMax.y, u2: add4.y });
    const add1 = add1Fn({ u1: zerFlo.y, u2: add2.y });
    const or3 = or3Fn({ u1: forZerFlo.y, u2: forCooMax.y });
    const or5 = or5Fn({ u1: or3.y, u2: forMinFlo.y });
    const or1 = or1Fn({ u1: or5.y, u2: forMinFlo1.y });
    const swi = swiFn({ u1: add1.y, u2: or1.y, u3: VActSet_flow });
    const conInt3 = conInt3Fn({});
    const intEqu3 = intEqu3Fn({ u1: oveCooDamPos, u2: conInt3.y });
    const cloDam = cloDamFn({ u: intEqu3.y });
    const conInt4 = conInt4Fn({});
    const intEqu4 = intEqu4Fn({ u1: oveCooDamPos, u2: conInt4.y });
    const opeDam = opeDamFn({ u: intEqu4.y });
    const add3 = add3Fn({ u1: cloDam.y, u2: opeDam.y });
    const or2 = or2Fn({ u1: intEqu3.y, u2: intEqu4.y });
    const swi1 = swi1Fn({ u1: add3.y, u2: or2.y, u3: uCooDam });
    const conInt6 = conInt6Fn({});
    const intEqu1 = intEqu1Fn({ u1: oveHeaDamPos, u2: conInt6.y });
    const cloDam1 = cloDam1Fn({ u: intEqu1.y });
    const conInt7 = conInt7Fn({});
    const intEqu2 = intEqu2Fn({ u1: oveHeaDamPos, u2: conInt7.y });
    const opeDam1 = opeDam1Fn({ u: intEqu2.y });
    const add5 = add5Fn({ u1: cloDam1.y, u2: opeDam1.y });
    const or4 = or4Fn({ u1: intEqu1.y, u2: intEqu2.y });
    const swi2 = swi2Fn({ u1: add5.y, u2: or4.y, u3: uHeaDam });

    return { VSet_flow: swi.y, yCooDam: swi1.y, yHeaDam: swi2.y };
  }
}
