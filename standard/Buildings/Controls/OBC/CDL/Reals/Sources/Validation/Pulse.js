
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Pulse
const pulse_dac91fd5 = require("../Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Pulse.pulse
  const pulseFn = pulse_dac91fd5({ amplitude: 2, offset: 0.2, period: 1, width: 0.5 });

  return (
    {  }
  ) => {
    const pulse = pulseFn({});

    return { pulse: pulse };
  }
}
