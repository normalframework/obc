
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates
const booleantointeger_l3fs8s = require("../../../CDL/Conversions/BooleanToInteger");
const add_rx26hi = require("../../../CDL/Integers/Add");
const and_nv8a4x = require("../../../CDL/Logical/And");
const nor_wwjyh = require("../../../CDL/Logical/Nor");
const not_70z0t = require("../../../CDL/Logical/Not");
const hysteresis_ykw5b = require("../../../CDL/Reals/Hysteresis");
const subtract_kn379k = require("../../../CDL/Reals/Subtract");

module.exports = (
  {
		uHigh = 0.05,
		uLow = 0.01
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysUHea
  const hysUHeaFn = hysteresis_ykw5b({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.uHeaMinUCoo
  const uHeaMinUCooFn = subtract_kn379k({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysU
  const hysUFn = hysteresis_ykw5b({ uHigh: uLow, uLow: -uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isHea
  const isHeaFn = and_nv8a4x({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntHea
  const booToIntHeaFn = booleantointeger_l3fs8s({ integerTrue: "Buildings.Controls.OBC.ASHRAE.G36.Types.ZoneStates.heating" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.notHea
  const notHeaFn = not_70z0t({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.hysUCoo
  const hysUCooFn = hysteresis_ykw5b({ uHigh: uHigh, uLow: uLow });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isCoo
  const isCooFn = and_nv8a4x({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntCoo
  const booToIntCooFn = booleantointeger_l3fs8s({ integerTrue: "Buildings.Controls.OBC.ASHRAE.G36.Types.ZoneStates.cooling" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.addInt
  const addIntFn = add_rx26hi({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.isDea
  const isDeaFn = nor_wwjyh({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.booToIntDea
  const booToIntDeaFn = booleantointeger_l3fs8s({ integerTrue: "Buildings.Controls.OBC.ASHRAE.G36.Types.ZoneStates.deadband" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ZoneStates.addInt1
  const addInt1Fn = add_rx26hi({});

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
