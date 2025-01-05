
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_a2c8a993 = require("./Subsequences/ActiveAirFlow");
const alarms_55609181 = require("./Subsequences/Alarms");
const dampers_e3471527 = require("./Subsequences/Dampers");
const overrides_6f2aa088 = require("./Subsequences/Overrides");
const systemrequests_f1c5a952 = require("./Subsequences/SystemRequests");
const controlloops_b2cc0610 = require("../../ThermalZones/ControlLoops");
const setpoints_3c8e6a49 = require("../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../VentilationZones/Title24/Setpoints");

module.exports = (
  {
		chaRat = 540,
		controllerTypeDam = Math.PI,
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
		VHeaMax_flow,
		VOccMin_flow,
		VPopBreZon_flow,
		zonDisEff_cool = 1,
		zonDisEff_heat = 0.8,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.actAirSet
  const actAirSetFn = activeairflow_a2c8a993({ VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.damDuaSen
  const damDuaSenFn = dampers_e3471527({ controllerTypeDam: controllerTypeDam, dTHys: dTHys, iniDam: iniDam, kDam: kDam, looHys: looHys, TdDam: TdDam, TiDam: TiDam, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.setOve
  const setOveFn = overrides_6f2aa088({ VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.timSupCoo
  const timSupCooFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.timSupHea
  const timSupHeaFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.sysReq
  const sysReqFn = systemrequests_f1c5a952({ damPosHys: damPosHys, dTHys: dTHys, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, looHys: looHys, thrTemDif: thrTemDif, twoTemDif: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctMixConInletSensor.Controller.ala
  const alaFn = alarms_55609181({ damPosHys: damPosHys, fanOffTim: fanOffTim, floHys: floHys, leaFloTim: leaFloTim, lowFloTim: lowFloTim, staPreMul: staPreMul, staTim: staTim, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });

  return (
    { uOpeMod, VHotDucDis_flow, TZon, oveHeaDamPos }
  ) => {
    const setPoi = setPoiFn({ uOpeMod: uOpeMod });
    const conLoo = conLooFn({ TZon: TZon });
    const minFlo = minFloFn({ uOpeMod: uOpeMod });
    const actAirSet = actAirSetFn({ uOpeMod: uOpeMod, VOccMin_flow: minFlo.VOccZonMin_flow });
    const damDuaSen = damDuaSenFn({ VHotDucDis_flow: VHotDucDis_flow, uHea: conLoo.yHea, VActMin_flow: actAirSet.VActMin_flow });
    const setOve = setOveFn({ oveHeaDamPos: oveHeaDamPos, VActSet_flow: damDuaSen.VDis_flow_Set });
    const timSupCoo = timSupCooFn({ TZon: TZon });
    const timSupHea = timSupHeaFn({ TZon: TZon });
    const sysReq = sysReqFn({ VHotDucDis_flow: VHotDucDis_flow, uAftSupCoo: timSupCoo.yAftSup, uAftSupHea: timSupHea.yAftSup, uHea: conLoo.yHea, uHeaDam: setOve.yHeaDam, VHotDuc_flow_Set: damDuaSen.VHotDucDis_flow_Set });
    const ala = alaFn({ VHotDucDis_flow: VHotDucDis_flow, VActSet_flow: setOve.VSet_flow });

    return { VMinOA_flow: setPoi.VMinOA_flow, yHeaDam: setOve.yHeaDam, yCO2: minFlo.yCO2, yZonHeaTemResReq: sysReq.yZonHeaTemResReq, yLowFloAla: ala.yLowFloAla };
  }
}
