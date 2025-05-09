
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const greaterthreshold_64a3c4e0 = require("../../../../../../CDL/Reals/GreaterThreshold");
const line_196841c3 = require("../../../../../../CDL/Reals/Line");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		posHys = 0.05,
		relDam_max,
		relDam_min,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.minRel
  const minRelFn = constant_baefa089({ k: relDam_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.maxRel
  const maxRelFn = constant_baefa089({ k: relDam_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.fulOpe
  const fulOpeFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.relDam
  const relDamFn = line_196841c3({ limitAbove: true, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.greThr
  const greThrFn = greaterthreshold_64a3c4e0({ h: posHys, t: 0.05 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.zerDam
  const zerDamFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.ReliefDamper.swi
  const swiFn = switch_6d141143({});

  return (
    { u1SupFan, uOutDam, uOutDam_min }
  ) => {
    const minRel = minRelFn({});
    const maxRel = maxRelFn({});
    const fulOpe = fulOpeFn({});
    const relDam = relDamFn({ f1: minRel.y, f2: maxRel.y, u: uOutDam, x1: uOutDam_min, x2: fulOpe.y });
    const greThr = greThrFn({ u: uOutDam });
    const and2 = and2Fn({ u1: greThr.y, u2: u1SupFan });
    const zerDam = zerDamFn({});
    const swi = swiFn({ u1: relDam.y, u2: and2.y, u3: zerDam.y });

    return { yRelDam: swi.y };
  }
}
