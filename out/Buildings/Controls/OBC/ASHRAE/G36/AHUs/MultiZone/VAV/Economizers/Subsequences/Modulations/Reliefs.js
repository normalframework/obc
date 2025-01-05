
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.min
  const minFn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.max
  const maxFn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.outDamPos
  const outDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.outDamMaxLimSig
  const outDamMaxLimSigFn = constant_baefa089({ k: uOutDamMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.outDamMinLimSig
  const outDamMinLimSigFn = constant_baefa089({ k: uMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.retDamPos
  const retDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.retDamConMinLimSig
  const retDamConMinLimSigFn = constant_baefa089({ k: uRetDamMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Reliefs.retDamMaxLimSig
  const retDamMaxLimSigFn = constant_baefa089({ k: uMax });

  return (
    { uRetDam_min, uTSup }
  ) => {
    const min = minFn({});
    const max = maxFn({ u2: uRetDam_min });
    const outDamPos = outDamPosFn({ u: uTSup, y: min.u1 });
    const outDamMaxLimSig = outDamMaxLimSigFn({ y: outDamPos.x2 });
    const outDamMinLimSig = outDamMinLimSigFn({ y: outDamPos.x1 });
    const retDamPos = retDamPosFn({ u: uTSup, y: max.u1 });
    const retDamConMinLimSig = retDamConMinLimSigFn({ y: retDamPos.x1 });
    const retDamMaxLimSig = retDamMaxLimSigFn({ y: retDamPos.x2 });

    return { yOutDam: min.y, yRetDam: max.y };
  }
}
