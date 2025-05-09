
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReturnFan
const returnfan_984731e6 = require("../ReturnFan");
const booleantoreal_df99be1a = require("../../../../../../../CDL/Conversions/BooleanToReal");
const pulse_27dcacc8 = require("../../../../../../../CDL/Logical/Sources/Pulse");
const multiply_a462b873 = require("../../../../../../../CDL/Reals/Multiply");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReturnFan.fanStatus
  const fanStatusFn = pulse_27dcacc8({ period: 3600 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReturnFan.supFanSpe
  const supFanSpeFn = ramp_3c414377({ duration: 3600, height: 0.7, offset: 0.2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReturnFan.booToRea
  const booToReaFn = booleantoreal_df99be1a({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReturnFan.mul
  const mulFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.ReturnFan.retFan
  const retFanFn = returnfan_984731e6({});

  return (
    {  }
  ) => {
    const fanStatus = fanStatusFn({});
    const supFanSpe = supFanSpeFn({});
    const booToRea = booToReaFn({ u: fanStatus.y });
    const mul = mulFn({ u1: supFanSpe.y, u2: booToRea.y });
    const retFan = retFanFn({ u1SupFan: fanStatus.y, uSupFan_actual: mul.y });

    return { fanStatus: fanStatus, supFanSpe: supFanSpe, booToRea: booToRea, mul: mul, retFan: retFan };
  }
}
