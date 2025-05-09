
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReturnFan
const addparameter_26b0d2d7 = require("../../../../../../CDL/Reals/AddParameter");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		speDif = -0.1,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReturnFan.addPar
  const addParFn = addparameter_26b0d2d7({ p: speDif });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReturnFan.con
  const conFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReturnFan.swi
  const swiFn = switch_6d141143({});

  return (
    { uSupFan_actual, u1SupFan }
  ) => {
    const addPar = addParFn({ u: uSupFan_actual });
    const con = conFn({});
    const swi = swiFn({ u1: addPar.y, u2: u1SupFan, u3: con.y });

    return { y1RetFan: u1SupFan, yRetFan: swi.y };
  }
}
