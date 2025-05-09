
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP
const separatewithdp_bf0f1458 = require("../SeparateWithDP");
const constant_8c5ba27d = require("../../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		minVOutSet_flow = 0.71,
		VOutMin_flow = 0.61,
		incVOutSet_flow = (minVOutSet_flow -VOutMin_flow)*2,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.dpDam
  const dpDamFn = ramp_3c414377({ duration: 1800, height: 100, offset: 250 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.fanSta
  const fanStaFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.outDamPos
  const outDamPosFn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.supFanSpe
  const supFanSpeFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.VOutMinSet_flow1
  const VOutMinSet_flow1Fn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.disMinCon
  const disMinConFn = separatewithdp_bf0f1458({ dpDesMinOutDam: 300, minSpe: 0.1, venStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.dpDam1
  const dpDam1Fn = ramp_3c414377({ duration: 1800, height: 100, offset: 250 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.fanSta1
  const fanSta1Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.opeMod1
  const opeMod1Fn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.outDamPos1
  const outDamPos1Fn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.supFanSpe1
  const supFanSpe1Fn = constant_baefa089({ k: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.VOutMinSet_flow2
  const VOutMinSet_flow2Fn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.disMinCon1
  const disMinCon1Fn = separatewithdp_bf0f1458({ dpDesMinOutDam: 300, minSpe: 0.1, venStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.dpDam2
  const dpDam2Fn = ramp_3c414377({ duration: 1800, height: 52, offset: 120 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.fanStatus
  const fanStatusFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.operationMode
  const operationModeFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.outDamPos2
  const outDamPos2Fn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.supFanSpe2
  const supFanSpe2Fn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.VOutMinSet_flow
  const VOutMinSet_flowFn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithDP.minCon
  const minConFn = separatewithdp_bf0f1458({ dpDesMinOutDam: 300, minSpe: 0.1, venStd: 0 });

  return (
    {  }
  ) => {
    const dpDam = dpDamFn({});
    const fanSta = fanStaFn({});
    const opeMod = opeModFn({});
    const outDamPos = outDamPosFn({});
    const supFanSpe = supFanSpeFn({});
    const VOutMinSet_flow1 = VOutMinSet_flow1Fn({});
    const disMinCon = disMinConFn({ dpMinOutDam: dpDam.y, u1SupFan: fanSta.y, uOpeMod: opeMod.y, uOutDam: outDamPos.y, uSupFan: supFanSpe.y, VOutMinSet_flow_normalized: VOutMinSet_flow1.y });
    const dpDam1 = dpDam1Fn({});
    const fanSta1 = fanSta1Fn({});
    const opeMod1 = opeMod1Fn({});
    const outDamPos1 = outDamPos1Fn({});
    const supFanSpe1 = supFanSpe1Fn({});
    const VOutMinSet_flow2 = VOutMinSet_flow2Fn({});
    const disMinCon1 = disMinCon1Fn({ dpMinOutDam: dpDam1.y, u1SupFan: fanSta1.y, uOpeMod: opeMod1.y, uOutDam: outDamPos1.y, uSupFan: supFanSpe1.y, VOutMinSet_flow_normalized: VOutMinSet_flow2.y });
    const dpDam2 = dpDam2Fn({});
    const fanStatus = fanStatusFn({});
    const operationMode = operationModeFn({});
    const outDamPos2 = outDamPos2Fn({});
    const supFanSpe2 = supFanSpe2Fn({});
    const VOutMinSet_flow = VOutMinSet_flowFn({});
    const minCon = minConFn({ dpMinOutDam: dpDam2.y, u1SupFan: fanStatus.y, uOpeMod: operationMode.y, uOutDam: outDamPos2.y, uSupFan: supFanSpe2.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });

    return { dpDam: dpDam, fanSta: fanSta, opeMod: opeMod, outDamPos: outDamPos, supFanSpe: supFanSpe, VOutMinSet_flow1: VOutMinSet_flow1, disMinCon: disMinCon, dpDam1: dpDam1, fanSta1: fanSta1, opeMod1: opeMod1, outDamPos1: outDamPos1, supFanSpe1: supFanSpe1, VOutMinSet_flow2: VOutMinSet_flow2, disMinCon1: disMinCon1, dpDam2: dpDam2, fanStatus: fanStatus, operationMode: operationMode, outDamPos2: outDamPos2, supFanSpe2: supFanSpe2, VOutMinSet_flow: VOutMinSet_flow, minCon: minCon };
  }
}
