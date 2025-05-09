
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs
const line_196841c3 = require("../../../../../../../../CDL/Reals/Line");
const max_a5fb1db5 = require("../../../../../../../../CDL/Reals/Max");
const min_a5fb1ea3 = require("../../../../../../../../CDL/Reals/Min");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		uMax = 0.25,
		uMin = -0.25,
		uOutDamMax = (uMin +uMax)/2,
		uRetDamMin = (uMin +uMax)/2,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.outDamMinLimSig
  const outDamMinLimSigFn = constant_baefa089({ k: uMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.outDamMaxLimSig
  const outDamMaxLimSigFn = constant_baefa089({ k: uOutDamMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.outDamPos
  const outDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.min
  const minFn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.retDamConMinLimSig
  const retDamConMinLimSigFn = constant_baefa089({ k: uRetDamMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.retDamMaxLimSig
  const retDamMaxLimSigFn = constant_baefa089({ k: uMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.retDamPos
  const retDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.max
  const maxFn = max_a5fb1db5({});

  return (
    { uRetDam_min, uOutDam_max, uOutDam_min, uTSup, uRetDam_max }
  ) => {
    const outDamMinLimSig = outDamMinLimSigFn({});
    const outDamMaxLimSig = outDamMaxLimSigFn({});
    const outDamPos = outDamPosFn({ f1: uOutDam_min, f2: uOutDam_max, u: uTSup, x1: outDamMinLimSig.y, x2: outDamMaxLimSig.y });
    const min = minFn({ u1: outDamPos.y, u2: uOutDam_max });
    const retDamConMinLimSig = retDamConMinLimSigFn({});
    const retDamMaxLimSig = retDamMaxLimSigFn({});
    const retDamPos = retDamPosFn({ f1: uRetDam_max, f2: uRetDam_min, u: uTSup, x1: retDamConMinLimSig.y, x2: retDamMaxLimSig.y });
    const max = maxFn({ u1: retDamPos.y, u2: uRetDam_min });

    return { yOutDam: min.y, yRetDam: max.y };
  }
}
