
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneGroupSystem
const integertoreal_33992ab0 = require("../../../CDL/Conversions/IntegerToReal");
const realtointeger_b3838f5e = require("../../../CDL/Conversions/RealToInteger");
const multimin_a46234a8 = require("../../../CDL/Reals/MultiMin");

module.exports = (
  {
		nGro,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneGroupSystem.intToRea
  const intToReaFn = integertoreal_33992ab0({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneGroupSystem.mulMin
  const mulMinFn = multimin_a46234a8({ nin: nGro });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ZoneGroups.ZoneGroupSystem.ahuMod
  const ahuModFn = realtointeger_b3838f5e({});

  return (
    { uOpeMod }
  ) => {
    const intToRea = intToReaFn({ u: uOpeMod });
    const mulMin = mulMinFn({ u: intToRea.y });
    const ahuMod = ahuModFn({ u: mulMin.y });

    return { yAhuOpeMod: ahuMod.y };
  }
}
