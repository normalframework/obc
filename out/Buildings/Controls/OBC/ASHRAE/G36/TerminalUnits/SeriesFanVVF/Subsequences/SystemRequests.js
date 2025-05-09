
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests
const booleantointeger_8f143d61 = require("../../../../../CDL/Conversions/BooleanToInteger");
const sampler_dd234808 = require("../../../../../CDL/Discrete/Sampler");
const constant_01efacbe = require("../../../../../CDL/Integers/Sources/Constant");
const switch_71d6ebb8 = require("../../../../../CDL/Integers/Switch");
const and_f2b4cf1d = require("../../../../../CDL/Logical/And");
const truedelay_17dc655b = require("../../../../../CDL/Logical/TrueDelay");
const addparameter_2b4d5fb6 = require("../../../../../CDL/Reals/AddParameter");
const greater_2582f78c = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_7c60ca3f = require("../../../../../CDL/Reals/GreaterThreshold");
const less_15730f47 = require("../../../../../CDL/Reals/Less");
const multiplybyparameter_8938fce0 = require("../../../../../CDL/Reals/MultiplyByParameter");
const subtract_040901c2 = require("../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		damPosHys,
		dTHys = 0.25,
		durTimDisAir = 300,
		durTimFlo = 60,
		durTimTem = 120,
		floHys,
		heaCoi = 1,
		looHys,
		samplePeriod = 120,
		thrTDis_1 = 17,
		thrTDis_2 = 8.3,
		thrTemDif = 3,
		twoTemDif = 2,
		valPosHys,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.thrHeaResReq
  const thrHeaResReqFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.addPar
  const addParFn = addparameter_2b4d5fb6({ p: thrTDis_1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.les
  const lesFn = less_15730f47({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.tim4
  const tim4Fn = truedelay_17dc655b({ delayTime: durTimDisAir });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.twoHeaResReq
  const twoHeaResReqFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.addPar1
  const addPar1Fn = addparameter_2b4d5fb6({ p: thrTDis_2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.les1
  const les1Fn = less_15730f47({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.tim5
  const tim5Fn = truedelay_17dc655b({ delayTime: durTimDisAir });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr5
  const greThr5Fn = greaterthreshold_7c60ca3f({ h: valPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.booToInt2
  const booToInt2Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.intSwi3
  const intSwi3Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.intSwi2
  const intSwi2Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr6
  const greThr6Fn = greaterthreshold_7c60ca3f({ h: 0.85, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.booToInt3
  const booToInt3Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.thrPreResReq
  const thrPreResReqFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.sampler2
  const sampler2Fn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr4
  const greThr4Fn = greaterthreshold_7c60ca3f({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.sampler3
  const sampler3Fn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr3
  const greThr3Fn = greaterthreshold_7c60ca3f({ h: damPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.tim3
  const tim3Fn = truedelay_17dc655b({ delayTime: durTimFlo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.and5
  const and5Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.sampler1
  const sampler1Fn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greEqu
  const greEquFn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.and3
  const and3Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.twoPreResReq
  const twoPreResReqFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.gai2
  const gai2Fn = multiplybyparameter_8938fce0({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greEqu1
  const greEqu1Fn = greater_2582f78c({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.and4
  const and4Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.booToInt1
  const booToInt1Fn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.swi5
  const swi5Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.swi4
  const swi4Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.thrCooResReq
  const thrCooResReqFn = constant_01efacbe({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.sub2
  const sub2Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ h: dTHys, t: thrTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.tim1
  const tim1Fn = truedelay_17dc655b({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.and2
  const and2Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.twoCooResReq
  const twoCooResReqFn = constant_01efacbe({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.sub3
  const sub3Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr2
  const greThr2Fn = greaterthreshold_7c60ca3f({ h: dTHys, t: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.tim2
  const tim2Fn = truedelay_17dc655b({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.and1
  const and1Fn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.sampler
  const samplerFn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: looHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.booToInt
  const booToIntFn = booleantointeger_8f143d61({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.intSwi1
  const intSwi1Fn = switch_71d6ebb8({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Subsequences.SystemRequests.intSwi
  const intSwiFn = switch_71d6ebb8({});

  return (
    { TDis, uAftSup, uVal, TDisSet, uCoo, VPri_flow, VSet_flow, uDam, TZon, TCooSet }
  ) => {
    const thrHeaResReq = thrHeaResReqFn({});
    const addPar = addParFn({ u: TDis });
    const les = lesFn({ u1: addPar.y, u2: TDisSet });
    const tim4 = tim4Fn({ u: les.y });
    const twoHeaResReq = twoHeaResReqFn({});
    const addPar1 = addPar1Fn({ u: TDis });
    const les1 = les1Fn({ u1: addPar1.y, u2: TDisSet });
    const tim5 = tim5Fn({ u: les1.y });
    const greThr5 = greThr5Fn({ u: uVal });
    const booToInt2 = booToInt2Fn({ u: greThr5.y });
    const intSwi3 = intSwi3Fn({ u1: twoHeaResReq.y, u2: tim5.y, u3: booToInt2.y });
    const intSwi2 = intSwi2Fn({ u1: thrHeaResReq.y, u2: tim4.y, u3: intSwi3.y });
    const greThr6 = greThr6Fn({ u: uVal });
    const booToInt3 = booToInt3Fn({ u: greThr6.y });
    const thrPreResReq = thrPreResReqFn({});
    const sampler2 = sampler2Fn({ u: VSet_flow });
    const greThr4 = greThr4Fn({ u: sampler2.y });
    const sampler3 = sampler3Fn({ u: uDam });
    const greThr3 = greThr3Fn({ u: sampler3.y });
    const tim3 = tim3Fn({ u: greThr3.y });
    const and5 = and5Fn({ u1: greThr4.y, u2: tim3.y });
    const gai1 = gai1Fn({ u: sampler2.y });
    const sampler1 = sampler1Fn({ u: VPri_flow });
    const greEqu = greEquFn({ u1: gai1.y, u2: sampler1.y });
    const and3 = and3Fn({ u1: and5.y, u2: greEqu.y });
    const twoPreResReq = twoPreResReqFn({});
    const gai2 = gai2Fn({ u: sampler2.y });
    const greEqu1 = greEqu1Fn({ u1: gai2.y, u2: sampler1.y });
    const and4 = and4Fn({ u1: and5.y, u2: greEqu1.y });
    const booToInt1 = booToInt1Fn({ u: greThr3.y });
    const swi5 = swi5Fn({ u1: twoPreResReq.y, u2: and4.y, u3: booToInt1.y });
    const swi4 = swi4Fn({ u1: thrPreResReq.y, u2: and3.y, u3: swi5.y });
    const thrCooResReq = thrCooResReqFn({});
    const sub2 = sub2Fn({ u1: TZon, u2: TCooSet });
    const greThr1 = greThr1Fn({ u: sub2.y });
    const tim1 = tim1Fn({ u: greThr1.y });
    const and2 = and2Fn({ u1: uAftSup, u2: tim1.y });
    const twoCooResReq = twoCooResReqFn({});
    const sub3 = sub3Fn({ u1: TZon, u2: TCooSet });
    const greThr2 = greThr2Fn({ u: sub3.y });
    const tim2 = tim2Fn({ u: greThr2.y });
    const and1 = and1Fn({ u1: uAftSup, u2: tim2.y });
    const sampler = samplerFn({ u: uCoo });
    const greThr = greThrFn({ u: sampler.y });
    const booToInt = booToIntFn({ u: greThr.y });
    const intSwi1 = intSwi1Fn({ u1: twoCooResReq.y, u2: and1.y, u3: booToInt.y });
    const intSwi = intSwiFn({ u1: thrCooResReq.y, u2: and2.y, u3: intSwi1.y });

    return { yHeaValResReq: intSwi2.y, yHotWatPlaReq: booToInt3.y, yZonPreResReq: swi4.y, yZonTemResReq: intSwi.y };
  }
}
