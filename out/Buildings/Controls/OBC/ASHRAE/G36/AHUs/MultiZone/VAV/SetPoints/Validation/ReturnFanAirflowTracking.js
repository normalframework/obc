
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanAirflowTracking
const returnfanairflowtracking_9d8c242a = require("../ReturnFanAirflowTracking");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanAirflowTracking.yFan
  const yFanFn = pulse_27dcacc8({ period: 4000, width: 0.75 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanAirflowTracking.retFlo
  const retFloFn = ramp_3c414377({ duration: 1800, height: 0.4, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanAirflowTracking.supFlo
  const supFloFn = ramp_3c414377({ duration: 1800, height: 1, offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanAirflowTracking.retFanAirTra
  const retFanAirTraFn = returnfanairflowtracking_9d8c242a({ difFloSet: 0.5, k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.ReturnFanAirflowTracking.retFanAirTra1
  const retFanAirTra1Fn = returnfanairflowtracking_9d8c242a({ difFloSet: 0.5 });

  return (
    {  }
  ) => {
    const yFan = yFanFn({});
    const retFlo = retFloFn({});
    const supFlo = supFloFn({});
    const retFanAirTra = retFanAirTraFn({ u1SupFan: yFan.y, VAirRet_flow: retFlo.y, VAirSup_flow: supFlo.y });
    const retFanAirTra1 = retFanAirTra1Fn({ u1SupFan: yFan.y, VAirRet_flow: retFlo.y, VAirSup_flow: supFlo.y });

    return { yFan: yFan, retFlo: retFlo, supFlo: supFlo, retFanAirTra: retFanAirTra, retFanAirTra1: retFanAirTra1 };
  }
}
