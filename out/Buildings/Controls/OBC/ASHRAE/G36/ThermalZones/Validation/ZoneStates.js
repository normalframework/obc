
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ZoneStates
const zonestates_6a0c176c = require("../ZoneStates");
const pulse_4bd410d4 = require("../../../../CDL/Reals/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ZoneStates.uCoo
  const uCooFn = pulse_4bd410d4({ amplitude: 1, offset: 0, period: 2, shift: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ZoneStates.uHea
  const uHeaFn = pulse_4bd410d4({ amplitude: 1, offset: 0, period: 2, shift: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ZoneStates.zonSta
  const zonStaFn = zonestates_6a0c176c({});

  return (
    {  }
  ) => {
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const zonSta = zonStaFn({ uCoo: uCoo.y, uHea: uHea.y });

    return { uCoo: uCoo, uHea: uHea, zonSta: zonSta };
  }
}
