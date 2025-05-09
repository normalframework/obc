
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_3199f2fa = require("./Subsequences/ActiveAirFlow");
const alarms_088bfdfa = require("./Subsequences/Alarms");
const dampers_958937ce = require("./Subsequences/Dampers");
const systemrequests_3d1d8ccb = require("./Subsequences/SystemRequests");
const controlloops_b2cc0610 = require("../../ThermalZones/ControlLoops");
const zonestates_6a0c176c = require("../../ThermalZones/ZoneStates");
const setpoints_3c8e6a49 = require("../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../VentilationZones/Title24/Setpoints");

module.exports = (
  {
		chaRat = 540,
		damCon = 1,
		damPosHys = 0.005,
		dTHys = 0.25,
		durTimFlo = 60,
		durTimTem = 120,
		fanOffTim = 600,
		VMin_flow,
		floHys = 0.01*VMin_flow,
		have_CO2Sen = true,
		have_occSen = true,
		have_winSen = true,
		iniDam = 0.01,
		kCooCon = 0.1,
		kDam = 0.5,
		kHeaCon = 0.1,
		leaFloTim = 600,
		looHys = 0.01,
		lowFloTim = 300,
		maxSupTim = 1800,
		permit_occStandby = true,
		samplePeriod = 120,
		staPreMul = 1,
		staTim = 1800,
		TdDam = 0.1,
		thrTemDif = 3,
		TiCooCon = 900,
		TiDam = 300,
		TiHeaCon = 900,
		timChe = 30,
		twoTemDif = 2,
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.zonSta
  const zonStaFn = zonestates_6a0c176c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_parFanPowUni: false, have_typTerUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.actAirSet
  const actAirSetFn = activeairflow_3199f2fa({ VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.dam
  const damFn = dampers_958937ce({ damCon: damCon, dTHys: dTHys, kDam: kDam, TdDam: TdDam, TiDam: TiDam, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.ala
  const alaFn = alarms_088bfdfa({ damPosHys: damPosHys, fanOffTim: fanOffTim, floHys: floHys, leaFloTim: leaFloTim, lowFloTim: lowFloTim, staPreMul: staPreMul, staTim: staTim, VCooMax_flow: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.timSup
  const timSupFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.CoolingOnly.Controller.sysReq
  const sysReqFn = systemrequests_3d1d8ccb({ damPosHys: damPosHys, dTHys: dTHys, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, looHys: looHys, samplePeriod: samplePeriod, thrTemDif: thrTemDif, twoTemDif: twoTemDif });

  return (
    { uOpeMod, u1Fan, VDis_flow, TCooSet, THeaSet, TZon, oveDamPos, oveFloSet, TSup, ppmCO2, ppmCO2Set, u1Occ, u1Win, TDis }
  ) => {
    const setPoi = setPoiFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, TDis: TDis, TZon: TZon, u1Occ: u1Occ, u1Win: u1Win, uOpeMod: uOpeMod });
    const conLoo = conLooFn({ TCooSet: TCooSet, THeaSet: THeaSet, TZon: TZon });
    const zonSta = zonStaFn({ uCoo: conLoo.yCoo, uHea: conLoo.yHea });
    const minFlo = minFloFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, u1Occ: u1Occ, u1Win: u1Win, uOpeMod: uOpeMod });
    const actAirSet = actAirSetFn({ uOpeMod: uOpeMod, VOccMin_flow: minFlo.VOccZonMin_flow });
    const dam = damFn({ oveDamPos: oveDamPos, oveFloSet: oveFloSet, TSup: TSup, TZon: TZon, u1Fan: u1Fan, uCoo: conLoo.yCoo, uZonSta: zonSta.yZonSta, VActCooMax_flow: actAirSet.VActCooMax_flow, VActMin_flow: actAirSet.VActMin_flow, VDis_flow: VDis_flow });
    const ala = alaFn({ u1Fan: u1Fan, uDam: dam.yDam, uOpeMod: uOpeMod, VActSet_flow: dam.VSet_flow, VDis_flow: VDis_flow });
    const timSup = timSupFn({ TSet: TCooSet, TZon: TZon });
    const sysReq = sysReqFn({ TCooSet: TCooSet, TZon: TZon, uAftSup: timSup.yAftSup, uCoo: conLoo.yCoo, uDam: dam.yDam, VDis_flow: VDis_flow, VSet_flow: dam.VSet_flow });

    return { VAdjAreBreZon_flow: setPoi.VAdjAreBreZon_flow, VAdjPopBreZon_flow: setPoi.VAdjPopBreZon_flow, VMinOA_flow: setPoi.VMinOA_flow, VSet_flow: dam.VSet_flow, VZonAbsMin_flow: minFlo.VZonAbsMin_flow, VZonDesMin_flow: minFlo.VZonDesMin_flow, yCO2: minFlo.yCO2, yDam: dam.yDam, yFloSenAla: ala.yFloSenAla, yLeaDamAla: ala.yLeaDamAla, yLowFloAla: ala.yLowFloAla, yZonPreResReq: sysReq.yZonPreResReq, yZonTemResReq: sysReq.yZonTemResReq };
  }
}
