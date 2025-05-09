
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan
const trimandrespond_2d925ed7 = require("../../../../Generic/TrimAndRespond");
const firstorderhold_7b583ddc = require("../../../../../../CDL/Discrete/FirstOrderHold");
const equal_2ac2bdd1 = require("../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const or_e27f1bfe = require("../../../../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../../../../CDL/Logical/Sources/Constant");
const divide_52bbd688 = require("../../../../../../CDL/Reals/Divide");
const pidwithreset_1df6d9ad = require("../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerType = 1,
		delTim = 600,
		have_perZonRehBox,
		iniSet = 120,
		iniSpe = 0.1,
		k = 0.1,
		maxRes = 32,
		maxSet,
		maxSpe = 1,
		minSet = 25,
		minSpe = 0.1,
		numIgnReq = 2,
		resAmo = 15,
		samplePeriod = 120,
		Td = 0.1,
		Ti = 60,
		triAmo = -12,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.conInt2
  const conInt2Fn = constant_8c5ba27d({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.intEqu2
  const intEqu2Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.conInt
  const conIntFn = constant_8c5ba27d({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.conInt1
  const conInt1Fn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.intEqu1
  const intEqu1Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.con
  const conFn = constant_48cc1015({ k: false });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.gaiNor
  const gaiNorFn = constant_baefa089({ k: maxSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.norPMea
  const norPMeaFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.staPreSetRes
  const staPreSetResFn = trimandrespond_2d925ed7({ delTim: delTim, iniSet: iniSet, maxRes: maxRes, maxSet: maxSet, minSet: minSet, numIgnReq: numIgnReq, resAmo: resAmo, samplePeriod: samplePeriod, triAmo: triAmo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.firOrdHol
  const firOrdHolFn = firstorderhold_7b583ddc({ samplePeriod: samplePeriod });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.norPSet
  const norPSetFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.conSpe
  const conSpeFn = pidwithreset_1df6d9ad({ controllerType: controllerType, k: k, Td: Td, Ti: Ti, y_reset: iniSpe, yMax: maxSpe, yMin: minSpe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.zerSpe
  const zerSpeFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.conInt3
  const conInt3Fn = constant_8c5ba27d({ k: 5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.intEqu3
  const intEqu3Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.conInt4
  const conInt4Fn = constant_8c5ba27d({ k: 4 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.intEqu4
  const intEqu4Fn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyFan.or2
  const or2Fn = or_e27f1bfe({});

  return (
    { uOpeMod, dpDuc, uZonPreResReq }
  ) => {
    const conInt2 = conInt2Fn({});
    const intEqu2 = intEqu2Fn({ u1: uOpeMod, u2: conInt2.y });
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: uOpeMod, u2: conInt.y });
    const conInt1 = conInt1Fn({});
    const intEqu1 = intEqu1Fn({ u1: uOpeMod, u2: conInt1.y });
    const or3 = or3Fn({ u1: intEqu.y, u2: intEqu1.y });
    const or4 = or4Fn({ u1: intEqu2.y, u2: or3.y });
    const con = conFn({});
    const or1 = or1Fn({ u1: or4.y, u2: con.y });
    const gaiNor = gaiNorFn({});
    const norPMea = norPMeaFn({ u1: dpDuc, u2: gaiNor.y });
    const staPreSetRes = staPreSetResFn({ numOfReq: uZonPreResReq, uDevSta: or1.y });
    const firOrdHol = firOrdHolFn({ u: staPreSetRes.y });
    const norPSet = norPSetFn({ u1: firOrdHol.y, u2: gaiNor.y });
    const conSpe = conSpeFn({ trigger: or1.y, u_m: norPMea.y, u_s: norPSet.y });
    const zerSpe = zerSpeFn({});
    const swi = swiFn({ u1: conSpe.y, u2: or1.y, u3: zerSpe.y });
    const conInt3 = conInt3Fn({});
    const intEqu3 = intEqu3Fn({ u1: uOpeMod, u2: conInt3.y });
    const conInt4 = conInt4Fn({});
    const intEqu4 = intEqu4Fn({ u1: uOpeMod, u2: conInt4.y });
    const or2 = or2Fn({ u1: intEqu3.y, u2: intEqu4.y });

    return { y1SupFan: or1.y, ySupFan: swi.y };
  }
}
