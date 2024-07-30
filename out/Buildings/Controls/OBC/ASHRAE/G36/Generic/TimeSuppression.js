
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression
const sampler_li8tcb = require("../../../CDL/Discrete/Sampler");
const triggeredsampler_wla7bd5 = require("../../../CDL/Discrete/TriggeredSampler");
const unitdelay_493u8p = require("../../../CDL/Discrete/UnitDelay");
const edge_w2pouf = require("../../../CDL/Logical/Edge");
const latch_lj43c9 = require("../../../CDL/Logical/Latch");
const constant_w57wf = require("../../../CDL/Logical/Sources/Constant");
const switch_19qb3 = require("../../../CDL/Logical/Switch");
const timer_8jo8a7 = require("../../../CDL/Logical/Timer");
const truedelay_8d1lj = require("../../../CDL/Logical/TrueDelay");
const truehold_zxll3h = require("../../../CDL/Logical/TrueHold");
const abs_to1lle = require("../../../CDL/Reals/Abs");
const greater_f4ffuc = require("../../../CDL/Reals/Greater");
const greaterthreshold_iq0te = require("../../../CDL/Reals/GreaterThreshold");
const min_qqm3v5 = require("../../../CDL/Reals/Min");
const multiplybyparameter_aaalca = require("../../../CDL/Reals/MultiplyByParameter");
const constant_ywz9so = require("../../../CDL/Reals/Sources/Constant");
const subtract_c6jnc = require("../../../CDL/Reals/Subtract");
const switch_r2hvu = require("../../../CDL/Reals/Switch");

module.exports = (
  {
		chaRat = 540,
		dTHys = 0.25,
		maxTim = 1800,
		samplePeriod = 120
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.samSet
  const samSetFn = sampler_li8tcb({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.uniDel
  const uniDelFn = unitdelay_493u8p({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.sub1
  const sub1Fn = subtract_c6jnc({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.con1
  const con1Fn = constant_w57wf({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.truDel
  const truDelFn = truedelay_8d1lj({ delayOnInit: true, delayTime: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.conZer
  const conZerFn = constant_ywz9so({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.swi
  const swiFn = switch_r2hvu({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.abs1
  const abs1Fn = abs_to1lle({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.greThr
  const greThrFn = greaterthreshold_iq0te({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.lat
  const latFn = latch_lj43c9({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.edg
  const edgFn = edge_w2pouf({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.tim
  const timFn = timer_8jo8a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.triSam
  const triSamFn = triggeredsampler_wla7bd5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.triSam1
  const triSam1Fn = triggeredsampler_wla7bd5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.temDif
  const temDifFn = subtract_c6jnc({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.abs2
  const abs2Fn = abs_to1lle({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.gai
  const gaiFn = multiplybyparameter_aaalca({ k: chaRat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.maxSupTim
  const maxSupTimFn = constant_ywz9so({ k: maxTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.supTim
  const supTimFn = min_qqm3v5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pasSup
  const pasSupFn = greater_f4ffuc({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.lat1
  const lat1Fn = latch_lj43c9({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.con5
  const con5Fn = constant_w57wf({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pasSupTim
  const pasSupTimFn = switch_19qb3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.truHol
  const truHolFn = truehold_zxll3h({ duration: samplePeriod });

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
