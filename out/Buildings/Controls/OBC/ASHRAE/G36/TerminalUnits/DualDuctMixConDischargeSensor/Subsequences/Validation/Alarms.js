
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms
const alarms_0a1287ed = require("../Alarms");
const booleantoreal_552dc85b = require("../../../../../../CDL/Conversions/BooleanToReal");
const pulse_02f178bf = require("../../../../../../CDL/Integers/Sources/Pulse");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const multiply_a5ce8cd2 = require("../../../../../../CDL/Reals/Multiply");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.supCooFan
  const supCooFanFn = pulse_cdc9ff89({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.supHeaFan
  const supHeaFanFn = pulse_cdc9ff89({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.colDammSta
  const colDammStaFn = pulse_cdc9ff89({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.booToRea
  const booToReaFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.damPos
  const damPosFn = ramp_40ddd056({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.mul
  const mulFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.heaDammSta
  const heaDammStaFn = pulse_cdc9ff89({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.booToRea1
  const booToRea1Fn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.damPos1
  const damPos1Fn = ramp_40ddd056({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.intPul
  const intPulFn = pulse_02f178bf({ amplitude: 6, offset: 1, period: 8500, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.disAirSet
  const disAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.disAir
  const disAirFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.Validation.Alarms.ala
  const alaFn = alarms_0a1287ed({ damPosHys: 0.01, floHys: 0.01, staPreMul: 1, VCooMax_flow: 1 });

  return (
    {  }
  ) => {
    const supCooFan = supCooFanFn({});
    const supHeaFan = supHeaFanFn({});
    const colDammSta = colDammStaFn({});
    const booToRea = booToReaFn({ u: colDammSta.y });
    const damPos = damPosFn({});
    const mul = mulFn({ u1: booToRea.y, u2: damPos.y });
    const heaDammSta = heaDammStaFn({});
    const booToRea1 = booToRea1Fn({ u: heaDammSta.y });
    const damPos1 = damPos1Fn({});
    const mul1 = mul1Fn({ u1: booToRea1.y, u2: damPos1.y });
    const intPul = intPulFn({});
    const disAirSet = disAirSetFn({});
    const disAir = disAirFn({});
    const ala = alaFn({ u1CooFan: supCooFan.y, u1HeaFan: supHeaFan.y, uCooDam: mul.y, uHeaDam: mul1.y, uOpeMod: intPul.y, VActSet_flow: disAirSet.y, VDis_flow: disAir.y });

    return { supCooFan: supCooFan, supHeaFan: supHeaFan, colDammSta: colDammSta, booToRea: booToRea, damPos: damPos, mul: mul, heaDammSta: heaDammSta, booToRea1: booToRea1, damPos1: damPos1, mul1: mul1, intPul: intPul, disAirSet: disAirSet, disAir: disAir, ala: ala };
  }
}
