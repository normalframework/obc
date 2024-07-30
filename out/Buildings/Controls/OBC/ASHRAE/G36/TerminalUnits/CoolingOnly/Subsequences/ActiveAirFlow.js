
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow
const booleantoreal_4qvumk = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_esvl6o = require("../../../../../CDL/Integers/Equal");
const constant_wg6e3 = require("../../../../../CDL/Integers/Sources/Constant");
const or_s6rvt = require("../../../../../CDL/Logical/Or");
const multiply_03jeh = require("../../../../../CDL/Reals/Multiply");

module.exports = (
  {

    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.occMod
  const occModFn = constant_wg6e3({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu
  const intEquFn = equal_esvl6o({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.cooDowMod
  const cooDowModFn = constant_wg6e3({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.coolDown" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu1
  const intEqu1Fn = equal_esvl6o({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.or3
  const or3Fn = or_s6rvt({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.intEqu2
  const intEqu2Fn = equal_esvl6o({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.or2
  const or2Fn = or_s6rvt({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.actCooMax
  const actCooMaxFn = booleantoreal_4qvumk({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.booToRea
  const booToReaFn = booleantoreal_4qvumk({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.actMin
  const actMinFn = multiply_03jeh({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.ActiveAirFlow.setUpMod
  const setUpModFn = constant_wg6e3({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.setUp" });

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
