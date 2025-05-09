
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals
const supplysignals_3129df7e = require("../SupplySignals");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const pulse_4bd410d4 = require("../../../../../../../CDL/Reals/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals.TSup
  const TSupFn = pulse_4bd410d4({ amplitude: 14, offset: 10 +273.15, period: 7200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals.TSupSet
  const TSupSetFn = ramp_3c414377({ duration: 7200, height: 3, offset: 15 +273.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals.supFanSta
  const supFanStaFn = pulse_27dcacc8({ period: 7200 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals.supSig
  const supSigFn = supplysignals_3129df7e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals.fanOn
  const fanOnFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.SupplySignals.supSig1
  const supSig1Fn = supplysignals_3129df7e({});

  return (
    {  }
  ) => {
    const TSup = TSupFn({});
    const TSupSet = TSupSetFn({});
    const supFanSta = supFanStaFn({});
    const supSig = supSigFn({ TAirSup: TSup.y, TAirSupSet: TSupSet.y, u1SupFan: supFanSta.y });
    const fanOn = fanOnFn({});
    const supSig1 = supSig1Fn({ TAirSup: TSup.y, TAirSupSet: TSupSet.y, u1SupFan: fanOn.y });

    return { TSup: TSup, TSupSet: TSupSet, supFanSta: supFanSta, supSig: supSig, fanOn: fanOn, supSig1: supSig1 };
  }
}
