
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS
const equal_2ac2bdd1 = require("../../../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../../../CDL/Logical/And");
const latch_a5aa3a49 = require("../../../../../../../../CDL/Logical/Latch");
const not_6d646018 = require("../../../../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../../../../CDL/Logical/Or");
const greater_b1da53cb = require("../../../../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../../../../CDL/Reals/GreaterThreshold");
const less_19683368 = require("../../../../../../../../CDL/Reals/Less");
const line_196841c3 = require("../../../../../../../../CDL/Reals/Line");
const multiplybyparameter_13a4f29f = require("../../../../../../../../CDL/Reals/MultiplyByParameter");
const pidwithreset_1df6d9ad = require("../../../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		kMinOA = 1,
		minOAConTyp = 1,
		minOutDamPhy_max = 1,
		minOutDamPhy_min = 0,
		minSpe,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		TdMinOA = 0.1,
		TiMinOA = 0.5,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.enaMinCon
  const enaMinConFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.minOutDamPhyPosMinSig
  const minOutDamPhyPosMinSigFn = constant_baefa089({ k: minOutDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.minOutDamPhyPosMaxSig
  const minOutDamPhyPosMaxSigFn = constant_baefa089({ k: minOutDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.conMinOA
  const conMinOAFn = pidwithreset_1df6d9ad({ controllerType: minOAConTyp, k: kMinOA, Td: TdMinOA, Ti: TiMinOA, yMax: minOutDamPhy_max, yMin: minOutDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.zer
  const zerFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.con
  const conFn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.minOutDamPos
  const minOutDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.outDamPhyPosMaxSig
  const outDamPhyPosMaxSigFn = constant_baefa089({ k: outDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.outDamPhyPosMinSig
  const outDamPhyPosMinSigFn = constant_baefa089({ k: outDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.retDamPhyPosMaxSig
  const retDamPhyPosMaxSigFn = constant_baefa089({ k: retDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.retDamPhyPosMinSig
  const retDamPhyPosMinSigFn = constant_baefa089({ k: retDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.con3
  const con3Fn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.con4
  const con4Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.maxRetDamPos
  const maxRetDamPosFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.01, t: 0.98 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.cloMinDam
  const cloMinDamFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.con2
  const con2Fn = constant_baefa089({ k: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.con1
  const con1Fn = constant_baefa089({ k: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.minFanSpe
  const minFanSpeFn = constant_baefa089({ k: minSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.moaP
  const moaPFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 1.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.gre
  const greFn = greater_b1da53cb({ h: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.disRetDamMin
  const disRetDamMinFn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.les
  const lesFn = less_19683368({ h: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.enaRetDamMin
  const enaRetDamMinFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.enaDis
  const enaDisFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.retDamPosMaxSwi
  const retDamPosMaxSwiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithAFMS.retDamPosMinSwi
  const retDamPosMinSwiFn = switch_6d141143({});

  return (
    { VOut_flow_normalized, VOutMinSet_flow_normalized, u1SupFan, uOutDam, uOpeMod, uSupFan }
  ) => {
    const conInt1 = conInt1Fn({});
    const intEqu = intEquFn({ u1: uOpeMod, u2: conInt1.y });
    const enaMinCon = enaMinConFn({ u1: u1SupFan, u2: intEqu.y });
    const minOutDamPhyPosMinSig = minOutDamPhyPosMinSigFn({});
    const minOutDamPhyPosMaxSig = minOutDamPhyPosMaxSigFn({});
    const conMinOA = conMinOAFn({ trigger: enaMinCon.y, u_m: VOut_flow_normalized, u_s: VOutMinSet_flow_normalized });
    const zer = zerFn({});
    const con = conFn({});
    const minOutDamPos = minOutDamPosFn({ f1: minOutDamPhyPosMinSig.y, f2: minOutDamPhyPosMaxSig.y, u: conMinOA.y, x1: zer.y, x2: con.y });
    const outDamPhyPosMaxSig = outDamPhyPosMaxSigFn({});
    const outDamPhyPosMinSig = outDamPhyPosMinSigFn({});
    const retDamPhyPosMaxSig = retDamPhyPosMaxSigFn({});
    const retDamPhyPosMinSig = retDamPhyPosMinSigFn({});
    const con3 = con3Fn({});
    const con4 = con4Fn({});
    const maxRetDamPos = maxRetDamPosFn({ f1: retDamPhyPosMaxSig.y, f2: retDamPhyPosMinSig.y, u: conMinOA.y, x1: con3.y, x2: con4.y });
    const greThr = greThrFn({ u: minOutDamPos.y });
    const cloMinDam = cloMinDamFn({ u: greThr.y });
    const con2 = con2Fn({});
    const con1 = con1Fn({});
    const minFanSpe = minFanSpeFn({});
    const one = oneFn({});
    const moaP = moaPFn({ f1: con2.y, f2: con1.y, u: uSupFan, x1: minFanSpe.y, x2: one.y });
    const gai = gaiFn({ u: moaP.y });
    const gre = greFn({ u1: uOutDam, u2: gai.y });
    const disRetDamMin = disRetDamMinFn({ u1: cloMinDam.y, u2: gre.y });
    const les = lesFn({ u1: uOutDam, u2: moaP.y });
    const enaRetDamMin = enaRetDamMinFn({ u1: greThr.y, u2: les.y });
    const enaDis = enaDisFn({ clr: disRetDamMin.y, u: enaRetDamMin.y });
    const retDamPosMaxSwi = retDamPosMaxSwiFn({ u1: maxRetDamPos.y, u2: enaDis.y, u3: retDamPhyPosMinSig.y });
    const retDamPosMinSwi = retDamPosMinSwiFn({ u1: retDamPhyPosMinSig.y, u2: enaDis.y, u3: retDamPhyPosMaxSig.y });

    return { yEnaMinOut: enaMinCon.y, yMinOutDam: minOutDamPos.y, yOutDam_max: outDamPhyPosMaxSig.y, yOutDam_min: outDamPhyPosMinSig.y, yRetDam_max: retDamPosMaxSwi.y, yRetDam_min: retDamPosMinSwi.y, yRetDamPhy_max: retDamPhyPosMaxSig.y };
  }
}
