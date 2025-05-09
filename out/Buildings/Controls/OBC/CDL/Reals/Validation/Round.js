
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round
const multiplybyparameter_8938fce0 = require("../MultiplyByParameter");
const round_9947f9a0 = require("../Round");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 7, offset: -3.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round.round1
  const round1Fn = round_9947f9a0({ n: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round.gai
  const gaiFn = multiplybyparameter_8938fce0({ k: 0.1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round.round2
  const round2Fn = round_9947f9a0({ n: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round.gai1
  const gai1Fn = multiplybyparameter_8938fce0({ k: 10 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Round.round3
  const round3Fn = round_9947f9a0({ n: -1 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const round1 = round1Fn({ u: ramp1.y });
    const gai = gaiFn({ u: ramp1.y });
    const round2 = round2Fn({ u: gai.y });
    const gai1 = gai1Fn({ u: ramp1.y });
    const round3 = round3Fn({ u: gai1.y });

    return { ramp1: ramp1, round1: round1, gai: gai, round2: round2, gai1: gai1, round3: round3 };
  }
}
