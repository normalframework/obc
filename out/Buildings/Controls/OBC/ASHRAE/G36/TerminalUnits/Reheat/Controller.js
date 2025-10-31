
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_72a11546 = require("./Subsequences/ActiveAirFlow");
const alarms_ac4d992e = require("./Subsequences/Alarms");
const dampervalves_b9da1abc = require("./Subsequences/DamperValves");
const overrides_189addbb = require("./Subsequences/Overrides");
const systemrequests_1cfab3ff = require("./Subsequences/SystemRequests");
const controlloops_b2cc0610 = require("../../ThermalZones/ControlLoops");
const setpoints_3c8e6a49 = require("../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../VentilationZones/Title24/Setpoints");

module.exports = (
  {
		chaRat = 540,
		controllerTypeDam = 1,
		controllerTypeVal = 1,
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
		have_hotWatCoi = true,
		heaCoi = " if have_hotWatCoi then Buildings.Controls.OBC.ASHRAE.G36.Types.HeatingCoil.WaterBased else Buildings.Controls.OBC.ASHRAE.G36.Types.HeatingCoil.Electric",
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
		maxSupTim = 1800,
		permit_occStandby = true,
		samplePeriod = 120,
		staPreMul = 1,
		staTim = 1800,
		TdDam = 0.1,
		TDisMin = 283.15,
		TdVal = 0.1,
		thrTDis_1 = 17,
		thrTDis_2 = 8,
		thrTemDif = 3,
		TiCooCon = 120,
		TiDam = 300,
		TiHeaCon = 120,
		timChe = 30,
		TiVal = 300,
		twoTemDif = 2,
		valCloTim = 900,
		valPosHys = 0.005,
		VAreBreZon_flow,
		VAreMin_flow,
		VCooMax_flow,
		venStd,
		VHeaMax_flow,
		VHeaMin_flow,
		VOccMin_flow,
		VPopBreZon_flow,
		zonDisEff_cool = 1,
		zonDisEff_heat = 0.8,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_parFanPowUni: false, have_SZVAV: false, have_typTerUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.actAirSet
  const actAirSetFn = activeairflow_72a11546({ VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow, VHeaMin_flow: VHeaMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.damVal
  const damValFn = dampervalves_b9da1abc({ controllerTypeDam: controllerTypeDam, controllerTypeVal: controllerTypeVal, dTDisZonSetMax: dTDisZonSetMax, dTHys: dTHys, kDam: kDam, kVal: kVal, looHys: looHys, TdDam: TdDam, TDisMin: TDisMin, TdVal: TdVal, TiDam: TiDam, TiVal: TiVal, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.setOve
  const setOveFn = overrides_189addbb({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.ala
  const alaFn = alarms_ac4d992e({ damPosHys: damPosHys, dTHys: dTHys, fanOffTim: fanOffTim, floHys: floHys, heaCoi: heaCoi, hotWatRes: hotWatRes, leaFloTim: leaFloTim, lowFloTim: lowFloTim, lowTemTim: lowTemTim, staPreMul: staPreMul, staTim: staTim, valCloTim: valCloTim, valPosHys: valPosHys, VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.timSup
  const timSupFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat.Controller.sysReq
  const sysReqFn = systemrequests_1cfab3ff({ damPosHys: damPosHys, dTHys: dTHys, durTimDisAir: durTimDisAir, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, heaCoi: heaCoi, looHys: looHys, samplePeriod: samplePeriod, thrTDis_1: thrTDis_1, thrTDis_2: thrTDis_2, thrTemDif: thrTemDif, twoTemDif: twoTemDif, valPosHys: valPosHys });

  return (
    { uOpeMod, TDis, TSup, u1Fan, u1HotPla, VDis_flow, TCooSet, THeaSet, TZon, oveFloSet, TSupSet, ppmCO2, ppmCO2Set, u1Occ, u1Win, oveDamPos, uHeaOff }
  ) => {
    const setPoi = setPoiFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, TDis: TDis, TZon: TZon, u1Occ: u1Occ, u1Win: u1Win, uOpeMod: uOpeMod });
    const conLoo = conLooFn({ TCooSet: TCooSet, THeaSet: THeaSet, TZon: TZon });
    const minFlo = minFloFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, u1Occ: u1Occ, u1Win: u1Win, uOpeMod: uOpeMod });
    const actAirSet = actAirSetFn({ uOpeMod: uOpeMod, VOccMin_flow: minFlo.VOccZonMin_flow });
    const damVal = damValFn({ oveFloSet: oveFloSet, TDis: TDis, THeaSet: THeaSet, TSup: TSup, TSupSet: TSupSet, TZon: TZon, u1Fan: u1Fan, uCoo: conLoo.yCoo, uHea: conLoo.yHea, uOpeMod: uOpeMod, VActCooMax_flow: actAirSet.VActCooMax_flow, VActCooMin_flow: actAirSet.VActCooMin_flow, VActHeaMax_flow: actAirSet.VActHeaMax_flow, VActHeaMin_flow: actAirSet.VActHeaMin_flow, VActMin_flow: actAirSet.VActMin_flow, VDis_flow: VDis_flow });
    const setOve = setOveFn({ oveDamPos: oveDamPos, uDam: damVal.yDam, uHeaOff: uHeaOff, uVal: damVal.yVal });
    const ala = alaFn({ TDis: TDis, TDisSet: damVal.TDisSet, TSup: TSup, u1Fan: u1Fan, u1HotPla: u1HotPla, uDam: setOve.yDam, uOpeMod: uOpeMod, uVal: setOve.yVal, VActSet_flow: damVal.VSet_flow, VDis_flow: VDis_flow });
    const timSup = timSupFn({ TSet: TCooSet, TZon: TZon });
    const sysReq = sysReqFn({ TCooSet: TCooSet, TDis: TDis, TDisSet: damVal.TDisSet, TZon: TZon, uAftSup: timSup.yAftSup, uCoo: conLoo.yCoo, uDam: setOve.yDam, uVal: setOve.yVal, VDis_flow: VDis_flow, VSet_flow: damVal.VSet_flow });

    return { VAdjAreBreZon_flow: setPoi.VAdjAreBreZon_flow, VAdjPopBreZon_flow: setPoi.VAdjPopBreZon_flow, VMinOA_flow: setPoi.VMinOA_flow, VSet_flow: damVal.VSet_flow, VZonAbsMin_flow: minFlo.VZonAbsMin_flow, VZonDesMin_flow: minFlo.VZonDesMin_flow, yCO2: minFlo.yCO2, yDam: setOve.yDam, yFloSenAla: ala.yFloSenAla, yHeaValResReq: sysReq.yHeaValResReq, yHotWatPlaReq: sysReq.yHotWatPlaReq, yLeaDamAla: ala.yLeaDamAla, yLeaValAla: ala.yLeaValAla, yLowFloAla: ala.yLowFloAla, yLowTemAla: ala.yLowTemAla, yVal: setOve.yVal, yZonPreResReq: sysReq.yZonPreResReq, yZonTemResReq: sysReq.yZonTemResReq };
  }
}
