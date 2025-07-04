
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller
const controller_6fa792b1 = require("../Controller");
const realtointeger_b3838f5e = require("../../../../../../CDL/Conversions/RealToInteger");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const truefalsehold_5efae599 = require("../../../../../../CDL/Logical/TrueFalseHold");
const abs_a5faf0c3 = require("../../../../../../CDL/Reals/Abs");
const add_a5faf0f2 = require("../../../../../../CDL/Reals/Add");
const round_13f7599f = require("../../../../../../CDL/Reals/Round");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const pulse_4bd410d4 = require("../../../../../../CDL/Reals/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.dpBui
  const dpBuiFn = ramp_3c414377({ duration: 1800, height: 40, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.ducStaPre
  const ducStaPreFn = sin_9696c4d3({ amplitude: 150, freqHz: 1/3600, offset: 200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.TMixMea
  const TMixMeaFn = ramp_3c414377({ duration: 1, height: 4, offset: 273.15 +2, startTime: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.TSup
  const TSupFn = ramp_3c414377({ duration: 3600, height: 4, offset: 273.15 +14 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.TOut
  const TOutFn = sin_9696c4d3({ amplitude: 5, freqHz: 1/3600, offset: 18 +273.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.freRes
  const freResFn = pulse_27dcacc8({ period: 3600, width: 0.95 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.opeMod
  const opeModFn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.uOutAirFra_max
  const uOutAirFra_maxFn = pulse_4bd410d4({ amplitude: 0.005, offset: 0.015, period: 3600, width: 0.25 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.sine2
  const sine2Fn = sin_9696c4d3({ amplitude: 2, freqHz: 1/9600, offset: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.abs3
  const abs3Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.round4
  const round4Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.ducPreResReq
  const ducPreResReqFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.sine3
  const sine3Fn = sin_9696c4d3({ amplitude: 6, freqHz: 1/9600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.abs2
  const abs2Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.round3
  const round3Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.maxSupResReq
  const maxSupResReqFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.VOut_flow
  const VOut_flowFn = ramp_3c414377({ duration: 1800, height: 0.0168, offset: 0.02 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.sumDesAreBreZon
  const sumDesAreBreZonFn = constant_baefa089({ k: 0.03 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.sumDesPopBreZon
  const sumDesPopBreZonFn = constant_baefa089({ k: 0.0125 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.vavBoxFlo2
  const vavBoxFlo2Fn = ramp_3c414377({ duration: 3600, height: 0.02, offset: 0.08 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.vavBoxFlo1
  const vavBoxFlo1Fn = ramp_3c414377({ duration: 3600, height: 0.05, offset: 0.08 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.conAHU
  const conAHUFn = controller_6fa792b1({ ashCliZon: 9, buiPreCon: 1, ecoHigLimCon: 0, eneStd: 0, minOADes: 0, VDesTotOutAir_flow: 0.05, venStd: 0, VUncDesOutAir_flow: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Validation.Controller.truFalHol
  const truFalHolFn = truefalsehold_5efae599({ trueHoldDuration: 1 });

  return (
    {  }
  ) => {
    const dpBui = dpBuiFn({});
    const ducStaPre = ducStaPreFn({});
    const TMixMea = TMixMeaFn({});
    const TSup = TSupFn({});
    const TOut = TOutFn({});
    const freRes = freResFn({});
    const not1 = not1Fn({ u: freRes.y });
    const opeMod = opeModFn({});
    const uOutAirFra_max = uOutAirFra_maxFn({});
    const sine2 = sine2Fn({});
    const abs3 = abs3Fn({ u: sine2.y });
    const round4 = round4Fn({ u: abs3.y });
    const ducPreResReq = ducPreResReqFn({ u: round4.y });
    const sine3 = sine3Fn({});
    const abs2 = abs2Fn({ u: sine3.y });
    const round3 = round3Fn({ u: abs2.y });
    const maxSupResReq = maxSupResReqFn({ u: round3.y });
    const VOut_flow = VOut_flowFn({});
    const sumDesAreBreZon = sumDesAreBreZonFn({});
    const sumDesPopBreZon = sumDesPopBreZonFn({});
    const vavBoxFlo2 = vavBoxFlo2Fn({});
    const vavBoxFlo1 = vavBoxFlo1Fn({});
    const add2 = add2Fn({ u1: vavBoxFlo2.y, u2: vavBoxFlo1.y });
    const conAHU = conAHUFn({ dpBui: dpBui.y, dpDuc: ducStaPre.y, TAirMix: TMixMea.y, TAirSup: TSup.y, TOut: TOut.y, u1SofSwiRes: not1.y, uAhuOpeMod: opeMod.y, uOutAirFra_max: uOutAirFra_max.y, uZonPreResReq: ducPreResReq.y, uZonTemResReq: maxSupResReq.y, VAirOut_flow: VOut_flow.y, VSumAdjAreBreZon_flow: sumDesAreBreZon.y, VSumAdjPopBreZon_flow: sumDesPopBreZon.y, VSumZonPri_flow: add2.y });
    const truFalHol = truFalHolFn({ u: conAHU.y1SupFan });

    return { dpBui: dpBui, ducStaPre: ducStaPre, TMixMea: TMixMea, TSup: TSup, TOut: TOut, freRes: freRes, not1: not1, opeMod: opeMod, uOutAirFra_max: uOutAirFra_max, sine2: sine2, abs3: abs3, round4: round4, ducPreResReq: ducPreResReq, sine3: sine3, abs2: abs2, round3: round3, maxSupResReq: maxSupResReq, VOut_flow: VOut_flow, sumDesAreBreZon: sumDesAreBreZon, sumDesPopBreZon: sumDesPopBreZon, vavBoxFlo2: vavBoxFlo2, vavBoxFlo1: vavBoxFlo1, add2: add2, conAHU: conAHU, truFalHol: truFalHol };
  }
}
