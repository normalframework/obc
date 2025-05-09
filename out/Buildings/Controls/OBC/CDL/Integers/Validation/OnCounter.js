
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.OnCounter
const oncounter_c7e1a419 = require("../OnCounter");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.OnCounter.reset
  const resetFn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.OnCounter.booPul
  const booPulFn = pulse_cdc9ff89({ period: 0.1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Validation.OnCounter.onCounter
  const onCounterFn = oncounter_c7e1a419({});

  return (
    {  }
  ) => {
    const reset = resetFn({});
    const booPul = booPulFn({});
    const onCounter = onCounterFn({ reset: reset.y, trigger: booPul.y });

    return { reset: reset, booPul: booPul, onCounter: onCounter };
  }
}
