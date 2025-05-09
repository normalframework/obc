
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests
const systemrequests_3d1d8ccb = require("../SystemRequests");
const unitdelay_c1704a5f = require("../../../../../../CDL/Discrete/UnitDelay");
const not_f2b50019 = require("../../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.sine
  const sineFn = sin_f9d5a014({ freqHz: 1/7200, offset: 296.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.TZonCooSet
  const TZonCooSetFn = unitdelay_c1704a5f({ samplePeriod: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.TZon
  const TZonFn = sin_f9d5a014({ amplitude: 2, freqHz: 1/7200, offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.booPul
  const booPulFn = pulse_cdc9ff89({ period: 7200, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.uCoo
  const uCooFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.damPos
  const damPosFn = ramp_40ddd056({ duration: 7200, height: 0.7, offset: 0.3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.disAirRate
  const disAirRateFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.disAirSet
  const disAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Subsequences.Validation.SystemRequests.sysReq
  const sysReqFn = systemrequests_3d1d8ccb({ damPosHys: 0.01, floHys: 0.01, looHys: 0.01 });

  return (
    {  }
  ) => {
    const sine = sineFn({});
    const TZonCooSet = TZonCooSetFn({ u: sine.y });
    const TZon = TZonFn({});
    const booPul = booPulFn({});
    const not1 = not1Fn({ u: booPul.y });
    const uCoo = uCooFn({});
    const damPos = damPosFn({});
    const disAirRate = disAirRateFn({});
    const disAirSet = disAirSetFn({});
    const sysReq = sysReqFn({ TCooSet: TZonCooSet.y, TZon: TZon.y, uAftSup: not1.y, uCoo: uCoo.y, uDam: damPos.y, VDis_flow: disAirRate.y, VSet_flow: disAirSet.y });

    return { sine: sine, TZonCooSet: TZonCooSet, TZon: TZon, booPul: booPul, not1: not1, uCoo: uCoo, damPos: damPos, disAirRate: disAirRate, disAirSet: disAirSet, sysReq: sysReq };
  }
}
