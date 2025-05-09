
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow
const booleantoreal_552dc85b = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const or_de89f7dd = require("../../../../../CDL/Logical/Or");
const add_53459d33 = require("../../../../../CDL/Reals/Add");
const max_5345c9f6 = require("../../../../../CDL/Reals/Max");
const multiply_a5ce8cd2 = require("../../../../../CDL/Reals/Multiply");
const constant_d2aca5e8 = require("../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		VCooMax_flow,
		VHeaMax_flow,
		VHeaMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.occMod
  const occModFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.ifOcc
  const ifOccFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.cooDowMod
  const cooDowModFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.ifCooDow
  const ifCooDowFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.or3
  const or3Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.setUpMod
  const setUpModFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.ifSetUp
  const ifSetUpFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.or1
  const or1Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.actCooMax
  const actCooMaxFn = booleantoreal_552dc85b({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.occModInd
  const occModIndFn = booleantoreal_552dc85b({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.pro
  const proFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.heaMaxAir
  const heaMaxAirFn = constant_d2aca5e8({ k: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.max2
  const max2Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.pro2
  const pro2Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.warUpMod
  const warUpModFn = constant_01efacbe({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.ifWarUp
  const ifWarUpFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.setBacMod
  const setBacModFn = constant_01efacbe({ k: 5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.ifSetBac
  const ifSetBacFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.or2
  const or2Fn = or_de89f7dd({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.cooMaxFlo
  const cooMaxFloFn = booleantoreal_552dc85b({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.heaMaxFlo1
  const heaMaxFlo1Fn = booleantoreal_552dc85b({ realTrue: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.add3
  const add3Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.add4
  const add4Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.heaMinAir
  const heaMinAirFn = constant_d2aca5e8({ k: VHeaMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.max1
  const max1Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.pro1
  const pro1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.heaMinFlo
  const heaMinFloFn = booleantoreal_552dc85b({ realTrue: VHeaMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.heaMaxFlo
  const heaMaxFloFn = booleantoreal_552dc85b({ realTrue: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Subsequences.ActiveAirFlow.add1
  const add1Fn = add_53459d33({});

  return (
    { uOpeMod, VOccMin_flow }
  ) => {
    const occMod = occModFn({});
    const ifOcc = ifOccFn({ u1: occMod.y, u2: uOpeMod });
    const cooDowMod = cooDowModFn({});
    const ifCooDow = ifCooDowFn({ u1: cooDowMod.y, u2: uOpeMod });
    const or3 = or3Fn({ u1: ifOcc.y, u2: ifCooDow.y });
    const setUpMod = setUpModFn({});
    const ifSetUp = ifSetUpFn({ u1: setUpMod.y, u2: uOpeMod });
    const or1 = or1Fn({ u1: or3.y, u2: ifSetUp.y });
    const actCooMax = actCooMaxFn({ u: or1.y });
    const occModInd = occModIndFn({ u: ifOcc.y });
    const pro = proFn({ u1: occModInd.y, u2: VOccMin_flow });
    const heaMaxAir = heaMaxAirFn({});
    const max2 = max2Fn({ u1: VOccMin_flow, u2: heaMaxAir.y });
    const pro2 = pro2Fn({ u1: occModInd.y, u2: max2.y });
    const warUpMod = warUpModFn({});
    const ifWarUp = ifWarUpFn({ u1: warUpMod.y, u2: uOpeMod });
    const setBacMod = setBacModFn({});
    const ifSetBac = ifSetBacFn({ u1: setBacMod.y, u2: uOpeMod });
    const or2 = or2Fn({ u1: ifWarUp.y, u2: ifSetBac.y });
    const cooMaxFlo = cooMaxFloFn({ u: or2.y });
    const heaMaxFlo1 = heaMaxFlo1Fn({ u: ifCooDow.y });
    const add3 = add3Fn({ u1: cooMaxFlo.y, u2: heaMaxFlo1.y });
    const add4 = add4Fn({ u1: pro2.y, u2: add3.y });
    const heaMinAir = heaMinAirFn({});
    const max1 = max1Fn({ u1: VOccMin_flow, u2: heaMinAir.y });
    const pro1 = pro1Fn({ u1: occModInd.y, u2: max1.y });
    const heaMinFlo = heaMinFloFn({ u: ifCooDow.y });
    const heaMaxFlo = heaMaxFloFn({ u: or2.y });
    const add2 = add2Fn({ u1: heaMinFlo.y, u2: heaMaxFlo.y });
    const add1 = add1Fn({ u1: pro1.y, u2: add2.y });

    return { VActCooMax_flow: actCooMax.y, VActMin_flow: pro.y, VActHeaMax_flow: add4.y, VActHeaMin_flow: add1.y };
  }
}
