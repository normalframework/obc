
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil
const equal_2ac2bdd1 = require("../../../../../../CDL/Integers/Equal");
const constant_8c5ba27d = require("../../../../../../CDL/Integers/Sources/Constant");
const and_6d642f1c = require("../../../../../../CDL/Logical/And");
const pidwithreset_1df6d9ad = require("../../../../../../CDL/Reals/PIDWithReset");
const constant_baefa089 = require("../../../../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../../../../CDL/Reals/Switch");

module.exports = (
  {
		controllerTypeCooCoi = Math.PI,
		kCooCoi = 0.1,
		TdCooCoi = 0.1,
		TiCooCoi = 900,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.conCoi
  const conCoiFn = pidwithreset_1df6d9ad({ controllerType: controllerTypeCooCoi, k: kCooCoi, Td: TdCooCoi, Ti: TiCooCoi });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.conInt
  const conIntFn = constant_8c5ba27d({ k: 3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.intEqu
  const intEquFn = equal_2ac2bdd1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.const
  const constFn = constant_baefa089({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.CoolingCoil.switch
  const switchFn = switch_6d141143({});

  return (
    { uZonSta }
  ) => {
    const conCoi = conCoiFn({});
    const conInt = conIntFn({});
    const intEqu = intEquFn({ u1: conInt.y, u2: uZonSta });
    const and2 = and2Fn({ u1: intEqu.y });
    const const_ = constFn({});
    const switch_ = switchFn({ u1: conCoi.y, u2: and2.y, u3: const_.y });

    return { yCooCoi: switch_.y };
  }
}
