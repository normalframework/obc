
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests
const booleantointeger_d87efb42 = require("../../../../../CDL/Conversions/BooleanToInteger");
const multiply_2099ee67 = require("../../../../../CDL/Integers/Multiply");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../CDL/Integers/Switch");
const and_6d642f1c = require("../../../../../CDL/Logical/And");
const latch_a5aa3a49 = require("../../../../../CDL/Logical/Latch");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../../../CDL/Logical/Or");
const truedelay_b49d8a1a = require("../../../../../CDL/Logical/TrueDelay");
const greater_b1da53cb = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../../../CDL/Reals/LessThreshold");
const multiplybyparameter_13a4f29f = require("../../../../../CDL/Reals/MultiplyByParameter");
const subtract_029d2d63 = require("../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		damPosHys,
		dTHys = 0.25,
		durTimFlo = 60,
		durTimTem = 120,
		floHys,
		looHys,
		thrTemDif = 3,
		twoTemDif = 2,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.thrPreResReq
  const thrPreResReqFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr4
  const greThr4Fn = greaterthreshold_64a3c4e0({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr3
  const greThr3Fn = greaterthreshold_64a3c4e0({ h: damPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.tim3
  const tim3Fn = truedelay_b49d8a1a({ delayTime: durTimFlo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greEqu
  const greEquFn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.twoPreResReq
  const twoPreResReqFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.gai2
  const gai2Fn = multiplybyparameter_13a4f29f({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greEqu1
  const greEqu1Fn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt1
  const booToInt1Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.swi5
  const swi5Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.swi4
  const swi4Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr13
  const greThr13Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr6
  const greThr6Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt2
  const booToInt2Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.mulInt1
  const mulInt1Fn = multiply_2099ee67({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.lesThr
  const lesThrFn = lessthreshold_f64b25e3({ h: looHys, t: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr12
  const greThr12Fn = greaterthreshold_64a3c4e0({ h: looHys, t: 0.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt6
  const booToInt6Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.thrPreResReq1
  const thrPreResReq1Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr9
  const greThr9Fn = greaterthreshold_64a3c4e0({ h: damPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.tim8
  const tim8Fn = truedelay_b49d8a1a({ delayTime: durTimFlo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and10
  const and10Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and8
  const and8Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.twoPreResReq1
  const twoPreResReq1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and9
  const and9Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt5
  const booToInt5Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.swi2
  const swi2Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.swi1
  const swi1Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr5
  const greThr5Fn = greaterthreshold_64a3c4e0({ h: 0.5*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt3
  const booToInt3Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.mulInt2
  const mulInt2Fn = multiply_2099ee67({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.thrCooResReq
  const thrCooResReqFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.sub2
  const sub2Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({ h: dTHys, t: thrTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.tim1
  const tim1Fn = truedelay_b49d8a1a({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.twoCooResReq
  const twoCooResReqFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.sub3
  const sub3Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({ h: dTHys, t: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.tim2
  const tim2Fn = truedelay_b49d8a1a({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: looHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt
  const booToIntFn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.intSwi1
  const intSwi1Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.intSwi
  const intSwiFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.thrCooResReq1
  const thrCooResReq1Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr7
  const greThr7Fn = greaterthreshold_64a3c4e0({ h: dTHys, t: thrTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.tim6
  const tim6Fn = truedelay_b49d8a1a({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and7
  const and7Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.twoCooResReq1
  const twoCooResReq1Fn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.sub4
  const sub4Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr8
  const greThr8Fn = greaterthreshold_64a3c4e0({ h: dTHys, t: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.tim7
  const tim7Fn = truedelay_b49d8a1a({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.and6
  const and6Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.greThr10
  const greThr10Fn = greaterthreshold_64a3c4e0({ h: looHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.booToInt4
  const booToInt4Fn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.intSwi5
  const intSwi5Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.intSwi4
  const intSwi4Fn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConDischargeSensor.Subsequences.SystemRequests.gai1
  const gai1Fn = multiplybyparameter_13a4f29f({ k: 0.5 });

  return (
    { uAftSupCoo, uAftSupHea, VDis_flow_Set, VDis_flow, uCoo, uHea, uCooDam, uHeaDam, TZon, TCooSet }
  ) => {
    const thrPreResReq = thrPreResReqFn({});
    const greThr4 = greThr4Fn({});
    const greThr3 = greThr3Fn({ u: uCooDam });
    const tim3 = tim3Fn({ u: greThr3.y });
    const and5 = and5Fn({ u1: greThr4.y, u2: tim3.y });
    const greEqu = greEquFn({ u2: VDis_flow });
    const and3 = and3Fn({ u1: and5.y, u2: greEqu.y });
    const twoPreResReq = twoPreResReqFn({});
    const gai2 = gai2Fn({ u: VDis_flow_Set });
    const greEqu1 = greEqu1Fn({ u1: gai2.y, u2: VDis_flow });
    const and4 = and4Fn({ u1: and5.y, u2: greEqu1.y });
    const booToInt1 = booToInt1Fn({ u: greThr3.y });
    const swi5 = swi5Fn({ u1: twoPreResReq.y, u2: and4.y, u3: booToInt1.y });
    const swi4 = swi4Fn({ u1: thrPreResReq.y, u2: and3.y, u3: swi5.y });
    const greThr13 = greThr13Fn({ u: uCoo });
    const greThr6 = greThr6Fn({ u: uHea });
    const or2 = or2Fn({ u1: greThr13.y, u2: greThr6.y });
    const not1 = not1Fn({ u: or2.y });
    const or1 = or1Fn({ u1: greThr13.y, u2: not1.y });
    const booToInt2 = booToInt2Fn({ u: or1.y });
    const mulInt1 = mulInt1Fn({ u1: swi4.y, u2: booToInt2.y });
    const lesThr = lesThrFn({ u: uHea });
    const greThr12 = greThr12Fn({ u: uHea });
    const lat = latFn({ clr: lesThr.y, u: greThr12.y });
    const booToInt6 = booToInt6Fn({ u: lat.y });
    const thrPreResReq1 = thrPreResReq1Fn({});
    const greThr9 = greThr9Fn({ u: uHeaDam });
    const tim8 = tim8Fn({ u: greThr9.y });
    const and10 = and10Fn({ u1: greThr4.y, u2: tim8.y });
    const and8 = and8Fn({ u1: and10.y, u2: greEqu.y });
    const twoPreResReq1 = twoPreResReq1Fn({});
    const and9 = and9Fn({ u1: and10.y, u2: greEqu1.y });
    const booToInt5 = booToInt5Fn({ u: greThr9.y });
    const swi2 = swi2Fn({ u1: twoPreResReq1.y, u2: and9.y, u3: booToInt5.y });
    const swi1 = swi1Fn({ u1: thrPreResReq1.y, u2: and8.y, u3: swi2.y });
    const greThr5 = greThr5Fn({ u: uHea });
    const booToInt3 = booToInt3Fn({ u: greThr5.y });
    const mulInt2 = mulInt2Fn({ u1: swi1.y, u2: booToInt3.y });
    const thrCooResReq = thrCooResReqFn({});
    const sub2 = sub2Fn({ u2: TCooSet });
    const greThr1 = greThr1Fn({ u: sub2.y });
    const tim1 = tim1Fn({ u: greThr1.y });
    const and2 = and2Fn({ u1: uAftSupCoo, u2: tim1.y });
    const twoCooResReq = twoCooResReqFn({});
    const sub3 = sub3Fn({ u2: TCooSet });
    const greThr2 = greThr2Fn({ u: sub3.y });
    const tim2 = tim2Fn({ u: greThr2.y });
    const and1 = and1Fn({ u1: uAftSupCoo, u2: tim2.y });
    const greThr = greThrFn({ u: uCoo });
    const booToInt = booToIntFn({ u: greThr.y });
    const intSwi1 = intSwi1Fn({ u1: twoCooResReq.y, u2: and1.y, u3: booToInt.y });
    const intSwi = intSwiFn({ u1: thrCooResReq.y, u2: and2.y, u3: intSwi1.y });
    const thrCooResReq1 = thrCooResReq1Fn({});
    const sub1 = sub1Fn({ u2: TZon });
    const greThr7 = greThr7Fn({ u: sub1.y });
    const tim6 = tim6Fn({ u: greThr7.y });
    const and7 = and7Fn({ u1: uAftSupHea, u2: tim6.y });
    const twoCooResReq1 = twoCooResReq1Fn({});
    const sub4 = sub4Fn({ u2: TZon });
    const greThr8 = greThr8Fn({ u: sub4.y });
    const tim7 = tim7Fn({ u: greThr8.y });
    const and6 = and6Fn({ u1: uAftSupHea, u2: tim7.y });
    const greThr10 = greThr10Fn({ u: uHea });
    const booToInt4 = booToInt4Fn({ u: greThr10.y });
    const intSwi5 = intSwi5Fn({ u1: twoCooResReq1.y, u2: and6.y, u3: booToInt4.y });
    const intSwi4 = intSwi4Fn({ u1: thrCooResReq1.y, u2: and7.y, u3: intSwi5.y });
    const gai1 = gai1Fn({ u: VDis_flow_Set, y: greEqu.u1 });

    return { yColDucPreResReq: mulInt1.y, yHeaFanReq: booToInt6.y, yHotDucPreResReq: mulInt2.y, yZonCooTemResReq: intSwi.y, yZonHeaTemResReq: intSwi4.y };
  }
}
