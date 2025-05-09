
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulseMinHold
const variablepulse_63bb7c43 = require("../VariablePulse");
const pulse_dac91fd5 = require("../../Reals/Sources/Pulse");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulseMinHold.conPul1
  const conPul1Fn = pulse_dac91fd5({ amplitude: 0.4, offset: 0.5, period: 4, shift: 1.6, width: 0.4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulseMinHold.conChaWid
  const conChaWidFn = variablepulse_63bb7c43({ minTruFalHol: 1, period: 3 });

  return (
    {  }
  ) => {
    const conPul1 = conPul1Fn({});
    const conChaWid = conChaWidFn({ u: conPul1.y });

    return { conPul1: conPul1, conChaWid: conChaWid };
  }
}
