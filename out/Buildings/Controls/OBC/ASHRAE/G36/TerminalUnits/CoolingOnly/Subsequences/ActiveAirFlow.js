
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow
const booleantoreal_df99be1a = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const multiply_a462b873 = require("../../../../../CDL/Reals/Multiply");

module.exports = (
  {
		VCooMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.occMod
  const occModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.cooDowMod
  const cooDowModFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu1
  const intEqu1Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu2
  const intEqu2Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.actCooMax
  const actCooMaxFn = booleantoreal_df99be1a({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.booToRea
  const booToReaFn = booleantoreal_df99be1a({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.actMin
  const actMinFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.setUpMod
  const setUpModFn = constant_8c5ba27d({ k: 3 });

  return (
    { VOccMin_flow, uOpeMod }
  ) => {
    const occMod = occModFn({});
    const intEqu = intEquFn({ u1: occMod.y, u2: uOpeMod });
    const cooDowMod = cooDowModFn({});
    const intEqu1 = intEqu1Fn({ u1: cooDowMod.y, u2: uOpeMod });
    const or3 = or3Fn({ u1: intEqu.y, u2: intEqu1.y });
    const intEqu2 = intEqu2Fn({ u2: uOpeMod });
    const or2 = or2Fn({ u1: or3.y, u2: intEqu2.y });
    const actCooMax = actCooMaxFn({ u: or2.y });
    const booToRea = booToReaFn({ u: intEqu.y });
    const actMin = actMinFn({ u1: booToRea.y, u2: VOccMin_flow });
    const setUpMod = setUpModFn({ y: intEqu2.u1 });

    return { VActCooMax_flow: actCooMax.y, VActMin_flow: actMin.y };
  }
}
