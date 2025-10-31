
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates
const booleantointeger_8f143d61 = require("../../../CDL/Conversions/BooleanToInteger");
const add_4fb2329d = require("../../../CDL/Integers/Add");
const and_f2b4cf1d = require("../../../CDL/Logical/And");
const nor_f2b50017 = require("../../../CDL/Logical/Nor");
const not_f2b50019 = require("../../../CDL/Logical/Not");
const hysteresis_c86ef565 = require("../../../CDL/Reals/Hysteresis");
const subtract_040901c2 = require("../../../CDL/Reals/Subtract");

module.exports = (
  {
		uHigh = 0.05,
		uLow = 0.01,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysUHea
  const hysUHeaFn = hysteresis_c86ef565({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.uHeaMinUCoo
  const uHeaMinUCooFn = subtract_040901c2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysU
  const hysUFn = hysteresis_c86ef565({ uHigh: uLow, uLow: -uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isHea
  const isHeaFn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntHea
  const booToIntHeaFn = booleantointeger_8f143d61({ integerFalse: 0, integerTrue: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.notHea
  const notHeaFn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysUCoo
  const hysUCooFn = hysteresis_c86ef565({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isCoo
  const isCooFn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntCoo
  const booToIntCooFn = booleantointeger_8f143d61({ integerFalse: 0, integerTrue: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.addInt
  const addIntFn = add_4fb2329d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isDea
  const isDeaFn = nor_f2b50017({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntDea
  const booToIntDeaFn = booleantointeger_8f143d61({ integerFalse: 0, integerTrue: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.addInt1
  const addInt1Fn = add_4fb2329d({});

  return (
    { uCoo, uHea }
  ) => {
    const hysUHea = hysUHeaFn({ u: uHea });
    const uHeaMinUCoo = uHeaMinUCooFn({ u1: uHea, u2: uCoo });
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
