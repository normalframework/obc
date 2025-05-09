
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T
const supply_408ce9ac = require("../Supply");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");
const subtract_029d2d63 = require("../../../../../../../CDL/Reals/Subtract");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.TZon
  const TZonFn = constant_baefa089({ k: 273.15 +22 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.TOut
  const TOutFn = ramp_3c414377({ duration: 3600, height: 18, offset: 273.15 +10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.dT
  const dTFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.TZonCooSet
  const TZonCooSetFn = constant_baefa089({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.TZonHeaSet
  const TZonHeaSetFn = constant_baefa089({ k: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.uCoo
  const uCooFn = constant_baefa089({ k: 0.6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.uHea
  const uHeaFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_T.setPoiVAV
  const setPoiVAVFn = supply_408ce9ac({ maxCooSpe: 0.9, maxHeaSpe: 0.7, minSpe: 0.3, TSup_max: 303.15, TSup_min: 289.15, TSupDew_max: 292.15 });

  return (
    {  }
  ) => {
    const TZon = TZonFn({});
    const TOut = TOutFn({});
    const dT = dTFn({ u1: TZon.y, u2: TOut.y });
    const TZonCooSet = TZonCooSetFn({});
    const TZonHeaSet = TZonHeaSetFn({});
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const opeMod = opeModFn({});
    const setPoiVAV = setPoiVAVFn({ TCooSet: TZonCooSet.y, THeaSet: TZonHeaSet.y, TOut: TOut.y, TZon: TZon.y, uCoo: uCoo.y, uHea: uHea.y, uOpeMod: opeMod.y });

    return { TZon: TZon, TOut: TOut, dT: dT, TZonCooSet: TZonCooSet, TZonHeaSet: TZonHeaSet, uCoo: uCoo, uHea: uHea, opeMod: opeMod, setPoiVAV: setPoiVAV };
  }
}
