
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow
const limits_f8128fec = require("../Limits");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		supFanSpe_max = 0.9,
		supFanSpe_min = 0.1,
		fanSpe = (supFanSpe_max +supFanSpe_min)/2,
		VOutDes_flow = 2,
		VOutMin_flow = 1,
		VOutSet_flow = (VOutDes_flow +VOutMin_flow)/2,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.fanStatus
  const fanStatusFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.freProSta
  const freProStaFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.operationMode
  const operationModeFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.SupFanSpeSig
  const SupFanSpeSigFn = ramp_3c414377({ duration: 1800, height: supFanSpe_max -supFanSpe_min, offset: supFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.VOutMinSetSig
  const VOutMinSetSigFn = constant_baefa089({ k: VOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.damLim
  const damLimFn = limits_f8128fec({ supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.SupFanSpeSig1
  const SupFanSpeSig1Fn = constant_baefa089({ k: fanSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.VOutMinSetSig1
  const VOutMinSetSig1Fn = ramp_3c414377({ duration: 1800, height: VOutDes_flow -VOutMin_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_FanSpe_VOut_flow.damLim1
  const damLim1Fn = limits_f8128fec({ supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });

  return (
    {  }
  ) => {
    const fanStatus = fanStatusFn({});
    const freProSta = freProStaFn({});
    const operationMode = operationModeFn({});
    const SupFanSpeSig = SupFanSpeSigFn({});
    const VOutMinSetSig = VOutMinSetSigFn({});
    const damLim = damLimFn({ u1SupFan: fanStatus.y, uFreProSta: freProSta.y, uOpeMod: operationMode.y, uSupFan_actual: SupFanSpeSig.y, VOutMinSet_flow: VOutMinSetSig.y });
    const SupFanSpeSig1 = SupFanSpeSig1Fn({});
    const VOutMinSetSig1 = VOutMinSetSig1Fn({});
    const damLim1 = damLim1Fn({ u1SupFan: fanStatus.y, uFreProSta: freProSta.y, uOpeMod: operationMode.y, uSupFan_actual: SupFanSpeSig1.y, VOutMinSet_flow: VOutMinSetSig1.y });

    return { fanStatus: fanStatus, freProSta: freProSta, operationMode: operationMode, SupFanSpeSig: SupFanSpeSig, VOutMinSetSig: VOutMinSetSig, damLim: damLim, SupFanSpeSig1: SupFanSpeSig1, VOutMinSetSig1: VOutMinSetSig1, damLim1: damLim1 };
  }
}
