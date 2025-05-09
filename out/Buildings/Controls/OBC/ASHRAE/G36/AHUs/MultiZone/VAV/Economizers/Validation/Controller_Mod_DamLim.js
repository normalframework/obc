
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim
const controller_83ee0be5 = require("../Controller");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		minVOutSet_flow = 0.71,
		VOutMin_flow = 0.61,
		incVOutSet_flow = (minVOutSet_flow -VOutMin_flow)*2.2,
		TOutCutoff = 297.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.fanSta
  const fanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.supFanSpe
  const supFanSpeFn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.uTSup
  const uTSupFn = ramp_3c414377({ duration: 1800, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.VOut_flow
  const VOut_flowFn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.VOutMinSet_flow
  const VOutMinSet_flowFn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.eco
  const ecoFn = controller_83ee0be5({ ashCliZon: 1, buiPreCon: 2, ecoHigLimCon: 0, eneStd: 0, minOADes: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.dpDam2
  const dpDam2Fn = ramp_3c414377({ duration: 1800, height: 52, offset: 120 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Mod_DamLim.eco1
  const eco1Fn = controller_83ee0be5({ ashCliZon: 2, buiPreCon: 3, ecoHigLimCon: 0, eneStd: 0, minOADes: 1, venStd: 0 });

  return (
    {  }
  ) => {
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const fanSta = fanStaFn({});
    const freProSta = freProStaFn({});
    const opeMod = opeModFn({});
    const supFanSpe = supFanSpeFn({});
    const uTSup = uTSupFn({});
    const VOut_flow = VOut_flowFn({});
    const VOutMinSet_flow = VOutMinSet_flowFn({});
    const eco = ecoFn({ TOut: TOutBelowCutoff.y, u1SupFan: fanSta.y, uFreProSta: freProSta.y, uOpeMod: opeMod.y, uSupFan: supFanSpe.y, uTSup: uTSup.y, VOut_flow_normalized: VOut_flow.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });
    const dpDam2 = dpDam2Fn({});
    const eco1 = eco1Fn({ dpMinOutDam: dpDam2.y, TOut: TOutBelowCutoff.y, u1SupFan: fanSta.y, uFreProSta: freProSta.y, uOpeMod: opeMod.y, uSupFan: supFanSpe.y, uTSup: uTSup.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });

    return { TOutBelowCutoff: TOutBelowCutoff, fanSta: fanSta, freProSta: freProSta, opeMod: opeMod, supFanSpe: supFanSpe, uTSup: uTSup, VOut_flow: VOut_flow, VOutMinSet_flow: VOutMinSet_flow, eco: eco, dpDam2: dpDam2, eco1: eco1 };
  }
}
