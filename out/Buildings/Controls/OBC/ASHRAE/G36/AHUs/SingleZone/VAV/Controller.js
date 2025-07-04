
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller
const controller_89c9cbc4 = require("./Economizers/Controller");
const coolingcoil_0e24e38b = require("./SetPoints/CoolingCoil");
const freezeprotection_9800594d = require("./SetPoints/FreezeProtection");
const modeandsetpoints_487fe58e = require("./SetPoints/ModeAndSetPoints");
const plantrequests_c972e3f2 = require("./SetPoints/PlantRequests");
const reliefdamper_3e7d697b = require("./SetPoints/ReliefDamper");
const relieffan_dbe05be5 = require("./SetPoints/ReliefFan");
const returnfan_984731e6 = require("./SetPoints/ReturnFan");
const supply_408ce9ac = require("./SetPoints/Supply");
const zonestates_6a0c176c = require("../../../ThermalZones/ZoneStates");
const setpoints_3c8e6a49 = require("../../../VentilationZones/ASHRAE62_1/Setpoints");
const setpoints_aa6b5c6d = require("../../../VentilationZones/Title24/Setpoints");
const equal_2ac2bdd1 = require("../../../../../CDL/Integers/Equal");
const greaterthreshold_360fc6d4 = require("../../../../../CDL/Integers/GreaterThreshold");
const constant_8c5ba27d = require("../../../../../CDL/Integers/Sources/Constant");
const switch_45c83437 = require("../../../../../CDL/Integers/Switch");
const not_6d646018 = require("../../../../../CDL/Logical/Not");
const pidwithreset_1df6d9ad = require("../../../../../CDL/Reals/PIDWithReset");

module.exports = (
  {
		ashCliZon = 0,
		bouLim = 1,
		buiPreCon = 0,
		cooCoi = 1,
		cooCoiCon = 1,
		cooLooCon = 1,
		decTSetDem_1 = 0.5,
		decTSetDem_2 = 1,
		decTSetDem_3 = 2,
		delEntHys = 1000,
		delTOutHys = 1,
		dpBuiSet = 12,
		ecoHigLimCon = 0,
		ecoModCon = 1,
		eneStd,
		VOutMin_flow = 1,
		floHys = 0.01*VOutMin_flow,
		freHeaCoiCon = 1,
		freSta = 0,
		have_ahuRelFan = true,
		have_CO2Sen = true,
		have_frePro = true,
		have_locAdj = true,
		have_occSen,
		have_winSen,
		heaCoi = 1,
		heaLooCon = 1,
		ignDemLim = true,
		incTSetDem_1 = 0.5,
		incTSetDem_2 = 1,
		incTSetDem_3 = 2,
		kCoo = 0.1,
		kCooCoi = 0.1,
		kFreHea = 1,
		kHea = 0.1,
		kMod = 1,
		kRelFan = 1,
		looHys = 0.05,
		maxCooSpe = 1,
		maxHeaSpe = 1,
		minHotWatReq = 2,
		minSpe = 0.1,
		outDamDesFloMaxSpe = 0.8,
		outDamDesFloMinSpe = 0.9,
		outDamMinFloMaxSpe = 0.3,
		outDamMinFloMinSpe = 0.4,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		permit_occStandby = true,
		posHys = 0.01,
		preWarCooTim = 10800,
		relDam_max = 1,
		relDam_min = 0.1,
		relFanSpe_min = 0.1,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		sepAdj = true,
		speDif = -0.1,
		spePoiFou = 0.75,
		spePoiOne = 0.5,
		spePoiThr = 0.5,
		spePoiTwo = 0.25,
		supFanSpe_max = 0.9,
		supFanSpe_min = 0.1,
		TActCoo_max = 300.15,
		TActCoo_min = 295.15,
		TActHea_max = 295.15,
		TActHea_min = 291.15,
		TdCoo = 0.1,
		TdCooCoi = 0.1,
		TdFreHea = 0.1,
		TdHea = 0.1,
		TdMod = 0.1,
		temPoiFou = 0.75,
		temPoiOne = 0.5,
		temPoiThr = 0.5,
		temPoiTwo = 0.25,
		Thys = 0.25,
		TiCoo = 900,
		TiCooCoi = 900,
		TiFreHea = 0.5,
		TiHea = 900,
		TiMod = 300,
		tit24CliZon = 0,
		TSup_max = 303.15,
		TSup_min = 291.15,
		TSupDea_max = 297.15,
		TSupDea_min = 294.15,
		TSupDew_max = 290.15,
		TWinOpeCooSet = 322.15,
		TWinOpeHeaSet = 277.15,
		TZonFreProOff = 280.15,
		TZonFreProOn = 277.15,
		uHigh = 0.1,
		uLow = -0.1,
		uMax = 0.9,
		uMin = 0.1,
		VAreBreZon_flow = 0,
		VAreMin_flow = 0,
		venStd,
		VOccMin_flow = 0,
		VOutDes_flow = 2,
		VPopBreZon_flow = 0,
		VZonMin_flow = 0,
		yMaxFreHea = 1,
		yMinFreHea = 0,
		zonDisEff_cool = 1,
		zonDisEff_heat = 0.8,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.modSetPoi
  const modSetPoiFn = modeandsetpoints_487fe58e({ bouLim: bouLim, decTSetDem_1: decTSetDem_1, decTSetDem_2: decTSetDem_2, decTSetDem_3: decTSetDem_3, have_locAdj: have_locAdj, have_occSen: have_occSen, have_winSen: have_winSen, ignDemLim: ignDemLim, incTSetDem_1: incTSetDem_1, incTSetDem_2: incTSetDem_2, incTSetDem_3: incTSetDem_3, preWarCooTim: preWarCooTim, sepAdj: sepAdj, TActCoo_max: TActCoo_max, TActCoo_min: TActCoo_min, TActHea_max: TActHea_max, TActHea_min: TActHea_min, TWinOpeCooSet: TWinOpeCooSet, TWinOpeHeaSet: TWinOpeHeaSet, TZonFreProOff: TZonFreProOff, TZonFreProOn: TZonFreProOn, uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.conInt
  const conIntFn = constant_8c5ba27d({ k: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.switch
  const _switchFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.cooPI
  const cooPIFn = pidwithreset_1df6d9ad({ controllerType: cooLooCon, k: kCoo, reverseActing: false, Td: TdCoo, Ti: TiCoo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.heaPI
  const heaPIFn = pidwithreset_1df6d9ad({ controllerType: heaLooCon, k: kHea, Td: TdHea, Ti: TiHea });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.setPoiVAV
  const setPoiVAVFn = supply_408ce9ac({ looHys: looHys, maxCooSpe: maxCooSpe, maxHeaSpe: maxHeaSpe, minSpe: minSpe, spePoiFou: spePoiFou, spePoiOne: spePoiOne, spePoiThr: spePoiThr, spePoiTwo: spePoiTwo, temPoiFou: temPoiFou, temPoiOne: temPoiOne, temPoiThr: temPoiThr, temPoiTwo: temPoiTwo, TSup_max: TSup_max, TSup_min: TSup_min, TSupDea_max: TSupDea_max, TSupDea_min: TSupDea_min, TSupDew_max: TSupDew_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.relFanCon
  const relFanConFn = relieffan_dbe05be5({ dpBuiSet: dpBuiSet, k: kRelFan, relFanSpe_min: relFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.retFan
  const retFanFn = returnfan_984731e6({ speDif: speDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.zonSta
  const zonStaFn = zonestates_6a0c176c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.cooCoiVal
  const cooCoiValFn = coolingcoil_0e24e38b({ controllerTypeCooCoi: cooCoiCon, kCooCoi: kCooCoi, TdCooCoi: TdCooCoi, TiCooCoi: TiCooCoi });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.minFlo
  const minFloFn = setpoints_aa6b5c6d({ have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_SZVAV: true, have_winSen: have_winSen, VAreMin_flow: VAreMin_flow, VMin_flow: VZonMin_flow, VOccMin_flow: VOccMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.conEco
  const conEcoFn = controller_89c9cbc4({ ashCliZon: ashCliZon, controllerTypeMod: ecoModCon, delEntHys: delEntHys, delTOutHys: delTOutHys, ecoHigLimCon: ecoHigLimCon, eneStd: eneStd, floHys: floHys, kMod: kMod, outDamDesFloMaxSpe: outDamDesFloMaxSpe, outDamDesFloMinSpe: outDamDesFloMinSpe, outDamMinFloMaxSpe: outDamMinFloMaxSpe, outDamMinFloMinSpe: outDamMinFloMinSpe, outDamPhy_max: outDamPhy_max, outDamPhy_min: outDamPhy_min, retDamPhy_max: retDamPhy_max, retDamPhy_min: retDamPhy_min, supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, TdMod: TdMod, TiMod: TiMod, tit24CliZon: tit24CliZon, uMax: uMax, uMin: uMin, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.frePro
  const freProFn = freezeprotection_9800594d({ buiPreCon: buiPreCon, freSta: freSta, heaCoi: heaCoi, heaCoiCon: freHeaCoiCon, k: kFreHea, minHotWatReq: minHotWatReq, Td: TdFreHea, Thys: Thys, Ti: TiFreHea, yMax: yMaxFreHea, yMin: yMinFreHea });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.plaReq
  const plaReqFn = plantrequests_c972e3f2({ heaCoi: heaCoi, posHys: posHys, Thys: Thys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.freProMod
  const freProModFn = greaterthreshold_360fc6d4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.intSwi
  const intSwiFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.relDam
  const relDamFn = reliefdamper_3e7d697b({ posHys: posHys, relDam_max: relDam_max, relDam_min: relDam_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Controller.outAirSetPoi
  const outAirSetPoiFn = setpoints_3c8e6a49({ dTHys: Thys, have_CO2Sen: have_CO2Sen, have_occSen: have_occSen, have_SZVAV: true, have_winSen: have_winSen, permit_occStandby: permit_occStandby, VAreBreZon_flow: VAreBreZon_flow, VMin_flow: 0, VPopBreZon_flow: VPopBreZon_flow, zonDisEff_cool: zonDisEff_cool, zonDisEff_heat: zonDisEff_heat });

  return (
    { hAirRet, hOut, TAirRet, TAirSup, uSupFan_actual, TZon, TAirMix, u1FreSta, u1SofSwiRes, ppmCO2, ppmCO2Set, u1OccSen, u1Win, cooDowTim, cooSetAdj, heaSetAdj, setAdj, tNexOcc, TOccCooSet, TOccHeaSet, TUnoCooSet, TUnoHeaSet, u1Occ, uCooDemLimLev, uHeaDemLimLev, warUpTim, uCooCoi_actual, uHeaCoi_actual, uOutDam, dpBui }
  ) => {
    const modSetPoi = modSetPoiFn({ cooDowTim: cooDowTim, cooSetAdj: cooSetAdj, heaSetAdj: heaSetAdj, setAdj: setAdj, tNexOcc: tNexOcc, TOccCooSet: TOccCooSet, TOccHeaSet: TOccHeaSet, TUnoCooSet: TUnoCooSet, TUnoHeaSet: TUnoHeaSet, TZon: TZon, u1Occ: u1Occ, u1OccSen: u1OccSen, u1Win: u1Win, uCooDemLimLev: uCooDemLimLev, uHeaDemLimLev: uHeaDemLimLev, warUpTim: warUpTim });
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: modSetPoi.yOpeMod, u2: conInt.y });
    const _switch = _switchFn({ u: intEqu.y });
    const cooPI = cooPIFn({ trigger: _switch.y, u_m: TZon, u_s: modSetPoi.TCooSet });
    const heaPI = heaPIFn({ trigger: _switch.y, u_m: TZon, u_s: modSetPoi.THeaSet });
    const setPoiVAV = setPoiVAVFn({ TCooSet: modSetPoi.TCooSet, THeaSet: modSetPoi.THeaSet, TZon: TZon, uCoo: cooPI.y, uHea: heaPI.y, uOpeMod: modSetPoi.yOpeMod });
    const relFanCon = relFanConFn({ dpBui: dpBui, u1SupFan: _switch.y });
    const retFan = retFanFn({ u1SupFan: _switch.y, uSupFan_actual: uSupFan_actual });
    const zonSta = zonStaFn({ uCoo: cooPI.y, uHea: heaPI.y });
    const cooCoiVal = cooCoiValFn({ TAirSup: TAirSup, TSupCooSet: setPoiVAV.TSupCooSet, u1SupFan: _switch.y, uZonSta: zonSta.yZonSta });
    const minFlo = minFloFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, u1Occ: u1OccSen, u1Win: u1Win, uOpeMod: modSetPoi.yOpeMod });
    const conEco = conEcoFn({ hAirRet: hAirRet, hOut: hOut, TAirRet: TAirRet, TAirSup: TAirSup, TSupHeaEcoSet: setPoiVAV.TSupHeaEcoSet, u1SupFan: _switch.y, uOpeMod: modSetPoi.yOpeMod, uSupFan_actual: uSupFan_actual, uZonSta: zonSta.yZonSta, VOutMinSet_flow: minFlo.VMinOA_flow });
    const frePro = freProFn({ TAirMix: TAirMix, TAirSup: TAirSup, u1FreSta: u1FreSta, u1RelFan: relFanCon.y1RelFan, u1RetFan: retFan.y1RetFan, u1SofSwiRes: u1SofSwiRes, u1SupFan: _switch.y, uCooCoi: cooCoiVal.yCooCoi, uHeaCoi: conEco.yHeaCoi, uOutDam: conEco.yOutDam, uOutDamPosMin: conEco.yOutDam_min, uRelFan: relFanCon.yRelFan, uRetDam: conEco.yRetDam, uRetFan: retFan.yRetFan, uSupFan: setPoiVAV.y });
    const plaReq = plaReqFn({ TAirSup: TAirSup, TSupCoo: setPoiVAV.TSupCooSet, TSupHeaEco: setPoiVAV.TSupHeaEcoSet, uCooCoi_actual: uCooCoi_actual, uHeaCoi_actual: uHeaCoi_actual });
    const freProMod = freProModFn({ u: frePro.yFreProSta });
    const intSwi = intSwiFn({ u1: frePro.yHotWatPlaReq, u2: freProMod.y, u3: plaReq.yHotWatPlaReq });
    const relDam = relDamFn({ u1SupFan: _switch.y, uOutDam: uOutDam, uOutDam_min: conEco.yOutDam_min });
    const outAirSetPoi = outAirSetPoiFn({ ppmCO2: ppmCO2, ppmCO2Set: ppmCO2Set, TDis: TAirSup, TZon: TZon, u1Occ: u1OccSen, u1Win: u1Win, uOpeMod: modSetPoi.yOpeMod });

    return { TSupCooSet: setPoiVAV.TSupCooSet, TSupHeaEcoSet: setPoiVAV.TSupHeaEcoSet, TZonCooSet: modSetPoi.TCooSet, TZonHeaSet: modSetPoi.THeaSet, y1EneCHWPum: frePro.y1EneCHWPum, y1ExhDam: retFan.y1ExhDam, y1RelFan: frePro.y1RelFan, y1RetFan: frePro.y1RetFan, y1SupFan: frePro.y1SupFan, yAla: frePro.yAla, yChiPlaReq: plaReq.yChiPlaReq, yChiWatResReq: plaReq.yChiWatResReq, yCooCoi: frePro.yCooCoi, yHeaCoi: frePro.yHeaCoi, yHotWatPlaReq: intSwi.y, yHotWatResReq: plaReq.yHotWatResReq, yOutDam: frePro.yOutDam, yRelDam: relDam.yRelDam, yRelFan: frePro.yRelFan, yRetDam: frePro.yRetDam, yRetFan: frePro.yRetFan, ySupFan: frePro.ySupFan };
  }
}
