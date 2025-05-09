
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut
const enable_f47cde56 = require("../Enable");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const sin_9696c4d3 = require("../../../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  {
		hOutCutoff = 65100,
		TOutCutoff = 297.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOutBelowCutoff
  const hOutBelowCutoffFn = constant_baefa089({ k: hOutCutoff -1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOutCut
  const hOutCutFn = constant_baefa089({ k: hOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOut
  const TOutFn = sin_9696c4d3({ amplitude: 4, freqHz: 1/3600, offset: TOutCutoff -2, startTime: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOutCut
  const TOutCutFn = constant_baefa089({ k: TOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.supFanSta
  const supFanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.outDamPosMax
  const outDamPosMaxFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.outDamPosMin
  const outDamPosMinFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.retDamPosMax
  const retDamPosMaxFn = constant_baefa089({ k: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.retDamPosMin
  const retDamPosMinFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.retDamPhyPosMax
  const retDamPhyPosMaxFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.enaDis
  const enaDisFn = enable_f47cde56({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOut
  const hOutFn = sin_9696c4d3({ amplitude: 4000, freqHz: 1/3600, offset: hOutCutoff -2200, startTime: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOutCut1
  const hOutCut1Fn = constant_baefa089({ k: hOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOutCut1
  const TOutCut1Fn = constant_baefa089({ k: TOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.enaDis1
  const enaDis1Fn = enable_f47cde56({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.enaDis2
  const enaDis2Fn = enable_f47cde56({ use_enthalpy: false });

  return (
    {  }
  ) => {
    const hOutBelowCutoff = hOutBelowCutoffFn({});
    const hOutCut = hOutCutFn({});
    const TOut = TOutFn({});
    const TOutCut = TOutCutFn({});
    const supFanSta = supFanStaFn({});
    const freProSta = freProStaFn({});
    const outDamPosMax = outDamPosMaxFn({});
    const outDamPosMin = outDamPosMinFn({});
    const retDamPosMax = retDamPosMaxFn({});
    const retDamPosMin = retDamPosMinFn({});
    const retDamPhyPosMax = retDamPhyPosMaxFn({});
    const enaDis = enaDisFn({ hOut: hOutBelowCutoff.y, hOutCut: hOutCut.y, TOut: TOut.y, TOutCut: TOutCut.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uRetDam_max: retDamPosMax.y, uRetDam_min: retDamPosMin.y, uRetDamPhy_max: retDamPhyPosMax.y });
    const hOut = hOutFn({});
    const hOutCut1 = hOutCut1Fn({});
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const TOutCut1 = TOutCut1Fn({});
    const enaDis1 = enaDis1Fn({ hOut: hOut.y, hOutCut: hOutCut1.y, TOut: TOutBelowCutoff.y, TOutCut: TOutCut1.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uRetDam_max: retDamPosMax.y, uRetDam_min: retDamPosMin.y, uRetDamPhy_max: retDamPhyPosMax.y });
    const enaDis2 = enaDis2Fn({ TOut: TOut.y, TOutCut: TOutCut.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uRetDam_max: retDamPosMax.y, uRetDam_min: retDamPosMin.y, uRetDamPhy_max: retDamPhyPosMax.y });

    return { hOutBelowCutoff: hOutBelowCutoff, hOutCut: hOutCut, TOut: TOut, TOutCut: TOutCut, supFanSta: supFanSta, freProSta: freProSta, outDamPosMax: outDamPosMax, outDamPosMin: outDamPosMin, retDamPosMax: retDamPosMax, retDamPosMin: retDamPosMin, retDamPhyPosMax: retDamPhyPosMax, enaDis: enaDis, hOut: hOut, hOutCut1: hOutCut1, TOutBelowCutoff: TOutBelowCutoff, TOutCut1: TOutCut1, enaDis1: enaDis1, enaDis2: enaDis2 };
  }
}
