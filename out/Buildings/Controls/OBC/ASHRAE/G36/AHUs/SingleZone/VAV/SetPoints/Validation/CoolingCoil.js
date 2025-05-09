
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil
const coolingcoil_0e24e38b = require("../CoolingCoil");
const realtointeger_b3838f5e = require("../../../../../../../CDL/Conversions/RealToInteger");
const constant_48cc1015 = require("../../../../../../../CDL/Logical/Sources/Constant");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const pulse_4bd410d4 = require("../../../../../../../CDL/Reals/Sources/Pulse");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  {
		TSupSet = 291.15,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil.TSup
  const TSupFn = ramp_3c414377({ duration: 3600*8, height: 4, offset: TSupSet -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil.TSupSetSig
  const TSupSetSigFn = constant_baefa089({ k: TSupSet });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil.fanStatus
  const fanStatusFn = constant_48cc1015({ k: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil.zonSta
  const zonStaFn = pulse_4bd410d4({ offset: 2, period: 3600*2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil.reaToInt
  const reaToIntFn = realtointeger_b3838f5e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.CoolingCoil.cooCoi
  const cooCoiFn = coolingcoil_0e24e38b({ controllerTypeCooCoi: 0, kCooCoi: 1 });

  return (
    {  }
  ) => {
    const TSup = TSupFn({});
    const TSupSetSig = TSupSetSigFn({});
    const fanStatus = fanStatusFn({});
    const zonSta = zonStaFn({});
    const reaToInt = reaToIntFn({ u: zonSta.y });
    const cooCoi = cooCoiFn({ TAirSup: TSup.y, TSupCooSet: TSupSetSig.y, u1SupFan: fanStatus.y, uZonSta: reaToInt.y });

    return { TSup: TSup, TSupSetSig: TSupSetSig, fanStatus: fanStatus, zonSta: zonSta, reaToInt: reaToInt, cooCoi: cooCoi };
  }
}
