
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms
const alarms_4e6353a3 = require("../Alarms");
const booleantoreal_df99be1a = require("../../../../../../CDL/Conversions/BooleanToReal");
const pulse_eb347360 = require("../../../../../../CDL/Integers/Sources/Pulse");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const multiply_a462b873 = require("../../../../../../CDL/Reals/Multiply");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.supCooFan
  const supCooFanFn = pulse_27dcacc8({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.supHeaFan
  const supHeaFanFn = pulse_27dcacc8({ period: 7500, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.colDammSta
  const colDammStaFn = pulse_27dcacc8({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.damPos
  const damPosFn = ramp_3c414377({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.mul
  const mulFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.heaDammSta
  const heaDammStaFn = pulse_27dcacc8({ period: 7500, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.damPos1
  const damPos1Fn = ramp_3c414377({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.mul1
  const mul1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.intPul
  const intPulFn = pulse_eb347360({ amplitude: 6, offset: 1, period: 8500, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.disAirSet
  const disAirSetFn = ramp_3c414377({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.cooDisAir
  const cooDisAirFn = ramp_3c414377({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.heaDisAir
  const heaDisAirFn = ramp_3c414377({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Subsequences.Validation.Alarms.ala
  const alaFn = alarms_4e6353a3({ damPosHys: 0.01, floHys: 0.01, staPreMul: 1, VCooMax_flow: 1, VHeaMax_flow: 0.9 });

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
    const cooDisAir = cooDisAirFn({});
    const heaDisAir = heaDisAirFn({});
    const ala = alaFn({ u1CooFan: supCooFan.y, u1HeaFan: supHeaFan.y, uCooDam: mul.y, uHeaDam: mul1.y, uOpeMod: intPul.y, VActSet_flow: disAirSet.y, VColDucDis_flow: cooDisAir.y, VHotDucDis_flow: heaDisAir.y });

    return {};
  }
}
