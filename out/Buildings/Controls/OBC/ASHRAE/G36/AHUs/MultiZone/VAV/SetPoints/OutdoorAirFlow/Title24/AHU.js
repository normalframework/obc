
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU
const divide_52bbd688 = require("../../../../../../../../CDL/Reals/Divide");
const line_196841c3 = require("../../../../../../../../CDL/Reals/Line");
const max_a5fb1db5 = require("../../../../../../../../CDL/Reals/Max");
const min_a5fb1ea3 = require("../../../../../../../../CDL/Reals/Min");
const multiplybyparameter_13a4f29f = require("../../../../../../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		have_CO2Sen,
		minOADes,
		VAbsOutAir_flow,
		VDesOutAir_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.absOutAir
  const absOutAirFn = constant_baefa089({ k: VAbsOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.min1
  const min1Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.neaZer
  const neaZerFn = constant_baefa089({ k: 0.0001 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.max2
  const max2Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.norVOutMin1
  const norVOutMin1Fn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.desOutAir
  const desOutAirFn = constant_baefa089({ k: VDesOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.min2
  const min2Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.max1
  const max1Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.norVOutMin
  const norVOutMinFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.gai
  const gaiFn = multiplybyparameter_13a4f29f({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.norVOut
  const norVOutFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.con
  const conFn = constant_baefa089({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.con1
  const con1Fn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.effOutAir
  const effOutAirFn = line_196841c3({ limitAbove: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.AHU.norVOutMin2
  const norVOutMin2Fn = divide_52bbd688({});

  return (
    { uCO2Loo_max, VSumZonAbsMin_flow, VSumZonDesMin_flow, VAirOut_flow }
  ) => {
    const absOutAir = absOutAirFn({});
    const min1 = min1Fn({ u1: absOutAir.y, u2: VSumZonAbsMin_flow });
    const neaZer = neaZerFn({});
    const max2 = max2Fn({ u1: absOutAir.y, u2: neaZer.y });
    const norVOutMin1 = norVOutMin1Fn({ u1: min1.y, u2: max2.y });
    const desOutAir = desOutAirFn({});
    const min2 = min2Fn({ u1: desOutAir.y, u2: VSumZonDesMin_flow });
    const max1 = max1Fn({ u1: desOutAir.y, u2: neaZer.y });
    const norVOutMin = norVOutMinFn({ u1: min2.y, u2: max1.y });
    const gai = gaiFn({ u: norVOutMin.y });
    const norVOut = norVOutFn({ u1: VAirOut_flow, u2: max1.y });
    const con = conFn({});
    const con1 = con1Fn({});
    const effOutAir = effOutAirFn({ f1: min1.y, f2: min2.y, u: uCO2Loo_max, x1: con.y, x2: con1.y });
    const norVOutMin2 = norVOutMin2Fn({ u1: effOutAir.y, u2: max1.y });

    return { effAbsOutAir_normalized: norVOutMin1.y, effDesOutAir_normalized: norVOutMin.y, effOutAir_normalized: gai.y, outAir_normalized: norVOut.y, VEffAbsOutAir_flow: min1.y, VEffDesOutAir_flow: min2.y };
  }
}
