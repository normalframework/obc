
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefDamper
const reliefdamper_3e7d697b = require("../ReliefDamper");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefDamper.fanStatus
  const fanStatusFn = pulse_27dcacc8({ period: 3600, width: 0.8 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefDamper.outDam
  const outDamFn = ramp_3c414377({ duration: 3600, height: 0.6, offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefDamper.outDamMin
  const outDamMinFn = ramp_3c414377({ duration: 3600, height: 0.1, offset: 0.1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReliefDamper.relDam
  const relDamFn = reliefdamper_3e7d697b({ relDam_max: 0.6, relDam_min: 0.1 });

  return (
    {  }
  ) => {
    const fanStatus = fanStatusFn({});
    const outDam = outDamFn({});
    const outDamMin = outDamMinFn({});
    const relDam = relDamFn({ u1SupFan: fanStatus.y, uOutDam: outDam.y, uOutDam_min: outDamMin.y });

    return { fanStatus: fanStatus, outDam: outDam, outDamMin: outDamMin, relDam: relDam };
  }
}
