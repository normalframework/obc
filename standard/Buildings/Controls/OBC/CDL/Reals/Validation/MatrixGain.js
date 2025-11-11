
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixGain
const matrixgain_aca2820e = require("../MatrixGain");
const ramp_40ddd056 = require("../Sources/Ramp");
const ramp_41958736 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixGain.matGai
  const matGaiFn = matrixgain_aca2820e({ K: [[1,0],[1,1],[1,2]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixGain.matGai1
  const matGai1Fn = matrixgain_aca2820e({ K: [[1,2],[3,4]] });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixGain.ramp
  const rampFn = ramp_40ddd056({ duration: 1, height: 2, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixGain.ramp1
  const ramp1Fn = ramp_41958736({ duration: 1, height: 1, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MatrixGain.ramp2
  const ramp2Fn = ramp_41958736({ duration: 1, height: 2, offset: 0 });

  return (
    {  }
  ) => {
    const matGai = matGaiFn({});
    const matGai1 = matGai1Fn({});
    const ramp = rampFn({});
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});

    return { matGai: matGai, matGai1: matGai1, ramp: ramp, ramp1: ramp1, ramp2: ramp2 };
  }
}
