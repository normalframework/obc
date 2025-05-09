
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints
const setpoints_ac0e5167 = require("../Setpoints");
const booleantointeger_d87efb42 = require("../../../../CDL/Conversions/BooleanToInteger");
const constant_8c5ba27d = require("../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../CDL/Logical/Sources/Pulse");
const greaterthreshold_64a3c4e0 = require("../../../../CDL/Reals/GreaterThreshold");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../CDL/Reals/Sources/Sin");
const switch_6d141143 = require("../../../../CDL/Reals/Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.zerAdj
  const zerAdjFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.winSta
  const winStaFn = pulse_27dcacc8({ period: 14400, shift: 1200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.cooSetAdj
  const cooSetAdjFn = sin_9696c4d3({ freqHz: 1/28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.heaSetAdj
  const heaSetAdjFn = sin_9696c4d3({ amplitude: 0.5, freqHz: 1/28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.TZonCooSetOcc
  const TZonCooSetOccFn = constant_baefa089({ k: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.TZonHeaSetOcc
  const TZonHeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.TZonCooSetUno
  const TZonCooSetUnoFn = constant_baefa089({ k: 303.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.TZonHeaSetUno
  const TZonHeaSetUnoFn = constant_baefa089({ k: 287.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.occSta
  const occStaFn = pulse_27dcacc8({ period: 14400, width: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.cooDemLimLev
  const cooDemLimLevFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.heaDemLimLev
  const heaDemLimLevFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.ram
  const ramFn = ramp_3c414377({ duration: 28800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ t: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerFalse: 7, integerTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Setpoints.TZonSet
  const TZonSetFn = setpoints_ac0e5167({ have_occSen: true, have_winSen: true });

  return (
    {  }
  ) => {
    const zerAdj = zerAdjFn({});
    const winSta = winStaFn({});
    const not2 = not2Fn({ u: winSta.y });
    const cooSetAdj = cooSetAdjFn({});
    const swi2 = swi2Fn({ u1: zerAdj.y, u2: not2.y, u3: cooSetAdj.y });
    const heaSetAdj = heaSetAdjFn({});
    const swi1 = swi1Fn({ u1: zerAdj.y, u2: not2.y, u3: heaSetAdj.y });
    const TZonCooSetOcc = TZonCooSetOccFn({});
    const TZonHeaSetOcc = TZonHeaSetOccFn({});
    const TZonCooSetUno = TZonCooSetUnoFn({});
    const TZonHeaSetUno = TZonHeaSetUnoFn({});
    const occSta = occStaFn({});
    const cooDemLimLev = cooDemLimLevFn({});
    const heaDemLimLev = heaDemLimLevFn({});
    const ram = ramFn({});
    const greThr = greThrFn({ u: ram.y });
    const not1 = not1Fn({ u: greThr.y });
    const booToInt = booToIntFn({ u: not1.y });
    const TZonSet = TZonSetFn({ cooSetAdj: swi2.y, heaSetAdj: swi1.y, TOccCooSet: TZonCooSetOcc.y, TOccHeaSet: TZonHeaSetOcc.y, TUnoCooSet: TZonCooSetUno.y, TUnoHeaSet: TZonHeaSetUno.y, u1Occ: occSta.y, u1Win: not2.y, uCooDemLimLev: cooDemLimLev.y, uHeaDemLimLev: heaDemLimLev.y, uOpeMod: booToInt.y });

    return { zerAdj: zerAdj, winSta: winSta, not2: not2, cooSetAdj: cooSetAdj, swi2: swi2, heaSetAdj: heaSetAdj, swi1: swi1, TZonCooSetOcc: TZonCooSetOcc, TZonHeaSetOcc: TZonHeaSetOcc, TZonCooSetUno: TZonCooSetUno, TZonHeaSetUno: TZonHeaSetUno, occSta: occSta, cooDemLimLev: cooDemLimLev, heaDemLimLev: heaDemLimLev, ram: ram, greThr: greThr, not1: not1, booToInt: booToInt, TZonSet: TZonSet };
  }
}
