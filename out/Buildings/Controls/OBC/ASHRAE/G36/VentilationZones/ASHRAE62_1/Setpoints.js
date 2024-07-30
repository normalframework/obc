
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints
const booleantoreal_dlr88h = require("../../../../CDL/Conversions/BooleanToReal");
const equal_l61u25 = require("../../../../CDL/Integers/Equal");
const constant_h1pcha = require("../../../../CDL/Integers/Sources/Constant");
const not_6kdhb = require("../../../../CDL/Logical/Not");
const or_shd0mq = require("../../../../CDL/Logical/Or");
const constant_4j8208 = require("../../../../CDL/Logical/Sources/Constant");
const add_d29uva = require("../../../../CDL/Reals/Add");
const addparameter_qwm8cp = require("../../../../CDL/Reals/AddParameter");
const divide_wd8f3 = require("../../../../CDL/Reals/Divide");
const greater_sns4va = require("../../../../CDL/Reals/Greater");
const line_eynngo = require("../../../../CDL/Reals/Line");
const multiply_83kevh = require("../../../../CDL/Reals/Multiply");
const multiplybyparameter_eykq8g = require("../../../../CDL/Reals/MultiplyByParameter");
const constant_ccqs3 = require("../../../../CDL/Reals/Sources/Constant");
const subtract_de206u = require("../../../../CDL/Reals/Subtract");
const switch_dss8m5 = require("../../../../CDL/Reals/Switch");
const not_17rr8 = require("../../../../../../../CDL/Logical/Not");

module.exports = (
  {
		dTHys = 0.25,
		permit_occStandby = true,
		VCooMax_flow = 0.025,
		zonDisEff_cool = 1,
		zonDisEff_heat = 0.8
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer1
  const zer1Fn = constant_ccqs3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.con
  const conFn = constant_4j8208({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.occMod
  const occModFn = constant_h1pcha({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.inOccMod
  const inOccModFn = equal_l61u25({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.notOccMod
  const notOccModFn = not_6kdhb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.or2
  const or2Fn = or_shd0mq({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.desAreAir
  const desAreAirFn = constant_ccqs3({ k: VAreBreZon_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.perOccSta
  const perOccStaFn = constant_4j8208({ k: permit_occStandby });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.booToRea1
  const booToRea1Fn = booleantoreal_dlr88h({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unPopAreBreAir
  const unPopAreBreAirFn = multiply_83kevh({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.con1
  const con1Fn = constant_4j8208({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpAreBreAir
  const unpAreBreAirFn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.modAreBreAir
  const modAreBreAirFn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.desPopAir
  const desPopAirFn = constant_ccqs3({ k: VPopBreZon_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.gai1
  const gai1Fn = multiplybyparameter_eykq8g({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpPopBreAir
  const unpPopBreAirFn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.modPopBreAir
  const modPopBreAirFn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.reqBreAir
  const reqBreAirFn = add_d29uva({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.cooSup
  const cooSupFn = greater_sns4va({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.airDisEff
  const airDisEffFn = booleantoreal_dlr88h({ realFalse: zonDisEff_heat, realTrue: zonDisEff_cool });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.minOA
  const minOAFn = divide_wd8f3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zonMinFlo
  const zonMinFloFn = constant_ccqs3({ k: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpMinZonFlo
  const unpMinZonFloFn = multiply_83kevh({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.gai
  const gaiFn = multiplybyparameter_eykq8g({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.unpMinZonAir
  const unpMinZonAirFn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.occMinAir
  const occMinAirFn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zonCooMaxFlo
  const zonCooMaxFloFn = constant_ccqs3({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.cooSta
  const cooStaFn = constant_h1pcha({ k: "Buildings.Controls.OBC.ASHRAE.G36.Types.ZoneStates.cooling" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.inCooSta
  const inCooStaFn = equal_l61u25({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.difCooMax
  const difCooMaxFn = subtract_de206u({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.maxFloCO2
  const maxFloCO2Fn = switch_dss8m5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.notOcc
  const notOccFn = not_6kdhb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.gai2
  const gai2Fn = multiplybyparameter_eykq8g({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.booToRea
  const booToReaFn = booleantoreal_dlr88h({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer
  const zerFn = constant_ccqs3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.one
  const oneFn = constant_ccqs3({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.addPar
  const addParFn = addparameter_qwm8cp({ p: -200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.lin
  const linFn = line_eynngo({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.co2Con
  const co2ConFn = multiply_83kevh({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.occMinAirSet
  const occMinAirSetFn = line_eynngo({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.popBreOutAir
  const popBreOutAirFn = line_eynngo({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.winOpe
  const winOpeFn = not_17rr8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer2
  const zer2Fn = constant_ccqs3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.ASHRAE62_1.Setpoints.zer3
  const zer3Fn = constant_ccqs3({});

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
