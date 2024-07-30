
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression
const sampler_875b0f69 = require("../../../CDL/Discrete/Sampler");
const triggeredsampler_bcb3b170 = require("../../../CDL/Discrete/TriggeredSampler");
const unitdelay_bcd3bd80 = require("../../../CDL/Discrete/UnitDelay");
const edge_3f236118 = require("../../../CDL/Logical/Edge");
const latch_a5aa3a49 = require("../../../CDL/Logical/Latch");
const constant_48cc1015 = require("../../../CDL/Logical/Sources/Constant");
const switch_1cc03fcf = require("../../../CDL/Logical/Switch");
const timer_a61e7f4a = require("../../../CDL/Logical/Timer");
const truedelay_b49d8a1a = require("../../../CDL/Logical/TrueDelay");
const truehold_60ac3548 = require("../../../CDL/Logical/TrueHold");
const abs_a5faf0c3 = require("../../../CDL/Reals/Abs");
const greater_b1da53cb = require("../../../CDL/Reals/Greater");
const greaterthreshold_64a3c4e0 = require("../../../CDL/Reals/GreaterThreshold");
const min_a5fb1ea3 = require("../../../CDL/Reals/Min");
const multiplybyparameter_13a4f29f = require("../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../CDL/Reals/Switch");

module.exports = (
  {
		chaRat = 540,
		dTHys = 0.25,
		maxTim = 1800,
		samplePeriod = 120,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.samSet
  const samSetFn = sampler_875b0f69({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.uniDel
  const uniDelFn = unitdelay_bcd3bd80({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.sub1
  const sub1Fn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.con1
  const con1Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.truDel
  const truDelFn = truedelay_b49d8a1a({ delayOnInit: true, delayTime: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.conZer
  const conZerFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.abs1
  const abs1Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.lat
  const latFn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.edg
  const edgFn = edge_3f236118({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.tim
  const timFn = timer_a61e7f4a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.triSam
  const triSamFn = triggeredsampler_bcb3b170({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.triSam1
  const triSam1Fn = triggeredsampler_bcb3b170({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.temDif
  const temDifFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.abs2
  const abs2Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: chaRat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.maxSupTim
  const maxSupTimFn = constant_baefa089({ k: maxTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.supTim
  const supTimFn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pasSup
  const pasSupFn = greater_b1da53cb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.lat1
  const lat1Fn = latch_a5aa3a49({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.con5
  const con5Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pasSupTim
  const pasSupTimFn = switch_1cc03fcf({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.truHol
  const truHolFn = truehold_60ac3548({ duration: samplePeriod });

  return (
    { TSet, TZon }
  ) => {
    const samSet = samSetFn({ u: TSet });
    const uniDel = uniDelFn({ u: samSet.y });
    const sub1 = sub1Fn({ u1: samSet.y, u2: uniDel.y });
    const con1 = con1Fn({});
    const truDel = truDelFn({ u: con1.y });
    const conZer = conZerFn({});
    const swi = swiFn({ u1: sub1.y, u2: truDel.y, u3: conZer.y });
    const abs1 = abs1Fn({ u: swi.y });
    const greThr = greThrFn({ u: abs1.y });
    const lat = latFn({ u: greThr.y });
    const edg = edgFn({ u: lat.y });
    const tim = timFn({ u: lat.y });
    const triSam = triSamFn({ trigger: edg.y, u: TSet });
    const triSam1 = triSam1Fn({ trigger: edg.y, u: TZon });
    const temDif = temDifFn({ u1: triSam.y, u2: triSam1.y });
    const abs2 = abs2Fn({ u: temDif.y });
    const gai = gaiFn({ u: abs2.y });
    const maxSupTim = maxSupTimFn({});
    const supTim = supTimFn({ u1: gai.y, u2: maxSupTim.y });
    const pasSup = pasSupFn({ u1: tim.y, u2: supTim.y });
    const lat1 = lat1Fn({ clr: edg.y, u: pasSup.y });
    const con5 = con5Fn({});
    const pasSupTim = pasSupTimFn({ u1: lat1.y, u2: lat.y, u3: con5.y });
    const truHol = truHolFn({ u: pasSup.y });

    return { yAftSup: pasSupTim.y };
  }
}
