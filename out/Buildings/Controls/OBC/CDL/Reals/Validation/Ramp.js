
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const ramp_1575b9c0 = require("../Ramp");
const pulse_dac91fd5 = require("../Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 12, shift: 1, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.pul
  const pulFn = pulse_dac91fd5({ period: 12, shift: 2, width: 0.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.ramUp
  const ramUpFn = ramp_1575b9c0({ raisingSlewRate: 1/20 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.ramUp1
  const ramUp1Fn = ramp_1575b9c0({ raisingSlewRate: 1/10 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.booPul2
  const booPul2Fn = pulse_cdc9ff89({ period: 12, shift: 2, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.pul1
  const pul1Fn = pulse_dac91fd5({ period: 12, shift: 1.5, width: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.ramUpDow
  const ramUpDowFn = ramp_1575b9c0({ raisingSlewRate: 1/5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.booPul5
  const booPul5Fn = pulse_cdc9ff89({ period: 12, shift: 1, width: 0.9 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.pul2
  const pul2Fn = pulse_dac91fd5({ period: 12, shift: 3, width: 0.3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Ramp.ramUpDow1
  const ramUpDow1Fn = ramp_1575b9c0({ fallingSlewRate: -1/2, raisingSlewRate: 1/5 });

  return (
    {  }
  ) => {
    const booPul1 = booPul1Fn({});
    const pul = pulFn({});
    const ramUp = ramUpFn({ active: booPul1.y, u: pul.y });
    const ramUp1 = ramUp1Fn({ active: booPul1.y, u: pul.y });
    const booPul2 = booPul2Fn({});
    const pul1 = pul1Fn({});
    const ramUpDow = ramUpDowFn({ active: booPul2.y, u: pul1.y });
    const booPul5 = booPul5Fn({});
    const pul2 = pul2Fn({});
    const ramUpDow1 = ramUpDow1Fn({ active: booPul5.y, u: pul2.y });

    return { booPul1: booPul1, pul: pul, ramUp: ramUp, ramUp1: ramUp1, booPul2: booPul2, pul1: pul1, ramUpDow: ramUpDow, booPul5: booPul5, pul2: pul2, ramUpDow1: ramUpDow1 };
  }
}
