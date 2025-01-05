
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests
const systemrequests_889e56b3 = require("../SystemRequests");
const unitdelay_bcd3bd80 = require("../../../../../../CDL/Discrete/UnitDelay");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const pulse_27dcacc8 = require("../../../../../../CDL/Logical/Sources/Pulse");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.sine
  const sineFn = sin_9696c4d3({ freqHz: "1/7200", offset: 296.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.TCooSet
  const TCooSetFn = unitdelay_bcd3bd80({ samplePeriod: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.TDis
  const TDisFn = ramp_3c414377({ duration: 3600, height: -5, offset: "273.15 +20" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.TDisSet
  const TDisSetFn = constant_baefa089({ k: "273.15 +30" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.TZon
  const TZonFn = sin_9696c4d3({ amplitude: 2, freqHz: "1/7200", offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.booPul
  const booPulFn = pulse_27dcacc8({ period: 7200, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.uCoo
  const uCooFn = ramp_3c414377({ duration: 2000, height: -1, offset: 1, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.damPos
  const damPosFn = ramp_3c414377({ duration: 3000, height: -0.7, offset: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.valPos
  const valPosFn = ramp_3c414377({ duration: 2000, height: -0.7, offset: 0.7, startTime: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.disAir
  const disAirFn = ramp_3c414377({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.disAirSet
  const disAirSetFn = ramp_3c414377({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanCVF.Subsequences.Validation.SystemRequests.sysReq
  const sysReqFn = systemrequests_889e56b3({ damPosHys: 0.01, floHys: 0.01, looHys: 0.01, valPosHys: 0.01 });

  return (
    {  }
  ) => {
    const sine = sineFn({});
    const TCooSet = TCooSetFn({ u: sine.y });
    const TDis = TDisFn({});
    const TDisSet = TDisSetFn({});
    const TZon = TZonFn({});
    const booPul = booPulFn({});
    const not1 = not1Fn({ u: booPul.y });
    const uCoo = uCooFn({});
    const damPos = damPosFn({});
    const valPos = valPosFn({});
    const disAir = disAirFn({});
    const disAirSet = disAirSetFn({});
    const sysReq = sysReqFn({ TCooSet: TCooSet.y, TDis: TDis.y, TDisSet: TDisSet.y, TZon: TZon.y, uAftSup: not1.y, uCoo: uCoo.y, uDam: damPos.y, uVal: valPos.y, VPri_flow: disAir.y, VSet_flow: disAirSet.y });

    return {};
  }
}
