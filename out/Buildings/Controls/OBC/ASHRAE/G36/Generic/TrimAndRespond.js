
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond
const integertoreal_33992ab0 = require("../../../CDL/Conversions/IntegerToReal");
const sampler_875b0f69 = require("../../../CDL/Discrete/Sampler");
const unitdelay_bcd3bd80 = require("../../../CDL/Discrete/UnitDelay");
const and_6d642f1c = require("../../../CDL/Logical/And");
const not_6d646018 = require("../../../CDL/Logical/Not");
const truedelay_b49d8a1a = require("../../../CDL/Logical/TrueDelay");
const abs_a5faf0c3 = require("../../../CDL/Reals/Abs");
const add_a5faf0f2 = require("../../../CDL/Reals/Add");
const greaterthreshold_64a3c4e0 = require("../../../CDL/Reals/GreaterThreshold");
const lessthreshold_f64b25e3 = require("../../../CDL/Reals/LessThreshold");
const max_a5fb1db5 = require("../../../CDL/Reals/Max");
const min_a5fb1ea3 = require("../../../CDL/Reals/Min");
const multiply_a462b873 = require("../../../CDL/Reals/Multiply");
const multiplybyparameter_13a4f29f = require("../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../CDL/Reals/Subtract");
const switch_6d141143 = require("../../../CDL/Reals/Switch");
const assert_078ec840 = require("../../../CDL/Utilities/Assert");

module.exports = (
  {
		delTim,
		iniSet,
		maxRes,
		maxSet,
		minSet,
		numIgnReq,
		resAmo,
		samplePeriod,
		triAmo,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.iniSetCon
  const iniSetConFn = constant_baefa089({ k: iniSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.triAmoCon
  const triAmoConFn = constant_baefa089({ k: triAmo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.intToRea
  const intToReaFn = integertoreal_33992ab0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.sampler
  const samplerFn = sampler_875b0f69({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.numIgnReqCon
  const numIgnReqConFn = constant_baefa089({ k: numIgnReq });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.difReqIgnReq
  const difReqIgnReqFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.resAmoCon
  const resAmoConFn = constant_baefa089({ k: resAmo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.abs
  const absFn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.pro
  const proFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.maxResCon
  const maxResConFn = constant_baefa089({ k: maxRes });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.abs1
  const abs1Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.minInp
  const minInpFn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.greThr1
  const greThr1Fn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.tim
  const timFn = truedelay_b49d8a1a({ delayOnInit: true, delayTime: delTim +samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.greThr
  const greThrFn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.zerTri
  const zerTriFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.netRes
  const netResFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.add1
  const add1Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.maxSetCon
  const maxSetConFn = constant_baefa089({ k: maxSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.min1
  const min1Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.minSetCon
  const minSetConFn = constant_baefa089({ k: minSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.maxInp
  const maxInpFn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.uniDel
  const uniDelFn = unitdelay_bcd3bd80({ samplePeriod: samplePeriod, y_start: iniSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.pro1
  const pro1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.lesThr1
  const lesThr1Fn = lessthreshold_f64b25e3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.assMes
  const assMesFn = assert_078ec840({ message: "Trim amount triAmo and respond amount resAmo must have opposite signs." });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.pro2
  const pro2Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.greThr2
  const greThr2Fn = greaterthreshold_64a3c4e0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.TrimAndRespond.assMes2
  const assMes2Fn = assert_078ec840({ message: "Respond amount resAmo and maximum respond amount maxRes must have same sign." });

  return (
    { numOfReq, uDevSta }
  ) => {
    const iniSetCon = iniSetConFn({});
    const not1 = not1Fn({ u: uDevSta });
    const triAmoCon = triAmoConFn({});
    const intToRea = intToReaFn({ u: numOfReq });
    const sampler = samplerFn({ u: intToRea.y });
    const numIgnReqCon = numIgnReqConFn({});
    const difReqIgnReq = difReqIgnReqFn({ u1: sampler.y, u2: numIgnReqCon.y });
    const resAmoCon = resAmoConFn({});
    const abs = absFn({ u: resAmoCon.y });
    const pro = proFn({ u1: difReqIgnReq.y, u2: abs.y });
    const maxResCon = maxResConFn({});
    const abs1 = abs1Fn({ u: maxResCon.y });
    const minInp = minInpFn({ u1: pro.y, u2: abs1.y });
    const greThr1 = greThr1Fn({ u: resAmoCon.y });
    const gai = gaiFn({ u: minInp.y });
    const swi3 = swi3Fn({ u1: minInp.y, u2: greThr1.y, u3: gai.y });
    const add2 = add2Fn({ u1: triAmoCon.y, u2: swi3.y });
    const tim = timFn({ u: uDevSta });
    const greThr = greThrFn({ u: difReqIgnReq.y });
    const and2 = and2Fn({ u1: tim.y, u2: greThr.y });
    const zerTri = zerTriFn({});
    const swi1 = swi1Fn({ u1: triAmoCon.y, u2: tim.y, u3: zerTri.y });
    const netRes = netResFn({ u1: add2.y, u2: and2.y, u3: swi1.y });
    const add1 = add1Fn({ u2: netRes.y });
    const maxSetCon = maxSetConFn({});
    const min1 = min1Fn({ u1: add1.y, u2: maxSetCon.y });
    const minSetCon = minSetConFn({});
    const maxInp = maxInpFn({ u1: min1.y, u2: minSetCon.y });
    const swi2 = swi2Fn({ u1: iniSetCon.y, u2: not1.y, u3: maxInp.y });
    const swi = swiFn({ u1: swi2.y, u2: tim.y, u3: iniSetCon.y });
    const uniDel = uniDelFn({ u: swi2.y });
    const pro1 = pro1Fn({ u1: triAmoCon.y, u2: resAmoCon.y });
    const lesThr1 = lesThr1Fn({ u: pro1.y });
    const assMes = assMesFn({ u: lesThr1.y });
    const pro2 = pro2Fn({ u1: resAmoCon.y, u2: maxResCon.y });
    const greThr2 = greThr2Fn({ u: pro2.y });
    const assMes2 = assMes2Fn({ u: greThr2.y });

    return { y: swi.y };
  }
}
