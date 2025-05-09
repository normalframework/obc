
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms
const alarms_a50679e0 = require("../Alarms");
const booleantointeger_d87efb42 = require("../../../../CDL/Conversions/BooleanToInteger");
const not_6d646018 = require("../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../CDL/Logical/Sources/Pulse");
const greaterthreshold_64a3c4e0 = require("../../../../CDL/Reals/GreaterThreshold");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.CO2
  const CO2Fn = sin_9696c4d3({ amplitude: 500, freqHz: 1/7200, offset: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.TZonCooSetOcc
  const TZonCooSetOccFn = constant_baefa089({ k: 295.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.TZonHeaSetOcc
  const TZonHeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.zonTem
  const zonTemFn = sin_9696c4d3({ amplitude: 8, freqHz: 1/7200, offset: 273.15 +15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.occSta
  const occStaFn = pulse_27dcacc8({ period: 7200, width: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.ram
  const ramFn = ramp_3c414377({ duration: 7200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ t: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.booToInt
  const booToIntFn = booleantointeger_d87efb42({ integerFalse: 2, integerTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.Alarms.zonAla
  const zonAlaFn = alarms_a50679e0({ have_CO2Sen: true });

  return (
    {  }
  ) => {
    const CO2 = CO2Fn({});
    const TZonCooSetOcc = TZonCooSetOccFn({});
    const TZonHeaSetOcc = TZonHeaSetOccFn({});
    const zonTem = zonTemFn({});
    const occSta = occStaFn({});
    const ram = ramFn({});
    const greThr = greThrFn({ u: ram.y });
    const not1 = not1Fn({ u: greThr.y });
    const booToInt = booToIntFn({ u: not1.y });
    const zonAla = zonAlaFn({ ppmCO2: CO2.y, TCooSet: TZonCooSetOcc.y, THeaSet: TZonHeaSetOcc.y, TZon: zonTem.y, u1ResSet: occSta.y, uOpeMod: booToInt.y });

    return { CO2: CO2, TZonCooSetOcc: TZonCooSetOcc, TZonHeaSetOcc: TZonHeaSetOcc, zonTem: zonTem, occSta: occSta, ram: ram, greThr: greThr, not1: not1, booToInt: booToInt, zonAla: zonAla };
  }
}
