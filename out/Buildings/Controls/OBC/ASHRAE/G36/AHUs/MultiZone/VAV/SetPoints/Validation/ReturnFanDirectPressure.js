
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanDirectPressure
const returnfandirectpressure_9647e213 = require("../ReturnFanDirectPressure");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanDirectPressure.dpBui
  const dpBuiFn = ramp_3c414377({ duration: 1800, height: 40, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanDirectPressure.yFan
  const yFanFn = pulse_27dcacc8({ period: 4000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanDirectPressure.retFanPre
  const retFanPreFn = returnfandirectpressure_9647e213({ disSpe_max: 0.9, disSpe_min: 0.1, k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanDirectPressure.retFanPre1
  const retFanPre1Fn = returnfandirectpressure_9647e213({ disSpe_max: 0.9, disSpe_min: 0.1, k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanDirectPressure.retFanPre2
  const retFanPre2Fn = returnfandirectpressure_9647e213({ disSpe_max: 0.9, disSpe_min: 0.1 });

  return (
    {  }
  ) => {
    const dpBui = dpBuiFn({});
    const yFan = yFanFn({});
    const retFanPre = retFanPreFn({ dpBui: dpBui.y, u1SupFan: yFan.y });
    const retFanPre1 = retFanPre1Fn({ dpBui: dpBui.y, u1SupFan: yFan.y });
    const retFanPre2 = retFanPre2Fn({ dpBui: dpBui.y, u1SupFan: yFan.y });

    return { dpBui: dpBui, yFan: yFan, retFanPre: retFanPre, retFanPre1: retFanPre1, retFanPre2: retFanPre2 };
  }
}
