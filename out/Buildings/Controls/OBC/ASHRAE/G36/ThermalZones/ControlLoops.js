
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops
const booleantoreal_e7vrg = require("../../../CDL/Conversions/BooleanToReal");
const and_5k4usg = require("../../../CDL/Logical/And");
const not_pi0gln = require("../../../CDL/Logical/Not");
const truedelay_4qls2c = require("../../../CDL/Logical/TrueDelay");
const less_m65sg = require("../../../CDL/Reals/Less");
const lessthreshold_2brvg = require("../../../CDL/Reals/LessThreshold");
const multiply_opter = require("../../../CDL/Reals/Multiply");
const pidwithreset_k5qyl = require("../../../CDL/Reals/PIDWithReset");

module.exports = (
  {
		dTHys = 0.25,
		kCooCon = 0.1,
		kHeaCon = 0.1,
		looHys = 0.01,
		TiCooCon = 900,
		TiHeaCon = 900,
		timChe = 30
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.enaCooLoo
  const enaCooLooFn = less_m65sg({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.conCoo
  const conCooFn = pidwithreset_k5qyl({ controllerType: "Math.PI", k: kCooCon, Ti: TiCooCon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCon
  const zerConFn = lessthreshold_2brvg({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disCoo
  const disCooFn = truedelay_4qls2c({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.colZon
  const colZonFn = not_pi0gln({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disCooCon
  const disCooConFn = and_5k4usg({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCoo
  const zerCooFn = booleantoreal_e7vrg({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.cooConSig
  const cooConSigFn = multiply_opter({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.enaHeaLoo
  const enaHeaLooFn = less_m65sg({ h: dTHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.conHea
  const conHeaFn = pidwithreset_k5qyl({ controllerType: "Math.PI", k: kHeaCon, Ti: TiHeaCon });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerCon1
  const zerCon1Fn = lessthreshold_2brvg({ h: 0.8*looHys, t: looHys });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disHea
  const disHeaFn = truedelay_4qls2c({ delayTime: timChe });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.holZon
  const holZonFn = not_pi0gln({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.disHeaCon
  const disHeaConFn = and_5k4usg({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.zerHea
  const zerHeaFn = booleantoreal_e7vrg({ realFalse: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.ThermalZones.ControlLoops.heaConSig
  const heaConSigFn = multiply_opter({});

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
