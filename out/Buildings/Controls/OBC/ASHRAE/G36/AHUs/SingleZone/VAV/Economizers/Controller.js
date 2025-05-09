
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Controller
const enable_ec618957 = require("./Subsequences/Enable");
const limits_f8128fec = require("./Subsequences/Limits");
const modulation_be86df50 = require("./Subsequences/Modulation");
const aireconomizerhighlimits_21bdaae6 = require("../../../../Generic/AirEconomizerHighLimits");

module.exports = (
  {
		ashCliZon = 0,
		controllerTypeMod = 1,
		delEntHys = 1000,
		delTOutHys = 1,
		ecoHigLimCon,
		eneStd,
		floHys = 0.01,
		have_heaCoi = true,
		kMod = 1,
		outDamDesFloMaxSpe = 0.8,
		outDamDesFloMinSpe = 0.9,
		outDamMinFloMaxSpe = 0.3,
		outDamMinFloMinSpe = 0.4,
		outDamPhy_max = 1,
		outDamPhy_min = 0,
		retDamPhy_max = 1,
		retDamPhy_min = 0,
		supFanSpe_max = 0.9,
		supFanSpe_min = 0.1,
		TdMod = 0.1,
		TiMod = 300,
		tit24CliZon = 0,
		uMax = 0.9,
		uMin = 0.1,
		VOutDes_flow = 2,
		VOutMin_flow = 1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Controller.ecoHigLim
  const ecoHigLimFn = aireconomizerhighlimits_21bdaae6({ ashCliZon: ashCliZon, ecoHigLimCon: ecoHigLimCon, eneStd: eneStd, tit24CliZon: tit24CliZon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Controller.damLim
  const damLimFn = limits_f8128fec({ floHys: floHys, outDamDesFloMaxSpe: outDamDesFloMaxSpe, outDamDesFloMinSpe: outDamDesFloMinSpe, outDamMinFloMaxSpe: outDamMinFloMaxSpe, outDamMinFloMinSpe: outDamMinFloMinSpe, outDamPhy_max: outDamPhy_max, outDamPhy_min: outDamPhy_min, supFanSpe_max: supFanSpe_max, supFanSpe_min: supFanSpe_min, VOutDes_flow: VOutDes_flow, VOutMin_flow: VOutMin_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Controller.enaDis
  const enaDisFn = enable_ec618957({ delEntHys: delEntHys, delTOutHys: delTOutHys, retDamPhy_max: retDamPhy_max, retDamPhy_min: retDamPhy_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.Economizers.Controller.mod
  const modFn = modulation_be86df50({ controllerType: controllerTypeMod, have_heaCoi: have_heaCoi, k: kMod, Td: TdMod, Ti: TiMod, uMax: uMax, uMin: uMin });

  return (
    { u1SupFan, uFreProSta, uOpeMod, uSupFan_actual, VOutMinSet_flow, hAirRet, TAirRet, hOut, TOut, uZonSta, TAirSup, TSupHeaEcoSet }
  ) => {
    const ecoHigLim = ecoHigLimFn({ hRet: hAirRet, TRet: TAirRet });
    const damLim = damLimFn({ u1SupFan: u1SupFan, uFreProSta: uFreProSta, uOpeMod: uOpeMod, uSupFan_actual: uSupFan_actual, VOutMinSet_flow: VOutMinSet_flow });
    const enaDis = enaDisFn({ hCut: ecoHigLim.hCut, hOut: hOut, TCut: ecoHigLim.TCut, TOut: TOut, u1SupFan: u1SupFan, uFreProSta: uFreProSta, uOutDam_max: damLim.yOutDam_max, uOutDam_min: damLim.yOutDam_min, uZonSta: uZonSta });
    const mod = modFn({ TSup: TAirSup, TSupHeaEcoSet: TSupHeaEcoSet, u1SupFan: u1SupFan, uOutDam_max: enaDis.yOutDam_max, uOutDam_min: damLim.yOutDam_min, uRetDam_max: enaDis.yRetDam_max, uRetDam_min: enaDis.yRetDam_min });

    return { yHeaCoi: mod.yHeaCoi, yOutDam: mod.yOutDam, yOutDam_min: damLim.yOutDam_min, yRetDam: mod.yRetDam };
  }
}
