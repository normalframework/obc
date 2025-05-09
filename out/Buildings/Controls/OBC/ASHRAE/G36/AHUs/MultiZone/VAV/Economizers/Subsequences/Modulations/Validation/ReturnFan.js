
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.ReturnFan
const returnfan_2c0de3b9 = require("../ReturnFan");
const constant_baefa089 = require("../../../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.ReturnFan.maxRetDam
  const maxRetDamFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.ReturnFan.minRetDam
  const minRetDamFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.ReturnFan.temLoo
  const temLooFn = ramp_3c414377({ duration: 1800, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.ReturnFan.ecoMod
  const ecoModFn = returnfan_2c0de3b9({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.ReturnFan.ecoMod1
  const ecoMod1Fn = returnfan_2c0de3b9({ have_dirCon: false });

  return (
    {  }
  ) => {
    const maxRetDam = maxRetDamFn({});
    const minRetDam = minRetDamFn({});
    const temLoo = temLooFn({});
    const ecoMod = ecoModFn({ uRetDam_max: maxRetDam.y, uRetDam_min: minRetDam.y, uTSup: temLoo.y });
    const ecoMod1 = ecoMod1Fn({ uRetDam_max: maxRetDam.y, uRetDam_min: minRetDam.y, uTSup: temLoo.y });

    return { maxRetDam: maxRetDam, minRetDam: minRetDam, temLoo: temLoo, ecoMod: ecoMod, ecoMod1: ecoMod1 };
  }
}
