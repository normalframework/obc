
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs
const reliefs_6fffe878 = require("../Reliefs");
const constant_baefa089 = require("../../../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs.maxOutDam
  const maxOutDamFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs.minOutDam
  const minOutDamFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs.maxRetDam
  const maxRetDamFn = constant_baefa089({ k: 0.9 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs.minRetDam
  const minRetDamFn = constant_baefa089({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs.temLoo
  const temLooFn = ramp_3c414377({ duration: 1800, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Modulations.Validation.Reliefs.mod1
  const mod1Fn = reliefs_6fffe878({});

  return (
    {  }
  ) => {
    const maxOutDam = maxOutDamFn({});
    const minOutDam = minOutDamFn({});
    const maxRetDam = maxRetDamFn({});
    const minRetDam = minRetDamFn({});
    const temLoo = temLooFn({});
    const mod1 = mod1Fn({ uOutDam_max: maxOutDam.y, uOutDam_min: minOutDam.y, uRetDam_max: maxRetDam.y, uRetDam_min: minRetDam.y, uTSup: temLoo.y });

    return { maxOutDam: maxOutDam, minOutDam: minOutDam, maxRetDam: maxRetDam, minRetDam: minRetDam, temLoo: temLoo, mod1: mod1 };
  }
}
