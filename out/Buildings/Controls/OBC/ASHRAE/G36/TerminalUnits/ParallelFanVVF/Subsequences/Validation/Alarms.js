
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms
const alarms_d41e7085 = require("../Alarms");
const booleantoreal_552dc85b = require("../../../../../../CDL/Conversions/BooleanToReal");
const pulse_02f178bf = require("../../../../../../CDL/Integers/Sources/Pulse");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const multiply_a5ce8cd2 = require("../../../../../../CDL/Reals/Multiply");
const constant_d2aca5e8 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.TDis
  const TDisFn = ramp_40ddd056({ duration: 3600, height: -5, offset: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.TDisSet
  const TDisSetFn = constant_d2aca5e8({ k: 273.15 +30 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.TSup
  const TSupFn = constant_d2aca5e8({ k: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.supFan
  const supFanFn = pulse_cdc9ff89({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.terFanComOn
  const terFanComOnFn = pulse_cdc9ff89({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.hotPla
  const hotPlaFn = pulse_cdc9ff89({ period: 7500, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.terFanOn
  const terFanOnFn = pulse_cdc9ff89({ period: 7500, shift: 1000, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.damSta
  const damStaFn = pulse_cdc9ff89({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.booToRea
  const booToReaFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.damPos
  const damPosFn = ramp_40ddd056({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.mul
  const mulFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 6, offset: 1, period: 8500, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.valPos
  const valPosFn = ramp_40ddd056({ duration: 2000, height: -0.7, offset: 0.7, startTime: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.disAirSet
  const disAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.disAir
  const disAirFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.Alarms.ala
  const alaFn = alarms_d41e7085({ damPosHys: 0.01, floHys: 0.01, hotWatRes: 1, staPreMul: 1, VCooMax_flow: 1 });

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

    return { TDis: TDis, TDisSet: TDisSet, TSup: TSup, supFan: supFan, terFanComOn: terFanComOn, hotPla: hotPla, terFanOn: terFanOn, damSta: damSta, booToRea: booToRea, damPos: damPos, mul: mul, intPul: intPul, valPos: valPos, disAirSet: disAirSet, disAir: disAir, ala: ala };
  }
}
