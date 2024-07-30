
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops
const booleantoreal_df99be1a = require("../../../CDL/Conversions/BooleanToReal");
const and_6d642f1c = require("../../../CDL/Logical/And");
const not_6d646018 = require("../../../CDL/Logical/Not");
const truedelay_b49d8a1a = require("../../../CDL/Logical/TrueDelay");
const less_19683368 = require("../../../CDL/Reals/Less");
const lessthreshold_f64b25e3 = require("../../../CDL/Reals/LessThreshold");
const multiply_a462b873 = require("../../../CDL/Reals/Multiply");
const pidwithreset_1df6d9ad = require("../../../CDL/Reals/PIDWithReset");

module.exports = (
  {
		dTHys = 0.25,
		kCooCon = 0.1,
		kHeaCon = 0.1,
		looHys = 0.01,
		TiCooCon = 900,
		TiHeaCon = 900,
		timChe = 30,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.enaCooLoo
  const enaCooLooFn = less_19683368({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.conCoo
  const conCooFn = pidwithreset_1df6d9ad({ controllerType: Math.PI, k: kCooCon, Ti: TiCooCon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCon
  const zerConFn = lessthreshold_f64b25e3({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disCoo
  const disCooFn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.colZon
  const colZonFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disCooCon
  const disCooConFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCoo
  const zerCooFn = booleantoreal_df99be1a({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.cooConSig
  const cooConSigFn = multiply_a462b873({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.enaHeaLoo
  const enaHeaLooFn = less_19683368({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.conHea
  const conHeaFn = pidwithreset_1df6d9ad({ controllerType: Math.PI, k: kHeaCon, Ti: TiHeaCon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCon1
  const zerCon1Fn = lessthreshold_f64b25e3({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disHea
  const disHeaFn = truedelay_b49d8a1a({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.holZon
  const holZonFn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disHeaCon
  const disHeaConFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerHea
  const zerHeaFn = booleantoreal_df99be1a({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.heaConSig
  const heaConSigFn = multiply_a462b873({});

  return (
    { TCooSet, THeaSet, TZon }
  ) => {
    const enaCooLoo = enaCooLooFn({ u2: TZon });
    const conCoo = conCooFn({ trigger: enaCooLoo.y, u_s: TCooSet });
    const zerCon = zerConFn({ u: conCoo.y });
    const disCoo = disCooFn({ u: zerCon.y });
    const colZon = colZonFn({ u: enaCooLoo.y });
    const disCooCon = disCooConFn({ u1: disCoo.y, u2: colZon.y });
    const zerCoo = zerCooFn({ u: disCooCon.y });
    const cooConSig = cooConSigFn({ u1: conCoo.y, u2: zerCoo.y });
    const enaHeaLoo = enaHeaLooFn({ u2: THeaSet });
    const conHea = conHeaFn({ trigger: enaHeaLoo.y, u_s: THeaSet });
    const zerCon1 = zerCon1Fn({ u: conHea.y });
    const disHea = disHeaFn({ u: zerCon1.y });
    const holZon = holZonFn({ u: enaHeaLoo.y });
    const disHeaCon = disHeaConFn({ u1: disHea.y, u2: holZon.y });
    const zerHea = zerHeaFn({ u: disHeaCon.y });
    const heaConSig = heaConSigFn({ u1: conHea.y, u2: zerHea.y });

    return { yCoo: cooConSig.y, yHea: heaConSig.y };
  }
}
