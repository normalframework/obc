
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms
const alarms_088bfdfa = require("../Alarms");
const booleantoreal_552dc85b = require("../../../../../../CDL/Conversions/BooleanToReal");
const pulse_02f178bf = require("../../../../../../CDL/Integers/Sources/Pulse");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const multiply_a5ce8cd2 = require("../../../../../../CDL/Reals/Multiply");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.supFan
  const supFanFn = pulse_cdc9ff89({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.damSta
  const damStaFn = pulse_cdc9ff89({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.booToRea
  const booToReaFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.damPos
  const damPosFn = ramp_40ddd056({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.mul
  const mulFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 6, offset: 1, period: 8500, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.disAirSet
  const disAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.disAirRate
  const disAirRateFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.Alarms.ala
  const alaFn = alarms_088bfdfa({ damPosHys: 0.01, floHys: 0.01, staPreMul: 1, VCooMax_flow: 0.5 });

  return (
    {  }
  ) => {
    const supFan = supFanFn({});
    const damSta = damStaFn({});
    const booToRea = booToReaFn({ u: damSta.y });
    const damPos = damPosFn({});
    const mul = mulFn({ u1: booToRea.y, u2: damPos.y });
    const intPul = intPulFn({});
    const disAirSet = disAirSetFn({});
    const disAirRate = disAirRateFn({});
    const ala = alaFn({ u1Fan: supFan.y, uDam: mul.y, uOpeMod: intPul.y, VActSet_flow: disAirSet.y, VDis_flow: disAirRate.y });

    return { supFan: supFan, damSta: damSta, booToRea: booToRea, damPos: damPos, mul: mul, intPul: intPul, disAirSet: disAirSet, disAirRate: disAirRate, ala: ala };
  }
}
