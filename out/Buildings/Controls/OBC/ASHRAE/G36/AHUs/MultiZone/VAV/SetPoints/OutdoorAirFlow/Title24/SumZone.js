
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone
const booleantoreal_552dc85b = require("../../../../../../../../CDL/Conversions/BooleanToReal");
const equal_2c2e9230 = require("../../../../../../../../CDL/Integers/Equal");
const constant_01efacbe = require("../../../../../../../../CDL/Integers/Sources/Constant");
const matrixgain_aca2820e = require("../../../../../../../../CDL/Reals/MatrixGain");
const multimax_a5ce0819 = require("../../../../../../../../CDL/Reals/MultiMax");
const multisum_a5ce2100 = require("../../../../../../../../CDL/Reals/MultiSum");
const multiply_a5ce8cd2 = require("../../../../../../../../CDL/Reals/Multiply");

module.exports = (
  {
		have_CO2Sen,
		nGro,
		nZon,
		zonGroMat,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.occMod
  const occModFn = constant_01efacbe({ k: "fill(Buildings.Controls.OBC.ASHRAE.G36.Types.OperationModes.occupied,nGro)" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.intEqu1
  const intEqu1Fn = equal_2c2e9230({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.booToRea
  const booToReaFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.groFlo
  const groFloFn = matrixgain_aca2820e({ K: zonGroMat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.mul
  const mulFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.mulSum
  const mulSumFn = multisum_a5ce2100({ nin: nGro });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.groFlo1
  const groFlo1Fn = matrixgain_aca2820e({ K: zonGroMat });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.mul1
  const mul1Fn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.mulSum1
  const mulSum1Fn = multisum_a5ce2100({ nin: nGro });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.OutdoorAirFlow.Title24.SumZone.mulMax
  const mulMaxFn = multimax_a5ce0819({ nin: nZon });

  return (
    { VZonAbsMin_flow, VZonDesMin_flow, uOpeMod, uCO2 }
  ) => {
    const occMod = occModFn({});
    const intEqu1 = intEqu1Fn({ u1: uOpeMod, u2: occMod.y });
    const booToRea = booToReaFn({ u: intEqu1.y });
    const groFlo = groFloFn({ u: VZonAbsMin_flow });
    const mul = mulFn({ u1: booToRea.y, u2: groFlo.y });
    const mulSum = mulSumFn({ u: mul.y });
    const groFlo1 = groFlo1Fn({ u: VZonDesMin_flow });
    const mul1 = mul1Fn({ u1: booToRea.y, u2: groFlo1.y });
    const mulSum1 = mulSum1Fn({ u: mul1.y });
    const mulMax = mulMaxFn({ u: uCO2 });

    return { VSumZonAbsMin_flow: mulSum.y, VSumZonDesMin_flow: mulSum1.y, yMaxCO2: mulMax.y };
  }
}
