
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow
const ahu_862bd546 = require("../AHU");
const sumzone_3c8accaf = require("../SumZone");
const constant_8c5ba27d = require("../../../../../../../../../CDL/Integers/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		have_CO2Sen = true,
		nGro = 2,
		nZon = 4,
		zonGroMat = "{{1,1,0,0},{0,0,1,1}}",
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.co2Loo
  const co2LooFn = constant_baefa089({ k: "{0.3,0.25,0.4,0.5}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.opeMod
  const opeModFn = constant_8c5ba27d({ k: "{Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied,Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.unoccupied}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.zonAbsMinFlo
  const zonAbsMinFloFn = constant_baefa089({ k: "{0.1,0.12,0.2,0.15}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.zonDesMinFlo
  const zonDesMinFloFn = constant_baefa089({ k: "{0.15,0.2,0.25,0.3}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.zonToAhu
  const zonToAhuFn = sumzone_3c8accaf({ have_CO2Sen: have_CO2Sen, nGro: nGro, nZon: nZon, zonGroMat: zonGroMat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.outAirFlo
  const outAirFloFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.Validation.OutdoorAirFlow.ahu
  const ahuFn = ahu_862bd546({ have_CO2Sen: have_CO2Sen, minOADes: 0, VAbsOutAir_flow: 0.5, VDesOutAir_flow: 1 });

  return (
    {  }
  ) => {
    const co2Loo = co2LooFn({});
    const opeMod = opeModFn({});
    const zonAbsMinFlo = zonAbsMinFloFn({});
    const zonDesMinFlo = zonDesMinFloFn({});
    const zonToAhu = zonToAhuFn({ uCO2: co2Loo.y, uOpeMod: opeMod.y, VZonAbsMin_flow: zonAbsMinFlo.y, VZonDesMin_flow: zonDesMinFlo.y });
    const outAirFlo = outAirFloFn({});
    const ahu = ahuFn({ VSumZonDesMin_flow: zonToAhu.VSumZonDesMin_flow, VAirOut_flow: outAirFlo.y });

    return {};
  }
}
