
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller
const timesuppression_ee14a4af = require("../../Generic/TimeSuppression");
const activeairflow_536f9d31 = require("./Subsequences/ActiveAirFlow");
const alarms_4e6353a3 = require("./Subsequences/Alarms");
const dampers_0a9c9745 = require("./Subsequences/Dampers");
const overrides_17281326 = require("./Subsequences/Overrides");
const systemrequests_55fd2974 = require("./Subsequences/SystemRequests");
const controlloops_b2cc0610 = require("../../ThermalZones/ControlLoops");
const setpoints_3c8e6a49 = require("../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../VentilationZones/Title24/Setpoints");
const add_a5faf0f2 = require("../../../../CDL/Reals/Add");
const greater_b1da53cb = require("../../../../CDL/Reals/Greater");
const constant_baefa089 = require("../../../../CDL/Reals/Sources/Constant");
const assert_078ec840 = require("../../../../CDL/Utilities/Assert");

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
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.setPoi
  const setPoiFn = setpoints_3c8e6a49({ dTHys: dTHys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.conLoo
  const conLooFn = controlloops_b2cc0610({ dTHys: dTHys, kCooCon: kCooCon, kHeaCon: kHeaCon, looHys: looHys, TiCooCon: TiCooCon, TiHeaCon: TiHeaCon, timChe: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_typTerUni: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VCooMax_flow: VCooMax_flow, VMin_flow: VMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.actAirSet
  const actAirSetFn = activeairflow_536f9d31({ floHys: floHys, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.damDuaSen
  const damDuaSenFn = dampers_0a9c9745({ controllerTypeDam: controllerTypeDam, dTHys: dTHys, iniDam: iniDam, kDam: kDam, looHys: looHys, TdDam: TdDam, TiDam: TiDam, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.setOve
  const setOveFn = overrides_17281326({ VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow, VMin_flow: VMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.timSupCoo
  const timSupCooFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.timSupHea
  const timSupHeaFn = timesuppression_ee14a4af({ chaRat: chaRat, dTHys: dTHys, maxTim: maxSupTim, samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.sysReq
  const sysReqFn = systemrequests_55fd2974({ damPosHys: damPosHys, dTHys: dTHys, durTimFlo: durTimFlo, durTimTem: durTimTem, floHys: floHys, looHys: looHys, thrTemDif: thrTemDif, twoTemDif: twoTemDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.ala
  const alaFn = alarms_4e6353a3({ damPosHys: damPosHys, fanOffTim: fanOffTim, floHys: floHys, leaFloTim: leaFloTim, lowFloTim: lowFloTim, staPreMul: staPreMul, staTim: staTim, VCooMax_flow: VCooMax_flow, VHeaMax_flow: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.cooMax
  const cooMaxFn = constant_baefa089({ k: VCooMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.heaMax
  const heaMaxFn = constant_baefa089({ k: VHeaMax_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.gre
  const greFn = greater_b1da53cb({ h: floHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.DualDuctColdDuctMin.Controller.assMes
  const assMesFn = assert_078ec840({ message: "Warning: the sum of minimum flow and heating maximum flow is greater than the cooling maximum flow." });

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
    const cooMax = cooMaxFn({});
    const heaMax = heaMaxFn({});
    const add2 = add2Fn({ u1: heaMax.y, u2: minFlo.VOccZonMin_flow });
    const gre = greFn({ u1: cooMax.y, u2: add2.y });
    const assMes = assMesFn({ u: gre.y });

    return { VMinOA_flow: setPoi.VMinOA_flow, yHeaDam: setOve.yHeaDam, yCO2: minFlo.yCO2, yZonHeaTemResReq: sysReq.yZonHeaTemResReq, yLowFloAla: ala.yLowFloAla };
  }
}
