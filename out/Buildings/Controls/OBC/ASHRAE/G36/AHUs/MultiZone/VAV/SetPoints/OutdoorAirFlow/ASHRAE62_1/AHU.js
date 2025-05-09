
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU
const add_53459d33 = require("../../../../../../../../CDL/Reals/Add");
const addparameter_2b4d5fb6 = require("../../../../../../../../CDL/Reals/AddParameter");
const divide_777f36a7 = require("../../../../../../../../CDL/Reals/Divide");
const max_5345c9f6 = require("../../../../../../../../CDL/Reals/Max");
const min_5345cae4 = require("../../../../../../../../CDL/Reals/Min");
const multiplybyparameter_8938fce0 = require("../../../../../../../../CDL/Reals/MultiplyByParameter");
const constant_d2aca5e8 = require("../../../../../../../../CDL/Reals/Sources/Constant");
const subtract_040901c2 = require("../../../../../../../../CDL/Reals/Subtract");

module.exports = (
  {
		minOADes,
		VDesTotOutAir_flow,
		VUncDesOutAir_flow,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.desOutAir
  const desOutAirFn = constant_d2aca5e8({ k: VDesTotOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.uncDesOutAir
  const uncDesOutAirFn = constant_d2aca5e8({ k: VUncDesOutAir_flow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.min1
  const min1Fn = min_5345cae4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.gaiDivZer
  const gaiDivZerFn = multiplybyparameter_8938fce0({ k: 0.001 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.max1
  const max1Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.div1
  const div1Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.addPar
  const addParFn = addparameter_2b4d5fb6({ p: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.sysVenEff
  const sysVenEffFn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.neaZer
  const neaZerFn = constant_d2aca5e8({ k: 0.0001 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.max2
  const max2Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.div2
  const div2Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.min2
  const min2Fn = min_5345cae4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.norVOutMin
  const norVOutMinFn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.AHU.norVOut
  const norVOutFn = divide_777f36a7({});

  return (
    { VSumAdjPopBreZon_flow, VSumAdjAreBreZon_flow, VSumZonPri_flow, VAirOut_flow, uOutAirFra_max }
  ) => {
    const desOutAir = desOutAirFn({});
    const add2 = add2Fn({ u1: VSumAdjPopBreZon_flow, u2: VSumAdjAreBreZon_flow });
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
