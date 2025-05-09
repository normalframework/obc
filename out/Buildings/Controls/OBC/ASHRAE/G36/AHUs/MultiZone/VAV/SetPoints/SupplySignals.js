
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals
const line_196841c3 = require("../../../../../../CDL/Reals/Line");
const pidwithreset_1df6d9ad = require("../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerType = 1,
		have_cooCoi = true,
		have_heaCoi = true,
		kTSup = 0.05,
		TdTSup = 0.1,
		TiTSup = 600,
		uCoo_min = 0.25,
		uHea_max = -0.25,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.conTSup
  const conTSupFn = pidwithreset_1df6d9ad({ controllerType: controllerType, k: kTSup, reverseActing: false, Td: TdTSup, Ti: TiTSup, y_reset: 0, yMax: 1, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.zer
  const zerFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.one
  const oneFn = constant_baefa089({ k: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.uCooMinCon
  const uCooMinConFn = constant_baefa089({ k: uCoo_min });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.conSigCoo
  const conSigCooFn = line_196841c3({ limitAbove: false, limitBelow: true });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.negOne
  const negOneFn = constant_baefa089({ k: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.uHeaMaxCon
  const uHeaMaxConFn = constant_baefa089({ k: uHea_max });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.SupplySignals.conSigHea
  const conSigHeaFn = line_196841c3({ limitAbove: true, limitBelow: false });

  return (
    { u1SupFan, TAirSup, TAirSupSet }
  ) => {
    const conTSup = conTSupFn({ trigger: u1SupFan, u_m: TAirSup, u_s: TAirSupSet });
    const zer = zerFn({});
    const swi = swiFn({ u1: conTSup.y, u2: u1SupFan, u3: zer.y });
    const one = oneFn({});
    const uCooMinCon = uCooMinConFn({});
    const conSigCoo = conSigCooFn({ f1: zer.y, x2: one.y, u: swi.y, x1: uCooMinCon.y });
    const negOne = negOneFn({});
    const uHeaMaxCon = uHeaMaxConFn({});
    const conSigHea = conSigHeaFn({ f1: one.y, f2: zer.y, u: swi.y, x1: negOne.y, x2: uHeaMaxCon.y });

    return { uTSup: swi.y, yCooCoi: conSigCoo.y, yHeaCoi: conSigHea.y };
  }
}
