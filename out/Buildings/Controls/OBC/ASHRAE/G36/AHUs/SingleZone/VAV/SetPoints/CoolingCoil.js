
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil
const equal_2ac2bdd1 = require("../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const pidwithreset_1df6d9ad = require("../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeCooCoi = 1,
		kCooCoi = 0.1,
		TdCooCoi = 0.1,
		TiCooCoi = 900,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.conCoi
  const conCoiFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeCooCoi, k: kCooCoi, reverseActing: false, Td: TdCooCoi, Ti: TiCooCoi });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.conInt
  const conIntFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.const
  const _constFn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.switch
  const _switchFn = switch_6d141143({});

  return (
    { u1SupFan, TAirSup, TSupCooSet, uZonSta }
  ) => {
    const conCoi = conCoiFn({ trigger: u1SupFan, u_m: TAirSup, u_s: TSupCooSet });
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: conInt.y, u2: uZonSta });
    const and2 = and2Fn({ u1: intEqu.y, u2: u1SupFan });
    const _const = _constFn({});
    const _switch = _switchFn({ u1: conCoi.y, u2: and2.y, u3: _const.y });

    return { yCooCoi: _switch.y };
  }
}
