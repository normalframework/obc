
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const multiply_a5ce8cd2 = require("../../../../../CDL/Reals/Multiply");

module.exports = (
  {
		VCooMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.occMod
  const occModFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu
  const intEquFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.cooDowMod
  const cooDowModFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu1
  const intEqu1Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.or3
  const or3Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.setUpMod
  const setUpModFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu2
  const intEqu2Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.actCooMax
  const actCooMaxFn = booleantoreal_552dc85b({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.booToRea
  const booToReaFn = booleantoreal_552dc85b({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.actMin
  const actMinFn = multiply_a5ce8cd2({});

  return (
    { VOccMin_flow, uOpeMod }
  ) => {
    const occMod = occModFn({});
    const intEqu = intEquFn({ u1: occMod.y, u2: uOpeMod });
    const cooDowMod = cooDowModFn({});
    const intEqu1 = intEqu1Fn({ u1: cooDowMod.y, u2: uOpeMod });
    const or3 = or3Fn({ u1: intEqu.y, u2: intEqu1.y });
    const setUpMod = setUpModFn({});
    const intEqu2 = intEqu2Fn({ u1: setUpMod.y, u2: uOpeMod });
    const or2 = or2Fn({ u1: or3.y, u2: intEqu2.y });
    const actCooMax = actCooMaxFn({ u: or2.y });
    const booToRea = booToReaFn({ u: intEqu.y });
    const actMin = actMinFn({ u1: booToRea.y, u2: VOccMin_flow });

    return { VActCooMax_flow: actCooMax.y, VActMin_flow: actMin.y };
  }
}
