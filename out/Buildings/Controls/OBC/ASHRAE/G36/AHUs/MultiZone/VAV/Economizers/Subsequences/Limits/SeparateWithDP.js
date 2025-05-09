
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP
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
const multiply_a462b873 = require("../../../../../../../../CDL/Reals/Multiply");
const multiplybyparameter_13a4f29f = require("../../../../../../../../CDL/Reals/MultiplyByParameter");
const pidwithreset_1df6d9ad = require("../../../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		dpAbsMinOutDam = 5,
		dpCon = 1,
		dpDesMinOutDam = 20,
		have_CO2Sen,
		kDp = 1,
		minSpe,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		TdDp = 0.1,
		TiDp = 0.5,
		venStd,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.minDesDp
  const minDesDpFn = constant_baefa089({ k: dpDesMinOutDam });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.pro
  const proFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.minDp
  const minDpFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.enaMinDam1
  const enaMinDam1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.enaMinDam2
  const enaMinDam2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.outDamPhyPosMaxSig
  const outDamPhyPosMaxSigFn = constant_baefa089({ k: outDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.outDamPhyPosMinSig
  const outDamPhyPosMinSigFn = constant_baefa089({ k: outDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.disMinDam
  const disMinDamFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.con1
  const con1Fn = constant_baefa089({ k: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.con
  const conFn = constant_baefa089({ k: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.minFanSpe
  const minFanSpeFn = constant_baefa089({ k: minSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.moaP
  const moaPFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 1.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.gre
  const greFn = greater_b1da53cb({ h: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.disRetDamMin
  const disRetDamMinFn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.les
  const lesFn = less_19683368({ h: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.enaRetDamMin
  const enaRetDamMinFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.enaDis
  const enaDisFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.maxRetDam
  const maxRetDamFn = pidwithreset_1df6d9ad({ controllerType: dpCon, k: kDp, Td: TdDp, Ti: TiDp });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.retDamPhyPosMaxSig
  const retDamPhyPosMaxSigFn = constant_baefa089({ k: retDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.retDamPosMaxSwi
  const retDamPosMaxSwiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.retDamPhyPosMinSig
  const retDamPhyPosMinSigFn = constant_baefa089({ k: retDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.retDamPosMinSwi
  const retDamPosMinSwiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.minAbsDp
  const minAbsDpFn = constant_baefa089({ k: dpAbsMinOutDam });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.pro1
  const pro1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.actAbsMinDp
  const actAbsMinDpFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.pro2
  const pro2Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.actDesMinDp
  const actDesMinDpFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.one2
  const one2Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.hal
  const halFn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.one1
  const one1Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Limits.SeparateWithDP.minDp1
  const minDp1Fn = line_196841c3({ limitAbove: true });

  return (
    { u1SupFan, uOutDam, uOpeMod, dpMinOutDam, uSupFan, VOutMinSet_flow_normalized, effAbsOutAir_normalized, effDesOutAir_normalized }
  ) => {
    const minDesDp = minDesDpFn({});
    const pro = proFn({ u2: VOutMinSet_flow_normalized });
    const minDp = minDpFn({ u1: minDesDp.y, u2: pro.y });
    const greThr = greThrFn({ u: minDp.y });
    const conInt1 = conInt1Fn({});
    const intEqu = intEquFn({ u1: uOpeMod, u2: conInt1.y });
    const enaMinDam1 = enaMinDam1Fn({ u1: u1SupFan, u2: intEqu.y });
    const enaMinDam2 = enaMinDam2Fn({ u1: greThr.y, u2: enaMinDam1.y });
    const outDamPhyPosMaxSig = outDamPhyPosMaxSigFn({});
    const outDamPhyPosMinSig = outDamPhyPosMinSigFn({});
    const disMinDam = disMinDamFn({ u: enaMinDam2.y });
    const con1 = con1Fn({});
    const con = conFn({});
    const minFanSpe = minFanSpeFn({});
    const one = oneFn({});
    const moaP = moaPFn({ f1: con1.y, f2: con.y, u: uSupFan, x1: minFanSpe.y, x2: one.y });
    const gai = gaiFn({ u: moaP.y });
    const gre = greFn({ u1: uOutDam, u2: gai.y });
    const disRetDamMin = disRetDamMinFn({ u1: disMinDam.y, u2: gre.y });
    const les = lesFn({ u1: uOutDam, u2: moaP.y });
    const enaRetDamMin = enaRetDamMinFn({ u1: enaMinDam2.y, u2: les.y });
    const enaDis = enaDisFn({ clr: disRetDamMin.y, u: enaRetDamMin.y });
    const maxRetDam = maxRetDamFn({ trigger: enaDis.y, u_m: dpMinOutDam, u_s: minDp.y });
    const retDamPhyPosMaxSig = retDamPhyPosMaxSigFn({});
    const retDamPosMaxSwi = retDamPosMaxSwiFn({ u1: maxRetDam.y, u2: enaDis.y, u3: retDamPhyPosMaxSig.y });
    const retDamPhyPosMinSig = retDamPhyPosMinSigFn({});
    const retDamPosMinSwi = retDamPosMinSwiFn({ u1: retDamPhyPosMinSig.y, u2: enaDis.y, u3: retDamPhyPosMaxSig.y });
    const minAbsDp = minAbsDpFn({});
    const pro1 = pro1Fn({ u2: effAbsOutAir_normalized });
    const actAbsMinDp = actAbsMinDpFn({ u1: minAbsDp.y, u2: pro1.y });
    const pro2 = pro2Fn({ u2: effDesOutAir_normalized });
    const actDesMinDp = actDesMinDpFn({ u1: pro2.y, u2: minDesDp.y });
    const one2 = one2Fn({});
    const hal = halFn({});
    const one1 = one1Fn({});
    const minDp1 = minDp1Fn({ f1: actAbsMinDp.y, f2: actDesMinDp.y, u: one2.y, x1: hal.y, x2: one1.y });

    return { y1MinOutDam: enaMinDam2.y, yOutDam_max: outDamPhyPosMaxSig.y, yOutDam_min: outDamPhyPosMinSig.y, yRetDam_max: retDamPosMaxSwi.y, yRetDam_min: retDamPosMinSwi.y, yRetDamPhy_max: retDamPhyPosMaxSig.y };
  }
}
