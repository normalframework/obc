
// http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Constant
const constant_655d39b4 = require("../Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Logical.Sources.Validation.Constant.con
  const conFn = constant_655d39b4({ k: true });

  return (
    {  }
  ) => {
    const con = conFn({});

    return { con: con };
  }
}
