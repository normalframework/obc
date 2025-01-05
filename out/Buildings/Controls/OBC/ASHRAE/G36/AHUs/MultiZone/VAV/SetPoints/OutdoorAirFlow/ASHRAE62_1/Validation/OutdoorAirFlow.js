
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow
const ahu_6e64e742 = require("../AHU");
const sumzone_5db280ab = require("../SumZone");
const constant_8c5ba27d = require("../../../../../../../../../CDL/Integers/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		nGro = 2,
		nZon = 4,
		zonGroMat = "{{1,1,0,0},{0,0,1,1}}",
		zonGroMatTra = "{{1,0},{1,0},{0,1},{0,1}}",
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.opeMod
  const opeModFn = constant_8c5ba27d({ k: "{Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied,Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.unoccupied}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.adjAreFlo
  const adjAreFloFn = constant_baefa089({ k: "{0.08,0.1,0.15,0.1}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.adjPopFlo
  const adjPopFloFn = constant_baefa089({ k: "{0.1,0.12,0.2,0.15}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.minOAFlo
  const minOAFloFn = constant_baefa089({ k: "{0.2,0.21,0.35,0.25}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.priFlo
  const priFloFn = constant_baefa089({ k: "{0.3,0.25,0.4,0.5}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.zonToAhu
  const zonToAhuFn = sumzone_5db280ab({ nGro: nGro, nZon: nZon, zonGroMat: zonGroMat, zonGroMatTra: zonGroMatTra });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.outAirFlo
  const outAirFloFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.ahu
  const ahuFn = ahu_6e64e742({ minOADes: 0, VDesTotOutAir_flow: 1, VUncDesOutAir_flow: 1.2 });

  return (
    {  }
  ) => {
    const opeMod = opeModFn({});
    const adjAreFlo = adjAreFloFn({});
    const adjPopFlo = adjPopFloFn({});
    const minOAFlo = minOAFloFn({});
    const priFlo = priFloFn({});
    const zonToAhu = zonToAhuFn({ uOpeMod: opeMod.y, VAdjAreBreZon_flow: adjAreFlo.y, VAdjPopBreZon_flow: adjPopFlo.y, VMinOA_flow: minOAFlo.y, VZonPri_flow: priFlo.y });
    const outAirFlo = outAirFloFn({});
    const ahu = ahuFn({ VSumZonPri_flow: zonToAhu.VSumZonPri_flow, VAirOut_flow: outAirFlo.y });

    return {};
  }
}
