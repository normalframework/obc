
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_VOut_flow
const common_c4e0886e = require("../Common");
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_VOut_flow.fanStatus
  const fanStatusFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_VOut_flow.operationMode
  const operationModeFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_VOut_flow.VOut_flow
  const VOut_flowFn = ramp_3c414377({ duration: 1800, height: incVOutSet_flow, offset: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_VOut_flow.VOutMinSet_flow
  const VOutMinSet_flowFn = constant_baefa089({ k: minVOutSet_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Validation.Common_VOut_flow.damLim
  const damLimFn = common_c4e0886e({});

  return (
    {  }
  ) => {
    const fanStatus = fanStatusFn({});
    const operationMode = operationModeFn({});
    const VOut_flow = VOut_flowFn({});
    const VOutMinSet_flow = VOutMinSet_flowFn({});
    const damLim = damLimFn({ u1SupFan: fanStatus.y, uOpeMod: operationMode.y, VOut_flow_normalized: VOut_flow.y, VOutMinSet_flow_normalized: VOutMinSet_flow.y });

    return { fanStatus: fanStatus, operationMode: operationMode, VOut_flow: VOut_flow, VOutMinSet_flow: VOutMinSet_flow, damLim: damLim };
  }
}
