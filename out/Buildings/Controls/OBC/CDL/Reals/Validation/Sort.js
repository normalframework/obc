
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort
const sort_1576634c = require("../Sort");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.ramp1
  const ramp1Fn = ramp_40ddd056({ duration: 1, height: 4, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.ramp2
  const ramp2Fn = ramp_40ddd056({ duration: 1, height: 3, offset: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.ramp3
  const ramp3Fn = ramp_40ddd056({ duration: 1, height: -4, offset: 2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.ramp4
  const ramp4Fn = ramp_40ddd056({ duration: 1, height: -1, offset: 3 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.ramp5
  const ramp5Fn = ramp_40ddd056({ duration: 1, height: 4, offset: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.sorAsc
  const sorAscFn = sort_1576634c({ nin: 5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.Sort.sorDes
  const sorDesFn = sort_1576634c({ ascending: false, nin: 5 });

  return (
    {  }
  ) => {
    const ramp1 = ramp1Fn({});
    const ramp2 = ramp2Fn({});
    const ramp3 = ramp3Fn({});
    const ramp4 = ramp4Fn({});
    const ramp5 = ramp5Fn({});
    const sorAsc = sorAscFn({});
    const sorDes = sorDesFn({});

    return { ramp1: ramp1, ramp2: ramp2, ramp3: ramp3, ramp4: ramp4, ramp5: ramp5, sorAsc: sorAsc, sorDes: sorDes };
  }
}
