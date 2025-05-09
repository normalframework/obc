
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation
const line_196841c3 = require("../../../../../../../CDL/Reals/Line");
const pidwithreset_1df6d9ad = require("../../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerType = 1,
		have_heaCoi = true,
		k = 1,
		Td = 0.1,
		Ti = 300,
		uMax = 0.9,
		uMin = 0.1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.heaCoiMinLimSig
  const heaCoiMinLimSigFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.heaCoiMaxLimSig
  const heaCoiMaxLimSigFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.retDamMaxLimSig
  const retDamMaxLimSigFn = constant_baefa089({ k: uMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.uMaxHeaCoi
  const uMaxHeaCoiFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.HeaCoi
  const HeaCoiFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.Off
  const OffFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.enaDis
  const enaDisFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.uTSup
  const uTSupFn = pidwithreset_1df6d9ad({ controllerType: controllerType, k: k, Td: Td, Ti: Ti, yMax: 1, yMin: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.outDamMinLimSig
  const outDamMinLimSigFn = constant_baefa089({ k: uMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.outDamPos
  const outDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Modulation.retDamPos
  const retDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });

  return (
    { u1SupFan, uOutDam_max, uOutDam_min, uRetDam_min, uRetDam_max, TSup, TSupHeaEcoSet }
  ) => {
    const heaCoiMinLimSig = heaCoiMinLimSigFn({});
    const heaCoiMaxLimSig = heaCoiMaxLimSigFn({});
    const retDamMaxLimSig = retDamMaxLimSigFn({});
    const uMaxHeaCoi = uMaxHeaCoiFn({});
    const HeaCoi = HeaCoiFn({ f1: heaCoiMinLimSig.y, f2: heaCoiMaxLimSig.y, x1: retDamMaxLimSig.y, x2: uMaxHeaCoi.y });
    const Off = OffFn({});
    const enaDis = enaDisFn({ u1: HeaCoi.y, u2: u1SupFan, u3: Off.y });
    const uTSup = uTSupFn({ trigger: u1SupFan, u_m: TSup, u_s: TSupHeaEcoSet });
    const outDamMinLimSig = outDamMinLimSigFn({});
    const outDamPos = outDamPosFn({ f1: uOutDam_max, f2: uOutDam_min, u: uTSup.y, x1: outDamMinLimSig.y, x2: retDamMaxLimSig.y });
    const retDamPos = retDamPosFn({ f1: uRetDam_min, f2: uRetDam_max, x1: outDamMinLimSig.y, x2: retDamMaxLimSig.y });

    return { yHeaCoi: enaDis.y, yOutDam: outDamPos.y, yRetDam: retDamPos.y };
  }
}
