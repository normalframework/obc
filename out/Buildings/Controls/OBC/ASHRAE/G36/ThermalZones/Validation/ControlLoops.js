
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ControlLoops
const controlloops_b2cc0610 = require("../ControlLoops");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const sin_9696c4d3 = require("../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ControlLoops.TZonCooSetOcc
  const TZonCooSetOccFn = constant_baefa089({ k: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ControlLoops.TZonHeaSetOcc
  const TZonHeaSetOccFn = constant_baefa089({ k: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ControlLoops.zonTem
  const zonTemFn = sin_9696c4d3({ amplitude: 8, freqHz: 1/7200, offset: 273.15 +18 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.Validation.ControlLoops.conLoo
  const conLooFn = controlloops_b2cc0610({});

  return (
    {  }
  ) => {
    const TZonCooSetOcc = TZonCooSetOccFn({});
    const TZonHeaSetOcc = TZonHeaSetOccFn({});
    const zonTem = zonTemFn({});
    const conLoo = conLooFn({ TCooSet: TZonCooSetOcc.y, THeaSet: TZonHeaSetOcc.y, TZon: zonTem.y });

    return { TZonCooSetOcc: TZonCooSetOcc, TZonHeaSetOcc: TZonHeaSetOcc, zonTem: zonTem, conLoo: conLoo };
  }
}
