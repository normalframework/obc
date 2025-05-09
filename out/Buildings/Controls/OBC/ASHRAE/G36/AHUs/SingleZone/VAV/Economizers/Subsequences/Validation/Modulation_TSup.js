
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup
const modulation_be86df50 = require("../Modulation");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		TSupSet = 291.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.TSup
  const TSupFn = ramp_3c414377({ duration: 900, height: 4, offset: TSupSet -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.TSupSetSig
  const TSupSetSigFn = constant_baefa089({ k: TSupSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.fanStatus
  const fanStatusFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.outDamPosMax
  const outDamPosMaxFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.outDamPosMin
  const outDamPosMinFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.RetDamPosMax
  const RetDamPosMaxFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.RetDamPosMin
  const RetDamPosMinFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Modulation_TSup.mod
  const modFn = modulation_be86df50({});

  return (
    {  }
  ) => {
    const TSup = TSupFn({});
    const TSupSetSig = TSupSetSigFn({});
    const fanStatus = fanStatusFn({});
    const outDamPosMax = outDamPosMaxFn({});
    const outDamPosMin = outDamPosMinFn({});
    const RetDamPosMax = RetDamPosMaxFn({});
    const RetDamPosMin = RetDamPosMinFn({});
    const mod = modFn({ TSup: TSup.y, TSupHeaEcoSet: TSupSetSig.y, u1SupFan: fanStatus.y, uOutDam_max: outDamPosMax.y, uOutDam_min: outDamPosMin.y, uRetDam_max: RetDamPosMax.y, uRetDam_min: RetDamPosMin.y });

    return { TSup: TSup, TSupSetSig: TSupSetSig, fanStatus: fanStatus, outDamPosMax: outDamPosMax, outDamPosMin: outDamPosMin, RetDamPosMax: RetDamPosMax, RetDamPosMin: RetDamPosMin, mod: mod };
  }
}
