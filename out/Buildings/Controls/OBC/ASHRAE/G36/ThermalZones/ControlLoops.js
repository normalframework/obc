
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops
const booleantoreal_552dc85b = require("../../../CDL/Conversions/BooleanToReal");
const and_f2b4cf1d = require("../../../CDL/Logical/And");
const not_f2b50019 = require("../../../CDL/Logical/Not");
const truedelay_17dc655b = require("../../../CDL/Logical/TrueDelay");
const less_15730f47 = require("../../../CDL/Reals/Less");
const lessthreshold_854034e4 = require("../../../CDL/Reals/LessThreshold");
const multiply_a5ce8cd2 = require("../../../CDL/Reals/Multiply");
const pidwithreset_2293668c = require("../../../CDL/Reals/PIDWithReset");

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
  const enaCooLooFn = less_15730f47({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.conCoo
  const conCooFn = pidwithreset_2293668c({ controllerType: 1, k: kCooCon, reverseActing: false, Ti: TiCooCon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCon
  const zerConFn = lessthreshold_854034e4({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disCoo
  const disCooFn = truedelay_17dc655b({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.colZon
  const colZonFn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disCooCon
  const disCooConFn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCoo
  const zerCooFn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.cooConSig
  const cooConSigFn = multiply_a5ce8cd2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.enaHeaLoo
  const enaHeaLooFn = less_15730f47({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.conHea
  const conHeaFn = pidwithreset_2293668c({ controllerType: 1, k: kHeaCon, Ti: TiHeaCon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCon1
  const zerCon1Fn = lessthreshold_854034e4({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disHea
  const disHeaFn = truedelay_17dc655b({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.holZon
  const holZonFn = not_f2b50019({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disHeaCon
  const disHeaConFn = and_f2b4cf1d({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerHea
  const zerHeaFn = booleantoreal_552dc85b({ realFalse: 1, realTrue: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.heaConSig
  const heaConSigFn = multiply_a5ce8cd2({});

  return (
    { TZon, TCooSet, THeaSet }
  ) => {
    const enaCooLoo = enaCooLooFn({ u1: TCooSet, u2: TZon });
    const conCoo = conCooFn({ trigger: enaCooLoo.y, u_m: TZon, u_s: TCooSet });
    const zerCon = zerConFn({ u: conCoo.y });
    const disCoo = disCooFn({ u: zerCon.y });
    const colZon = colZonFn({ u: enaCooLoo.y });
    const disCooCon = disCooConFn({ u1: disCoo.y, u2: colZon.y });
    const zerCoo = zerCooFn({ u: disCooCon.y });
    const cooConSig = cooConSigFn({ u1: conCoo.y, u2: zerCoo.y });
    const enaHeaLoo = enaHeaLooFn({ u1: TZon, u2: THeaSet });
    const conHea = conHeaFn({ trigger: enaHeaLoo.y, u_m: TZon, u_s: THeaSet });
    const zerCon1 = zerCon1Fn({ u: conHea.y });
    const disHea = disHeaFn({ u: zerCon1.y });
    const holZon = holZonFn({ u: enaHeaLoo.y });
    const disHeaCon = disHeaConFn({ u1: disHea.y, u2: holZon.y });
    const zerHea = zerHeaFn({ u: disHeaCon.y });
    const heaConSig = heaConSigFn({ u1: conHea.y, u2: zerHea.y });

    return { yCoo: cooConSig.y, yHea: heaConSig.y };
  }
}
