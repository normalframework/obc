
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate
const add_53459d33 = require("../Add");
const limitslewrate_61aa2738 = require("../LimitSlewRate");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 20, height: 1.5, offset: 0, startTime: 10 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 20, height: -1.5, offset: 0, startTime: 60 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add
  const addFn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp4
  const ramp4Fn = ramp_40ddd056({ duration: 30, height: 1.5, offset: 0, startTime: 120 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp3
  const ramp3Fn = ramp_40ddd056({ duration: 30, height: -1.5, offset: 0, startTime: 120 +60 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add1
  const add1Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add4
  const add4Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp6
  const ramp6Fn = ramp_40ddd056({ duration: 40, height: 1.5, offset: 0, startTime: 240 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp5
  const ramp5Fn = ramp_40ddd056({ duration: 40, height: -1.5, offset: 0, startTime: 240 +60 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add2
  const add2Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp8
  const ramp8Fn = ramp_40ddd056({ duration: 50, height: 1.5, offset: 0, startTime: 360 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.ramp7
  const ramp7Fn = ramp_40ddd056({ duration: 50, height: -1.5, offset: 0, startTime: 360 +60 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add3
  const add3Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add5
  const add5Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.add6
  const add6Fn = add_53459d33({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.LimitSlewRate.sleRatLim
  const sleRatLimFn = limitslewrate_61aa2738({ raisingSlewRate: 1/30 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const add = addFn({ u1: ramp1.y, u2: ramp2.y });
    const ramp4 = ramp4Fn({});
    const ramp3 = ramp3Fn({});
    const add1 = add1Fn({ u1: ramp4.y, u2: ramp3.y });
    const add4 = add4Fn({ u1: add.y, u2: add1.y });
    const ramp6 = ramp6Fn({});
    const ramp5 = ramp5Fn({});
    const add2 = add2Fn({ u1: ramp6.y, u2: ramp5.y });
    const ramp8 = ramp8Fn({});
    const ramp7 = ramp7Fn({});
    const add3 = add3Fn({ u1: ramp8.y, u2: ramp7.y });
    const add5 = add5Fn({ u1: add2.y, u2: add3.y });
    const add6 = add6Fn({ u1: add4.y, u2: add5.y });
    const sleRatLim = sleRatLimFn({ u: add6.y });

    return { ramp1: ramp1, ramp2: ramp2, add: add, ramp4: ramp4, ramp3: ramp3, add1: add1, add4: add4, ramp6: ramp6, ramp5: ramp5, add2: add2, ramp8: ramp8, ramp7: ramp7, add3: add3, add5: add5, add6: add6, sleRatLim: sleRatLim };
  }
}
