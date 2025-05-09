
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints
const booleantoreal_552dc85b = require("../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../CDL/Integers/Sources/Constant");
const not_f2b50019 = require("../../../../CDL/Logical/Not");
const constant_655d39b4 = require("../../../../CDL/Logical/Sources/Constant");
const addparameter_2b4d5fb6 = require("../../../../CDL/Reals/AddParameter");
const line_15731da2 = require("../../../../CDL/Reals/Line");
const max_5345c9f6 = require("../../../../CDL/Reals/Max");
const multiply_a5ce8cd2 = require("../../../../CDL/Reals/Multiply");
const multiplybyparameter_8938fce0 = require("../../../../CDL/Reals/MultiplyByParameter");
const constant_d2aca5e8 = require("../../../../CDL/Reals/Sources/Constant");
const subtract_040901c2 = require("../../../../CDL/Reals/Subtract");
const switch_91d77162 = require("../../../../CDL/Reals/Switch");

module.exports = (
  {
		have_CO2Sen,
		have_occSen,
		have_parFanPowUni,
		have_SZVAV,
		have_typTerUni,
		have_winSen,
		VAreMin_flow,
		VCooMax_flow = 0.025,
		VMin_flow,
		VOccMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zer1
  const zer1Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.con
  const conFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAreOAMin
  const zonAreOAMinFn = constant_d2aca5e8({ k: VAreMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: 0.25 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.con1
  const con1Fn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.notOcc
  const notOccFn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.havCO2Sen
  const havCO2SenFn = constant_655d39b4({ k: have_CO2Sen });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccOAMin
  const zonOccOAMinFn = constant_d2aca5e8({ k: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.max1
  const max1Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonDesMin1
  const zonDesMin1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonDesMin
  const zonDesMinFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAbsMin2
  const zonAbsMin2Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAbsMin1
  const zonAbsMin1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonAbsMin
  const zonAbsMinFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.occMod
  const occModFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.inOccMod
  const inOccModFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.booToRea
  const booToReaFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zer
  const zerFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.one
  const oneFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.addPar
  const addParFn = addparameter_2b4d5fb6({ p: -200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.lin
  const linFn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.co2Con
  const co2ConFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin4
  const zonOccMin4Fn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonMinFlo
  const zonMinFloFn = constant_d2aca5e8({ k: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin1
  const zonOccMin1Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin
  const zonOccMinFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.one2
  const one2Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.winOpe
  const winOpeFn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zer3
  const zer3Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonCooMaxFlo
  const zonCooMaxFloFn = constant_d2aca5e8({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.hal
  const halFn = constant_d2aca5e8({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin2
  const zonOccMin2Fn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.cooSta
  const cooStaFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.inCooSta
  const inCooStaFn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.difCooMax
  const difCooMaxFn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.maxFloCO2
  const maxFloCO2Fn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.VentilationZones.Title24.Setpoints.zonOccMin3
  const zonOccMin3Fn = line_15731da2({});

  return (
    { ppmCO2Set, VParFan_flow, uZonSta, uOpeMod, ppmCO2, u1Win }
  ) => {
    const zer1 = zer1Fn({});
    const con = conFn({});
    const zonAreOAMin = zonAreOAMinFn({});
    const gai = gaiFn({ u: zonAreOAMin.y });
    const con1 = con1Fn({});
    const notOcc = notOccFn({ u: con1.y });
    const havCO2Sen = havCO2SenFn({});
    const zonOccOAMin = zonOccOAMinFn({});
    const max1 = max1Fn({ u1: zonOccOAMin.y, u2: zonAreOAMin.y });
    const zonDesMin1 = zonDesMin1Fn({ u1: gai.y, u2: notOcc.y, u3: max1.y });
    const zonDesMin = zonDesMinFn({ u1: zer1.y, u2: con.y, u3: zonDesMin1.y });
    const zonAbsMin2 = zonAbsMin2Fn({ u1: zonAreOAMin.y, u2: havCO2Sen.y, u3: zonDesMin.y });
    const zonAbsMin1 = zonAbsMin1Fn({ u1: gai.y, u2: notOcc.y, u3: zonAbsMin2.y });
    const zonAbsMin = zonAbsMinFn({ u1: zer1.y, u2: con.y, u3: zonAbsMin1.y });
    const occMod = occModFn({});
    const inOccMod = inOccModFn({ u1: uOpeMod, u2: occMod.y });
    const booToRea = booToReaFn({ u: inOccMod.y });
    const zer = zerFn({});
    const one = oneFn({});
    const addPar = addParFn({ u: ppmCO2Set });
    const lin = linFn({ f1: zer.y, f2: one.y, u: ppmCO2, x1: addPar.y, x2: ppmCO2Set });
    const co2Con = co2ConFn({ u1: booToRea.y, u2: lin.y });
    const zonOccMin4 = zonOccMin4Fn({ f1: zonAbsMin.y, f2: zonDesMin.y, u: co2Con.y, x1: zer.y, x2: one.y });
    const zonMinFlo = zonMinFloFn({});
    const gai1 = gai1Fn({ u: zonMinFlo.y });
    const zonOccMin1 = zonOccMin1Fn({ u1: zer1.y, u2: con.y, u3: gai1.y });
    const zonOccMin = zonOccMinFn({ u1: gai.y, u2: notOcc.y, u3: zonOccMin1.y });
    const one2 = one2Fn({});
    const winOpe = winOpeFn({ u: u1Win });
    const zer3 = zer3Fn({});
    const zonCooMaxFlo = zonCooMaxFloFn({});
    const hal = halFn({});
    const zonOccMin2 = zonOccMin2Fn({ f1: zonMinFlo.y, f2: zonCooMaxFlo.y, u: co2Con.y, x1: zer.y, x2: hal.y });
    const cooSta = cooStaFn({});
    const inCooSta = inCooStaFn({ u1: uZonSta, u2: cooSta.y });
    const difCooMax = difCooMaxFn({ u1: zonCooMaxFlo.y, u2: VParFan_flow });
    const maxFloCO2 = maxFloCO2Fn({ u1: zonCooMaxFlo.y, u2: inCooSta.y, u3: difCooMax.y });
    const zonOccMin3 = zonOccMin3Fn({ f1: zonMinFlo.y, f2: maxFloCO2.y, u: co2Con.y, x1: zer.y, x2: hal.y });

    return { VMinOA_flow: zonOccMin4.y, VOccZonMin_flow: zonOccMin.y, VZonAbsMin_flow: zonAbsMin.y, VZonDesMin_flow: zonDesMin.y, yCO2: co2Con.y };
  }
}
