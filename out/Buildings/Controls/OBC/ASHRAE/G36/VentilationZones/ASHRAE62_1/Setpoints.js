
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints
const booleantoreal_df99be1a = require("../../../../CDL/Conversions/BooleanToReal");
const equal_2ac2bdd1 = require("../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../../CDL/Logical/Sources/Constant");
const add_a5faf0f2 = require("../../../../CDL/Reals/Add");
const addparameter_26b0d2d7 = require("../../../../CDL/Reals/AddParameter");
const divide_52bbd688 = require("../../../../CDL/Reals/Divide");
const greater_b1da53cb = require("../../../../CDL/Reals/Greater");
const line_196841c3 = require("../../../../CDL/Reals/Line");
const multiply_a462b873 = require("../../../../CDL/Reals/Multiply");
const multiplybyparameter_13a4f29f = require("../../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../CDL/Reals/Switch");
const not_2b643d37 = require("../../../../CDL/Logical/Not");

module.exports = (
  {
		dTHys = 0.25,
		permit_occStandby = true,
		VCooMax_flow = 0.025,
		zonDisEff_cool = 1,
		zonDisEff_heat = 0.8,
		have_CO2Sen,
		have_occSen,
		have_parFanPowUni,
		have_SZVAV,
		have_typTerUni,
		have_winSen,
		VAreBreZon_flow,
		VMin_flow,
		VPopBreZon_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer1
  const zer1Fn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.con
  const conFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.occMod
  const occModFn = constant_8c5ba27d({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.inOccMod
  const inOccModFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.notOccMod
  const notOccModFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.desAreAir
  const desAreAirFn = constant_baefa089({ k: VAreBreZon_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.perOccSta
  const perOccStaFn = constant_48cc1015({ k: permit_occStandby });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unPopAreBreAir
  const unPopAreBreAirFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.con1
  const con1Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpAreBreAir
  const unpAreBreAirFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.modAreBreAir
  const modAreBreAirFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.desPopAir
  const desPopAirFn = constant_baefa089({ k: VPopBreZon_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpPopBreAir
  const unpPopBreAirFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.modPopBreAir
  const modPopBreAirFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.reqBreAir
  const reqBreAirFn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.cooSup
  const cooSupFn = greater_b1da53cb({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.airDisEff
  const airDisEffFn = booleantoreal_df99be1a({ realFalse: zonDisEff_heat, realTrue: zonDisEff_cool });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.minOA
  const minOAFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zonMinFlo
  const zonMinFloFn = constant_baefa089({ k: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpMinZonFlo
  const unpMinZonFloFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpMinZonAir
  const unpMinZonAirFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.occMinAir
  const occMinAirFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zonCooMaxFlo
  const zonCooMaxFloFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.cooSta
  const cooStaFn = constant_8c5ba27d({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.ZoneStates.cooling" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.inCooSta
  const inCooStaFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.difCooMax
  const difCooMaxFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.maxFloCO2
  const maxFloCO2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.notOcc
  const notOccFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.gai2
  const gai2Fn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer
  const zerFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.addPar
  const addParFn = addparameter_26b0d2d7({ p: -200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.lin
  const linFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.co2Con
  const co2ConFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.occMinAirSet
  const occMinAirSetFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.popBreOutAir
  const popBreOutAirFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.winOpe
  const winOpeFn = not_2b643d37({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer2
  const zer2Fn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer3
  const zer3Fn = constant_baefa089({});

  return (
    { ppmCO2Set, TDis, VParFan_flow, uZonSta, uOpeMod, u1Occ, u1Win }
  ) => {
    const zer1 = zer1Fn({});
    const con = conFn({});
    const occMod = occModFn({});
    const inOccMod = inOccModFn({ u1: uOpeMod, u2: occMod.y });
    const notOccMod = notOccModFn({ u: inOccMod.y });
    const or2 = or2Fn({ u1: con.y, u2: notOccMod.y });
    const desAreAir = desAreAirFn({});
    const perOccSta = perOccStaFn({});
    const booToRea1 = booToRea1Fn({ u: perOccSta.y });
    const unPopAreBreAir = unPopAreBreAirFn({ u1: desAreAir.y, u2: booToRea1.y });
    const con1 = con1Fn({});
    const unpAreBreAir = unpAreBreAirFn({ u1: unPopAreBreAir.y, u2: con1.y, u3: desAreAir.y });
    const modAreBreAir = modAreBreAirFn({ u1: zer1.y, u2: or2.y, u3: unpAreBreAir.y });
    const desPopAir = desPopAirFn({});
    const gai1 = gai1Fn({ u: desPopAir.y });
    const unpPopBreAir = unpPopBreAirFn({ u1: zer1.y, u2: con1.y, u3: gai1.y });
    const modPopBreAir = modPopBreAirFn({ u1: zer1.y, u2: or2.y, u3: unpPopBreAir.y });
    const reqBreAir = reqBreAirFn({ u1: modPopBreAir.y, u2: modAreBreAir.y });
    const cooSup = cooSupFn({ u2: TDis });
    const airDisEff = airDisEffFn({ u: cooSup.y });
    const minOA = minOAFn({ u1: reqBreAir.y, u2: airDisEff.y });
    const zonMinFlo = zonMinFloFn({});
    const unpMinZonFlo = unpMinZonFloFn({ u1: booToRea1.y, u2: zonMinFlo.y });
    const gai = gaiFn({ u: zonMinFlo.y });
    const unpMinZonAir = unpMinZonAirFn({ u1: unpMinZonFlo.y, u2: con1.y, u3: gai.y });
    const occMinAir = occMinAirFn({ u1: zer1.y, u2: or2.y, u3: unpMinZonAir.y });
    const zonCooMaxFlo = zonCooMaxFloFn({});
    const cooSta = cooStaFn({});
    const inCooSta = inCooStaFn({ u1: uZonSta, u2: cooSta.y });
    const difCooMax = difCooMaxFn({ u1: zonCooMaxFlo.y, u2: VParFan_flow });
    const maxFloCO2 = maxFloCO2Fn({ u1: zonCooMaxFlo.y, u2: inCooSta.y, u3: difCooMax.y });
    const notOcc = notOccFn({ u: u1Occ });
    const gai2 = gai2Fn({ u: zonCooMaxFlo.y });
    const booToRea = booToReaFn({ u: inOccMod.y });
    const zer = zerFn({});
    const one = oneFn({});
    const addPar = addParFn({ u: ppmCO2Set });
    const lin = linFn({ f1: zer.y, f2: one.y, x2: ppmCO2Set, x1: addPar.y });
    const co2Con = co2ConFn({ u1: booToRea.y, u2: lin.y });
    const occMinAirSet = occMinAirSetFn({ f1: zonMinFlo.y, f2: gai2.y, u: co2Con.y, x1: zer.y, x2: one.y });
    const popBreOutAir = popBreOutAirFn({ x1: zer.y, f2: desPopAir.y, u: co2Con.y, x2: one.y });
    const winOpe = winOpeFn({ u: u1Win });
    const zer2 = zer2Fn({});
    const zer3 = zer3Fn({});

    return { VAdjAreBreZon_flow: modAreBreAir.y, VAdjPopBreZon_flow: modPopBreAir.y, VMinOA_flow: minOA.y, VOccZonMin_flow: occMinAir.y };
  }
}
