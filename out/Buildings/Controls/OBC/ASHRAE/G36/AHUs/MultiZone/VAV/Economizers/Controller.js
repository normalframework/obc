
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller
const enable_f47cde56 = require("./Subsequences/Enable");
const common_c4e0886e = require("./Subsequences/Limits/Common");
const separatewithafms_3799e557 = require("./Subsequences/Limits/SeparateWithAFMS");
const separatewithdp_bf0f1458 = require("./Subsequences/Limits/SeparateWithDP");
const reliefs_6fffe878 = require("./Subsequences/Modulations/Reliefs");
const returnfan_2c0de3b9 = require("./Subsequences/Modulations/ReturnFan");
const aireconomizerhighlimits_21bdaae6 = require("../../../../Generic/AirEconomizerHighLimits");

module.exports = (
  {
		ashCliZon = 0,
		buiPreCon,
		delEntHis = 1000,
		delTOutHis = 1,
		disDel = 15,
		dpAbsMinOutDam = 5,
		dpConTyp = 3,
		dpDesMinOutDam = 20,
		ecoHigLimCon,
		eneStd,
		have_CO2Sen,
		kDp = 1,
		kMinOA = 1,
		minOAConTyp = 1,
		minOADes,
		minOutDamPhy_max = 1,
		minOutDamPhy_min = 0,
		minSpe = 0.1,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		retDamFulOpeTim = 180,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		TdDp = 0.1,
		TdMinOA = 0.1,
		TiDp = 0.5,
		TiMinOA = 0.5,
		tit24CliZon = 0,
		uCooMin = 0.25,
		uHeaMax = -0.25,
		uOutDamMax = (uHeaMax +uCooMin)/2,
		uRetDam_min = 0.5,
		uRetDamMin = (uHeaMax +uCooMin)/2,
		venStd = 0,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.ecoHigLim
  const ecoHigLimFn = aireconomizerhighlimits_21bdaae6({ ashCliZon: ashCliZon, ecoHigLimCon: ecoHigLimCon, eneStd: eneStd, tit24CliZon: tit24CliZon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.damLim
  const damLimFn = common_c4e0886e({ controllerType: minOAConTyp, k: kMinOA, outDamPhy_max: outDamPhy_max, outDamPhy_min: outDamPhy_min, retDamPhy_max: retDamPhy_max, retDamPhy_min: retDamPhy_min, Td: TdMinOA, Ti: TiMinOA, uRetDam_min: uRetDam_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.enaDis
  const enaDisFn = enable_f47cde56({ delEntHis: delEntHis, delTOutHis: delTOutHis, disDel: disDel, retDamFulOpeTim: retDamFulOpeTim });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.modRel
  const modRelFn = reliefs_6fffe878({ uMax: uCooMin, uMin: uHeaMax, uOutDamMax: uOutDamMax, uRetDamMin: uRetDamMin });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.sepDp
  const sepDpFn = separatewithdp_bf0f1458({ dpAbsMinOutDam: dpAbsMinOutDam, dpCon: dpConTyp, dpDesMinOutDam: dpDesMinOutDam, have_CO2Sen: have_CO2Sen, kDp: kDp, minSpe: minSpe, outDamPhy_max: outDamPhy_max, outDamPhy_min: outDamPhy_min, retDamPhy_max: retDamPhy_max, retDamPhy_min: retDamPhy_min, TdDp: TdDp, TiDp: TiDp, venStd: venStd });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.sepAFMS
  const sepAFMSFn = separatewithafms_3799e557({ kMinOA: kMinOA, minOAConTyp: minOAConTyp, minOutDamPhy_max: minOutDamPhy_max, minOutDamPhy_min: minOutDamPhy_min, minSpe: minSpe, outDamPhy_max: outDamPhy_max, outDamPhy_min: outDamPhy_min, retDamPhy_max: retDamPhy_max, retDamPhy_min: retDamPhy_min, TdMinOA: TdMinOA, TiMinOA: TiMinOA });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.Economizers.Controller.modRet
  const modRetFn = returnfan_2c0de3b9({ uMax: uCooMin, uMin: uHeaMax });

  return (
    { u1SupFan, uOpeMod, VOut_flow_normalized, VOutMinSet_flow_normalized, hAirRet, TAirRet, hAirOut, TOut, uFreProSta, uTSup, uSupFan, dpMinOutDam, effAbsOutAir_normalized, effDesOutAir_normalized, uCO2Loo_max }
  ) => {
    const ecoHigLim = ecoHigLimFn({ hRet: hAirRet, TRet: TAirRet });
    const damLim = damLimFn({ u1SupFan: u1SupFan, uOpeMod: uOpeMod, VOut_flow_normalized: VOut_flow_normalized, VOutMinSet_flow_normalized: VOutMinSet_flow_normalized });
    const enaDis = enaDisFn({ hOut: hAirOut, hOutCut: ecoHigLim.hCut, TOut: TOut, TOutCut: ecoHigLim.TCut, u1SupFan: u1SupFan, uFreProSta: uFreProSta, uOutDam_max: damLim.yOutDam_max, uOutDam_min: damLim.yOutDam_min, uRetDam_max: damLim.yRetDam_max, uRetDam_min: damLim.yRetDam_min, uRetDamPhy_max: damLim.yRetDamPhy_max });
    const modRel = modRelFn({ uOutDam_max: enaDis.yOutDam_max, uOutDam_min: damLim.yOutDam_min, uRetDam_max: enaDis.yRetDam_max, uRetDam_min: enaDis.yRetDam_min, uTSup: uTSup });
    const sepDp = sepDpFn({ dpMinOutDam: dpMinOutDam, effAbsOutAir_normalized: effAbsOutAir_normalized, effDesOutAir_normalized: effDesOutAir_normalized, u1SupFan: u1SupFan, uCO2Loo_max: uCO2Loo_max, uOpeMod: uOpeMod, uOutDam: modRel.yOutDam, uSupFan: uSupFan, VOutMinSet_flow_normalized: VOutMinSet_flow_normalized });
    const sepAFMS = sepAFMSFn({ u1SupFan: u1SupFan, uOpeMod: uOpeMod, uOutDam: modRel.yOutDam, uSupFan: uSupFan, VOut_flow_normalized: VOut_flow_normalized, VOutMinSet_flow_normalized: VOutMinSet_flow_normalized });
    const modRet = modRetFn({ uRetDam_max: enaDis.yRetDam_max, uRetDam_min: enaDis.yRetDam_min, uTSup: uTSup });

    return { y1MinOutDam: sepDp.y1MinOutDam, yEnaMinOut: damLim.yEnaMinOut, yMinOutDam: sepAFMS.yMinOutDam, yOutDam: modRel.yOutDam, yOutDam_min: damLim.yOutDam_min, yRelDam: modRet.yRelDam, yRetDam: modRel.yRetDam };
  }
}
