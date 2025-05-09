
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests
const booleantointeger_8f143d61 = require("../../../../../CDL/Conversions/BooleanToInteger");
const multiply_83d8c9a8 = require("../../../../../CDL/Integers/Multiply");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const switch_71d6ebb8 = require("../../../../../CDL/Integers/Switch");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
const latch_1952de0a = require("../../../../../CDL/Logical/Latch");
const truedelay_17dc655b = require("../../../../../CDL/Logical/TrueDelay");
const greater_2582f78c = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_7c60ca3f = require("../../../../../CDL/Reals/GreaterThreshold");
const lessthreshold_854034e4 = require("../../../../../CDL/Reals/LessThreshold");
const multiplybyparameter_8938fce0 = require("../../../../../CDL/Reals/MultiplyByParameter");
const subtract_040901c2 = require("../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		damPosHys,
		dTHys = 0.25,
		durTimFlo = 60,
		durTimTem = 120,
		floHys,
		have_duaSen,
		looHys,
		thrTemDif = 3,
		twoTemDif = 2,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.thrPreResReq
  const thrPreResReqFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr4
  const greThr4Fn = greaterthreshold_7c60ca3f({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr3
  const greThr3Fn = greaterthreshold_7c60ca3f({ h: damPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.tim3
  const tim3Fn = truedelay_17dc655b({ delayTime: durTimFlo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and5
  const and5Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greEqu
  const greEquFn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and3
  const and3Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.twoPreResReq
  const twoPreResReqFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.gai2
  const gai2Fn = multiplybyparameter_8938fce0({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greEqu1
  const greEqu1Fn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt1
  const booToInt1Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.swi5
  const swi5Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.swi4
  const swi4Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt2
  const booToInt2Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.mulInt
  const mulIntFn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.lesThr
  const lesThrFn = lessthreshold_854034e4({ h: looHys, t: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr12
  const greThr12Fn = greaterthreshold_7c60ca3f({ h: looHys, t: 0.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.lat
  const latFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt6
  const booToInt6Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.thrPreResReq1
  const thrPreResReq1Fn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr11
  const greThr11Fn = greaterthreshold_7c60ca3f({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr9
  const greThr9Fn = greaterthreshold_7c60ca3f({ h: damPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.tim8
  const tim8Fn = truedelay_17dc655b({ delayTime: durTimFlo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and10
  const and10Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.gai3
  const gai3Fn = multiplybyparameter_8938fce0({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greEqu2
  const greEqu2Fn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and8
  const and8Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.twoPreResReq1
  const twoPreResReq1Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.gai4
  const gai4Fn = multiplybyparameter_8938fce0({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greEqu3
  const greEqu3Fn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and9
  const and9Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt5
  const booToInt5Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.swi2
  const swi2Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.swi1
  const swi1Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt3
  const booToInt3Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.mulInt2
  const mulInt2Fn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.thrCooResReq
  const thrCooResReqFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.sub2
  const sub2Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ h: dTHys, t: thrTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.tim1
  const tim1Fn = truedelay_17dc655b({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and2
  const and2Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.twoCooResReq
  const twoCooResReqFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.sub3
  const sub3Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr2
  const greThr2Fn = greaterthreshold_7c60ca3f({ h: dTHys, t: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.tim2
  const tim2Fn = truedelay_17dc655b({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and1
  const and1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: looHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt
  const booToIntFn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.intSwi1
  const intSwi1Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.intSwi
  const intSwiFn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.thrCooResReq1
  const thrCooResReq1Fn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.sub1
  const sub1Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr7
  const greThr7Fn = greaterthreshold_7c60ca3f({ h: dTHys, t: thrTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.tim6
  const tim6Fn = truedelay_17dc655b({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and7
  const and7Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.twoCooResReq1
  const twoCooResReq1Fn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.sub4
  const sub4Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr8
  const greThr8Fn = greaterthreshold_7c60ca3f({ h: dTHys, t: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.tim7
  const tim7Fn = truedelay_17dc655b({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.and6
  const and6Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.greThr10
  const greThr10Fn = greaterthreshold_7c60ca3f({ h: looHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.booToInt4
  const booToInt4Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.intSwi5
  const intSwi5Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.intSwi4
  const intSwi4Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.conOne
  const conOneFn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.mulInt1
  const mulInt1Fn = multiply_83d8c9a8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.conOne1
  const conOne1Fn = constant_01efacbe({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.SystemRequests.mulInt3
  const mulInt3Fn = multiply_83d8c9a8({});

  return (
    { uAftSupCoo, uAftSupHea, u1CooDam, u1HeaDam, VColDuc_flow_Set, VHotDuc_flow_Set, VColDucDis_flow, VHotDucDis_flow, uCoo, uHea, uCooDam, uHeaDam, THeaSet, TZon, TCooSet }
  ) => {
    const thrPreResReq = thrPreResReqFn({});
    const greThr4 = greThr4Fn({ u: VColDuc_flow_Set });
    const greThr3 = greThr3Fn({ u: uCooDam });
    const tim3 = tim3Fn({ u: greThr3.y });
    const and5 = and5Fn({ u1: greThr4.y, u2: tim3.y });
    const gai1 = gai1Fn({ u: VColDuc_flow_Set });
    const greEqu = greEquFn({ u1: gai1.y, u2: VColDucDis_flow });
    const and3 = and3Fn({ u1: and5.y, u2: greEqu.y });
    const twoPreResReq = twoPreResReqFn({});
    const gai2 = gai2Fn({ u: VColDuc_flow_Set });
    const greEqu1 = greEqu1Fn({ u1: gai2.y, u2: VColDucDis_flow });
    const and4 = and4Fn({ u1: and5.y, u2: greEqu1.y });
    const booToInt1 = booToInt1Fn({ u: greThr3.y });
    const swi5 = swi5Fn({ u1: twoPreResReq.y, u2: and4.y, u3: booToInt1.y });
    const swi4 = swi4Fn({ u1: thrPreResReq.y, u2: and3.y, u3: swi5.y });
    const booToInt2 = booToInt2Fn({ u: u1CooDam });
    const mulInt = mulIntFn({ u1: swi4.y, u2: booToInt2.y });
    const lesThr = lesThrFn({ u: uHea });
    const greThr12 = greThr12Fn({ u: uHea });
    const lat = latFn({ clr: lesThr.y, u: greThr12.y });
    const booToInt6 = booToInt6Fn({ u: lat.y });
    const thrPreResReq1 = thrPreResReq1Fn({});
    const greThr11 = greThr11Fn({ u: VHotDuc_flow_Set });
    const greThr9 = greThr9Fn({ u: uHeaDam });
    const tim8 = tim8Fn({ u: greThr9.y });
    const and10 = and10Fn({ u1: greThr11.y, u2: tim8.y });
    const gai3 = gai3Fn({ u: VHotDuc_flow_Set });
    const greEqu2 = greEqu2Fn({ u1: gai3.y, u2: VHotDucDis_flow });
    const and8 = and8Fn({ u1: and10.y, u2: greEqu2.y });
    const twoPreResReq1 = twoPreResReq1Fn({});
    const gai4 = gai4Fn({ u: VHotDuc_flow_Set });
    const greEqu3 = greEqu3Fn({ u1: gai4.y, u2: VHotDucDis_flow });
    const and9 = and9Fn({ u1: and10.y, u2: greEqu3.y });
    const booToInt5 = booToInt5Fn({ u: greThr9.y });
    const swi2 = swi2Fn({ u1: twoPreResReq1.y, u2: and9.y, u3: booToInt5.y });
    const swi1 = swi1Fn({ u1: thrPreResReq1.y, u2: and8.y, u3: swi2.y });
    const booToInt3 = booToInt3Fn({ u: u1HeaDam });
    const mulInt2 = mulInt2Fn({ u1: swi1.y, u2: booToInt3.y });
    const thrCooResReq = thrCooResReqFn({});
    const sub2 = sub2Fn({ u1: TZon, u2: TCooSet });
    const greThr1 = greThr1Fn({ u: sub2.y });
    const tim1 = tim1Fn({ u: greThr1.y });
    const and2 = and2Fn({ u1: uAftSupCoo, u2: tim1.y });
    const twoCooResReq = twoCooResReqFn({});
    const sub3 = sub3Fn({ u1: TZon, u2: TCooSet });
    const greThr2 = greThr2Fn({ u: sub3.y });
    const tim2 = tim2Fn({ u: greThr2.y });
    const and1 = and1Fn({ u1: uAftSupCoo, u2: tim2.y });
    const greThr = greThrFn({ u: uCoo });
    const booToInt = booToIntFn({ u: greThr.y });
    const intSwi1 = intSwi1Fn({ u1: twoCooResReq.y, u2: and1.y, u3: booToInt.y });
    const intSwi = intSwiFn({ u1: thrCooResReq.y, u2: and2.y, u3: intSwi1.y });
    const thrCooResReq1 = thrCooResReq1Fn({});
    const sub1 = sub1Fn({ u1: THeaSet, u2: TZon });
    const greThr7 = greThr7Fn({ u: sub1.y });
    const tim6 = tim6Fn({ u: greThr7.y });
    const and7 = and7Fn({ u1: uAftSupHea, u2: tim6.y });
    const twoCooResReq1 = twoCooResReq1Fn({});
    const sub4 = sub4Fn({ u1: THeaSet, u2: TZon });
    const greThr8 = greThr8Fn({ u: sub4.y });
    const tim7 = tim7Fn({ u: greThr8.y });
    const and6 = and6Fn({ u1: uAftSupHea, u2: tim7.y });
    const greThr10 = greThr10Fn({ u: uHea });
    const booToInt4 = booToInt4Fn({ u: greThr10.y });
    const intSwi5 = intSwi5Fn({ u1: twoCooResReq1.y, u2: and6.y, u3: booToInt4.y });
    const intSwi4 = intSwi4Fn({ u1: thrCooResReq1.y, u2: and7.y, u3: intSwi5.y });
    const conOne = conOneFn({});
    const mulInt1 = mulInt1Fn({ u1: swi4.y, u2: conOne.y });
    const conOne1 = conOne1Fn({});
    const mulInt3 = mulInt3Fn({ u1: swi1.y, u2: conOne1.y });

    return { yColDucPreResReq: mulInt.y, yHeaFanReq: booToInt6.y, yHotDucPreResReq: mulInt2.y, yZonCooTemResReq: intSwi.y, yZonHeaTemResReq: intSwi4.y };
  }
}
