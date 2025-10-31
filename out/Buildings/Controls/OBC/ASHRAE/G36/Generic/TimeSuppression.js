
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression
const sampler_dd234808 = require("../../../CDL/Discrete/Sampler");
const triggeredsampler_3247bbb1 = require("../../../CDL/Discrete/TriggeredSampler");
const unitdelay_c1704a5f = require("../../../CDL/Discrete/UnitDelay");
const edge_63e6c137 = require("../../../CDL/Logical/Edge");
const latch_1952de0a = require("../../../CDL/Logical/Latch");
const pre_f2b507e9 = require("../../../CDL/Logical/Pre");
const constant_655d39b4 = require("../../../CDL/Logical/Sources/Constant");
const switch_1e2c142e = require("../../../CDL/Logical/Switch");
const timer_19c7230b = require("../../../CDL/Logical/Timer");
const truedelay_17dc655b = require("../../../CDL/Logical/TrueDelay");
const abs_53459d04 = require("../../../CDL/Reals/Abs");
const greater_2582f78c = require("../../../CDL/Reals/Greater");
const greaterthreshold_7c60ca3f = require("../../../CDL/Reals/GreaterThreshold");
const min_5345cae4 = require("../../../CDL/Reals/Min");
const multiplybyparameter_8938fce0 = require("../../../CDL/Reals/MultiplyByParameter");
const constant_d2aca5e8 = require("../../../CDL/Reals/Sources/Constant");
const subtract_040901c2 = require("../../../CDL/Reals/Subtract");
const switch_91d77162 = require("../../../CDL/Reals/Switch");

module.exports = (
  {
		chaRat = 540,
		dTHys = 0.25,
		maxTim = 1800,
		samplePeriod = 120,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.samSet
  const samSetFn = sampler_dd234808({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.uniDel
  const uniDelFn = unitdelay_c1704a5f({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.sub1
  const sub1Fn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.con1
  const con1Fn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.truDel
  const truDelFn = truedelay_17dc655b({ delayOnInit: true, delayTime: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.conZer
  const conZerFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.swi
  const swiFn = switch_91d77162({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.abs1
  const abs1Fn = abs_53459d04({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ h: 0.5*dTHys, t: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.lat
  const latFn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.edg
  const edgFn = edge_63e6c137({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.tim
  const timFn = timer_19c7230b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.triSam
  const triSamFn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.triSam1
  const triSam1Fn = triggeredsampler_3247bbb1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.temDif
  const temDifFn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.abs2
  const abs2Fn = abs_53459d04({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: chaRat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.maxSupTim
  const maxSupTimFn = constant_d2aca5e8({ k: maxTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.supTim
  const supTimFn = min_5345cae4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pasSup
  const pasSupFn = greater_2582f78c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.lat1
  const lat1Fn = latch_1952de0a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.con5
  const con5Fn = constant_655d39b4({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pasSupTim
  const pasSupTimFn = switch_1e2c142e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TimeSuppression.pre1
  const pre1Fn = pre_f2b507e9({});

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
    const pre1 = pre1Fn({ u: pasSup.y });

    return { yAftSup: pasSupTim.y };
  }
}
