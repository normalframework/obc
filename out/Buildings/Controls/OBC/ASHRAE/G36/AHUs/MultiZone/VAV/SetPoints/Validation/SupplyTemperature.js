
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature
const supplytemperature_ac3caca7 = require("../SupplyTemperature");
const realtointeger_b3838f5e = require("../../../../../../../CDL/Conversions/RealToInteger");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const abs_a5faf0c3 = require("../../../../../../../CDL/Reals/Abs");
const round_13f7599f = require("../../../../../../../CDL/Reals/Round");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.outTem
  const outTemFn = sin_9696c4d3({ amplitude: 5, freqHz: 1/86400, offset: 18 +273.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.supFanSta
  const supFanStaFn = pulse_27dcacc8({ period: 43200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.opeMod
  const opeModFn = ramp_3c414377({ duration: 90000, height: 1, offset: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.round2
  const round2Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.sine
  const sineFn = sin_9696c4d3({ amplitude: 6, freqHz: 1/86400 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.abs
  const absFn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.round1
  const round1Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyTemperature.conTSupSet
  const conTSupSetFn = supplytemperature_ac3caca7({});

  return (
    {  }
  ) => {
    const outTem = outTemFn({});
    const supFanSta = supFanStaFn({});
    const opeMod = opeModFn({});
    const round2 = round2Fn({ u: opeMod.y });
    const reaToInt2 = reaToInt2Fn({ u: round2.y });
    const sine = sineFn({});
    const abs = absFn({ u: sine.y });
    const round1 = round1Fn({ u: abs.y });
    const reaToInt1 = reaToInt1Fn({ u: round1.y });
    const conTSupSet = conTSupSetFn({ TOut: outTem.y, u1SupFan: supFanSta.y, uOpeMod: reaToInt2.y, uZonTemResReq: reaToInt1.y });

    return { outTem: outTem, supFanSta: supFanSta, opeMod: opeMod, round2: round2, reaToInt2: reaToInt2, sine: sine, abs: abs, round1: round1, reaToInt1: reaToInt1, conTSupSet: conTSupSet };
  }
}
