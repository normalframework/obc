
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests
const systemrequests_51464456 = require("../SystemRequests");
const unitdelay_c1704a5f = require("../../../../../../CDL/Discrete/UnitDelay");
const not_f2b50019 = require("../../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const constant_d2aca5e8 = require("../../../../../../CDL/Reals/Sources/Constant");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.sine
  const sineFn = sin_f9d5a014({ freqHz: 1/7200, offset: 296.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.TCooSet
  const TCooSetFn = unitdelay_c1704a5f({ samplePeriod: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.TDis
  const TDisFn = ramp_40ddd056({ duration: 3600, height: -5, offset: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.TDisSet
  const TDisSetFn = constant_d2aca5e8({ k: 273.15 +30 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.TZon
  const TZonFn = sin_f9d5a014({ amplitude: 2, freqHz: 1/7200, offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.booPul
  const booPulFn = pulse_cdc9ff89({ period: 7200, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.uCoo
  const uCooFn = ramp_40ddd056({ duration: 2000, height: -1, offset: 1, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.damPos
  const damPosFn = ramp_40ddd056({ duration: 3000, height: -0.7, offset: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.valPos
  const valPosFn = ramp_40ddd056({ duration: 2000, height: -0.7, offset: 0.7, startTime: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.disAir
  const disAirFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.disAirSet
  const disAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Subsequences.Validation.SystemRequests.sysReq
  const sysReqFn = systemrequests_51464456({ damPosHys: 0.01, floHys: 0.01, looHys: 0.01, valPosHys: 0.01 });

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

    return { sine: sine, TCooSet: TCooSet, TDis: TDis, TDisSet: TDisSet, TZon: TZon, booPul: booPul, not1: not1, uCoo: uCoo, damPos: damPos, valPos: valPos, disAir: disAir, disAirSet: disAirSet, sysReq: sysReq };
  }
}
