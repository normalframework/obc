
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow
const ahu_6e64e742 = require("../AHU");
const constant_01efacbe = require("../../../../../../../../../CDL/Integers/Sources/Constant");
const constant_d2aca5e8 = require("../../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		nGro = 2,
		nZon = 4,
		zonGroMat = "{{1,1,0,0},{0,0,1,1}}",
		zonGroMatTra = "{{1,0},{1,0},{0,1},{0,1}}",
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.adjAreFlo
  const adjAreFloFn = constant_d2aca5e8({ k: "{0.08,0.1,0.15,0.1}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.adjPopFlo
  const adjPopFloFn = constant_d2aca5e8({ k: "{0.1,0.12,0.2,0.15}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.outAirFlo
  const outAirFloFn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.ahu
  const ahuFn = ahu_6e64e742({ minOADes: 0, VDesTotOutAir_flow: 1, VUncDesOutAir_flow: 1.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.minOAFlo
  const minOAFloFn = constant_d2aca5e8({ k: "{0.2,0.21,0.35,0.25}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.opeMod
  const opeModFn = constant_01efacbe({ k: "{Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied,Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.unoccupied}" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.Validation.OutdoorAirFlow.priFlo
  const priFloFn = constant_d2aca5e8({ k: "{0.3,0.25,0.4,0.5}" });

  return (
    {  }
  ) => {
    const adjAreFlo = adjAreFloFn({});
    const adjPopFlo = adjPopFloFn({});
    const outAirFlo = outAirFloFn({});
    const ahu = ahuFn({ VAirOut_flow: outAirFlo.y });
    const minOAFlo = minOAFloFn({});
    const opeMod = opeModFn({});
    const priFlo = priFloFn({});

    return { adjAreFlo: adjAreFlo, adjPopFlo: adjPopFlo, outAirFlo: outAirFlo, ahu: ahu, minOAFlo: minOAFlo, opeMod: opeMod, priFlo: priFlo };
  }
}
