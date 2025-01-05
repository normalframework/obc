
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides
const booleantoreal_df99be1a = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const add_a5faf0f2 = require("../../../../../CDL/Reals/Add");
const multiply_a462b873 = require("../../../../../CDL/Reals/Multiply");
const switch_6d141143 = require("../../../../../CDL/Reals/Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.conInt3
  const conInt3Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.intEqu3
  const intEqu3Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.cloDam
  const cloDamFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.conInt4
  const conInt4Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.intEqu4
  const intEqu4Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.opeDam
  const opeDamFn = booleantoreal_df99be1a({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.add3
  const add3Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.booToRea
  const booToReaFn = booleantoreal_df99be1a({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.Overrides.pro
  const proFn = multiply_a462b873({});

  return (
    { uHeaOff, oveDamPos, uVal, uDam }
  ) => {
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

    return { yDam: swi1.y, yVal: pro.y };
  }
}
