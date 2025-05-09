
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim
const controller_89c9cbc4 = require("../Controller");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		hOutCutoff = 65100,
		supFanSpe_max = 0.9,
		supFanSpe_min = 0.1,
		TOutCutoff = 297.15,
		TSup = 290.15,
		TSupSet = 291.15,
		VOutDes_flow = 2,
		VOutMin_flow = 1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.hOutBelowCutoff
  const hOutBelowCutoffFn = constant_baefa089({ k: hOutCutoff -10000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.TSupSig
  const TSupSigFn = constant_baefa089({ k: TSup });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.TSupSetSig
  const TSupSetSigFn = constant_baefa089({ k: TSupSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.fanSta
  const fanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.SupFanSpeSig
  const SupFanSpeSigFn = ramp_3c414377({ duration: 1800, height: supFanSpe_max -supFanSpe_min, offset: supFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.zonSta
  const zonStaFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.VOutMinSetSig
  const VOutMinSetSigFn = ramp_3c414377({ duration: 1800, height: VOutDes_flow -VOutMin_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.economizer
  const economizerFn = controller_89c9cbc4({ ashCliZon: 1, ecoHigLimCon: 3, eneStd: 0, supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.TSupSig1
  const TSupSig1Fn = ramp_3c414377({ duration: 900, height: 2, offset: TSupSet -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Validation.Controller_Mod_DamLim.economizer1
  const economizer1Fn = controller_89c9cbc4({ ashCliZon: 1, ecoHigLimCon: 0, eneStd: 0, supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });

  return (
    {  }
  ) => {
    const hOutBelowCutoff = hOutBelowCutoffFn({});
    const TSupSig = TSupSigFn({});
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const TSupSetSig = TSupSetSigFn({});
    const fanSta = fanStaFn({});
    const freProSta = freProStaFn({});
    const opeMod = opeModFn({});
    const SupFanSpeSig = SupFanSpeSigFn({});
    const zonSta = zonStaFn({});
    const VOutMinSetSig = VOutMinSetSigFn({});
    const economizer = economizerFn({ hOut: hOutBelowCutoff.y, TAirSup: TSupSig.y, TOut: TOutBelowCutoff.y, TSupHeaEcoSet: TSupSetSig.y, u1SupFan: fanSta.y, uFreProSta: freProSta.y, uOpeMod: opeMod.y, uSupFan_actual: SupFanSpeSig.y, uZonSta: zonSta.y, VOutMinSet_flow: VOutMinSetSig.y });
    const TSupSig1 = TSupSig1Fn({});
    const economizer1 = economizer1Fn({ TAirSup: TSupSig1.y, TOut: TOutBelowCutoff.y, TSupHeaEcoSet: TSupSetSig.y, u1SupFan: fanSta.y, uFreProSta: freProSta.y, uOpeMod: opeMod.y, uSupFan_actual: SupFanSpeSig.y, uZonSta: zonSta.y, VOutMinSet_flow: VOutMinSetSig.y });

    return { hOutBelowCutoff: hOutBelowCutoff, TSupSig: TSupSig, TOutBelowCutoff: TOutBelowCutoff, TSupSetSig: TSupSetSig, fanSta: fanSta, freProSta: freProSta, opeMod: opeMod, SupFanSpeSig: SupFanSpeSig, zonSta: zonSta, VOutMinSetSig: VOutMinSetSig, economizer: economizer, TSupSig1: TSupSig1, economizer1: economizer1 };
  }
}
