
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const constant_655d39b4 = require("../../../../../CDL/Logical/Sources/Constant");
const switch_1e2c142e = require("../../../../../CDL/Logical/Switch");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const multiply_a5ce8cd2 = require("../../../../../CDL/Reals/Multiply");
const switch_91d77162 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.con
  const conFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.conInt5
  const conInt5Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.intEqu1
  const intEqu1Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.con1
  const con1Fn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.conInt6
  const conInt6Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.intEqu2
  const intEqu2Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.logSwi1
  const logSwi1Fn = switch_1e2c142e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.logSwi
  const logSwiFn = switch_1e2c142e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.conInt3
  const conInt3Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.intEqu3
  const intEqu3Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.cloDam
  const cloDamFn = booleantoreal_552dc85b({ realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.conInt4
  const conInt4Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.intEqu4
  const intEqu4Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.opeDam
  const opeDamFn = booleantoreal_552dc85b({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.add3
  const add3Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.swi1
  const swi1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.booToRea
  const booToReaFn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanCVF.Subsequences.Overrides.pro
  const proFn = multiply_a5ce8cd2({});

  return (
    { uHeaOff, oveFan, oveDamPos, u1Fan, uVal, uDam }
  ) => {
    const con = conFn({});
    const conInt5 = conInt5Fn({});
    const intEqu1 = intEqu1Fn({ u1: oveFan, u2: conInt5.y });
    const con1 = con1Fn({});
    const conInt6 = conInt6Fn({});
    const intEqu2 = intEqu2Fn({ u1: oveFan, u2: conInt6.y });
    const logSwi1 = logSwi1Fn({ u1: con1.y, u2: intEqu2.y, u3: u1Fan });
    const logSwi = logSwiFn({ u1: con.y, u2: intEqu1.y, u3: logSwi1.y });
    const conInt3 = conInt3Fn({});
    const intEqu3 = intEqu3Fn({ u1: oveDamPos, u2: conInt3.y });
    const cloDam = cloDamFn({ u: intEqu3.y });
    const conInt4 = conInt4Fn({});
    const intEqu4 = intEqu4Fn({ u1: oveDamPos, u2: conInt4.y });
    const opeDam = opeDamFn({ u: intEqu4.y });
    const add3 = add3Fn({ u1: cloDam.y, u2: opeDam.y });
    const or2 = or2Fn({ u1: intEqu3.y, u2: intEqu4.y });
    const swi1 = swi1Fn({ u1: add3.y, u2: or2.y, u3: uDam });
    const booToRea = booToReaFn({ u: uHeaOff });
    const pro = proFn({ u1: booToRea.y, u2: uVal });

    return { y1Fan: logSwi.y, yDam: swi1.y, yVal: pro.y };
  }
}
