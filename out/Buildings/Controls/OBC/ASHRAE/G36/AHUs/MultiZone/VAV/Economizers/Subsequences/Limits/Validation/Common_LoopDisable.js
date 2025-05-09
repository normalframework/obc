
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable
const common_c4e0886e = require("../Common");
const constant_8c5ba27d = require("../../../../../../../../../CDL/Integers/Sources/Constant");
const constant_48cc1015 = require("../../../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		incVOutSet_flow = 0.2,
		minVOutSet_flow = 0.61,
		VOutSet_flow = 0.71,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.fanSta
  const fanStaFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.VOut_flow
  const VOut_flowFn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.VOutMinSet_flow
  const VOutMinSet_flowFn = constant_baefa089({ k: VOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.damLim
  const damLimFn = common_c4e0886e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.fanStatus1
  const fanStatus1Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.opeMod1
  const opeMod1Fn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.VOut1_flow
  const VOut1_flowFn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.VOutMinSet1_flow
  const VOutMinSet1_flowFn = constant_baefa089({ k: VOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_LoopDisable.damLim1
  const damLim1Fn = common_c4e0886e({});

  return (
    {  }
  ) => {
    const fanSta = fanStaFn({});
    const opeMod = opeModFn({});
    const VOut_flow = VOut_flowFn({});
    const VOutMinSet_flow = VOutMinSet_flowFn({});
    const damLim = damLimFn({ u1SupFan: fanSta.y, uOpeMod: opeMod.y, VOut_flow_normalized: VOut_flow.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });
    const fanStatus1 = fanStatus1Fn({});
    const opeMod1 = opeMod1Fn({});
    const VOut1_flow = VOut1_flowFn({});
    const VOutMinSet1_flow = VOutMinSet1_flowFn({});
    const damLim1 = damLim1Fn({ u1SupFan: fanStatus1.y, uOpeMod: opeMod1.y, VOut_flow_normalized: VOut1_flow.y, VOutMinSet_flow_normalized: VOutMinSet1_flow.y });

    return { fanSta: fanSta, opeMod: opeMod, VOut_flow: VOut_flow, VOutMinSet_flow: VOutMinSet_flow, damLim: damLim, fanStatus1: fanStatus1, opeMod1: opeMod1, VOut1_flow: VOut1_flow, VOutMinSet1_flow: VOutMinSet1_flow, damLim1: damLim1 };
  }
}
