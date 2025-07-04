
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone
const booleantoreal_552dc85b = require("../../../../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../../../../CDL/Integers/Sources/Constant");
const divide_777f36a7 = require("../../../../../../../../CDL/Reals/Divide");
const matrixgain_aca2820e = require("../../../../../../../../CDL/Reals/MatrixGain");
const max_5345c9f6 = require("../../../../../../../../CDL/Reals/Max");
const min_5345cae4 = require("../../../../../../../../CDL/Reals/Min");
const multimax_a5ce0819 = require("../../../../../../../../CDL/Reals/MultiMax");
const multisum_a5ce2100 = require("../../../../../../../../CDL/Reals/MultiSum");
const multiply_a5ce8cd2 = require("../../../../../../../../CDL/Reals/Multiply");
const constant_d2aca5e8 = require("../../../../../../../../CDL/Reals/Sources/Constant");

module.exports = (
  {
		nGro,
		nZon,
		zonGroMat,
		zonGroMatTra,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.occMod
  const occModFn = constant_01efacbe({ k: "fill(Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied,nGro)" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.intEqu1
  const intEqu1Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.booToRea
  const booToReaFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.groFlo3
  const groFlo3Fn = matrixgain_aca2820e({ K: zonGroMatTra });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.min1
  const min1Fn = min_5345cae4({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.neaZer
  const neaZerFn = constant_d2aca5e8({ k: "fill(0.0001,nZon)" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.max2
  const max2Fn = max_5345c9f6({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.div1
  const div1Fn = divide_777f36a7({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mul3
  const mul3Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mulMax
  const mulMaxFn = multimax_a5ce0819({ nin: nZon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.groFlo1
  const groFlo1Fn = matrixgain_aca2820e({ K: zonGroMat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mulSum1
  const mulSum1Fn = multisum_a5ce2100({ nin: nGro });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.groFlo
  const groFloFn = matrixgain_aca2820e({ K: zonGroMat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mul
  const mulFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mulSum
  const mulSumFn = multisum_a5ce2100({ nin: nGro });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.groFlo2
  const groFlo2Fn = matrixgain_aca2820e({ K: zonGroMat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mul2
  const mul2Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.ASHRAE62_1.SumZone.mulSum2
  const mulSum2Fn = multisum_a5ce2100({ nin: nGro });

  return (
    { VAdjPopBreZon_flow, VAdjAreBreZon_flow, VZonPri_flow, uOpeMod, VMinOA_flow }
  ) => {
    const occMod = occModFn({});
    const intEqu1 = intEqu1Fn({ u1: uOpeMod, u2: occMod.y });
    const booToRea = booToReaFn({ u: intEqu1.y });
    const groFlo3 = groFlo3Fn({ u: booToRea.y });
    const min1 = min1Fn({ u1: VZonPri_flow, u2: VMinOA_flow });
    const neaZer = neaZerFn({});
    const max2 = max2Fn({ u1: VZonPri_flow, u2: neaZer.y });
    const div1 = div1Fn({ u1: min1.y, u2: max2.y });
    const mul3 = mul3Fn({ u1: groFlo3.y, u2: div1.y });
    const mulMax = mulMaxFn({ u: mul3.y });
    const groFlo1 = groFlo1Fn({ u: VAdjAreBreZon_flow });
    const mul1 = mul1Fn({ u1: booToRea.y, u2: groFlo1.y });
    const mulSum1 = mulSum1Fn({ u: mul1.y });
    const groFlo = groFloFn({ u: VAdjPopBreZon_flow });
    const mul = mulFn({ u1: booToRea.y, u2: groFlo.y });
    const mulSum = mulSumFn({ u: mul.y });
    const groFlo2 = groFlo2Fn({ u: VZonPri_flow });
    const mul2 = mul2Fn({ u1: booToRea.y, u2: groFlo2.y });
    const mulSum2 = mulSum2Fn({ u: mul2.y });

    return { uOutAirFra_max: mulMax.y, VSumAdjAreBreZon_flow: mulSum1.y, VSumAdjPopBreZon_flow: mulSum.y, VSumZonPri_flow: mulSum2.y };
  }
}
