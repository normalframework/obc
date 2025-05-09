
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints
const setpoints_ac0e5167 = require("../../../../ThermalZones/Setpoints");
const operationmode_d69803fc = require("../../../../ZoneGroups/OperationMode");
const zonestatus_d9df93ac = require("../../../../ZoneGroups/ZoneStatus");
const booleantointeger_d87efb42 = require("../../../../../../CDL/Conversions/BooleanToInteger");
const not_6d646018 = require("../../../../../../CDL/Logical/Not");
const constant_48cc1015 = require("../../../../../../CDL/Logical/Sources/Constant");

module.exports = (
  {
		bouLim = 1,
		decTSetDem_1 = 0.5,
		decTSetDem_2 = 1,
		decTSetDem_3 = 2,
		have_locAdj,
		have_occSen,
		have_winSen,
		ignDemLim,
		incTSetDem_1 = 0.5,
		incTSetDem_2 = 1,
		incTSetDem_3 = 2,
		preWarCooTim = 10800,
		sepAdj,
		TActCoo_max = 300.15,
		TActCoo_min = 295.15,
		TActHea_max = 295.15,
		TActHea_min = 291.15,
		TWinOpeCooSet = 322.15,
		TWinOpeHeaSet = 277.15,
		TZonFreProOff = 280.15,
		TZonFreProOn = 277.15,
		uHigh = 0.1,
		uLow = -0.1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.occSta
  const occStaFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.zonSta
  const zonStaFn = zonestatus_d9df93ac({ bouLim: bouLim, have_winSen: have_winSen, uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.colZon
  const colZonFn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.hotZon
  const hotZonFn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.winOpe
  const winOpeFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.booToInt
  const booToIntFn = booleantointeger_d87efb42({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.opeModSel
  const opeModSelFn = operationmode_d69803fc({ nZon: 1, preWarCooTim: preWarCooTim, TZonFreProOff: TZonFreProOff, TZonFreProOn: TZonFreProOn });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.TZonSet
  const TZonSetFn = setpoints_ac0e5167({ decTSetDem_1: decTSetDem_1, decTSetDem_2: decTSetDem_2, decTSetDem_3: decTSetDem_3, have_locAdj: have_locAdj, have_occSen: have_occSen, have_winSen: have_winSen, ignDemLim: ignDemLim, incTSetDem_1: incTSetDem_1, incTSetDem_2: incTSetDem_2, incTSetDem_3: incTSetDem_3, sepAdj: sepAdj, TActCoo_max: TActCoo_max, TActCoo_min: TActCoo_min, TActHea_max: TActHea_max, TActHea_min: TActHea_min, TWinOpeCooSet: TWinOpeCooSet, TWinOpeHeaSet: TWinOpeHeaSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ModeAndSetPoints.winSta
  const winStaFn = constant_48cc1015({ k: true });

  return (
    { tNexOcc, TZon, u1Occ, cooSetAdj, heaSetAdj, setAdj, TOccCooSet, TOccHeaSet, TUnoCooSet, TUnoHeaSet, u1Win, uCooDemLimLev, uHeaDemLimLev, cooDowTim, warUpTim }
  ) => {
    const occSta = occStaFn({});
    const zonSta = zonStaFn({ cooDowTim: cooDowTim, TOccCooSet: TOccCooSet, TOccHeaSet: TOccHeaSet, TUnoCooSet: TUnoCooSet, TUnoHeaSet: TUnoHeaSet, TZon: TZon, u1Win: u1Win, warUpTim: warUpTim });
    const colZon = colZonFn({ u: zonSta.yUnoHeaHig });
    const hotZon = hotZonFn({ u: zonSta.yHigUnoCoo });
    const winOpe = winOpeFn({ u: u1Win });
    const booToInt = booToIntFn({ u: winOpe.y });
    const opeModSel = opeModSelFn({ maxCooDowTim: zonSta.yCooTim, maxWarUpTim: zonSta.yWarTim, tNexOcc: tNexOcc, totColZon: colZon.y, totHotZon: hotZon.y, TZonMin: TZon, u1EndSetBac: zonSta.yEndSetBac, u1EndSetUp: zonSta.yEndSetUp, u1HigOccCoo: zonSta.yHigOccCoo, u1Occ: u1Occ, u1OccHeaHig: zonSta.yOccHeaHig, u1SetBac: zonSta.yUnoHeaHig, u1SetUp: zonSta.yHigUnoCoo, uOpeWin: booToInt.y });
    const TZonSet = TZonSetFn({ cooSetAdj: cooSetAdj, heaSetAdj: heaSetAdj, setAdj: setAdj, TOccCooSet: TOccCooSet, TOccHeaSet: TOccHeaSet, TUnoCooSet: TUnoCooSet, TUnoHeaSet: TUnoHeaSet, u1Occ: occSta.y, u1Win: u1Win, uCooDemLimLev: uCooDemLimLev, uHeaDemLimLev: uHeaDemLimLev, uOpeMod: opeModSel.yOpeMod });
    const winSta = winStaFn({});

    return { TCooSet: TZonSet.TCooSet, THeaSet: TZonSet.THeaSet, yOpeMod: opeModSel.yOpeMod };
  }
}
