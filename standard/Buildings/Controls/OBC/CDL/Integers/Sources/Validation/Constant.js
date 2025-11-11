
// http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Constant
const constant_01efacbe = require("../Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Integers.Sources.Validation.Constant.con
  const conFn = constant_01efacbe({ k: 5 });

  return (
    {  }
  ) => {
    const con = conFn({});

    return { con: con };
  }
}
