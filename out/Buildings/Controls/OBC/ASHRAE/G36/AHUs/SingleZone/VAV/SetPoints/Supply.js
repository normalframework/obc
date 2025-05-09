
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply
const equal_2ac2bdd1 = require("../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const addparameter_26b0d2d7 = require("../../../../../../CDL/Reals/AddParameter");
const average_7b4fc5ee = require("../../../../../../CDL/Reals/Average");
const greater_b1da53cb = require("../../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../../CDL/Reals/GreaterThreshold");
const limitslewrate_d2b51837 = require("../../../../../../CDL/Reals/LimitSlewRate");
const limiter_ab723d79 = require("../../../../../../CDL/Reals/Limiter");
const line_196841c3 = require("../../../../../../CDL/Reals/Line");
const max_a5fb1db5 = require("../../../../../../CDL/Reals/Max");
const min_a5fb1ea3 = require("../../../../../../CDL/Reals/Min");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		looHys = 0.01,
		maxCooSpe,
		maxHeaSpe,
		minSpe,
		spePoiFou = 0.75,
		spePoiOne = 0.5,
		spePoiThr = 0.5,
		spePoiTwo = 0.25,
		temPoiFou = 0.75,
		temPoiOne = 0.5,
		temPoiThr = 0.5,
		temPoiTwo = 0.25,
		TSup_max,
		TSup_min,
		TSupDea_max = 297.15,
		TSupDea_min = 294.15,
		TSupDew_max,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.aveZonSet
  const aveZonSetFn = average_7b4fc5ee({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.lim
  const limFn = limiter_ab723d79({ uMax: TSupDea_max, uMin: TSupDea_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.maxSupTem
  const maxSupTemFn = constant_baefa089({ k: TSup_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.zer
  const zerFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.temOnePoi
  const temOnePoiFn = constant_baefa089({ k: temPoiOne });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.heaSupTem
  const heaSupTemFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.heaSta
  const heaStaFn = greaterthreshold_64a3c4e0({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.supCooTem
  const supCooTemFn = constant_baefa089({ k: TSup_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.temThrPoi
  const temThrPoiFn = constant_baefa089({ k: temPoiThr });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.temFouPoi
  const temFouPoiFn = constant_baefa089({ k: temPoiFou });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.cooSupTem1
  const cooSupTem1Fn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.supTemSet1
  const supTemSet1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.addPar3
  const addPar3Fn = addparameter_26b0d2d7({ p: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.temTwoPoi
  const temTwoPoiFn = constant_baefa089({ k: temPoiTwo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.cooSupTem
  const cooSupTemFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.supTemSet
  const supTemSetFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.fanOff
  const fanOffFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.unoMod
  const unoModFn = constant_8c5ba27d({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.isUnoMod
  const isUnoModFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.minFanSpe
  const minFanSpeFn = constant_baefa089({ k: minSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.maxHeaFanSpe
  const maxHeaFanSpeFn = constant_baefa089({ k: maxHeaSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.speOnePoi
  const speOnePoiFn = constant_baefa089({ k: spePoiOne });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.heaFanSpe
  const heaFanSpeFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.maxCooFanSpe
  const maxCooFanSpeFn = constant_baefa089({ k: maxCooSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.maxDewPoi
  const maxDewPoiFn = constant_baefa089({ k: TSupDew_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.addPar
  const addParFn = addparameter_26b0d2d7({ p: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.addPar1
  const addPar1Fn = addparameter_26b0d2d7({ p: -6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.endPoiTwo
  const endPoiTwoFn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.addPar2
  const addPar2Fn = addparameter_26b0d2d7({ p: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.endPoiOne
  const endPoiOneFn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.medFanSpe
  const medFanSpeFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.speTwoPoi
  const speTwoPoiFn = constant_baefa089({ k: spePoiTwo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.speThrPoi
  const speThrPoiFn = constant_baefa089({ k: spePoiThr });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.cooFanSpe1
  const cooFanSpe1Fn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.speFouPoi
  const speFouPoiFn = constant_baefa089({ k: spePoiFou });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.gre
  const greFn = greater_b1da53cb({ h: spePoiFou -spePoiThr });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.cooFanSpe2
  const cooFanSpe2Fn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.cooFan
  const cooFanFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.spe
  const speFn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.fanSpe
  const fanSpeFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.ramLim
  const ramLimFn = limitslewrate_d2b51837({ raisingSlewRate: 1/600, Td: 60 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Supply.not1
  const not1Fn = not_6d646018({});

  return (
    { TZon, TCooSet, THeaSet, uCoo, uHea, uOpeMod, TOut }
  ) => {
    const aveZonSet = aveZonSetFn({ u1: TCooSet, u2: THeaSet });
    const lim = limFn({ u: aveZonSet.y });
    const maxSupTem = maxSupTemFn({});
    const zer = zerFn({});
    const temOnePoi = temOnePoiFn({});
    const heaSupTem = heaSupTemFn({ f1: lim.y, f2: maxSupTem.y, u: uHea, x1: zer.y, x2: temOnePoi.y });
    const heaSta = heaStaFn({ u: uHea });
    const supCooTem = supCooTemFn({});
    const temThrPoi = temThrPoiFn({});
    const temFouPoi = temFouPoiFn({});
    const cooSupTem1 = cooSupTem1Fn({ f1: lim.y, f2: supCooTem.y, u: uCoo, x1: temThrPoi.y, x2: temFouPoi.y });
    const supTemSet1 = supTemSet1Fn({ u1: heaSupTem.y, u2: heaSta.y, u3: cooSupTem1.y });
    const addPar3 = addPar3Fn({ u: supCooTem.y });
    const temTwoPoi = temTwoPoiFn({});
    const cooSupTem = cooSupTemFn({ f1: lim.y, f2: addPar3.y, u: uCoo, x1: zer.y, x2: temTwoPoi.y });
    const supTemSet = supTemSetFn({ u1: heaSupTem.y, u2: heaSta.y, u3: cooSupTem.y });
    const fanOff = fanOffFn({});
    const unoMod = unoModFn({});
    const isUnoMod = isUnoModFn({ u1: unoMod.y, u2: uOpeMod });
    const minFanSpe = minFanSpeFn({});
    const maxHeaFanSpe = maxHeaFanSpeFn({});
    const speOnePoi = speOnePoiFn({});
    const one = oneFn({});
    const heaFanSpe = heaFanSpeFn({ f1: minFanSpe.y, f2: maxHeaFanSpe.y, u: uHea, x1: speOnePoi.y, x2: one.y });
    const maxCooFanSpe = maxCooFanSpeFn({});
    const maxDewPoi = maxDewPoiFn({});
    const addPar = addParFn({ u: maxDewPoi.y });
    const addPar1 = addPar1Fn({ u: TZon });
    const endPoiTwo = endPoiTwoFn({ u1: addPar.y, u2: addPar1.y });
    const addPar2 = addPar2Fn({ u: TZon });
    const endPoiOne = endPoiOneFn({ u1: addPar2.y, u2: maxDewPoi.y });
    const medFanSpe = medFanSpeFn({ f1: maxCooFanSpe.y, f2: minFanSpe.y, u: TOut, x1: endPoiTwo.y, x2: endPoiOne.y });
    const speTwoPoi = speTwoPoiFn({});
    const speThrPoi = speThrPoiFn({});
    const cooFanSpe1 = cooFanSpe1Fn({ f1: minFanSpe.y, f2: medFanSpe.y, u: uCoo, x1: speTwoPoi.y, x2: speThrPoi.y });
    const speFouPoi = speFouPoiFn({});
    const gre = greFn({ u1: speFouPoi.y, u2: uCoo });
    const cooFanSpe2 = cooFanSpe2Fn({ f1: medFanSpe.y, f2: maxCooFanSpe.y, u: uCoo, x1: speFouPoi.y, x2: one.y });
    const cooFan = cooFanFn({ u1: cooFanSpe1.y, u2: gre.y, u3: cooFanSpe2.y });
    const spe = speFn({ u1: heaFanSpe.y, u2: cooFan.y });
    const fanSpe = fanSpeFn({ u1: fanOff.y, u2: isUnoMod.y, u3: spe.y });
    const ramLim = ramLimFn({ u: fanSpe.y });
    const not1 = not1Fn({ u: isUnoMod.y });

    return { TSupCooSet: supTemSet1.y, TSupHeaEcoSet: supTemSet.y, y: ramLim.y, y1SupFan: not1.y };
  }
}
