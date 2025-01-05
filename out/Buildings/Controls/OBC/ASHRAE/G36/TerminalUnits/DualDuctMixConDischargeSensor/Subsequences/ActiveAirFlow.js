
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow
const booleantoreal_df99be1a = require("../../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const multiply_a462b873 = require("../../../../../CDL/Reals/Multiply");

module.exports = (
  {
		VCooMax_flow,
		VHeaMax_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.occMod
  const occModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.ifOcc
  const ifOccFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.cooDowMod
  const cooDowModFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.ifCooDow
  const ifCooDowFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.setUpMod
  const setUpModFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.ifSetUp
  const ifSetUpFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.actCooMax
  const actCooMaxFn = booleantoreal_df99be1a({ realTrue: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.warUpMod
  const warUpModFn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.ifWarUp
  const ifWarUpFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.setBacMod
  const setBacModFn = constant_8c5ba27d({ k: 5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.ifSetBac
  const ifSetBacFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.heaMaxFlo
  const heaMaxFloFn = booleantoreal_df99be1a({ realTrue: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.occModInd
  const occModIndFn = booleantoreal_df99be1a({ realTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.ActiveAirFlow.pro
  const proFn = multiply_a462b873({});

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
    const or2 = or2Fn({ u1: or3.y, u2: ifSetUp.y });
    const actCooMax = actCooMaxFn({ u: or2.y });
    const warUpMod = warUpModFn({});
    const ifWarUp = ifWarUpFn({ u1: warUpMod.y, u2: uOpeMod });
    const or1 = or1Fn({ u1: ifOcc.y, u2: ifWarUp.y });
    const setBacMod = setBacModFn({});
    const ifSetBac = ifSetBacFn({ u1: setBacMod.y, u2: uOpeMod });
    const or4 = or4Fn({ u1: or1.y, u2: ifSetBac.y });
    const heaMaxFlo = heaMaxFloFn({ u: or4.y });
    const occModInd = occModIndFn({ u: ifOcc.y });
    const pro = proFn({ u1: occModInd.y, u2: VOccMin_flow });

    return { VActCooMax_flow: actCooMax.y, VActHeaMax_flow: heaMaxFlo.y, VActMin_flow: pro.y };
  }
}
