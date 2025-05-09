
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Pulse
const pulse_02f178bf = require("../Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Pulse.pul
  const pulFn = pulse_02f178bf({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Pulse.pul1
  const pul1Fn = pulse_02f178bf({ amplitude: 2, offset: 1, period: 1, shift: 1.75, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Pulse.pul2
  const pul2Fn = pulse_02f178bf({ amplitude: 3, offset: -2, period: 1, shift: -1.25, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Pulse.pul3
  const pul3Fn = pulse_02f178bf({ amplitude: 1, offset: 3, period: 1, width: 0.5 });

  return (
    {  }
  ) => {
    const pul = pulFn({});
    const pul1 = pul1Fn({});
    const pul2 = pul2Fn({});
    const pul3 = pul3Fn({});

    return { pul: pul, pul1: pul1, pul2: pul2, pul3: pul3 };
  }
}
