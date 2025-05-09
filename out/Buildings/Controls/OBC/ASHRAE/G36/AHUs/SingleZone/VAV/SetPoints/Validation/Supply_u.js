
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u
const supply_408ce9ac = require("../Supply");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.TZonCooSet
  const TZonCooSetFn = constant_baefa089({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.TZonHeaSet
  const TZonHeaSetFn = constant_baefa089({ k: 273.15 +22 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.TOut
  const TOutFn = constant_baefa089({ k: 273.15 +22 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.TZon
  const TZonFn = constant_baefa089({ k: 273.15 +28 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.uCoo
  const uCooFn = ramp_3c414377({ duration: 900, startTime: 2700 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.uHea
  const uHeaFn = ramp_3c414377({ duration: 900, height: -1, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.setPoiVAV
  const setPoiVAVFn = supply_408ce9ac({ maxCooSpe: 1, maxHeaSpe: 0.7, minSpe: 0.3, TSup_max: 303.15, TSup_min: 289.15, TSupDew_max: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.setPoiVAV1
  const setPoiVAV1Fn = supply_408ce9ac({ maxCooSpe: 1, maxHeaSpe: 0.7, minSpe: 0.3, TSup_max: 303.15, TSup_min: 289.15, TSupDew_max: 297.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.TZon1
  const TZon1Fn = constant_baefa089({ k: 273.15 +23 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.Supply_u.setPoiVAV2
  const setPoiVAV2Fn = supply_408ce9ac({ maxCooSpe: 1, maxHeaSpe: 0.7, minSpe: 0.3, TSup_max: 303.15, TSup_min: 289.15, TSupDew_max: 297.15 });

  return (
    {  }
  ) => {
    const TZonCooSet = TZonCooSetFn({});
    const TZonHeaSet = TZonHeaSetFn({});
    const TOut = TOutFn({});
    const TZon = TZonFn({});
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const opeMod = opeModFn({});
    const setPoiVAV = setPoiVAVFn({ TCooSet: TZonCooSet.y, THeaSet: TZonHeaSet.y, TOut: TOut.y, TZon: TZon.y, uCoo: uCoo.y, uHea: uHea.y, uOpeMod: opeMod.y });
    const setPoiVAV1 = setPoiVAV1Fn({ TCooSet: TZonCooSet.y, THeaSet: TZonHeaSet.y, TZon: TOut.y, uCoo: uCoo.y, uHea: uHea.y, uOpeMod: opeMod.y });
    const TZon1 = TZon1Fn({});
    const setPoiVAV2 = setPoiVAV2Fn({ TCooSet: TZonCooSet.y, THeaSet: TZonHeaSet.y, TOut: TOut.y, TZon: TZon1.y, uCoo: uCoo.y, uHea: uHea.y, uOpeMod: opeMod.y });

    return { TZonCooSet: TZonCooSet, TZonHeaSet: TZonHeaSet, TOut: TOut, TZon: TZon, uCoo: uCoo, uHea: uHea, opeMod: opeMod, setPoiVAV: setPoiVAV, setPoiVAV1: setPoiVAV1, TZon1: TZon1, setPoiVAV2: setPoiVAV2 };
  }
}
