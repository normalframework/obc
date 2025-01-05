
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller
const controller_83ee0be5 = require("./Economizers/Controller");
const freezeprotection_67d5a0ee = require("./SetPoints/FreezeProtection");
const ahu_6e64e742 = require("./SetPoints/OutdoorAirFlow/ASHRAE62_1/AHU");
const ahu_862bd546 = require("./SetPoints/OutdoorAirFlow/Title24/AHU");
const plantrequests_13d6a7f1 = require("./SetPoints/PlantRequests");
const reliefdamper_38a1a99c = require("./SetPoints/ReliefDamper");
const relieffan_e48bf764 = require("./SetPoints/ReliefFan");
const returnfanairflowtracking_9d8c242a = require("./SetPoints/ReturnFanAirflowTracking");
const returnfandirectpressure_9647e213 = require("./SetPoints/ReturnFanDirectPressure");
const supplyfan_d6d95546 = require("./SetPoints/SupplyFan");
const supplysignals_3129df7e = require("./SetPoints/SupplySignals");
const supplytemperature_ac3caca7 = require("./SetPoints/SupplyTemperature");
const greaterthreshold_360fc6d4 = require("../../../../../CDL/Integers/GreaterThreshold");
const switch_45c83437 = require("../../../../../CDL/Integers/Switch");

module.exports = (
  {
		ashCliZon = 0,
		buiPreCon = 2,
		cooCoi = 1,
		delEntHis = 1000,
		delTimSupTem = 600,
		delTOutHis = 1,
		difFloSet = 0.1,
		disDel = 15,
		dpAbsMinOutDam = 5,
		dpBuiSet = 12,
		dpConTyp = Math.PI,
		dpDesMinOutDam = 20,
		ecoHigLimCon = 0,
		eneStd,
		fanSpeCon = Math.PI,
		freProHeaCoiCon = Math.PI,
		freSta = 1,
		have_ahuRelFan = true,
		have_CO2Sen,
		have_frePro = true,
		have_perZonRehBox,
		heaCoi = 1,
		hys = 0.005,
		ignReqSupTem = 2,
		supFanSpe_min = 0.1,
		iniFanSpe = supFanSpe_min,
		kDp = 1,
		kFanSpe = 0.1,
		kFrePro = 0.05,
		kMinOA = 0.03,
		kRelDam = 0.5,
		kRelFan = 1,
		kRetFan = 1,
		kVal = 0.05,
		maxResSupTem = -0.6,
		minHotWatReq = 2,
		minOAConTyp = Math.PI,
		minOADes = 0,
		minOutDamPhy_max = 1,
		minOutDamPhy_min,
		outDamPhy_max = 1,
		outDamPhy_min,
		p_rel_RetFan_max = 40,
		p_rel_RetFan_min = 2.4,
		pDelTim = 600,
		pIniSet = 120,
		pMaxRes = 32,
		pMaxSet = 1000,
		pMinSet = 25,
		pNumIgnReq = 2,
		posHys = 0.01,
		pResAmo = 15,
		pSamplePeriod = 120,
		pTriAmo = -12,
		relFanSpe_min = 0.1,
		resAmoSupTem = -0.2,
		retDamFulOpeTim = 180,
		retDamPhy_max = 1,
		retDamPhy_min,
		retFanCon = Math.PI,
		retFanSpe_max = 1,
		retFanSpe_min = 0.1,
		samPerSupTem = 120,
		supFanSpe_max = 1,
		TdDp = 0.1,
		TdFanSpe = 0.1,
		TdFrePro = 0.1,
		TdMinOA = 0.1,
		TdRetFan = 0.1,
		TdVal = 0.1,
		Thys = 0.25,
		TiDp = 0.5,
		TiFanSpe = 60,
		TiFrePro = 120,
		TiMinOA = 120,
		TiRetFan = 0.5,
		tit24CliZon = 0,
		TiVal = 600,
		TOut_max = 294.15,
		TOut_min = 289.15,
		triAmoSupTem = 0.1,
		TSupCoo_max = 291.15,
		TSupCoo_min = 285.15,
		TSupWarUpSetBac = 308.15,
		uCooCoi_min = 0.25,
		uCooMin = 0.25,
		uHeaCoi_max = -0.25,
		uHeaMax = -0.25,
		uRetDam_min = 0.5,
		VAbsOutAir_flow,
		valCon = Math.PI,
		VDesOutAir_flow,
		VDesTotOutAir_flow,
		venStd,
		VUncDesOutAir_flow,
		yMaxFrePro = 1,
		yMinFrePro,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.tit24OutAirSet
  const tit24OutAirSetFn = ahu_862bd546({ have_CO2Sen: have_CO2Sen, minOADes: minOADes, VAbsOutAir_flow: VAbsOutAir_flow, VDesOutAir_flow: VDesOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.conSupFan
  const conSupFanFn = supplyfan_d6d95546({ controllerType: fanSpeCon, delTim: pDelTim, have_perZonRehBox: have_perZonRehBox, iniSet: pIniSet, iniSpe: iniFanSpe, k: kFanSpe, maxRes: pMaxRes, maxSet: pMaxSet, maxSpe: supFanSpe_max, minSet: pMinSet, minSpe: supFanSpe_min, numIgnReq: pNumIgnReq, resAmo: pResAmo, samplePeriod: pSamplePeriod, Td: TdFanSpe, Ti: TiFanSpe, triAmo: pTriAmo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.conTSupSet
  const conTSupSetFn = supplytemperature_ac3caca7({ delTim: delTimSupTem, maxRes: maxResSupTem, numIgnReq: ignReqSupTem, resAmo: resAmoSupTem, samplePeriod: samPerSupTem, TOut_max: TOut_max, TOut_min: TOut_min, triAmo: triAmoSupTem, TSupCoo_max: TSupCoo_max, TSupCoo_min: TSupCoo_min, TSupWarUpSetBac: TSupWarUpSetBac });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.supSig
  const supSigFn = supplysignals_3129df7e({ controllerType: valCon, kTSup: kVal, TdTSup: TdVal, TiTSup: TiVal, uCoo_min: uCooCoi_min, uHea_max: uHeaCoi_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.ashOutAirSet
  const ashOutAirSetFn = ahu_6e64e742({ minOADes: minOADes, VDesTotOutAir_flow: VDesTotOutAir_flow, VUncDesOutAir_flow: VUncDesOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.ecoCon
  const ecoConFn = controller_83ee0be5({ ashCliZon: ashCliZon, buiPreCon: buiPreCon, delEntHis: delEntHis, delTOutHis: delTOutHis, disDel: disDel, dpAbsMinOutDam: dpAbsMinOutDam, dpConTyp: dpConTyp, dpDesMinOutDam: dpDesMinOutDam, ecoHigLimCon: ecoHigLimCon, eneStd: eneStd, have_CO2Sen: have_CO2Sen, kDp: kDp, kMinOA: kMinOA, minOAConTyp: minOAConTyp, minOADes: minOADes, minOutDamPhy_max: minOutDamPhy_max, minOutDamPhy_min: minOutDamPhy_min, minSpe: supFanSpe_min, outDamPhy_max: outDamPhy_max, outDamPhy_min: outDamPhy_min, retDamFulOpeTim: retDamFulOpeTim, retDamPhy_max: retDamPhy_max, retDamPhy_min: retDamPhy_min, TdDp: TdDp, TdMinOA: TdMinOA, TiDp: TiDp, TiMinOA: TiMinOA, tit24CliZon: tit24CliZon, uCooMin: uCooMin, uHeaMax: uHeaMax, uOutDamMax: (uHeaMax +uCooMin)/2, uRetDam_min: uRetDam_min, uRetDamMin: (uHeaMax +uCooMin)/2, venStd: venStd });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.retFanDpCon
  const retFanDpConFn = returnfandirectpressure_9647e213({ conTyp: retFanCon, disSpe_max: retFanSpe_max, disSpe_min: retFanSpe_min, dpBuiSet: dpBuiSet, k: kRetFan, p_rel_RetFan_max: p_rel_RetFan_max, p_rel_RetFan_min: p_rel_RetFan_min, Td: TdRetFan, Ti: TiRetFan });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.relFanCon
  const relFanConFn = relieffan_e48bf764({ dpBuiSet: dpBuiSet, hys: hys, k: kRelFan, relFanSpe_min: relFanSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.retFanAirTra
  const retFanAirTraFn = returnfanairflowtracking_9d8c242a({ conTyp: retFanCon, difFloSet: difFloSet, k: kRetFan, maxSpe: retFanSpe_max, minSpe: retFanSpe_min, Td: TdRetFan, Ti: TiRetFan });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.frePro
  const freProFn = freezeprotection_67d5a0ee({ buiPreCon: buiPreCon, cooCoi: cooCoi, freSta: freSta, have_frePro: have_frePro, heaCoi: heaCoi, heaCoiCon: freProHeaCoiCon, k: kFrePro, minHotWatReq: minHotWatReq, minOADes: minOADes, Td: TdFrePro, Thys: Thys, Ti: TiFrePro, yMax: yMaxFrePro, yMin: yMinFrePro });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.plaReq
  const plaReqFn = plantrequests_13d6a7f1({ cooCoi: cooCoi, heaCoi: heaCoi, posHys: posHys, Thys: Thys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.freProMod
  const freProModFn = greaterthreshold_360fc6d4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.intSwi
  const intSwiFn = switch_45c83437({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Controller.relDam
  const relDamFn = reliefdamper_38a1a99c({ dpBuiSet: dpBuiSet, k: kRelDam });

  return (
    { VSumZonPri_flow, uAhuOpeMod, TAirSup, u1SupFan, VSumZonDesMin_flow }
  ) => {
    const tit24OutAirSet = tit24OutAirSetFn({ VSumZonDesMin_flow: VSumZonDesMin_flow });
    const conSupFan = conSupFanFn({ uOpeMod: uAhuOpeMod });
    const conTSupSet = conTSupSetFn({ uOpeMod: uAhuOpeMod });
    const supSig = supSigFn({ TAirSupSet: conTSupSet.TAirSupSet, u1SupFan: u1SupFan });
    const ashOutAirSet = ashOutAirSetFn({ VSumZonPri_flow: VSumZonPri_flow });
    const ecoCon = ecoConFn({ effDesOutAir_normalized: tit24OutAirSet.effDesOutAir_normalized, uOpeMod: uAhuOpeMod, uSupFan: conSupFan.ySupFan, uTSup: supSig.uTSup, VOutMinSet_flow_normalized: ashOutAirSet.effOutAir_normalized });
    const retFanDpCon = retFanDpConFn({ u1SupFan: u1SupFan, u1MinOutAirDam: ecoCon.yEnaMinOut });
    const relFanCon = relFanConFn({ u1SupFan: u1SupFan });
    const retFanAirTra = retFanAirTraFn({ u1SupFan: u1SupFan });
    const frePro = freProFn({ TAirSup: TAirSup, uRetDam: ecoCon.yRetDam, uRelFan: relFanCon.yRelFan, uRetFan: retFanAirTra.yRetFan, uSupFan: conSupFan.ySupFan, uHeaCoi: supSig.yHeaCoi });
    const plaReq = plaReqFn({ TAirSup: TAirSup, TAirSupSet: conTSupSet.TAirSupSet, uHeaCoiSet: frePro.yHeaCoi });
    const freProMod = freProModFn({ u: frePro.yFreProSta });
    const intSwi = intSwiFn({ u1: frePro.yHotWatPlaReq, u2: freProMod.y, u3: plaReq.yHotWatPlaReq });
    const relDam = relDamFn({ u1SupFan: u1SupFan });

    return { dpDisSet: retFanDpCon.dpDisSet, TAirSupSet: conTSupSet.TAirSupSet, VEffAirOut_flow_min: ashOutAirSet.VEffAirOut_flow_min, ySupFan: frePro.ySupFan, yHotWatResReq: plaReq.yHotWatResReq, yDpBui: relFanCon.yDpBui, yHotWatPlaReq: intSwi.y, yRelDam: ecoCon.yRelDam };
  }
}
