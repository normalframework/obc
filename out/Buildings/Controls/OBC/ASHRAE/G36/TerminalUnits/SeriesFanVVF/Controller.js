
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_ac3508df = require("./Subsequences/ActiveAirFlow");
const alarms_eb778fb5 = require("./Subsequences/Alarms");
const dampervalves_589cd003 = require("./Subsequences/DamperValves");
const overrides_8ce285d4 = require("./Subsequences/Overrides");
const systemrequests_15e53386 = require("./Subsequences/SystemRequests");
const controlloops_b2cc0610 = require("../../ThermalZones/ControlLoops");
const setpoints_3c8e6a49 = require("../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../VentilationZones/Title24/Setpoints");
const booleantoreal_552dc85b = require("../../../../CDL/Conversions/BooleanToReal");
const multiply_a5ce8cd2 = require("../../../../CDL/Reals/Multiply");

module.exports = (
  {
		chaRat = 540,
		comChaTim = 15,
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_parFanPowUni: false, have_typTerUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.actAirSet
  const actAirSetFn = activeairflow_ac3508df({ VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.damVal
  const damValFn = dampervalves_589cd003({ controllerTypeDam: controllerTypeDam, controllerTypeVal: controllerTypeVal, damPosHys: damPosHys, dTDisZonSetMax: dTDisZonSetMax, dTHys: dTHys, floHys: floHys, iniDam: iniDam, kDam: kDam, kVal: kVal, looHys: looHys, maxRat: maxRat, TdDam: TdDam, TdVal: TdVal, TiDam: TiDam, TiVal: TiVal, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.setOve
  const setOveFn = overrides_8ce285d4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.booToRea1
  const booToRea1Fn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.ala
  const alaFn = alarms_eb778fb5({ comChaTim: comChaTim, damPosHys: damPosHys, dTHys: dTHys, fanOffTim: fanOffTim, floHys: floHys, heaCoi: heaCoi, hotWatRes: hotWatRes, leaFloTim: leaFloTim, lowFloTim: lowFloTim, lowTemTim: lowTemTim, staPreMul: staPreMul, staTim: staTim, valCloTim: valCloTim, valPosHys: valPosHys, VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.timSup
  const timSupFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.SeriesFanVVF.Controller.sysReq
  const sysReqFn = systemrequests_15e53386({ damPosHys: damPosHys, dTHys: dTHys, durTimDisAir: durTimDisAir, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, heaCoi: heaCoi, looHys: looHys, samplePeriod: samplePeriod, thrTDis_1: thrTDis_1, thrTDis_2: thrTDis_2, thrTemDif: thrTemDif, twoTemDif: twoTemDif, valPosHys: valPosHys });

  return (
    { uOpeMod, TDis, TSup, u1Fan, u1HotPla, u1TerFan, VPri_flow, TCooSet, THeaSet, TZon, oveFloSet, TSupSet, ppmCO2, ppmCO2Set, u1Occ, u1Win, oveDamPos, oveFan, uHeaOff }
  ) => {
    const setPoi = setPoiFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, TDis: TDis, TZon: TZon, u1Occ: u1Occ, u1Win: u1Win, uOpeMod: uOpeMod });
    const conLoo = conLooFn({ TCooSet: TCooSet, THeaSet: THeaSet, TZon: TZon });
    const minFlo = minFloFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, u1Occ: u1Occ, u1Win: u1Win, uOpeMod: uOpeMod });
    const actAirSet = actAirSetFn({ uOpeMod: uOpeMod, VOccMin_flow: minFlo.VOccZonMin_flow });
    const damVal = damValFn({ oveFloSet: oveFloSet, TDis: TDis, THeaSet: THeaSet, TSup: TSup, TSupSet: TSupSet, TZon: TZon, u1Fan: u1Fan, u1TerFan: u1TerFan, uCoo: conLoo.yCoo, uHea: conLoo.yHea, uOpeMod: uOpeMod, VActCooMax_flow: actAirSet.VActCooMax_flow, VActMin_flow: actAirSet.VActMin_flow, VOAMin_flow: minFlo.VZonAbsMin_flow, VPri_flow: VPri_flow });
    const setOve = setOveFn({ oveDamPos: oveDamPos, oveFan: oveFan, u1Fan: damVal.y1Fan, uDam: damVal.yDam, uHeaOff: uHeaOff, uVal: damVal.yVal });
    const booToRea1 = booToRea1Fn({ u: setOve.y1Fan });
    const mul1 = mul1Fn({ u1: damVal.VFan_flow_Set, u2: booToRea1.y });
    const ala = alaFn({ TDis: TDis, TDisSet: damVal.THeaDisSet, TSup: TSup, u1Fan: u1Fan, u1FanCom: damVal.y1Fan, u1HotPla: u1HotPla, u1TerFan: u1TerFan, uDam: setOve.yDam, uOpeMod: uOpeMod, uVal: setOve.yVal, VActSet_flow: damVal.VPri_flow_Set, VPri_flow: VPri_flow });
    const timSup = timSupFn({ TSet: TCooSet, TZon: TZon });
    const sysReq = sysReqFn({ TCooSet: TCooSet, TDis: TDis, TDisSet: damVal.THeaDisSet, TZon: TZon, uAftSup: timSup.yAftSup, uCoo: conLoo.yCoo, uDam: setOve.yDam, uVal: setOve.yVal, VPri_flow: VPri_flow, VSet_flow: damVal.VPri_flow_Set });

    return { VAdjAreBreZon_flow: setPoi.VAdjAreBreZon_flow, VAdjPopBreZon_flow: setPoi.VAdjPopBreZon_flow, VFan_flow_Set: mul1.y, VMinOA_flow: setPoi.VMinOA_flow, VSet_flow: damVal.VPri_flow_Set, VZonAbsMin_flow: minFlo.VZonAbsMin_flow, VZonDesMin_flow: minFlo.VZonDesMin_flow, y1Fan: setOve.y1Fan, yCO2: minFlo.yCO2, yDam: setOve.yDam, yFanStaAla: ala.yFanStaAla, yFloSenAla: ala.yFloSenAla, yHeaValResReq: sysReq.yHeaValResReq, yHotWatPlaReq: sysReq.yHotWatPlaReq, yLeaDamAla: ala.yLeaDamAla, yLeaValAla: ala.yLeaValAla, yLowFloAla: ala.yLowFloAla, yLowTemAla: ala.yLowTemAla, yVal: setOve.yVal, yZonPreResReq: sysReq.yZonPreResReq, yZonTemResReq: sysReq.yZonTemResReq };
  }
}
