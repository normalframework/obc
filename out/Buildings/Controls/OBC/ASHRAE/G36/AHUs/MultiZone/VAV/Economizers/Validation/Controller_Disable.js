
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable
const controller_83ee0be5 = require("../Controller");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		hOutCutoff = 65100,
		minVOutSet_flow = 0.71,
		VOutMin_flow = 0.61,
		incVOutSet_flow = (minVOutSet_flow -VOutMin_flow)*2.2,
		TOutCutoff = 297.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.TOutBelowCutoff
  const TOutBelowCutoffFn = constant_baefa089({ k: TOutCutoff -30 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.fanSta
  const fanStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.uTSup
  const uTSupFn = ramp_3c414377({ duration: 1800, height: 2, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.VOut_flow
  const VOut_flowFn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.VOutMinSet_flow
  const VOutMinSet_flowFn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.eco
  const ecoFn = controller_83ee0be5({ ashCliZon: 1, buiPreCon: 1, ecoHigLimCon: 0, eneStd: 0, minOAConTyp: 1, minOADes: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.hOutBelowCutoff
  const hOutBelowCutoffFn = constant_baefa089({ k: hOutCutoff -40000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.freProSta2
  const freProSta2Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Validation.Controller_Disable.eco1
  const eco1Fn = controller_83ee0be5({ ashCliZon: 1, buiPreCon: 1, ecoHigLimCon: 3, eneStd: 0, minOAConTyp: 1, minOADes: 2 });

  return (
    {  }
  ) => {
    const TOutBelowCutoff = TOutBelowCutoffFn({});
    const fanSta = fanStaFn({});
    const freProSta = freProStaFn({});
    const opeMod = opeModFn({});
    const uTSup = uTSupFn({});
    const VOut_flow = VOut_flowFn({});
    const VOutMinSet_flow = VOutMinSet_flowFn({});
    const eco = ecoFn({ TOut: TOutBelowCutoff.y, u1SupFan: fanSta.y, uFreProSta: freProSta.y, uOpeMod: opeMod.y, uTSup: uTSup.y, VOut_flow_normalized: VOut_flow.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });
    const hOutBelowCutoff = hOutBelowCutoffFn({});
    const freProSta2 = freProSta2Fn({});
    const eco1 = eco1Fn({ hAirOut: hOutBelowCutoff.y, TOut: TOutBelowCutoff.y, u1SupFan: fanSta.y, uFreProSta: freProSta2.y, uOpeMod: opeMod.y, uTSup: uTSup.y, VOut_flow_normalized: VOut_flow.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });

    return { TOutBelowCutoff: TOutBelowCutoff, fanSta: fanSta, freProSta: freProSta, opeMod: opeMod, uTSup: uTSup, VOut_flow: VOut_flow, VOutMinSet_flow: VOutMinSet_flow, eco: eco, hOutBelowCutoff: hOutBelowCutoff, freProSta2: freProSta2, eco1: eco1 };
  }
}
