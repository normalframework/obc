
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable
const limits_f8128fec = require("../Limits");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../CDL/Logical/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		incVOutSet_flow = 0.2,
		minVOutSet_flow = 0.61,
		supFanSpe_max = 0.9,
		supFanSpe_min = 0.1,
		VOutDes_flow = 2,
		VOutMin_flow = 1,
		VOutSet_flow = 0.71,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.fanStatus1
  const fanStatus1Fn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.freProSta1
  const freProSta1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.operationMode1
  const operationMode1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.SupFanSpeSig
  const SupFanSpeSigFn = ramp_3c414377({ duration: 1800, height: supFanSpe_max -supFanSpe_min, offset: supFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.VOutMinSetSig
  const VOutMinSetSigFn = ramp_3c414377({ duration: 1800, height: VOutDes_flow -VOutMin_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.damLim1
  const damLim1Fn = limits_f8128fec({ supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.fanStatus2
  const fanStatus2Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.freProSta2
  const freProSta2Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.operationMode2
  const operationMode2Fn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.damLim2
  const damLim2Fn = limits_f8128fec({ supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.fanStatus3
  const fanStatus3Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.freProSta3
  const freProSta3Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.operationMode3
  const operationMode3Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Validation.Limits_Disable.damLim3
  const damLim3Fn = limits_f8128fec({ supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });

  return (
    {  }
  ) => {
    const fanStatus1 = fanStatus1Fn({});
    const freProSta1 = freProSta1Fn({});
    const operationMode1 = operationMode1Fn({});
    const SupFanSpeSig = SupFanSpeSigFn({});
    const VOutMinSetSig = VOutMinSetSigFn({});
    const damLim1 = damLim1Fn({ u1SupFan: fanStatus1.y, uFreProSta: freProSta1.y, uOpeMod: operationMode1.y, uSupFan_actual: SupFanSpeSig.y, VOutMinSet_flow: VOutMinSetSig.y });
    const fanStatus2 = fanStatus2Fn({});
    const freProSta2 = freProSta2Fn({});
    const operationMode2 = operationMode2Fn({});
    const damLim2 = damLim2Fn({ u1SupFan: fanStatus2.y, uFreProSta: freProSta2.y, uOpeMod: operationMode2.y, uSupFan_actual: SupFanSpeSig.y, VOutMinSet_flow: VOutMinSetSig.y });
    const fanStatus3 = fanStatus3Fn({});
    const freProSta3 = freProSta3Fn({});
    const operationMode3 = operationMode3Fn({});
    const damLim3 = damLim3Fn({ u1SupFan: fanStatus3.y, uFreProSta: freProSta3.y, uOpeMod: operationMode3.y, uSupFan_actual: SupFanSpeSig.y, VOutMinSet_flow: VOutMinSetSig.y });

    return { fanStatus1: fanStatus1, freProSta1: freProSta1, operationMode1: operationMode1, SupFanSpeSig: SupFanSpeSig, VOutMinSetSig: VOutMinSetSig, damLim1: damLim1, fanStatus2: fanStatus2, freProSta2: freProSta2, operationMode2: operationMode2, damLim2: damLim2, fanStatus3: fanStatus3, freProSta3: freProSta3, operationMode3: operationMode3, damLim3: damLim3 };
  }
}
