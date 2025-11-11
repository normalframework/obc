
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse
const variablepulse_63bb7c43 = require("../VariablePulse");
const constant_d2aca5e8 = require("../../Reals/Sources/Constant");
const pulse_dac91fd5 = require("../../Reals/Sources/Pulse");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.ram
  const ramFn = ramp_40ddd056({ duration: 900, height: 0.8, startTime: 300 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.conChaWid
  const conChaWidFn = variablepulse_63bb7c43({ period: 900 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.con
  const conFn = constant_d2aca5e8({ k: 0.75 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.conTru
  const conTruFn = variablepulse_63bb7c43({ period: 900 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.con1
  const con1Fn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.fal
  const falFn = variablepulse_63bb7c43({ period: 900 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.conPul1
  const conPul1Fn = pulse_dac91fd5({ amplitude: 0.65, period: 3600, shift: 360, width: 0.85 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.falTru
  const falTruFn = variablepulse_63bb7c43({ period: 900 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.conPul2
  const conPul2Fn = pulse_dac91fd5({ amplitude: 0.5, offset: 0.3, period: 3600, shift: 360, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.falTru1
  const falTru1Fn = variablepulse_63bb7c43({ period: 900 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.con2
  const con2Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.tru
  const truFn = variablepulse_63bb7c43({ period: 900 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.conPul
  const conPulFn = pulse_dac91fd5({ amplitude: 0.65, period: 4000, width: 0.8 });
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Validation.VariablePulse.truFal
  const truFalFn = variablepulse_63bb7c43({ period: 900 });

  return (
    {  }
  ) => {
    const ram = ramFn({});
    const conChaWid = conChaWidFn({ u: ram.y });
    const con = conFn({});
    const conTru = conTruFn({ u: con.y });
    const con1 = con1Fn({});
    const fal = falFn({ u: con1.y });
    const conPul1 = conPul1Fn({});
    const falTru = falTruFn({ u: conPul1.y });
    const conPul2 = conPul2Fn({});
    const falTru1 = falTru1Fn({ u: conPul2.y });
    const con2 = con2Fn({});
    const tru = truFn({ u: con2.y });
    const conPul = conPulFn({});
    const truFal = truFalFn({ u: conPul.y });

    return { ram: ram, conChaWid: conChaWid, con: con, conTru: conTru, con1: con1, fal: fal, conPul1: conPul1, falTru: falTru, conPul2: conPul2, falTru1: falTru1, con2: con2, tru: tru, conPul: conPul, truFal: truFal };
  }
}
