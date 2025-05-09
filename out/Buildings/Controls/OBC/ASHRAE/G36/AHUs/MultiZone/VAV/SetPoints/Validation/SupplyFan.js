
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan
const supplyfan_d6d95546 = require("../SupplyFan");
const realtointeger_b3838f5e = require("../../../../../../../CDL/Conversions/RealToInteger");
const abs_a5faf0c3 = require("../../../../../../../CDL/Reals/Abs");
const round_13f7599f = require("../../../../../../../CDL/Reals/Round");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");
const sin_9696c4d3 = require("../../../../../../../CDL/Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.sine1
  const sine1Fn = sin_9696c4d3({ amplitude: 150, freqHz: 1/14400, offset: 200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.ram
  const ramFn = ramp_3c414377({ duration: 28800, height: 6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.abs
  const absFn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.round1
  const round1Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.reaToInt2
  const reaToInt2Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.sine
  const sineFn = sin_9696c4d3({ amplitude: 2, freqHz: 1/14400, offset: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.abs1
  const abs1Fn = abs_a5faf0c3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.round2
  const round2Fn = round_13f7599f({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.reaToInt1
  const reaToInt1Fn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.conSupFan
  const conSupFanFn = supplyfan_d6d95546({ controllerType: 1, k: 0.001, maxSet: 400, Td: 1, Ti: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.conSupFan1
  const conSupFan1Fn = supplyfan_d6d95546({ controllerType: 1, have_perZonRehBox: true, k: 0.001, maxSet: 400, Td: 1, Ti: 10 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplyFan.conSupFan2
  const conSupFan2Fn = supplyfan_d6d95546({ controllerType: 1, k: 0.001, maxSet: 400, Td: 1, Ti: 10 });

  return (
    {  }
  ) => {
    const sine1 = sine1Fn({});
    const ram = ramFn({});
    const abs = absFn({ u: ram.y });
    const round1 = round1Fn({ u: abs.y });
    const reaToInt2 = reaToInt2Fn({ u: round1.y });
    const sine = sineFn({});
    const abs1 = abs1Fn({ u: sine.y });
    const round2 = round2Fn({ u: abs1.y });
    const reaToInt1 = reaToInt1Fn({ u: round2.y });
    const conSupFan = conSupFanFn({ dpDuc: sine1.y, uOpeMod: reaToInt2.y, uZonPreResReq: reaToInt1.y });
    const conSupFan1 = conSupFan1Fn({ dpDuc: sine1.y, uOpeMod: reaToInt2.y, uZonPreResReq: reaToInt1.y });
    const conSupFan2 = conSupFan2Fn({ dpDuc: sine1.y, uOpeMod: reaToInt2.y, uZonPreResReq: reaToInt1.y });

    return { sine1: sine1, ram: ram, abs: abs, round1: round1, reaToInt2: reaToInt2, sine: sine, abs1: abs1, round2: round2, reaToInt1: reaToInt1, conSupFan: conSupFan, conSupFan1: conSupFan1, conSupFan2: conSupFan2 };
  }
}
