
// http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi
const wetbulb_tdrybulphi_1dd2d16d = require("../WetBulb_TDryBulPhi");
const constant_d2aca5e8 = require("../../Reals/Sources/Constant");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi.phi
  const phiFn = ramp_40ddd056({ duration: 1, height: 0.95, offset: 0.05 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi.TDryBul
  const TDryBulFn = constant_d2aca5e8({ k: 273.15 +29.4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi.wetBulPhi
  const wetBulPhiFn = wetbulb_tdrybulphi_1dd2d16d({});
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi.phi2
  const phi2Fn = constant_d2aca5e8({ k: 0.6 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi.TDryBul1
  const TDryBul1Fn = ramp_40ddd056({ duration: 1, height: 40, offset: 273.15 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.WetBulb_TDryBulPhi.wetBulPhi1
  const wetBulPhi1Fn = wetbulb_tdrybulphi_1dd2d16d({});

  return (
    {  }
  ) => {
    const phi = phiFn({});
    const TDryBul = TDryBulFn({});
    const wetBulPhi = wetBulPhiFn({ phi: phi.y, TDryBul: TDryBul.y });
    const phi2 = phi2Fn({});
    const TDryBul1 = TDryBul1Fn({});
    const wetBulPhi1 = wetBulPhi1Fn({ phi: phi2.y, TDryBul: TDryBul1.y });

    return { phi: phi, TDryBul: TDryBul, wetBulPhi: wetBulPhi, phi2: phi2, TDryBul1: TDryBul1, wetBulPhi1: wetBulPhi1 };
  }
}
