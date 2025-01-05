
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_4b069e0f = require("./Subsequences/ActiveAirFlow");
const alarms_d41e7085 = require("./Subsequences/Alarms");
const dampervalves_1babd4d3 = require("./Subsequences/DamperValves");
const overrides_80ae3304 = require("./Subsequences/Overrides");
const systemrequests_51464456 = require("./Subsequences/SystemRequests");
const controlloops_b2cc0610 = require("../../ThermalZones/ControlLoops");
const zonestates_6a0c176c = require("../../ThermalZones/ZoneStates");
const setpoints_3c8e6a49 = require("../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../VentilationZones/Title24/Setpoints");
const booleantoreal_df99be1a = require("../../../../CDL/Conversions/BooleanToReal");
const multiply_a462b873 = require("../../../../CDL/Reals/Multiply");

module.exports = (
  {
		chaRat = 540,
		comChaTim = 15,
		controllerTypeDam = Math.PI,
		controllerTypeVal = Math.PI,
		damPosHys = 0.005,
		dTDisZonSetMax = 11,
		dTHys = 0.25,
		durTimDisAir = 300,
		durTimFlo = 60,
		durTimTem = 120,
		fanOffTim = 600,
		VMin_flow,
		floHys = 0.01*VMin_flow,
		have_CO2Sen = true,
		have_occSen = true,
		have_winSen = true,
		heaCoi = 1,
		hotWatRes = 1,
		iniDam = 0.01,
		kCooCon = 0.1,
		kDam = 0.5,
		kHeaCon = 0.1,
		kVal = 0.5,
		leaFloTim = 600,
		looHys = 0.01,
		lowFloTim = 300,
		lowTemTim = 600,
		maxRat,
		maxSupTim = 1800,
		minRat,
		permit_occStandby = true,
		samplePeriod = 120,
		staPreMul = 1,
		staTim = 1800,
		TdDam = 0.1,
		TdVal = 0.1,
		thrTDis_1 = 17,
		thrTDis_2 = 8.3,
		thrTemDif = 3,
		TiCooCon = 900,
		TiDam = 300,
		TiHeaCon = 900,
		timChe = 30,
		TiVal = 300,
		twoTemDif = 2,
		valCloTim = 900,
		valPosHys = 0.005,
		VAreBreZon_flow,
		VAreMin_flow,
		VCooMax_flow,
		venStd,
		VOccMin_flow,
		VPopBreZon_flow,
		zonDisEff_cool = 1,
		zonDisEff_heat = 0.8,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.zonSta
  const zonStaFn = zonestates_6a0c176c({ uHigh: 2*looHys, uLow: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_parFanPowUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_parFanPowUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.actAirSet
  const actAirSetFn = activeairflow_4b069e0f({ VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.damVal
  const damValFn = dampervalves_1babd4d3({ controllerTypeDam: controllerTypeDam, controllerTypeVal: controllerTypeVal, dTDisZonSetMax: dTDisZonSetMax, dTHys: dTHys, floHys: floHys, iniDam: iniDam, kDam: kDam, kVal: kVal, looHys: looHys, maxRat: maxRat, minRat: minRat, TdDam: TdDam, TdVal: TdVal, TiDam: TiDam, TiVal: TiVal, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.setOve
  const setOveFn = overrides_80ae3304({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.booToRea1
  const booToRea1Fn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.mul1
  const mul1Fn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.ala
  const alaFn = alarms_d41e7085({ comChaTim: comChaTim, damPosHys: damPosHys, dTHys: dTHys, fanOffTim: fanOffTim, floHys: floHys, heaCoi: heaCoi, hotWatRes: hotWatRes, leaFloTim: leaFloTim, lowFloTim: lowFloTim, lowTemTim: lowTemTim, staPreMul: staPreMul, staTim: staTim, valCloTim: valCloTim, valPosHys: valPosHys, VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.timSup
  const timSupFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.ParallelFanVVF.Controller.sysReq
  const sysReqFn = systemrequests_51464456({ damPosHys: damPosHys, dTHys: dTHys, durTimDisAir: durTimDisAir, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, heaCoi: heaCoi, looHys: looHys, samplePeriod: samplePeriod, thrTDis_1: thrTDis_1, thrTDis_2: thrTDis_2, thrTemDif: thrTemDif, twoTemDif: twoTemDif, valPosHys: valPosHys });

  return (
    { uOpeMod, VPri_flow, TZon, VParFan_flow, uHeaOff }
  ) => {
    const conLoo = conLooFn({ TZon: TZon });
    const zonSta = zonStaFn({ uHea: conLoo.yHea });
    const setPoi = setPoiFn({ uOpeMod: uOpeMod, uZonSta: zonSta.yZonSta });
    const minFlo = minFloFn({ VParFan_flow: VParFan_flow, uZonSta: zonSta.yZonSta });
    const actAirSet = actAirSetFn({ uOpeMod: uOpeMod, VOccMin_flow: minFlo.VOccZonMin_flow });
    const damVal = damValFn({ VPri_flow: VPri_flow, uHea: conLoo.yHea, VActMin_flow: actAirSet.VActMin_flow, VOAMin_flow: minFlo.VZonAbsMin_flow });
    const setOve = setOveFn({ uHeaOff: uHeaOff, uVal: damVal.yVal });
    const booToRea1 = booToRea1Fn({ u: setOve.y1Fan });
    const mul1 = mul1Fn({ u1: damVal.VFan_flow_Set, u2: booToRea1.y });
    const ala = alaFn({ VPri_flow: VPri_flow, VActSet_flow: damVal.VPri_flow_Set, uVal: setOve.yVal });
    const timSup = timSupFn({ TZon: TZon });
    const sysReq = sysReqFn({ VPri_flow: VPri_flow, VSet_flow: damVal.VPri_flow_Set, uAftSup: timSup.yAftSup, uCoo: conLoo.yCoo, uVal: setOve.yVal });

    return { VMinOA_flow: setPoi.VMinOA_flow, VFan_flow_Set: mul1.y, VSet_flow: damVal.VPri_flow_Set, yCO2: minFlo.yCO2, yVal: setOve.yVal, yLowTemAla: ala.yLowTemAla, yZonTemResReq: sysReq.yZonTemResReq };
  }
}
