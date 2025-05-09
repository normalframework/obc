
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan
const booleantoreal_df99be1a = require("../../../../../../CDL/Conversions/BooleanToReal");
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const latch_a5aa3a49 = require("../../../../../../CDL/Logical/Latch");
const or_e27f1bfe = require("../../../../../../CDL/Logical/Or");
const timer_a61e7f4a = require("../../../../../../CDL/Logical/Timer");
const divide_52bbd688 = require("../../../../../../CDL/Reals/Divide");
const greaterthreshold_64a3c4e0 = require("../../../../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../../../../CDL/Reals/LessThreshold");
const movingaverage_08d08100 = require("../../../../../../CDL/Reals/MovingAverage");
const multiply_a462b873 = require("../../../../../../CDL/Reals/Multiply");
const pid_a5fb25dc = require("../../../../../../CDL/Reals/PID");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		dpBuiSet = 12,
		hys = 0.005,
		k = 1,
		relFanSpe_min = 0.1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.movMea
  const movMeaFn = movingaverage_08d08100({ delta: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.dpBuiSetPoi
  const dpBuiSetPoiFn = constant_baefa089({ k: dpBuiSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.div1
  const div1Fn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.conOne
  const conOneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.conP
  const conPFn = pid_a5fb25dc({ controllerType: 0, k: k, reverseActing: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.lesThr3
  const lesThr3Fn = lessthreshold_f64b25e3({ h: hys, t: relFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.dowTim
  const dowTimFn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({ h: hys, t: relFanSpe_min +0.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.upTim
  const upTimFn = timer_a61e7f4a({ t: 420 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.lat1
  const lat1Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.relFan
  const relFanFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.lesThr
  const lesThrFn = lessthreshold_f64b25e3({ h: hys, t: 0.005 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.tim
  const timFn = timer_a61e7f4a({ t: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: hys, t: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.relDam
  const relDamFn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.booToRea2
  const booToRea2Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefFan.pro1
  const pro1Fn = multiply_a462b873({});

  return (
    { u1SupFan, dpBui }
  ) => {
    const movMea = movMeaFn({ u: dpBui });
    const dpBuiSetPoi = dpBuiSetPoiFn({});
    const div1 = div1Fn({ u1: movMea.y, u2: dpBuiSetPoi.y });
    const conOne = conOneFn({});
    const conP = conPFn({ u_m: div1.y, u_s: conOne.y });
    const lesThr3 = lesThr3Fn({ u: conP.y });
    const dowTim = dowTimFn({ u: lesThr3.y });
    const greThr2 = greThr2Fn({ u: conP.y });
    const upTim = upTimFn({ u: greThr2.y });
    const lat1 = lat1Fn({ clr: dowTim.passed, u: upTim.passed });
    const relFan = relFanFn({ u1: u1SupFan, u2: lat1.y });
    const lesThr = lesThrFn({ u: conP.y });
    const tim = timFn({ u: lesThr.y });
    const greThr = greThrFn({ u: conP.y });
    const and2 = and2Fn({ u1: greThr.y, u2: u1SupFan });
    const lat = latFn({ clr: tim.passed, u: and2.y });
    const relDam = relDamFn({ u1: lat.y, u2: relFan.y });
    const booToRea1 = booToRea1Fn({ u: relDam.y });
    const booToRea2 = booToRea2Fn({ u: relFan.y });
    const pro1 = pro1Fn({ u1: conP.y, u2: booToRea2.y });

    return { y1RelFan: relFan.y, yDam: booToRea1.y, yDpBui: movMea.y, yRelFan: pro1.y };
  }
}
