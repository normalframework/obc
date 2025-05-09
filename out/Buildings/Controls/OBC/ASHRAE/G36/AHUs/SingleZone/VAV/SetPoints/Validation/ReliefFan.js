
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan
const relieffan_dbe05be5 = require("../ReliefFan");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.dpBui2
  const dpBui2Fn = ramp_3c414377({ duration: 1800, height: 3, offset: 11 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.supFan
  const supFanFn = pulse_27dcacc8({ period: 3600, width: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.relFanCon
  const relFanConFn = relieffan_dbe05be5({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.dpBui
  const dpBuiFn = ramp_3c414377({ duration: 1800, height: 40, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.supFan1
  const supFan1Fn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.relFanCon1
  const relFanCon1Fn = relieffan_dbe05be5({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.dpBui1
  const dpBui1Fn = ramp_3c414377({ duration: 1800, height: -15, offset: 20, startTime: 1800 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefFan.relFanCon2
  const relFanCon2Fn = relieffan_dbe05be5({});

  return (
    {  }
  ) => {
    const dpBui2 = dpBui2Fn({});
    const supFan = supFanFn({});
    const relFanCon = relFanConFn({ dpBui: dpBui2.y, u1SupFan: supFan.y });
    const dpBui = dpBuiFn({});
    const supFan1 = supFan1Fn({});
    const relFanCon1 = relFanCon1Fn({ dpBui: dpBui.y, u1SupFan: supFan1.y });
    const dpBui1 = dpBui1Fn({});
    const relFanCon2 = relFanCon2Fn({ dpBui: dpBui1.y, u1SupFan: supFan1.y });

    return { dpBui2: dpBui2, supFan: supFan, relFanCon: relFanCon, dpBui: dpBui, supFan1: supFan1, relFanCon1: relFanCon1, dpBui1: dpBui1, relFanCon2: relFanCon2 };
  }
}
