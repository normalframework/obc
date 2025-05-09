
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond
const trimandrespond_2d925ed7 = require("../TrimAndRespond");
const realtointeger_b3838f5e = require("../../../../CDL/Conversions/RealToInteger");
const not_6d646018 = require("../../../../CDL/Logical/Not");
const constant_48cc1015 = require("../../../../CDL/Logical/Sources/Constant");
const pulse_27dcacc8 = require("../../../../CDL/Logical/Sources/Pulse");
const abs_a5faf0c3 = require("../../../../CDL/Reals/Abs");
const round_13f7599f = require("../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const sin_9696c4d3 = require("../../../../CDL/Reals/Sources/Sin");
const switch_6d141143 = require("../../../../CDL/Reals/Switch");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.sine
  const sineFn = sin_9696c4d3({ amplitude: 6, freqHz: 1/5400 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.abs
  const absFn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.round2
  const round2Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.con
  const conFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.trimRespondLogic
  const trimRespondLogicFn = trimandrespond_2d925ed7({ delTim: 300, iniSet: 120, maxRes: 37, maxSet: 370, minSet: 37, numIgnReq: 2, resAmo: 15, samplePeriod: 120, triAmo: -10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.trimRespondLogic1
  const trimRespondLogic1Fn = trimandrespond_2d925ed7({ delTim: 300, iniSet: 120, maxRes: -37, maxSet: 370, minSet: 37, numIgnReq: 2, resAmo: -15, samplePeriod: 120, triAmo: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.con1
  const con1Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.booPul
  const booPulFn = pulse_27dcacc8({ period: 3600, width: 0.18333333 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.sine1
  const sine1Fn = sin_9696c4d3({ amplitude: 6, freqHz: 1/5400 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.abs1
  const abs1Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.round1
  const round1Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.TrimAndRespond.trimRespondLogic2
  const trimRespondLogic2Fn = trimandrespond_2d925ed7({ delTim: 300, iniSet: 120, maxRes: 37, maxSet: 370, minSet: 37, numIgnReq: 2, resAmo: 15, samplePeriod: 120, triAmo: -10 });

  return (
    {  }
  ) => {
    const sine = sineFn({});
    const abs = absFn({ u: sine.y });
    const round2 = round2Fn({ u: abs.y });
    const reaToInt1 = reaToInt1Fn({ u: round2.y });
    const con = conFn({});
    const trimRespondLogic = trimRespondLogicFn({ numOfReq: reaToInt1.y, uDevSta: con.y });
    const trimRespondLogic1 = trimRespondLogic1Fn({ numOfReq: reaToInt1.y, uDevSta: con.y });
    const con1 = con1Fn({});
    const booPul = booPulFn({});
    const sine1 = sine1Fn({});
    const swi = swiFn({ u1: con1.y, u2: booPul.y, u3: sine1.y });
    const abs1 = abs1Fn({ u: swi.y });
    const round1 = round1Fn({ u: abs1.y });
    const reaToInt2 = reaToInt2Fn({ u: round1.y });
    const not1 = not1Fn({ u: booPul.y });
    const trimRespondLogic2 = trimRespondLogic2Fn({ numOfReq: reaToInt2.y, uDevSta: not1.y });

    return { sine: sine, abs: abs, round2: round2, reaToInt1: reaToInt1, con: con, trimRespondLogic: trimRespondLogic, trimRespondLogic1: trimRespondLogic1, con1: con1, booPul: booPul, sine1: sine1, swi: swi, abs1: abs1, round1: round1, reaToInt2: reaToInt2, not1: not1, trimRespondLogic2: trimRespondLogic2 };
  }
}
