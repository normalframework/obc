
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan
const line_196841c3 = require("../../../../../../../../CDL/Reals/Line");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		have_dirCon = true,
		uMax = 0.25,
		uMin = -0.25,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan.zer
  const zerFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan.damMinLimSig
  const damMinLimSigFn = constant_baefa089({ k: uMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan.damMaxLimSig
  const damMaxLimSigFn = constant_baefa089({ k: uMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan.relDamPos
  const relDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.ReturnFan.retDamPos
  const retDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });

  return (
    { uTSup, uRetDam_max, uRetDam_min }
  ) => {
    const one = oneFn({});
    const zer = zerFn({});
    const damMinLimSig = damMinLimSigFn({});
    const damMaxLimSig = damMaxLimSigFn({});
    const relDamPos = relDamPosFn({ f1: zer.y, f2: one.y, u: uTSup, x1: damMinLimSig.y, x2: damMaxLimSig.y });
    const retDamPos = retDamPosFn({ f1: uRetDam_max, f2: uRetDam_min, u: uTSup, x1: damMinLimSig.y, x2: damMaxLimSig.y });

    return { yOutDam: one.y, yRelDam: relDamPos.y, yRetDam: retDamPos.y };
  }
}
