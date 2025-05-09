
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable
const equal_2ac2bdd1 = require("../../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const truefalsehold_5efae599 = require("../../../../../../../CDL/Logical/TrueFalseHold");
const hysteresis_72a6bcc6 = require("../../../../../../../CDL/Reals/Hysteresis");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		delEntHys = 1000,
		hOutHigLimCutHig = 0,
		hOutHigLimCutLow = hOutHigLimCutHig -delEntHys,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		delTOutHys = 1,
		TOutHigLimCutHig = 0,
		TOutHigLimCutLow = TOutHigLimCutHig -delTOutHys,
		use_enthalpy = true,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.hysOutTem
  const hysOutTemFn = hysteresis_72a6bcc6({ uHigh: TOutHigLimCutHig, uLow: TOutHigLimCutLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.entSubst
  const entSubstFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.truFalHol
  const truFalHolFn = truefalsehold_5efae599({ trueHoldDuration: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.conInt
  const conIntFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.intEqu1
  const intEqu1Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.not3
  const not3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.andFrePro
  const andFreProFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.andEnaDis
  const andEnaDisFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.maxOutDam
  const maxOutDamFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.retDamPhyMax
  const retDamPhyMaxFn = constant_baefa089({ k: retDamPhy_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.retDamPhyMin
  const retDamPhyMinFn = constant_baefa089({ k: retDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.minRetDam
  const minRetDamFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Subsequences.Enable.hysOutEnt
  const hysOutEntFn = hysteresis_72a6bcc6({ uHigh: hOutHigLimCutHig, uLow: hOutHigLimCutLow });

  return (
    { u1SupFan, uFreProSta, uZonSta, uOutDam_min, uOutDam_max, TOut, TCut, hOut, hCut }
  ) => {
    const sub1 = sub1Fn({ u1: TOut, u2: TCut });
    const hysOutTem = hysOutTemFn({ u: sub1.y });
    const entSubst = entSubstFn({});
    const or2 = or2Fn({ u1: hysOutTem.y, u2: entSubst.y });
    const truFalHol = truFalHolFn({ u: or2.y });
    const and1 = and1Fn({ u1: truFalHol.y, u2: u1SupFan });
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: uFreProSta, u2: conInt.y });
    const conInt1 = conInt1Fn({});
    const intEqu1 = intEqu1Fn({ u1: uZonSta, u2: conInt1.y });
    const not3 = not3Fn({ u: intEqu1.y });
    const andFrePro = andFreProFn({ u1: intEqu.y, u2: not3.y });
    const andEnaDis = andEnaDisFn({ u1: and1.y, u2: andFrePro.y });
    const not2 = not2Fn({ u: andEnaDis.y });
    const maxOutDam = maxOutDamFn({ u1: uOutDam_min, u2: not2.y, u3: uOutDam_max });
    const retDamPhyMax = retDamPhyMaxFn({});
    const retDamPhyMin = retDamPhyMinFn({});
    const minRetDam = minRetDamFn({ u1: retDamPhyMax.y, u2: not2.y, u3: retDamPhyMin.y });
    const sub2 = sub2Fn({ u1: hOut, u2: hCut });
    const hysOutEnt = hysOutEntFn({ u: sub2.y });

    return { yOutDam_max: maxOutDam.y, yRetDam_max: retDamPhyMax.y, yRetDam_min: minRetDam.y };
  }
}
