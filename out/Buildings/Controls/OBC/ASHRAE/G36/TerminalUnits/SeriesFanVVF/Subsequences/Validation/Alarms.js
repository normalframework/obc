
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms
const alarms_eb778fb5 = require("../Alarms");
const booleantoreal_df99be1a = require("../../../../../../CDL/Conversions/BooleanToReal");
const pulse_eb347360 = require("../../../../../../CDL/Integers/Sources/Pulse");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const multiply_a462b873 = require("../../../../../../CDL/Reals/Multiply");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.TDis
  const TDisFn = ramp_3c414377({ duration: 3600, height: -5, offset: "273.15 +20" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.TDisSet
  const TDisSetFn = constant_baefa089({ k: "273.15 +30" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.TSup
  const TSupFn = constant_baefa089({ k: "273.15 +13" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.supFan
  const supFanFn = pulse_27dcacc8({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.terFanComOn
  const terFanComOnFn = pulse_27dcacc8({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.hotPla
  const hotPlaFn = pulse_27dcacc8({ period: 7500, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.terFanOn
  const terFanOnFn = pulse_27dcacc8({ period: 7500, shift: 1000, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.damSta
  const damStaFn = pulse_27dcacc8({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.damPos
  const damPosFn = ramp_3c414377({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.mul
  const mulFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.intPul
  const intPulFn = pulse_eb347360({ amplitude: 6, offset: 1, period: 8500, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.valPos
  const valPosFn = ramp_3c414377({ duration: 2000, height: -0.7, offset: 0.7, startTime: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.disAirSet
  const disAirSetFn = ramp_3c414377({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.disAir
  const disAirFn = ramp_3c414377({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.Validation.Alarms.ala
  const alaFn = alarms_eb778fb5({ damPosHys: 0.01, floHys: 0.01, hotWatRes: 1, staPreMul: 1, VCooMax_flow: 1 });

  return (
    {  }
  ) => {
    const TDis = TDisFn({});
    const TDisSet = TDisSetFn({});
    const TSup = TSupFn({});
    const supFan = supFanFn({});
    const terFanComOn = terFanComOnFn({});
    const hotPla = hotPlaFn({});
    const terFanOn = terFanOnFn({});
    const damSta = damStaFn({});
    const booToRea = booToReaFn({ u: damSta.y });
    const damPos = damPosFn({});
    const mul = mulFn({ u1: booToRea.y, u2: damPos.y });
    const intPul = intPulFn({});
    const valPos = valPosFn({});
    const disAirSet = disAirSetFn({});
    const disAir = disAirFn({});
    const ala = alaFn({ TDis: TDis.y, TDisSet: TDisSet.y, TSup: TSup.y, u1Fan: supFan.y, u1FanCom: terFanComOn.y, u1HotPla: hotPla.y, u1TerFan: terFanOn.y, uDam: mul.y, uOpeMod: intPul.y, uVal: valPos.y, VActSet_flow: disAirSet.y, VPri_flow: disAir.y });

    return {};
  }
}
