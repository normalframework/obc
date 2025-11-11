
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset
const booleantoreal_552dc85b = require("../../Conversions/BooleanToReal");
const constant_655d39b4 = require("../../Logical/Sources/Constant");
const greaterthreshold_7c60ca3f = require("../GreaterThreshold");
const integratorwithreset_299c1be4 = require("../IntegratorWithReset");
const pidwithreset_2293668c = require("../PIDWithReset");
const civiltime_a94bb59c = require("../Sources/CivilTime");
const constant_d2aca5e8 = require("../Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.modTim
  const modTimFn = civiltime_a94bb59c({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.greEquThr
  const greEquThrFn = greaterthreshold_7c60ca3f({ t: 1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.con
  const conFn = constant_655d39b4({ k: false });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.resVal
  const resValFn = constant_d2aca5e8({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.intWitRes1
  const intWitRes1Fn = integratorwithreset_299c1be4({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.setPoi
  const setPoiFn = booleantoreal_552dc85b({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.limPIDPar
  const limPIDParFn = pidwithreset_2293668c({ controllerType: 3, k: 1, Td: 1, Ti: 1, y_reset: 0.5, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.intWitRes2
  const intWitRes2Fn = integratorwithreset_299c1be4({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.limPIDInp
  const limPIDInpFn = pidwithreset_2293668c({ controllerType: 3, k: 1, Td: 1, Ti: 1, y_reset: 0.75, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.intWitRes3
  const intWitRes3Fn = integratorwithreset_299c1be4({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.limPIPar
  const limPIParFn = pidwithreset_2293668c({ controllerType: 1, k: 1, Td: 1, Ti: 1, y_reset: 0.5, yMin: -1 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.intWitRes4
  const intWitRes4Fn = integratorwithreset_299c1be4({});
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.PIDWithReset.limPIInp
  const limPIInpFn = pidwithreset_2293668c({ controllerType: 1, k: 1, Td: 1, Ti: 1, y_reset: 0.75, yMin: -1 });

  return (
    {  }
  ) => {
    const modTim = modTimFn({});
    const greEquThr = greEquThrFn({ u: modTim.y });
    const con = conFn({});
    const resVal = resValFn({});
    const intWitRes1 = intWitRes1Fn({ trigger: con.y, y_reset_in: resVal.y });
    const setPoi = setPoiFn({ u: greEquThr.y });
    const limPIDPar = limPIDParFn({ trigger: greEquThr.y, u_m: intWitRes1.y, u_s: setPoi.y });
    const intWitRes2 = intWitRes2Fn({ trigger: con.y, y_reset_in: resVal.y });
    const limPIDInp = limPIDInpFn({ trigger: greEquThr.y, u_m: intWitRes2.y, u_s: setPoi.y });
    const intWitRes3 = intWitRes3Fn({ trigger: con.y, y_reset_in: resVal.y });
    const limPIPar = limPIParFn({ trigger: greEquThr.y, u_m: intWitRes3.y, u_s: setPoi.y });
    const intWitRes4 = intWitRes4Fn({ trigger: con.y, y_reset_in: resVal.y });
    const limPIInp = limPIInpFn({ trigger: greEquThr.y, u_m: intWitRes4.y, u_s: setPoi.y });

    return { modTim: modTim, greEquThr: greEquThr, con: con, resVal: resVal, intWitRes1: intWitRes1, setPoi: setPoi, limPIDPar: limPIDPar, intWitRes2: intWitRes2, limPIDInp: limPIDInp, intWitRes3: intWitRes3, limPIPar: limPIPar, intWitRes4: intWitRes4, limPIInp: limPIInp };
  }
}
