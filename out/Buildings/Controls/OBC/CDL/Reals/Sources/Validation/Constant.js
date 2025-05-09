
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Constant
const constant_d2aca5e8 = require("../Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Constant.con
  const conFn = constant_d2aca5e8({ k: 2.5 });

  return (
    {  }
  ) => {
    const con = conFn({});

    return { con: con };
  }
}
