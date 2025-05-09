
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../../CDL/Integers/Switch");
const latch_a5aa3a49 = require("../../../../../../CDL/Logical/Latch");
const truedelay_b49d8a1a = require("../../../../../../CDL/Logical/TrueDelay");
const greaterthreshold_64a3c4e0 = require("../../../../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../../../../CDL/Reals/LessThreshold");
const subtract_029d2d63 = require("../../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		cooCoi = 1,
		heaCoi = 1,
		posHys = 0.05,
		Thys = 0.1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.one
  const oneFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lesThr1
  const lesThr1Fn = lessthreshold_f64b25e3({ h: posHys, t: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({ h: posHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lat1
  const lat1Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.zer
  const zerFn = constant_8c5ba27d({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.intSwi3
  const intSwi3Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.thr
  const thrFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.cooSupTemDif
  const cooSupTemDifFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: Thys, t: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.truDel
  const truDelFn = truedelay_b49d8a1a({ delayTime: 120 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.two
  const twoFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({ h: Thys, t: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.truDel1
  const truDel1Fn = truedelay_b49d8a1a({ delayTime: 120 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lesThr
  const lesThrFn = lessthreshold_f64b25e3({ h: posHys, t: 0.85 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.chiWatRes1
  const chiWatRes1Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.chiWatRes2
  const chiWatRes2Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.chiWatRes3
  const chiWatRes3Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lesThr3
  const lesThr3Fn = lessthreshold_f64b25e3({ h: posHys, t: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.greThr5
  const greThr5Fn = greaterthreshold_64a3c4e0({ h: posHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lat3
  const lat3Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.intSwi1
  const intSwi1Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.heaSupTemDif
  const heaSupTemDifFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.greThr3
  const greThr3Fn = greaterthreshold_64a3c4e0({ h: Thys, t: 17 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.truDel2
  const truDel2Fn = truedelay_b49d8a1a({ delayTime: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.greThr4
  const greThr4Fn = greaterthreshold_64a3c4e0({ h: Thys, t: 8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.truDel3
  const truDel3Fn = truedelay_b49d8a1a({ delayTime: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lesThr2
  const lesThr2Fn = lessthreshold_f64b25e3({ h: posHys, t: 0.85 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.lat2
  const lat2Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.hotWatRes1
  const hotWatRes1Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.hotWatRes2
  const hotWatRes2Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.PlantRequests.hotWatRes3
  const hotWatRes3Fn = switch_45c83437({});

  return (
    { TAirSup, TAirSupSet, uCooCoiSet, uHeaCoiSet }
  ) => {
    const one = oneFn({});
    const lesThr1 = lesThr1Fn({ u: uCooCoiSet });
    const greThr2 = greThr2Fn({ u: uCooCoiSet });
    const lat1 = lat1Fn({ clr: lesThr1.y, u: greThr2.y });
    const zer = zerFn({});
    const intSwi3 = intSwi3Fn({ u1: one.y, u2: lat1.y, u3: zer.y });
    const thr = thrFn({});
    const cooSupTemDif = cooSupTemDifFn({ u1: TAirSup, u2: TAirSupSet });
    const greThr = greThrFn({ u: cooSupTemDif.y });
    const truDel = truDelFn({ u: greThr.y });
    const two = twoFn({});
    const greThr1 = greThr1Fn({ u: cooSupTemDif.y });
    const truDel1 = truDel1Fn({ u: greThr1.y });
    const lesThr = lesThrFn({ u: uCooCoiSet });
    const lat = latFn({ clr: lesThr.y, u: greThr2.y });
    const chiWatRes1 = chiWatRes1Fn({ u1: one.y, u2: lat.y, u3: zer.y });
    const chiWatRes2 = chiWatRes2Fn({ u1: two.y, u2: truDel1.y, u3: chiWatRes1.y });
    const chiWatRes3 = chiWatRes3Fn({ u1: thr.y, u2: truDel.y, u3: chiWatRes2.y });
    const lesThr3 = lesThr3Fn({ u: uHeaCoiSet });
    const greThr5 = greThr5Fn({ u: uHeaCoiSet });
    const lat3 = lat3Fn({ clr: lesThr3.y, u: greThr5.y });
    const intSwi1 = intSwi1Fn({ u1: one.y, u2: lat3.y, u3: zer.y });
    const heaSupTemDif = heaSupTemDifFn({ u1: TAirSupSet, u2: TAirSup });
    const greThr3 = greThr3Fn({ u: heaSupTemDif.y });
    const truDel2 = truDel2Fn({ u: greThr3.y });
    const greThr4 = greThr4Fn({ u: heaSupTemDif.y });
    const truDel3 = truDel3Fn({ u: greThr4.y });
    const lesThr2 = lesThr2Fn({ u: uHeaCoiSet });
    const lat2 = lat2Fn({ clr: lesThr2.y, u: greThr5.y });
    const hotWatRes1 = hotWatRes1Fn({ u1: one.y, u2: lat2.y, u3: zer.y });
    const hotWatRes2 = hotWatRes2Fn({ u1: two.y, u2: truDel3.y, u3: hotWatRes1.y });
    const hotWatRes3 = hotWatRes3Fn({ u1: thr.y, u2: truDel2.y, u3: hotWatRes2.y });

    return { yChiPlaReq: intSwi3.y, yChiWatResReq: chiWatRes3.y, yHotWatPlaReq: intSwi1.y, yHotWatResReq: hotWatRes3.y };
  }
}
