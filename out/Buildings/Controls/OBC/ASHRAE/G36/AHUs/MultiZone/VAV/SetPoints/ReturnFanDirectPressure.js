
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const divide_52bbd688 = require("../../../../../../CDL/Reals/Divide");
const line_196841c3 = require("../../../../../../CDL/Reals/Line");
const movingaverage_08d08100 = require("../../../../../../CDL/Reals/MovingAverage");
const pid_a5fb25dc = require("../../../../../../CDL/Reals/PID");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		conTyp = 1,
		disSpe_max,
		disSpe_min,
		dpBuiSet = 12,
		k = 1,
		p_rel_RetFan_max = 40,
		p_rel_RetFan_min = 2.4,
		Td = 0.1,
		Ti = 0.5,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.retFanDisPreMin
  const retFanDisPreMinFn = constant_baefa089({ k: p_rel_RetFan_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.retFanDisPreMax
  const retFanDisPreMaxFn = constant_baefa089({ k: p_rel_RetFan_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.movMea
  const movMeaFn = movingaverage_08d08100({ delta: 300 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.dpBuiSetPoi
  const dpBuiSetPoiFn = constant_baefa089({ k: dpBuiSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.div
  const divFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.conOne
  const conOneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.conP
  const conPFn = pid_a5fb25dc({ controllerType: conTyp, k: k, Td: Td, Ti: Ti });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.con
  const conFn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.linRetFanStaPre
  const linRetFanStaPreFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.zer
  const zerFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.zer1
  const zer1Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.linExhAirDam
  const linExhAirDamFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.enaDam
  const enaDamFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.retFanSpeMin
  const retFanSpeMinFn = constant_baefa089({ k: disSpe_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.retFanSpeMax
  const retFanSpeMaxFn = constant_baefa089({ k: disSpe_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.linRetFanSpe
  const linRetFanSpeFn = line_196841c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.zer2
  const zer2Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.ReturnFanDirectPressure.swi2
  const swi2Fn = switch_6d141143({});

  return (
    { u1MinOutAirDam, u1SupFan, dpBui }
  ) => {
    const retFanDisPreMin = retFanDisPreMinFn({});
    const retFanDisPreMax = retFanDisPreMaxFn({});
    const movMea = movMeaFn({ u: dpBui });
    const dpBuiSetPoi = dpBuiSetPoiFn({});
    const div = divFn({ u1: movMea.y, u2: dpBuiSetPoi.y });
    const conOne = conOneFn({});
    const conP = conPFn({ u_m: div.y, u_s: conOne.y });
    const con = conFn({});
    const one = oneFn({});
    const linRetFanStaPre = linRetFanStaPreFn({ f1: retFanDisPreMin.y, f2: retFanDisPreMax.y, u: conP.y, x1: con.y, x2: one.y });
    const zer = zerFn({});
    const swi = swiFn({ u1: linRetFanStaPre.y, u2: u1SupFan, u3: zer.y });
    const zer1 = zer1Fn({});
    const linExhAirDam = linExhAirDamFn({ x1: zer1.y, f2: one.y, u: conP.y, x2: con.y });
    const enaDam = enaDamFn({ u1: u1MinOutAirDam, u2: u1SupFan });
    const swi1 = swi1Fn({ u1: linExhAirDam.y, u2: enaDam.y, u3: zer1.y });
    const retFanSpeMin = retFanSpeMinFn({});
    const retFanSpeMax = retFanSpeMaxFn({});
    const linRetFanSpe = linRetFanSpeFn({ f1: retFanSpeMin.y, f2: retFanSpeMax.y, u: linRetFanStaPre.y, x1: retFanDisPreMin.y, x2: retFanDisPreMax.y });
    const zer2 = zer2Fn({});
    const swi2 = swi2Fn({ u1: linRetFanSpe.y, u2: u1SupFan, u3: zer2.y });

    return { dpDisSet: swi.y, y1RetFan: u1SupFan, yDpBui: movMea.y, yRelDam: swi1.y, yRetFan: swi2.y };
  }
}
