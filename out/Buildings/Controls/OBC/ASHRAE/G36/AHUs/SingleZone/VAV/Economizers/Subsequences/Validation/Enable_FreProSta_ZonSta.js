
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta
const enable_ec618957 = require("../Enable");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		hOutCutoff = 65100,
		TOutCutoff = 297.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.hOutCut
  const hOutCutFn = constant_baefa089({ k: hOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.hOutBelowCutoff
  const hOutBelowCutoffFn = constant_baefa089({ k: hOutCutoff -1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.TOutCut
  const TOutCutFn = constant_baefa089({ k: TOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.supFanSta
  const supFanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.outDamPosMax
  const outDamPosMaxFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.outDamPosMin
  const outDamPosMinFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.zonSta
  const zonStaFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.enaDis
  const enaDisFn = enable_ec618957({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.freProSta1
  const freProSta1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.zonSta1
  const zonSta1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta_ZonSta.enaDis1
  const enaDis1Fn = enable_ec618957({});

  return (
    {  }
  ) => {
    const hOutCut = hOutCutFn({});
    const hOutBelowCutoff = hOutBelowCutoffFn({});
    const TOutCut = TOutCutFn({});
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const supFanSta = supFanStaFn({});
    const freProSta = freProStaFn({});
    const outDamPosMax = outDamPosMaxFn({});
    const outDamPosMin = outDamPosMinFn({});
    const zonSta = zonStaFn({});
    const enaDis = enaDisFn({ hCut: hOutCut.y, hOut: hOutBelowCutoff.y, TCut: TOutCut.y, TOut: TOutBelowCutoff.y, u1SupFan: supFanSta.y, uFreProSta: freProSta.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uZonSta: zonSta.y });
    const freProSta1 = freProSta1Fn({});
    const zonSta1 = zonSta1Fn({});
    const enaDis1 = enaDis1Fn({ hCut: hOutCut.y, hOut: hOutBelowCutoff.y, TCut: TOutCut.y, TOut: TOutBelowCutoff.y, u1SupFan: supFanSta.y, uFreProSta: freProSta1.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uZonSta: zonSta1.y });

    return { hOutCut: hOutCut, hOutBelowCutoff: hOutBelowCutoff, TOutCut: TOutCut, TOutBelowCutoff: TOutBelowCutoff, supFanSta: supFanSta, freProSta: freProSta, outDamPosMax: outDamPosMax, outDamPosMin: outDamPosMin, zonSta: zonSta, enaDis: enaDis, freProSta1: freProSta1, zonSta1: zonSta1, enaDis1: enaDis1 };
  }
}
