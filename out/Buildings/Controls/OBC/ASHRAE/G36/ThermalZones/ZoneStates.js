
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates
const booleantointeger_d87efb42 = require("../../../CDL/Conversions/BooleanToInteger");
const add_2aeed27e = require("../../../CDL/Integers/Add");
const and_6d642f1c = require("../../../CDL/Logical/And");
const nor_6d646016 = require("../../../CDL/Logical/Nor");
const not_6d646018 = require("../../../CDL/Logical/Not");
const hysteresis_72a6bcc6 = require("../../../CDL/Reals/Hysteresis");
const subtract_029d2d63 = require("../../../CDL/Reals/Subtract");

module.exports = (
  {
		uHigh = 0.05,
		uLow = 0.01,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysUHea
  const hysUHeaFn = hysteresis_72a6bcc6({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.uHeaMinUCoo
  const uHeaMinUCooFn = subtract_029d2d63({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysU
  const hysUFn = hysteresis_72a6bcc6({ uHigh: uLow, uLow: -uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isHea
  const isHeaFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntHea
  const booToIntHeaFn = booleantointeger_d87efb42({ integerTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.notHea
  const notHeaFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysUCoo
  const hysUCooFn = hysteresis_72a6bcc6({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isCoo
  const isCooFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntCoo
  const booToIntCooFn = booleantointeger_d87efb42({ integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.addInt
  const addIntFn = add_2aeed27e({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isDea
  const isDeaFn = nor_6d646016({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntDea
  const booToIntDeaFn = booleantointeger_d87efb42({ integerTrue: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.addInt1
  const addInt1Fn = add_2aeed27e({});

  return (
    { uCoo, uHea }
  ) => {
    const hysUHea = hysUHeaFn({ u: uHea });
    const uHeaMinUCoo = uHeaMinUCooFn({ u2: uCoo });
    const hysU = hysUFn({ u: uHeaMinUCoo.y });
    const isHea = isHeaFn({ u1: hysUHea.y, u2: hysU.y });
    const booToIntHea = booToIntHeaFn({ u: isHea.y });
    const notHea = notHeaFn({ u: isHea.y });
    const hysUCoo = hysUCooFn({ u: uCoo });
    const isCoo = isCooFn({ u1: notHea.y, u2: hysUCoo.y });
    const booToIntCoo = booToIntCooFn({ u: isCoo.y });
    const addInt = addIntFn({ u1: booToIntHea.y, u2: booToIntCoo.y });
    const isDea = isDeaFn({ u1: isHea.y, u2: isCoo.y });
    const booToIntDea = booToIntDeaFn({ u: isDea.y });
    const addInt1 = addInt1Fn({ u1: addInt.y, u2: booToIntDea.y });

    return { yZonSta: addInt1.y };
  }
}
