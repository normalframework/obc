
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable
const equal_2ac2bdd1 = require("../../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../../CDL/Logical/And");
const not_6d646018 = require("../../../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const truedelay_b49d8a1a = require("../../../../../../../CDL/Logical/TrueDelay");
const truefalsehold_5efae599 = require("../../../../../../../CDL/Logical/TrueFalseHold");
const hysteresis_72a6bcc6 = require("../../../../../../../CDL/Reals/Hysteresis");
const subtract_029d2d63 = require("../../../../../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		disDel = 15,
		delEntHis = 1000,
		hOutHigLimCutHig = 0,
		hOutHigLimCutLow = hOutHigLimCutHig -delEntHis,
		retDamFulOpeTim = 180,
		delTOutHis = 1,
		TOutHigLimCutHig = 0,
		TOutHigLimCutLow = TOutHigLimCutHig -delTOutHis,
		use_enthalpy = true,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.hysOutTem
  const hysOutTemFn = hysteresis_72a6bcc6({ uHigh: TOutHigLimCutHig, uLow: TOutHigLimCutLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.entSubst1
  const entSubst1Fn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.truFalHol
  const truFalHolFn = truefalsehold_5efae599({ trueHoldDuration: 600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.conInt
  const conIntFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.andEnaDis
  const andEnaDisFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.delOutDamOsc
  const delOutDamOscFn = truedelay_b49d8a1a({ delayTime: disDel });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.outDamSwitch
  const outDamSwitchFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.delRetDam
  const delRetDamFn = truedelay_b49d8a1a({ delayTime: retDamFulOpeTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.maxRetDamSwitch
  const maxRetDamSwitchFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.retDamSwitch
  const retDamSwitchFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.minRetDamSwitch
  const minRetDamSwitchFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Subsequences.Enable.hysOutEnt
  const hysOutEntFn = hysteresis_72a6bcc6({ uHigh: hOutHigLimCutHig, uLow: hOutHigLimCutLow });

  return (
    { u1SupFan, uFreProSta, uRetDamPhy_max, uRetDam_max, uOutDam_min, uOutDam_max, uRetDam_min, TOut, TOutCut, hOut, hOutCut }
  ) => {
    const sub1 = sub1Fn({ u1: TOut, u2: TOutCut });
    const hysOutTem = hysOutTemFn({ u: sub1.y });
    const entSubst1 = entSubst1Fn({});
    const or2 = or2Fn({ u1: hysOutTem.y, u2: entSubst1.y });
    const truFalHol = truFalHolFn({ u: or2.y });
    const and1 = and1Fn({ u1: truFalHol.y, u2: u1SupFan });
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: uFreProSta, u2: conInt.y });
    const andEnaDis = andEnaDisFn({ u1: and1.y, u2: intEqu.y });
    const not2 = not2Fn({ u: andEnaDis.y });
    const delOutDamOsc = delOutDamOscFn({ u: not2.y });
    const and3 = and3Fn({ u1: not2.y, u2: delOutDamOsc.y });
    const outDamSwitch = outDamSwitchFn({ u1: uOutDam_min, u2: and3.y, u3: uOutDam_max });
    const delRetDam = delRetDamFn({ u: not2.y });
    const not1 = not1Fn({ u: delRetDam.y });
    const and2 = and2Fn({ u1: not2.y, u2: not1.y });
    const maxRetDamSwitch = maxRetDamSwitchFn({ u1: uRetDamPhy_max, u2: and2.y, u3: uRetDam_max });
    const retDamSwitch = retDamSwitchFn({ u1: uRetDam_max, u2: not2.y, u3: uRetDam_min });
    const minRetDamSwitch = minRetDamSwitchFn({ u1: uRetDamPhy_max, u2: and2.y, u3: retDamSwitch.y });
    const sub2 = sub2Fn({ u1: hOut, u2: hOutCut });
    const hysOutEnt = hysOutEntFn({ u: sub2.y });

    return { yOutDam_max: outDamSwitch.y, yRetDam_max: maxRetDamSwitch.y, yRetDam_min: minRetDamSwitch.y };
  }
}
