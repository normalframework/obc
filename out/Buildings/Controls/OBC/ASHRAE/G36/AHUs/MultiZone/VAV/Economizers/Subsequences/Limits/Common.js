
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common
const equal_2ac2bdd1 = require("../../../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../../../../CDL/Logical/Not");
const line_196841c3 = require("../../../../../../../../CDL/Reals/Line");
const pidwithreset_1df6d9ad = require("../../../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerType = 1,
		k = 0.05,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		Td = 0.1,
		Ti = 120,
		uRetDam_min = 0.5,
		yMax = 1,
		yMin = 0,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.outDamPhyPosMinSig
  const outDamPhyPosMinSigFn = constant_baefa089({ k: outDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.outDamPhyPosMaxSig
  const outDamPhyPosMaxSigFn = constant_baefa089({ k: outDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.outDamPosMaxSwitch
  const outDamPosMaxSwitchFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.damLimCon
  const damLimConFn = pidwithreset_1df6d9ad({ controllerType: controllerType, k: k, Td: Td, Ti: Ti, yMax: yMax, yMin: yMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.minSigLim
  const minSigLimFn = constant_baefa089({ k: yMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.sigFraForOutDam
  const sigFraForOutDamFn = constant_baefa089({ k: uRetDam_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.minOutDam
  const minOutDamFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.retDamPhyPosMaxSig
  const retDamPhyPosMaxSigFn = constant_baefa089({ k: retDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.retDamPhyPosMinSig
  const retDamPhyPosMinSigFn = constant_baefa089({ k: retDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.retDamPosMinSwitch
  const retDamPosMinSwitchFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.maxSigLim
  const maxSigLimFn = constant_baefa089({ k: yMax });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.Common.minRetDam
  const minRetDamFn = line_196841c3({ limitAbove: true, limitBelow: true });

  return (
    { u1SupFan, VOut_flow_normalized, VOutMinSet_flow_normalized, uOpeMod }
  ) => {
    const conInt1 = conInt1Fn({});
    const intEqu = intEquFn({ u1: uOpeMod, u2: conInt1.y });
    const and3 = and3Fn({ u1: u1SupFan, u2: intEqu.y });
    const outDamPhyPosMinSig = outDamPhyPosMinSigFn({});
    const not1 = not1Fn({ u: and3.y });
    const outDamPhyPosMaxSig = outDamPhyPosMaxSigFn({});
    const outDamPosMaxSwitch = outDamPosMaxSwitchFn({ u1: outDamPhyPosMinSig.y, u2: not1.y, u3: outDamPhyPosMaxSig.y });
    const damLimCon = damLimConFn({ trigger: u1SupFan, u_m: VOut_flow_normalized, u_s: VOutMinSet_flow_normalized });
    const minSigLim = minSigLimFn({});
    const sigFraForOutDam = sigFraForOutDamFn({});
    const minOutDam = minOutDamFn({ f1: outDamPhyPosMinSig.y, f2: outDamPosMaxSwitch.y, u: damLimCon.y, x1: minSigLim.y, x2: sigFraForOutDam.y });
    const retDamPhyPosMaxSig = retDamPhyPosMaxSigFn({});
    const retDamPhyPosMinSig = retDamPhyPosMinSigFn({});
    const retDamPosMinSwitch = retDamPosMinSwitchFn({ u1: retDamPhyPosMaxSig.y, u2: not1.y, u3: retDamPhyPosMinSig.y });
    const maxSigLim = maxSigLimFn({});
    const minRetDam = minRetDamFn({ f1: retDamPhyPosMaxSig.y, f2: retDamPosMinSwitch.y, u: damLimCon.y, x1: sigFraForOutDam.y, x2: maxSigLim.y });

    return { yEnaMinOut: and3.y, yOutDam_max: outDamPosMaxSwitch.y, yOutDam_min: minOutDam.y, yRetDam_max: minRetDam.y, yRetDam_min: retDamPosMinSwitch.y, yRetDamPhy_max: retDamPhyPosMaxSig.y };
  }
}
