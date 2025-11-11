
// http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi
const dewpoint_tdrybulphi_e5c436e6 = require("../DewPoint_TDryBulPhi");
const constant_d2aca5e8 = require("../../Reals/Sources/Constant");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi.phi
  const phiFn = ramp_40ddd056({ duration: 1, height: 1, offset: 0.001 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi.TDryBul
  const TDryBulFn = constant_d2aca5e8({ k: 273.15 +29.4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi.dewBulPhi
  const dewBulPhiFn = dewpoint_tdrybulphi_e5c436e6({});
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi.phi2
  const phi2Fn = constant_d2aca5e8({ k: 0.4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi.TDryBul2
  const TDryBul2Fn = ramp_40ddd056({ duration: 1, height: 35, offset: 273.15 +2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.DewPoint_TDryBulPhi.dewBulPhi1
  const dewBulPhi1Fn = dewpoint_tdrybulphi_e5c436e6({});

  return (
    {  }
  ) => {
    const phi = phiFn({});
    const TDryBul = TDryBulFn({});
    const dewBulPhi = dewBulPhiFn({ phi: phi.y, TDryBul: TDryBul.y });
    const phi2 = phi2Fn({});
    const TDryBul2 = TDryBul2Fn({});
    const dewBulPhi1 = dewBulPhi1Fn({ phi: phi2.y, TDryBul: TDryBul2.y });

    return { phi: phi, TDryBul: TDryBul, dewBulPhi: dewBulPhi, phi2: phi2, TDryBul2: TDryBul2, dewBulPhi1: dewBulPhi1 };
  }
}
