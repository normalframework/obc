
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line
const line_15731da2 = require("../Line");
const constant_d2aca5e8 = require("../Sources/Constant");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.f1
  const f1Fn = constant_d2aca5e8({ k: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.f2
  const f2Fn = constant_d2aca5e8({ k: 1.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 0.5, height: 3, offset: 0, startTime: 0.25 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.x1
  const x1Fn = constant_d2aca5e8({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.x2
  const x2Fn = constant_d2aca5e8({ k: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.line1
  const line1Fn = line_15731da2({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.line2
  const line2Fn = line_15731da2({ limitAbove: true, limitBelow: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Line.line3
  const line3Fn = line_15731da2({ limitAbove: false, limitBelow: true });

  return (
    {  }
  ) => {
    const f1 = f1Fn({});
    const f2 = f2Fn({});
    const ramp1 = ramp1Fn({});
    const x1 = x1Fn({});
    const x2 = x2Fn({});
    const line1 = line1Fn({ f1: f1.y, f2: f2.y, u: ramp1.y, x1: x1.y, x2: x2.y });
    const line2 = line2Fn({ f1: f1.y, f2: f2.y, u: ramp1.y, x1: x1.y, x2: x2.y });
    const line3 = line3Fn({ f1: f1.y, f2: f2.y, u: ramp1.y, x1: x1.y, x2: x2.y });

    return { f1: f1, f2: f2, ramp1: ramp1, x1: x1, x2: x2, line1: line1, line2: line2, line3: line3 };
  }
}
