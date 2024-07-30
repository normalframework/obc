
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints
const booleantoreal_df99be1a = require("../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../CDL/Logical/Not");
const constant_48cc1015 = require("../../../../CDL/Logical/Sources/Constant");
const addparameter_26b0d2d7 = require("../../../../CDL/Reals/AddParameter");
const line_196841c3 = require("../../../../CDL/Reals/Line");
const max_a5fb1db5 = require("../../../../CDL/Reals/Max");
const multiply_a462b873 = require("../../../../CDL/Reals/Multiply");
const multiplybyparameter_13a4f29f = require("../../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../CDL/Reals/Switch");

module.exports = (
  {
		VCooMax_flow = 0.025,
		have_CO2Sen,
		have_occSen,
		have_parFanPowUni,
		have_SZVAV,
		have_typTerUni,
		have_winSen,
		VAreMin_flow,
		VMin_flow,
		VOccMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zer1
  const zer1Fn = constant_baefa089();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.con
  const conFn = constant_48cc1015();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAreOAMin
  const zonAreOAMinFn = constant_baefa089({ k: VAreMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 0.25 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.con1
  const con1Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.notOcc
  const notOccFn = not_6d646018();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.havCO2Sen
  const havCO2SenFn = constant_48cc1015({ k: have_CO2Sen });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccOAMin
  const zonOccOAMinFn = constant_baefa089({ k: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.max1
  const max1Fn = max_a5fb1db5();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonDesMin1
  const zonDesMin1Fn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonDesMin
  const zonDesMinFn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAbsMin2
  const zonAbsMin2Fn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAbsMin1
  const zonAbsMin1Fn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAbsMin
  const zonAbsMinFn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.occMod
  const occModFn = constant_8c5ba27d({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.inOccMod
  const inOccModFn = equal_2ac2bdd1();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.booToRea
  const booToReaFn = booleantoreal_df99be1a();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zer
  const zerFn = constant_baefa089();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.addPar
  const addParFn = addparameter_26b0d2d7({ p: -200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.lin
  const linFn = line_196841c3();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.co2Con
  const co2ConFn = multiply_a462b873();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin4
  const zonOccMin4Fn = line_196841c3();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonMinFlo
  const zonMinFloFn = constant_baefa089({ k: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin1
  const zonOccMin1Fn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin
  const zonOccMinFn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.one2
  const one2Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.winOpe
  const winOpeFn = not_6d646018();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zer3
  const zer3Fn = constant_baefa089();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonCooMaxFlo
  const zonCooMaxFloFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.hal
  const halFn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin2
  const zonOccMin2Fn = line_196841c3();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.cooSta
  const cooStaFn = constant_8c5ba27d({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.ZoneStates.cooling" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.inCooSta
  const inCooStaFn = equal_2ac2bdd1();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.difCooMax
  const difCooMaxFn = subtract_029d2d63();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.maxFloCO2
  const maxFloCO2Fn = switch_6d141143();
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin3
  const zonOccMin3Fn = line_196841c3();

  return (
    { ppmCO2Set, VParFan_flow, uZonSta, uOpeMod, u1Win }
  ) => {
    const zer1 = zer1Fn();
    const con = conFn();
    const zonAreOAMin = zonAreOAMinFn();
    const gai = gaiFn({ u: zonAreOAMin.y });
    const con1 = con1Fn();
    const notOcc = notOccFn({ u: con1.y });
    const havCO2Sen = havCO2SenFn();
    const zonOccOAMin = zonOccOAMinFn();
    const max1 = max1Fn({ u1: zonOccOAMin.y, u2: zonAreOAMin.y });
    const zonDesMin1 = zonDesMin1Fn({ u1: gai.y, u2: notOcc.y, u3: max1.y });
    const zonDesMin = zonDesMinFn({ u1: zer1.y, u2: con.y, u3: zonDesMin1.y });
    const zonAbsMin2 = zonAbsMin2Fn({ u1: zonAreOAMin.y, u2: havCO2Sen.y, u3: zonDesMin.y });
    const zonAbsMin1 = zonAbsMin1Fn({ u1: gai.y, u2: notOcc.y, u3: zonAbsMin2.y });
    const zonAbsMin = zonAbsMinFn({ u1: zer1.y, u2: con.y, u3: zonAbsMin1.y });
    const occMod = occModFn();
    const inOccMod = inOccModFn({ u1: uOpeMod, u2: occMod.y });
    const booToRea = booToReaFn({ u: inOccMod.y });
    const zer = zerFn();
    const one = oneFn();
    const addPar = addParFn({ u: ppmCO2Set });
    const lin = linFn({ f1: zer.y, f2: one.y, x2: ppmCO2Set, x1: addPar.y });
    const co2Con = co2ConFn({ u1: booToRea.y, u2: lin.y });
    const zonOccMin4 = zonOccMin4Fn({ f1: zonAbsMin.y, f2: zonDesMin.y, u: co2Con.y, x1: zer.y, x2: one.y });
    const zonMinFlo = zonMinFloFn();
    const gai1 = gai1Fn({ u: zonMinFlo.y });
    const zonOccMin1 = zonOccMin1Fn({ u1: zer1.y, u2: con.y, u3: gai1.y });
    const zonOccMin = zonOccMinFn({ u1: gai.y, u2: notOcc.y, u3: zonOccMin1.y });
    const one2 = one2Fn();
    const winOpe = winOpeFn({ u: u1Win });
    const zer3 = zer3Fn();
    const zonCooMaxFlo = zonCooMaxFloFn();
    const hal = halFn();
    const zonOccMin2 = zonOccMin2Fn({ f1: zonMinFlo.y, f2: zonCooMaxFlo.y, u: co2Con.y, x1: zer.y, x2: hal.y });
    const cooSta = cooStaFn();
    const inCooSta = inCooStaFn({ u1: uZonSta, u2: cooSta.y });
    const difCooMax = difCooMaxFn({ u1: zonCooMaxFlo.y, u2: VParFan_flow });
    const maxFloCO2 = maxFloCO2Fn({ u1: zonCooMaxFlo.y, u2: inCooSta.y, u3: difCooMax.y });
    const zonOccMin3 = zonOccMin3Fn({ f1: zonMinFlo.y, f2: maxFloCO2.y, u: co2Con.y, x1: zer.y, x2: hal.y });

    return { VMinOA_flow: zonOccMin4.y, VOccZonMin_flow: zonOccMin.y, VZonAbsMin_flow: zonAbsMin.y, VZonDesMin_flow: zonDesMin.y, yCO2: co2Con.y };
  }
}
