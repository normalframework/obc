
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_743642d1 = require("./Subsequences/ActiveAirFlow");
const alarms_1715c203 = require("./Subsequences/Alarms");
const dampersdualsensors_6f7061b8 = require("./Subsequences/DampersDualSensors");
const damperssinglesensors_8adb6dac = require("./Subsequences/DampersSingleSensors");
const overrides_6b6288c6 = require("./Subsequences/Overrides");
const systemrequests_4e0b37d4 = require("./Subsequences/SystemRequests");
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
		have_duaSen,
		have_occSen = true,
		have_winSen = true,
		iniCooDam = 0.01,
		iniDam = 0.01,
		iniHeaDam = 0.01,
		kCooCon = 0.1,
		kDam = 0.5,
		kHeaCon = 0.1,
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
		thrTemDif = 3,
		TiCooCon = 900,
		TiDam = 300,
		TiHeaCon = 900,
		timChe = 30,
		twoTemDif = 2,
		valCloTim = 900,
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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.actAirSet
  const actAirSetFn = activeairflow_743642d1({ VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.damDuaSen
  const damDuaSenFn = dampersdualsensors_6f7061b8({ controllerTypeDam: controllerTypeDam, dTHys: dTHys, iniDam: iniDam, kDam: kDam, looHys: looHys, samplePeriod: samplePeriod, TdDam: TdDam, TiDam: TiDam, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.setOve
  const setOveFn = overrides_6b6288c6({ VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.damSinSen
  const damSinSenFn = damperssinglesensors_8adb6dac({ controllerTypeDam: controllerTypeDam, iniDam: iniDam, kDam: kDam, looHys: looHys, samplePeriod: samplePeriod, TdDam: TdDam, TiDam: TiDam, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.timSupCoo
  const timSupCooFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.timSupHea
  const timSupHeaFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.sysReq
  const sysReqFn = systemrequests_4e0b37d4({ damPosHys: damPosHys, dTHys: dTHys, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, have_duaSen: have_duaSen, looHys: looHys, thrTemDif: thrTemDif, twoTemDif: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctSnapActing.Controller.ala
  const alaFn = alarms_1715c203({ damPosHys: damPosHys, fanOffTim: fanOffTim, floHys: floHys, have_duaSen: have_duaSen, leaFloTim: leaFloTim, lowFloTim: lowFloTim, staPreMul: staPreMul, staTim: staTim, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });

  return (
    { uOpeMod, VHotDucDis_flow, TZon, VDis_flow, oveHeaDamPos }
  ) => {
    const setPoi = setPoiFn({ uOpeMod: uOpeMod });
    const conLoo = conLooFn({ TZon: TZon });
    const minFlo = minFloFn({ uOpeMod: uOpeMod });
    const actAirSet = actAirSetFn({ uOpeMod: uOpeMod, VOccMin_flow: minFlo.VOccZonMin_flow });
    const damDuaSen = damDuaSenFn({ VHotDucDis_flow: VHotDucDis_flow, uHea: conLoo.yHea, VActMin_flow: actAirSet.VActMin_flow });
    const setOve = setOveFn({ oveHeaDamPos: oveHeaDamPos, VActSet_flow: damDuaSen.VDis_flow_Set });
    const damSinSen = damSinSenFn({ VDis_flow: VDis_flow, uHea: conLoo.yHea, VActMin_flow: actAirSet.VActMin_flow });
    const timSupCoo = timSupCooFn({ TZon: TZon });
    const timSupHea = timSupHeaFn({ TZon: TZon });
    const sysReq = sysReqFn({ VHotDucDis_flow: VDis_flow, u1HeaDam: damSinSen.y1HeaDam, uAftSupCoo: timSupCoo.yAftSup, uAftSupHea: timSupHea.yAftSup, uHea: conLoo.yHea, uHeaDam: setOve.yHeaDam, VHotDuc_flow_Set: damDuaSen.VDis_flow_Set });
    const ala = alaFn({ VHotDucDis_flow: VHotDucDis_flow, VActSet_flow: setOve.VSet_flow });

    return { VMinOA_flow: setPoi.VMinOA_flow, yHeaDam: setOve.yHeaDam, yCO2: minFlo.yCO2, yZonHeaTemResReq: sysReq.yZonHeaTemResReq, yLowFloAla: ala.yLowFloAla };
  }
}
