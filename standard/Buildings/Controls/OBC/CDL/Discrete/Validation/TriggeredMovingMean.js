
// http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean
const triggeredmovingmean_c3c5d0ea = require("../TriggeredMovingMean");
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const sin_f9d5a014 = require("../../Reals/Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean.booPul
  const booPulFn = pulse_cdc9ff89({ period: 1, shift: -0.5, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean.sin
  const sinFn = sin_f9d5a014({ freqHz: 1/8, phase: 0.5235987755983, startTime: -0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean.triMovMea
  const triMovMeaFn = triggeredmovingmean_c3c5d0ea({ n: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean.triMovMea1
  const triMovMea1Fn = triggeredmovingmean_c3c5d0ea({ n: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean.booPul1
  const booPul1Fn = pulse_cdc9ff89({ period: 1, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Discrete.Validation.TriggeredMovingMean.triMovMea2
  const triMovMea2Fn = triggeredmovingmean_c3c5d0ea({ n: 3 });

  return (
    {  }
  ) => {
    const booPul = booPulFn({});
    const sin = sinFn({});
    const triMovMea = triMovMeaFn({ trigger: booPul.y, u: sin.y });
    const triMovMea1 = triMovMea1Fn({ trigger: booPul.y, u: sin.y });
    const booPul1 = booPul1Fn({});
    const triMovMea2 = triMovMea2Fn({ trigger: booPul1.y, u: sin.y });

    return { booPul: booPul, sin: sin, triMovMea: triMovMea, triMovMea1: triMovMea1, booPul1: booPul1, triMovMea2: triMovMea2 };
  }
}
