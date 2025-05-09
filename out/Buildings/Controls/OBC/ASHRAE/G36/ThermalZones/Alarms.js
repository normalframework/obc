
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms
const booleantointeger_d87efb42 = require("../../../CDL/Conversions/BooleanToInteger");
const add_2aeed27e = require("../../../CDL/Integers/Add");
const equal_2ac2bdd1 = require("../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../CDL/Integers/Switch");
const and_6d642f1c = require("../../../CDL/Logical/And");
const not_6d646018 = require("../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../CDL/Logical/Or");
const truedelay_b49d8a1a = require("../../../CDL/Logical/TrueDelay");
const greaterthreshold_64a3c4e0 = require("../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../CDL/Reals/LessThreshold");
const subtract_029d2d63 = require("../../../CDL/Reals/Subtract");
const assert_078ec840 = require("../../../CDL/Utilities/Assert");

module.exports = (
  {
		CO2Set = 894,
		dTHys = 0.25,
		have_CO2Sen,
		modChe = 7200,
		ppmHys = 25,
		timChe = 600,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.unoMod
  const unoModFn = constant_8c5ba27d({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.intEqu1
  const intEqu1Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.twoHou
  const twoHouFn = truedelay_b49d8a1a({ delayTime: modChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: ppmHys, t: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lesThr
  const lesThrFn = lessthreshold_f64b25e3({ h: ppmHys, t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({ h: ppmHys, t: 1.1*CO2Set });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.tenMinDur4
  const tenMinDur4Fn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.not6
  const not6Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.and6
  const and6Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.booToInt4
  const booToInt4Fn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.booToInt5
  const booToInt5Fn = booleantointeger_d87efb42({ integerTrue: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.co2Ala
  const co2AlaFn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.levTwo
  const levTwoFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.higTem
  const higTemFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.thrDegHig
  const thrDegHigFn = greaterthreshold_64a3c4e0({ h: dTHys, t: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.cooDowMod
  const cooDowModFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.intEqu3
  const intEqu3Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.warUpMod
  const warUpModFn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.intEqu4
  const intEqu4Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.notSupTemAla
  const notSupTemAlaFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.tenMinDur3
  const tenMinDur3Fn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.twoDegHig
  const twoDegHigFn = greaterthreshold_64a3c4e0({ h: dTHys, t: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.tenMinDur2
  const tenMinDur2Fn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.higTemAla
  const higTemAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lowTem
  const lowTemFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.thrDegLow
  const thrDegLowFn = greaterthreshold_64a3c4e0({ h: dTHys, t: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.tenMinDur1
  const tenMinDur1Fn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.twoDegLow
  const twoDegLowFn = greaterthreshold_64a3c4e0({ h: dTHys, t: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.tenMinDur
  const tenMinDurFn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.booToInt2
  const booToInt2Fn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lowTemAla
  const lowTemAlaFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.temAla
  const temAlaFn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.levTwoHig
  const levTwoHigFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.higTemAla2
  const higTemAla2Fn = assert_078ec840({ message: "Warning: zone temperature is 3 degC higher than the cooling setpoint" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.levThr
  const levThrFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.levThrHig
  const levThrHigFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.higTemAla3
  const higTemAla3Fn = assert_078ec840({ message: "Warning: zone temperature is 2 degC higher than the cooling setpoint" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.levTwoLow
  const levTwoLowFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.not4
  const not4Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lowTemAla2
  const lowTemAla2Fn = assert_078ec840({ message: "Warning: zone temperature is 3 degC lower than the heating setpoint" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.levThrLow
  const levThrLowFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.not3
  const not3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lowTemAla3
  const lowTemAla3Fn = assert_078ec840({ message: "Warning: zone temperature is 2 degC lower than the heating setpoint" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.not5
  const not5Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lowTemAla4
  const lowTemAla4Fn = assert_078ec840({ message: "Warning: the zone CO2 concentration exceeds 600 ppm in unoccupied mode. The CO2 sensor may be out of calibration." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Alarms.lowTemAla5
  const lowTemAla5Fn = assert_078ec840({ message: "Warning: the zone CO2 concentration exceeds setpoint plus 10%." });

  return (
    { ppmCO2, TZon, TCooSet, uOpeMod, THeaSet, u1ResSet }
  ) => {
    const unoMod = unoModFn({});
    const intEqu1 = intEqu1Fn({ u1: unoMod.y, u2: uOpeMod });
    const twoHou = twoHouFn({ u: intEqu1.y });
    const greThr = greThrFn({ u: ppmCO2 });
    const and5 = and5Fn({ u1: twoHou.y, u2: greThr.y });
    const lesThr = lesThrFn({ u: ppmCO2 });
    const or3 = or3Fn({ u1: and5.y, u2: lesThr.y });
    const greThr1 = greThr1Fn({ u: ppmCO2 });
    const tenMinDur4 = tenMinDur4Fn({ u: greThr1.y });
    const not6 = not6Fn({ u: tenMinDur4.y });
    const and6 = and6Fn({ u1: or3.y, u2: not6.y });
    const booToInt4 = booToInt4Fn({ u: and6.y });
    const booToInt5 = booToInt5Fn({ u: tenMinDur4.y });
    const co2Ala = co2AlaFn({ u1: booToInt4.y, u2: booToInt5.y });
    const levTwo = levTwoFn({});
    const higTem = higTemFn({ u1: TZon, u2: TCooSet });
    const thrDegHig = thrDegHigFn({ u: higTem.y });
    const cooDowMod = cooDowModFn({});
    const intEqu3 = intEqu3Fn({ u1: cooDowMod.y, u2: uOpeMod });
    const warUpMod = warUpModFn({});
    const intEqu4 = intEqu4Fn({ u1: warUpMod.y, u2: uOpeMod });
    const or2 = or2Fn({ u1: intEqu3.y, u2: intEqu4.y });
    const or1 = or1Fn({ u1: u1ResSet, u2: or2.y });
    const notSupTemAla = notSupTemAlaFn({ u: or1.y });
    const and1 = and1Fn({ u1: thrDegHig.y, u2: notSupTemAla.y });
    const tenMinDur3 = tenMinDur3Fn({ u: and1.y });
    const twoDegHig = twoDegHigFn({ u: higTem.y });
    const and2 = and2Fn({ u1: twoDegHig.y, u2: notSupTemAla.y });
    const tenMinDur2 = tenMinDur2Fn({ u: and2.y });
    const booToInt = booToIntFn({ u: tenMinDur2.y });
    const higTemAla = higTemAlaFn({ u1: levTwo.y, u2: tenMinDur3.y, u3: booToInt.y });
    const lowTem = lowTemFn({ u1: THeaSet, u2: TZon });
    const thrDegLow = thrDegLowFn({ u: lowTem.y });
    const and4 = and4Fn({ u1: thrDegLow.y, u2: notSupTemAla.y });
    const tenMinDur1 = tenMinDur1Fn({ u: and4.y });
    const twoDegLow = twoDegLowFn({ u: lowTem.y });
    const and3 = and3Fn({ u1: twoDegLow.y, u2: notSupTemAla.y });
    const tenMinDur = tenMinDurFn({ u: and3.y });
    const booToInt2 = booToInt2Fn({ u: tenMinDur.y });
    const lowTemAla = lowTemAlaFn({ u1: levTwo.y, u2: tenMinDur1.y, u3: booToInt2.y });
    const temAla = temAlaFn({ u1: higTemAla.y, u2: lowTemAla.y });
    const levTwoHig = levTwoHigFn({ u1: higTemAla.y, u2: levTwo.y });
    const not2 = not2Fn({ u: levTwoHig.y });
    const higTemAla2 = higTemAla2Fn({ u: not2.y });
    const levThr = levThrFn({});
    const levThrHig = levThrHigFn({ u1: higTemAla.y, u2: levThr.y });
    const not1 = not1Fn({ u: levThrHig.y });
    const higTemAla3 = higTemAla3Fn({ u: not1.y });
    const levTwoLow = levTwoLowFn({ u1: lowTemAla.y, u2: levTwo.y });
    const not4 = not4Fn({ u: levTwoLow.y });
    const lowTemAla2 = lowTemAla2Fn({ u: not4.y });
    const levThrLow = levThrLowFn({ u1: lowTemAla.y, u2: levThr.y });
    const not3 = not3Fn({ u: levThrLow.y });
    const lowTemAla3 = lowTemAla3Fn({ u: not3.y });
    const not5 = not5Fn({ u: and6.y });
    const lowTemAla4 = lowTemAla4Fn({ u: not5.y });
    const lowTemAla5 = lowTemAla5Fn({ u: not6.y });

    return { yCO2Ala: co2Ala.y, yTemAla: temAla.y };
  }
}
