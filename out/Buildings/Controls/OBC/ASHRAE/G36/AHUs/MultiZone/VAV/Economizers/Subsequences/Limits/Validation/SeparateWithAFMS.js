
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS
const separatewithafms_3799e557 = require("../SeparateWithAFMS");
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.fanSta
  const fanStaFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.outDamPos
  const outDamPosFn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.supFanSpe
  const supFanSpeFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.VOut_flow1
  const VOut_flow1Fn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.VOutMinSet_flow1
  const VOutMinSet_flow1Fn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.disMinCon
  const disMinConFn = separatewithafms_3799e557({ minSpe: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.fanSta1
  const fanSta1Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.opeMod1
  const opeMod1Fn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.outDamPos1
  const outDamPos1Fn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.supFanSpe1
  const supFanSpe1Fn = constant_baefa089({ k: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.VOut_flow2
  const VOut_flow2Fn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.VOutMinSet_flow2
  const VOutMinSet_flow2Fn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.disMinCon1
  const disMinCon1Fn = separatewithafms_3799e557({ minSpe: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.fanStatus
  const fanStatusFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.operationMode
  const operationModeFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.outDamPos2
  const outDamPos2Fn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.supFanSpe2
  const supFanSpe2Fn = ramp_3c414377({ duration: 1800, height: 0.5, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.VOut_flow
  const VOut_flowFn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.VOutMinSet_flow
  const VOutMinSet_flowFn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.SeparateWithAFMS.minCon
  const minConFn = separatewithafms_3799e557({ minSpe: 0.1 });

  return (
    {  }
  ) => {
    const fanSta = fanStaFn({});
    const opeMod = opeModFn({});
    const outDamPos = outDamPosFn({});
    const supFanSpe = supFanSpeFn({});
    const VOut_flow1 = VOut_flow1Fn({});
    const VOutMinSet_flow1 = VOutMinSet_flow1Fn({});
    const disMinCon = disMinConFn({ u1SupFan: fanSta.y, uOpeMod: opeMod.y, uOutDam: outDamPos.y, uSupFan: supFanSpe.y, VOut_flow_normalized: VOut_flow1.y, VOutMinSet_flow_normalized: VOutMinSet_flow1.y });
    const fanSta1 = fanSta1Fn({});
    const opeMod1 = opeMod1Fn({});
    const outDamPos1 = outDamPos1Fn({});
    const supFanSpe1 = supFanSpe1Fn({});
    const VOut_flow2 = VOut_flow2Fn({});
    const VOutMinSet_flow2 = VOutMinSet_flow2Fn({});
    const disMinCon1 = disMinCon1Fn({ u1SupFan: fanSta1.y, uOpeMod: opeMod1.y, uOutDam: outDamPos1.y, uSupFan: supFanSpe1.y, VOut_flow_normalized: VOut_flow2.y, VOutMinSet_flow_normalized: VOutMinSet_flow2.y });
    const fanStatus = fanStatusFn({});
    const operationMode = operationModeFn({});
    const outDamPos2 = outDamPos2Fn({});
    const supFanSpe2 = supFanSpe2Fn({});
    const VOut_flow = VOut_flowFn({});
    const VOutMinSet_flow = VOutMinSet_flowFn({});
    const minCon = minConFn({ u1SupFan: fanStatus.y, uOpeMod: operationMode.y, uOutDam: outDamPos2.y, uSupFan: supFanSpe2.y, VOut_flow_normalized: VOut_flow.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });

    return { fanSta: fanSta, opeMod: opeMod, outDamPos: outDamPos, supFanSpe: supFanSpe, VOut_flow1: VOut_flow1, VOutMinSet_flow1: VOutMinSet_flow1, disMinCon: disMinCon, fanSta1: fanSta1, opeMod1: opeMod1, outDamPos1: outDamPos1, supFanSpe1: supFanSpe1, VOut_flow2: VOut_flow2, VOutMinSet_flow2: VOutMinSet_flow2, disMinCon1: disMinCon1, fanStatus: fanStatus, operationMode: operationMode, outDamPos2: outDamPos2, supFanSpe2: supFanSpe2, VOut_flow: VOut_flow, VOutMinSet_flow: VOutMinSet_flow, minCon: minCon };
  }
}
