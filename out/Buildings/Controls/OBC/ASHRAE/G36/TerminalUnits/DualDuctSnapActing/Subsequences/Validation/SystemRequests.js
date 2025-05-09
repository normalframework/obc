
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests
const systemrequests_4e0b37d4 = require("../SystemRequests");
const unitdelay_c1704a5f = require("../../../../../../CDL/Discrete/UnitDelay");
const not_f2b50019 = require("../../../../../../CDL/Logical/Not");
const pulse_cdc9ff89 = require("../../../../../../CDL/Logical/Sources/Pulse");
const greaterthreshold_7c60ca3f = require("../../../../../../CDL/Reals/GreaterThreshold");
const ramp_40ddd056 = require("../../../../../../CDL/Reals/Sources/Ramp");
const sin_f9d5a014 = require("../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.sine
  const sineFn = sin_f9d5a014({ freqHz: 1/7200, offset: 296.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.TZonCooSet
  const TZonCooSetFn = unitdelay_c1704a5f({ samplePeriod: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.sine1
  const sine1Fn = sin_f9d5a014({ freqHz: 1/7200, offset: 293.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.TZonHeaSet
  const TZonHeaSetFn = unitdelay_c1704a5f({ samplePeriod: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.TZon
  const TZonFn = sin_f9d5a014({ amplitude: 2, freqHz: 1/7200, offset: 299.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.colDamPos
  const colDamPosFn = ramp_40ddd056({ duration: 3000, height: -0.7, offset: 0.7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.greThr
  const greThrFn = greaterthreshold_7c60ca3f({ t: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.hotDamPos
  const hotDamPosFn = ramp_40ddd056({ duration: 3600, height: 0.7, startTime: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.greThr1
  const greThr1Fn = greaterthreshold_7c60ca3f({ t: 0.01 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.booPul
  const booPulFn = pulse_cdc9ff89({ period: 7200, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.not1
  const not1Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 7200, width: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.not2
  const not2Fn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.uCoo
  const uCooFn = ramp_40ddd056({ duration: 2000, height: -1, offset: 1, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.uHea
  const uHeaFn = ramp_40ddd056({ duration: 3600, height: 0.9, startTime: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.colDucAirSet
  const colDucAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.colDucAirRate
  const colDucAirRateFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.hotDucAirSet
  const hotDucAirSetFn = ramp_40ddd056({ duration: 7200, height: 0.9, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.hotDucAirRate
  const hotDucAirRateFn = ramp_40ddd056({ duration: 7200, height: 0.3, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Subsequences.Validation.SystemRequests.sysReq
  const sysReqFn = systemrequests_4e0b37d4({ damPosHys: 0.01, floHys: 0.01, have_duaSen: false, looHys: 0.01 });

  return (
    {  }
  ) => {
    const sine = sineFn({});
    const TZonCooSet = TZonCooSetFn({ u: sine.y });
    const sine1 = sine1Fn({});
    const TZonHeaSet = TZonHeaSetFn({ u: sine1.y });
    const TZon = TZonFn({});
    const colDamPos = colDamPosFn({});
    const greThr = greThrFn({ u: colDamPos.y });
    const hotDamPos = hotDamPosFn({});
    const greThr1 = greThr1Fn({ u: hotDamPos.y });
    const booPul = booPulFn({});
    const not1 = not1Fn({ u: booPul.y });
    const booPul1 = booPul1Fn({});
    const not2 = not2Fn({ u: booPul1.y });
    const uCoo = uCooFn({});
    const uHea = uHeaFn({});
    const colDucAirSet = colDucAirSetFn({});
    const colDucAirRate = colDucAirRateFn({});
    const hotDucAirSet = hotDucAirSetFn({});
    const hotDucAirRate = hotDucAirRateFn({});
    const sysReq = sysReqFn({ TCooSet: TZonCooSet.y, THeaSet: TZonHeaSet.y, TZon: TZon.y, u1CooDam: greThr.y, u1HeaDam: greThr1.y, uAftSupCoo: not1.y, uAftSupHea: not2.y, uCoo: uCoo.y, uCooDam: colDamPos.y, uHea: uHea.y, uHeaDam: hotDamPos.y, VColDuc_flow_Set: colDucAirSet.y, VColDucDis_flow: colDucAirRate.y, VHotDuc_flow_Set: hotDucAirSet.y, VHotDucDis_flow: hotDucAirRate.y });

    return { sine: sine, TZonCooSet: TZonCooSet, sine1: sine1, TZonHeaSet: TZonHeaSet, TZon: TZon, colDamPos: colDamPos, greThr: greThr, hotDamPos: hotDamPos, greThr1: greThr1, booPul: booPul, not1: not1, booPul1: booPul1, not2: not2, uCoo: uCoo, uHea: uHea, colDucAirSet: colDucAirSet, colDucAirRate: colDucAirRate, hotDucAirSet: hotDucAirSet, hotDucAirRate: hotDucAirRate, sysReq: sysReq };
  }
}
