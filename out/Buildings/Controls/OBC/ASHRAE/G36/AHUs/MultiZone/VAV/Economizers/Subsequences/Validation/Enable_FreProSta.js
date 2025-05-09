
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta
const enable_f47cde56 = require("../Enable");
const booleantointeger_d87efb42 = require("../../../../../../../../CDL/Conversions/BooleanToInteger");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const pulse_27dcacc8 = require("../../../../../../../../CDL/Logical/Sources/Pulse");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		hOutCutoff = 65100,
		TOutCutoff = 297.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.hOutBelowCutoff
  const hOutBelowCutoffFn = constant_baefa089({ k: hOutCutoff -1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.hOutCut
  const hOutCutFn = constant_baefa089({ k: hOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.TOutCut
  const TOutCutFn = constant_baefa089({ k: TOutCutoff });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.supFanSta
  const supFanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.booPul1
  const booPul1Fn = pulse_27dcacc8({ period: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.freProSta1
  const freProSta1Fn = booleantointeger_d87efb42({ integerFalse: 1, integerTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.outDamPosMax
  const outDamPosMaxFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.outDamPosMin
  const outDamPosMinFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.retDamPosMax
  const retDamPosMaxFn = constant_baefa089({ k: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.retDamPosMin
  const retDamPosMinFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.retDamPhyPosMax
  const retDamPhyPosMaxFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Validation.Enable_FreProSta.enaDis
  const enaDisFn = enable_f47cde56({});

  return (
    {  }
  ) => {
    const hOutBelowCutoff = hOutBelowCutoffFn({});
    const hOutCut = hOutCutFn({});
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const TOutCut = TOutCutFn({});
    const supFanSta = supFanStaFn({});
    const booPul1 = booPul1Fn({});
    const freProSta1 = freProSta1Fn({ u: booPul1.y });
    const outDamPosMax = outDamPosMaxFn({});
    const outDamPosMin = outDamPosMinFn({});
    const retDamPosMax = retDamPosMaxFn({});
    const retDamPosMin = retDamPosMinFn({});
    const retDamPhyPosMax = retDamPhyPosMaxFn({});
    const enaDis = enaDisFn({ hOut: hOutBelowCutoff.y, hOutCut: hOutCut.y, TOut: TOutBelowCutoff.y, TOutCut: TOutCut.y, u1SupFan: supFanSta.y, uFreProSta: freProSta1.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uRetDam_max: retDamPosMax.y, uRetDam_min: retDamPosMin.y, uRetDamPhy_max: retDamPhyPosMax.y });

    return { hOutBelowCutoff: hOutBelowCutoff, hOutCut: hOutCut, TOutBelowCutoff: TOutBelowCutoff, TOutCut: TOutCut, supFanSta: supFanSta, booPul1: booPul1, freProSta1: freProSta1, outDamPosMax: outDamPosMax, outDamPosMin: outDamPosMin, retDamPosMax: retDamPosMax, retDamPosMin: retDamPosMin, retDamPhyPosMax: retDamPhyPosMax, enaDis: enaDis };
  }
}
