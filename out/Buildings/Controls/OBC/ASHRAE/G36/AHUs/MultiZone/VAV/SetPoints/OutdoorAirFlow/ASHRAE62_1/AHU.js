
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU
const add_a5faf0f2 = require("../../../../../../../../CDL/Reals/Add");
const addparameter_26b0d2d7 = require("../../../../../../../../CDL/Reals/AddParameter");
const divide_52bbd688 = require("../../../../../../../../CDL/Reals/Divide");
const max_a5fb1db5 = require("../../../../../../../../CDL/Reals/Max");
const min_a5fb1ea3 = require("../../../../../../../../CDL/Reals/Min");
const multiplybyparameter_13a4f29f = require("../../../../../../../../CDL/Reals/MultiplyByParameter");
const constant_baefa089 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const subtract_029d2d63 = require("../../../../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		minOADes,
		VDesTotOutAir_flow,
		VUncDesOutAir_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.desOutAir
  const desOutAirFn = constant_baefa089({ k: VDesTotOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.add2
  const add2Fn = add_a5faf0f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.uncDesOutAir
  const uncDesOutAirFn = constant_baefa089({ k: VUncDesOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.min1
  const min1Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.gaiDivZer
  const gaiDivZerFn = multiplybyparameter_13a4f29f({ k: 0.001 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.max1
  const max1Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.div1
  const div1Fn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.addPar
  const addParFn = addparameter_26b0d2d7({ p: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.sysVenEff
  const sysVenEffFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.neaZer
  const neaZerFn = constant_baefa089({ k: 0.0001 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.max2
  const max2Fn = max_a5fb1db5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.div2
  const div2Fn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.min2
  const min2Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.norVOutMin
  const norVOutMinFn = divide_52bbd688({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.norVOut
  const norVOutFn = divide_52bbd688({});

  return (
    { VSumAdjAreBreZon_flow, VSumZonPri_flow, VAirOut_flow, uOutAirFra_max }
  ) => {
    const desOutAir = desOutAirFn({});
    const add2 = add2Fn({ u2: VSumAdjAreBreZon_flow });
    const uncDesOutAir = uncDesOutAirFn({});
    const min1 = min1Fn({ u1: add2.y, u2: uncDesOutAir.y });
    const gaiDivZer = gaiDivZerFn({ u: uncDesOutAir.y });
    const max1 = max1Fn({ u1: gaiDivZer.y, u2: VSumZonPri_flow });
    const div1 = div1Fn({ u1: min1.y, u2: max1.y });
    const addPar = addParFn({ u: div1.y });
    const sysVenEff = sysVenEffFn({ u1: addPar.y, u2: uOutAirFra_max });
    const neaZer = neaZerFn({});
    const max2 = max2Fn({ u1: sysVenEff.y, u2: neaZer.y });
    const div2 = div2Fn({ u1: min1.y, u2: max2.y });
    const min2 = min2Fn({ u1: desOutAir.y, u2: div2.y });
    const norVOutMin = norVOutMinFn({ u1: min2.y, u2: desOutAir.y });
    const norVOut = norVOutFn({ u1: VAirOut_flow, u2: desOutAir.y });

    return { effOutAir_normalized: norVOutMin.y, outAir_normalized: norVOut.y, VEffAirOut_flow_min: min2.y, VUncOutAir_flow: min1.y };
  }
}
