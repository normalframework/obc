
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests
const booleantointeger_lz3mc = require("../../../../../CDL/Conversions/BooleanToInteger");
const sampler_79dijk = require("../../../../../CDL/Discrete/Sampler");
const constant_pja4qr = require("../../../../../CDL/Integers/Sources/Constant");
const switch_h2abfj = require("../../../../../CDL/Integers/Switch");
const and_rx9o1q = require("../../../../../CDL/Logical/And");
const truedelay_14w97 = require("../../../../../CDL/Logical/TrueDelay");
const greater_50yn36 = require("../../../../../CDL/Reals/Greater");
const greaterthreshold_vuvq8o = require("../../../../../CDL/Reals/GreaterThreshold");
const multiplybyparameter_0h3sl9 = require("../../../../../CDL/Reals/MultiplyByParameter");
const subtract_v7f6dy = require("../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		dTHys = 0.25,
		durTimFlo = 60,
		durTimTem = 120,
		samplePeriod = 120,
		thrTemDif = 3,
		twoTemDif = 2
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.thrPreResReq
  const thrPreResReqFn = constant_pja4qr({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greThr4
  const greThr4Fn = greaterthreshold_vuvq8o({ h: 0.5*floHys, t: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.sampler1
  const sampler1Fn = sampler_79dijk({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greThr3
  const greThr3Fn = greaterthreshold_vuvq8o({ h: damPosHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.tim3
  const tim3Fn = truedelay_14w97({ delayTime: durTimFlo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.and5
  const and5Fn = and_rx9o1q({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.sampler2
  const sampler2Fn = sampler_79dijk({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greEqu
  const greEquFn = greater_50yn36({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.and3
  const and3Fn = and_rx9o1q({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.twoPreResReq
  const twoPreResReqFn = constant_pja4qr({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.sampler3
  const sampler3Fn = sampler_79dijk({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.gai2
  const gai2Fn = multiplybyparameter_0h3sl9({ k: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greEqu1
  const greEqu1Fn = greater_50yn36({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.and4
  const and4Fn = and_rx9o1q({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.booToInt1
  const booToInt1Fn = booleantointeger_lz3mc({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.swi5
  const swi5Fn = switch_h2abfj({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.swi4
  const swi4Fn = switch_h2abfj({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.thrCooResReq
  const thrCooResReqFn = constant_pja4qr({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.sub2
  const sub2Fn = subtract_v7f6dy({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greThr1
  const greThr1Fn = greaterthreshold_vuvq8o({ h: dTHys, t: thrTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.tim1
  const tim1Fn = truedelay_14w97({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.and2
  const and2Fn = and_rx9o1q({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.twoCooResReq
  const twoCooResReqFn = constant_pja4qr({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.sub3
  const sub3Fn = subtract_v7f6dy({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greThr2
  const greThr2Fn = greaterthreshold_vuvq8o({ h: dTHys, t: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.tim2
  const tim2Fn = truedelay_14w97({ delayTime: durTimTem });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.and1
  const and1Fn = and_rx9o1q({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.sampler
  const samplerFn = sampler_79dijk({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.greThr
  const greThrFn = greaterthreshold_vuvq8o({ h: looHys, t: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.booToInt
  const booToIntFn = booleantointeger_lz3mc({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.intSwi1
  const intSwi1Fn = switch_h2abfj({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.intSwi
  const intSwiFn = switch_h2abfj({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.SystemRequests.gai1
  const gai1Fn = multiplybyparameter_0h3sl9({ k: 0.5 });

  return (
    { uAftSup, uCoo, uDam, VDis_flow, TCooSet }
  ) => {
    const thrPreResReq = thrPreResReqFn({});
    const greThr4 = greThr4Fn({});
    const sampler1 = sampler1Fn({ u: uDam });
    const greThr3 = greThr3Fn({ u: sampler1.y });
    const tim3 = tim3Fn({ u: greThr3.y });
    const and5 = and5Fn({ u1: greThr4.y, u2: tim3.y });
    const sampler2 = sampler2Fn({ u: VDis_flow });
    const greEqu = greEquFn({ u2: sampler2.y });
    const and3 = and3Fn({ u1: and5.y, u2: greEqu.y });
    const twoPreResReq = twoPreResReqFn({});
    const sampler3 = sampler3Fn({});
    const gai2 = gai2Fn({ u: sampler3.y });
    const greEqu1 = greEqu1Fn({ u1: gai2.y, u2: sampler2.y });
    const and4 = and4Fn({ u1: and5.y, u2: greEqu1.y });
    const booToInt1 = booToInt1Fn({ u: greThr3.y });
    const swi5 = swi5Fn({ u1: twoPreResReq.y, u2: and4.y, u3: booToInt1.y });
    const swi4 = swi4Fn({ u1: thrPreResReq.y, u2: and3.y, u3: swi5.y });
    const thrCooResReq = thrCooResReqFn({});
    const sub2 = sub2Fn({ u2: TCooSet });
    const greThr1 = greThr1Fn({ u: sub2.y });
    const tim1 = tim1Fn({ u: greThr1.y });
    const and2 = and2Fn({ u1: uAftSup, u2: tim1.y });
    const twoCooResReq = twoCooResReqFn({});
    const sub3 = sub3Fn({ u2: TCooSet });
    const greThr2 = greThr2Fn({ u: sub3.y });
    const tim2 = tim2Fn({ u: greThr2.y });
    const and1 = and1Fn({ u1: uAftSup, u2: tim2.y });
    const sampler = samplerFn({ u: uCoo });
    const greThr = greThrFn({ u: sampler.y });
    const booToInt = booToIntFn({ u: greThr.y });
    const intSwi1 = intSwi1Fn({ u1: twoCooResReq.y, u2: and1.y, u3: booToInt.y });
    const intSwi = intSwiFn({ u1: thrCooResReq.y, u2: and2.y, u3: intSwi1.y });
    const gai1 = gai1Fn({ u: sampler3.y, y: greEqu.u1 });

    return { yZonPreResReq: swi4.y, yZonTemResReq: intSwi.y };
  }
}
