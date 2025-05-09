
// http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.SpecificEnthalpy_TDryBulPhi
const specificenthalpy_tdrybulphi_1f13bf3d = require("../SpecificEnthalpy_TDryBulPhi");
const constant_d2aca5e8 = require("../../Reals/Sources/Constant");
const ramp_40ddd056 = require("../../Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.SpecificEnthalpy_TDryBulPhi.phi
  const phiFn = ramp_40ddd056({ duration: 1, height: 1, offset: 0.001 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.SpecificEnthalpy_TDryBulPhi.TDryBul
  const TDryBulFn = constant_d2aca5e8({ k: 273.15 +29.4 });
  // http://example.org#Buildings.Controls.OBC.CDL.Psychrometrics.Validation.SpecificEnthalpy_TDryBulPhi.hBulPhi
  const hBulPhiFn = specificenthalpy_tdrybulphi_1f13bf3d({});

  return (
    {  }
  ) => {
    const phi = phiFn({});
    const TDryBul = TDryBulFn({});
    const hBulPhi = hBulPhiFn({ phi: phi.y, TDryBul: TDryBul.y });

    return { phi: phi, TDryBul: TDryBul, hBulPhi: hBulPhi };
  }
}
