
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature
const trimandrespond_2d925ed7 = require("../../../../Generic/TrimAndRespond");
const equal_2ac2bdd1 = require("../../../../../../CDL/Integers/Equal");
const greaterthreshold_360fc6d4 = require("../../../../../../CDL/Integers/GreaterThreshold");
const lessthreshold_95ab886f = require("../../../../../../CDL/Integers/LessThreshold");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const line_196841c3 = require("../../../../../../CDL/Reals/Line");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");
const constant_e1d6aa0a = require("../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		delTim = 600,
		TSupCoo_max = 291.15,
		iniSet = TSupCoo_max,
		maxRes = -0.6,
		maxSet = TSupCoo_max,
		TSupCoo_min = 285.15,
		minSet = TSupCoo_min,
		numIgnReq = 2,
		resAmo = -0.2,
		samplePeriod = 120,
		TDeaBan = 273.15 +26,
		TOut_max = 294.15,
		TOut_min = 289.15,
		triAmo = 0.1,
		TSupWarUpSetBac = 308.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.supTemWarUpSetBac
  const supTemWarUpSetBacFn = constant_baefa089({ k: TSupWarUpSetBac });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.intLesThr1
  const intLesThr1Fn = lessthreshold_95ab886f({ t: 6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.intGreThr1
  const intGreThr1Fn = greaterthreshold_360fc6d4({ t: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.minSupTem
  const minSupTemFn = constant_baefa089({ k: TSupCoo_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.cooDowMod
  const cooDowModFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.maxSupTemRes
  const maxSupTemResFn = trimandrespond_2d925ed7({ delTim: delTim, iniSet: iniSet, maxRes: maxRes, maxSet: maxSet, minSet: minSet, numIgnReq: numIgnReq, resAmo: resAmo, samplePeriod: samplePeriod, triAmo: triAmo });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.minOutTem
  const minOutTemFn = constant_baefa089({ k: TOut_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.maxOutTem
  const maxOutTemFn = constant_baefa089({ k: TOut_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.lin
  const linFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.intLesThr2
  const intLesThr2Fn = lessthreshold_95ab886f({ t: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.intGreThr2
  const intGreThr2Fn = greaterthreshold_360fc6d4({ t: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.TDea
  const TDeaFn = constant_e1d6aa0a({ k: TDeaBan });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.swi4
  const swi4Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplyTemperature.swi3
  const swi3Fn = switch_6d141143({});

  return (
    { uOpeMod, TOut, uZonTemResReq, u1SupFan }
  ) => {
    const supTemWarUpSetBac = supTemWarUpSetBacFn({});
    const intLesThr1 = intLesThr1Fn({ u: uOpeMod });
    const intGreThr1 = intGreThr1Fn({ u: uOpeMod });
    const and1 = and1Fn({ u1: intLesThr1.y, u2: intGreThr1.y });
    const minSupTem = minSupTemFn({});
    const cooDowMod = cooDowModFn({});
    const intEqu = intEquFn({ u1: uOpeMod, u2: cooDowMod.y });
    const maxSupTemRes = maxSupTemResFn({ numOfReq: uZonTemResReq, uDevSta: u1SupFan });
    const minOutTem = minOutTemFn({});
    const maxOutTem = maxOutTemFn({});
    const lin = linFn({ f1: maxSupTemRes.y, f2: minSupTem.y, u: TOut, x1: minOutTem.y, x2: maxOutTem.y });
    const intLesThr2 = intLesThr2Fn({ u: uOpeMod });
    const intGreThr2 = intGreThr2Fn({ u: uOpeMod });
    const and2 = and2Fn({ u1: intLesThr2.y, u2: intGreThr2.y });
    const TDea = TDeaFn({});
    const swi4 = swi4Fn({ u1: lin.y, u2: and2.y, u3: TDea.y });
    const swi2 = swi2Fn({ u1: minSupTem.y, u2: intEqu.y, u3: swi4.y });
    const swi1 = swi1Fn({ u1: supTemWarUpSetBac.y, u2: and1.y, u3: swi2.y });
    const swi3 = swi3Fn({ u1: swi1.y, u2: u1SupFan, u3: TDea.y });

    return { TAirSupSet: swi3.y };
  }
}
