
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits
const equal_2ac2bdd1 = require("../../../../../../../CDL/Integers/Equal");
const lessequal_4ee8ad38 = require("../../../../../../../CDL/Integers/LessEqual");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../../../CDL/Logical/Not");
const greaterthreshold_64a3c4e0 = require("../../../../../../../CDL/Reals/GreaterThreshold");
const line_196841c3 = require("../../../../../../../CDL/Reals/Line");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		floHys = 0.01,
		outDamDesFloMaxSpe = 0.8,
		outDamDesFloMinSpe = 0.9,
		outDamMinFloMaxSpe = 0.3,
		outDamMinFloMinSpe = 0.4,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		supFanSpe_max = 1,
		supFanSpe_min = 0.1,
		VOutDes_flow,
		VOutMin_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.outDamPhyPosMinSig
  const outDamPhyPosMinSigFn = constant_baefa089({ k: outDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.conInt
  const conIntFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.intLesEqu
  const intLesEquFn = lessequal_4ee8ad38({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.intEqu1
  const intEqu1Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.outDamPhyPosMaxSig
  const outDamPhyPosMaxSigFn = constant_baefa089({ k: outDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.enaDis1
  const enaDis1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yDam_VOutMin_minSpeSig
  const yDam_VOutMin_minSpeSigFn = constant_baefa089({ k: outDamMinFloMinSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yDam_VOutMin_maxSpeSig
  const yDam_VOutMin_maxSpeSigFn = constant_baefa089({ k: outDamMinFloMaxSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yFanMinSig
  const yFanMinSigFn = constant_baefa089({ k: supFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yFanMaxSig
  const yFanMaxSigFn = constant_baefa089({ k: supFanSpe_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yDam_VOutMin_curSpe
  const yDam_VOutMin_curSpeFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yDam_VOutDes_minSpeSig
  const yDam_VOutDes_minSpeSigFn = constant_baefa089({ k: outDamDesFloMinSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yDam_VOutDes_maxSpeSig
  const yDam_VOutDes_maxSpeSigFn = constant_baefa089({ k: outDamDesFloMaxSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.yDam_VOutDes_curSpe
  const yDam_VOutDes_curSpeFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.minVOutSig
  const minVOutSigFn = constant_baefa089({ k: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.desVOutSig
  const desVOutSigFn = constant_baefa089({ k: VOutDes_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.minVOutSetCurFanSpePos
  const minVOutSetCurFanSpePosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.enaDis
  const enaDisFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.noZerMin
  const noZerMinFn = greaterthreshold_64a3c4e0({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.zer
  const zerFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Limits.enaDis2
  const enaDis2Fn = switch_6d141143({});

  return (
    { u1SupFan, uOpeMod, uFreProSta, VOutMinSet_flow, uSupFan_actual }
  ) => {
    const outDamPhyPosMinSig = outDamPhyPosMinSigFn({});
    const conInt = conIntFn({});
    const intLesEqu = intLesEquFn({ u1: uFreProSta, u2: conInt.y });
    const conInt1 = conInt1Fn({});
    const intEqu1 = intEqu1Fn({ u1: uOpeMod, u2: conInt1.y });
    const and1 = and1Fn({ u1: intLesEqu.y, u2: intEqu1.y });
    const and2 = and2Fn({ u1: u1SupFan, u2: and1.y });
    const not1 = not1Fn({ u: and2.y });
    const outDamPhyPosMaxSig = outDamPhyPosMaxSigFn({});
    const enaDis1 = enaDis1Fn({ u1: outDamPhyPosMinSig.y, u2: not1.y, u3: outDamPhyPosMaxSig.y });
    const yDam_VOutMin_minSpeSig = yDam_VOutMin_minSpeSigFn({});
    const yDam_VOutMin_maxSpeSig = yDam_VOutMin_maxSpeSigFn({});
    const yFanMinSig = yFanMinSigFn({});
    const yFanMaxSig = yFanMaxSigFn({});
    const yDam_VOutMin_curSpe = yDam_VOutMin_curSpeFn({ f1: yDam_VOutMin_minSpeSig.y, f2: yDam_VOutMin_maxSpeSig.y, u: uSupFan_actual, x1: yFanMinSig.y, x2: yFanMaxSig.y });
    const yDam_VOutDes_minSpeSig = yDam_VOutDes_minSpeSigFn({});
    const yDam_VOutDes_maxSpeSig = yDam_VOutDes_maxSpeSigFn({});
    const yDam_VOutDes_curSpe = yDam_VOutDes_curSpeFn({ f1: yDam_VOutDes_minSpeSig.y, f2: yDam_VOutDes_maxSpeSig.y, u: uSupFan_actual, x1: yFanMinSig.y, x2: yFanMaxSig.y });
    const minVOutSig = minVOutSigFn({});
    const desVOutSig = desVOutSigFn({});
    const minVOutSetCurFanSpePos = minVOutSetCurFanSpePosFn({ f1: yDam_VOutMin_curSpe.y, f2: yDam_VOutDes_curSpe.y, u: VOutMinSet_flow, x1: minVOutSig.y, x2: desVOutSig.y });
    const enaDis = enaDisFn({ u1: outDamPhyPosMinSig.y, u2: not1.y, u3: minVOutSetCurFanSpePos.y });
    const noZerMin = noZerMinFn({ u: VOutMinSet_flow });
    const zer = zerFn({});
    const enaDis2 = enaDis2Fn({ u1: enaDis.y, u2: noZerMin.y, u3: zer.y });

    return { yOutDam_max: enaDis1.y, yOutDam_min: enaDis2.y };
  }
}
