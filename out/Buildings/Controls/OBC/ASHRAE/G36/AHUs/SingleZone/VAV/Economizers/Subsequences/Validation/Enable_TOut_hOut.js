
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut
const enable_ec618957 = require("../Enable");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const sin_9696c4d3 = require("../../../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  {
		hOutCutoff = 65100,
		outDamPosMax = 0.9,
		outDamPosMin = 0.1,
		TOutCutoff = 297.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOutCut
  const hOutCutFn = constant_baefa089({ k: hOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOutBelowCutoff
  const hOutBelowCutoffFn = constant_baefa089({ k: hOutCutoff -1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOutCut
  const TOutCutFn = constant_baefa089({ k: TOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOut
  const TOutFn = sin_9696c4d3({ amplitude: 4, freqHz: 1/3600, offset: TOutCutoff -2, startTime: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.supFanSta
  const supFanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.outDamPosMaxSig
  const outDamPosMaxSigFn = constant_baefa089({ k: outDamPosMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.outDamPosMinSig
  const outDamPosMinSigFn = constant_baefa089({ k: outDamPosMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.zoneState
  const zoneStateFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.enaDis
  const enaDisFn = enable_ec618957({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOutCut1
  const hOutCut1Fn = constant_baefa089({ k: hOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.hOut
  const hOutFn = sin_9696c4d3({ amplitude: 4000, freqHz: 1/3600, offset: hOutCutoff -2200, startTime: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOutCut1
  const TOutCut1Fn = constant_baefa089({ k: TOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.enaDis1
  const enaDis1Fn = enable_ec618957({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_TOut_hOut.enaDis2
  const enaDis2Fn = enable_ec618957({ use_enthalpy: false });

  return (
    {  }
  ) => {
    const hOutCut = hOutCutFn({});
    const hOutBelowCutoff = hOutBelowCutoffFn({});
    const TOutCut = TOutCutFn({});
    const TOut = TOutFn({});
    const supFanSta = supFanStaFn({});
    const freProSta = freProStaFn({});
    const outDamPosMaxSig = outDamPosMaxSigFn({});
    const outDamPosMinSig = outDamPosMinSigFn({});
    const zoneState = zoneStateFn({});
    const enaDis = enaDisFn({ hCut: hOutCut.y, hOut: hOutBelowCutoff.y, TCut: TOutCut.y, TOut: TOut.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMaxSig.y, uOutDam_min: outDamPosMinSig.y, uZonSta: zoneState.y });
    const hOutCut1 = hOutCut1Fn({});
    const hOut = hOutFn({});
    const TOutCut1 = TOutCut1Fn({});
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const enaDis1 = enaDis1Fn({ hCut: hOutCut1.y, hOut: hOut.y, TCut: TOutCut1.y, TOut: TOutBelowCutoff.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMaxSig.y, uOutDam_min: outDamPosMinSig.y, uZonSta: zoneState.y });
    const enaDis2 = enaDis2Fn({ TCut: TOutCut.y, TOut: TOut.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMaxSig.y, uOutDam_min: outDamPosMinSig.y, uZonSta: zoneState.y });

    return { hOutCut: hOutCut, hOutBelowCutoff: hOutBelowCutoff, TOutCut: TOutCut, TOut: TOut, supFanSta: supFanSta, freProSta: freProSta, outDamPosMaxSig: outDamPosMaxSig, outDamPosMinSig: outDamPosMinSig, zoneState: zoneState, enaDis: enaDis, hOutCut1: hOutCut1, hOut: hOut, TOutCut1: TOutCut1, TOutBelowCutoff: TOutBelowCutoff, enaDis1: enaDis1, enaDis2: enaDis2 };
  }
}
