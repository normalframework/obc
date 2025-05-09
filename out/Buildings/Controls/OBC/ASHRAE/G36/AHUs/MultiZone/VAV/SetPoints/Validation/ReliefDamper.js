
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReliefDamper
const reliefdamper_38a1a99c = require("../ReliefDamper");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReliefDamper.dpBui
  const dpBuiFn = ramp_3c414377({ duration: 1800, height: 40, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReliefDamper.yFan
  const yFanFn = pulse_27dcacc8({ period: 4000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReliefDamper.relDam
  const relDamFn = reliefdamper_38a1a99c({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReliefDamper.relDam1
  const relDam1Fn = reliefdamper_38a1a99c({});

  return (
    {  }
  ) => {
    const dpBui = dpBuiFn({});
    const yFan = yFanFn({});
    const relDam = relDamFn({ dpBui: dpBui.y, u1SupFan: yFan.y });
    const relDam1 = relDam1Fn({ dpBui: dpBui.y, u1SupFan: yFan.y });

    return { dpBui: dpBui, yFan: yFan, relDam: relDam, relDam1: relDam1 };
  }
}
