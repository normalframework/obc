
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset
const pulse_cdc9ff89 = require("../../Logical/Sources/Pulse");
const sampletrigger_8f6c989e = require("../../Logical/Sources/SampleTrigger");
const integratorwithreset_299c1be4 = require("../IntegratorWithReset");
const constant_d2aca5e8 = require("../Sources/Constant");
const ramp_40ddd056 = require("../Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.sampleTrigger
  const sampleTriggerFn = sampletrigger_8f6c989e({ period: 0.2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.cons
  const consFn = constant_d2aca5e8({ k: 10 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.ramp
  const rampFn = ramp_40ddd056({ duration: 1, height: -1, offset: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.intDef
  const intDefFn = integratorwithreset_299c1be4({ y_start: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.intWitRes1
  const intWitRes1Fn = integratorwithreset_299c1be4({ k: 0.5, y_start: -2 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.booleanPulse
  const booleanPulseFn = pulse_cdc9ff89({ period: 0.2, width: 0.5 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.IntegratorWithReset.intWitRes2
  const intWitRes2Fn = integratorwithreset_299c1be4({ k: 0.5, y_start: -5 });

  return (
    {  }
  ) => {
    const sampleTrigger = sampleTriggerFn({});
    const cons = consFn({});
    const ramp = rampFn({});
    const intDef = intDefFn({ trigger: sampleTrigger.y, u: cons.y, y_reset_in: ramp.y });
    const intWitRes1 = intWitRes1Fn({ trigger: sampleTrigger.y, u: cons.y, y_reset_in: ramp.y });
    const booleanPulse = booleanPulseFn({});
    const intWitRes2 = intWitRes2Fn({ trigger: booleanPulse.y, u: cons.y, y_reset_in: ramp.y });

    return { sampleTrigger: sampleTrigger, cons: cons, ramp: ramp, intDef: intDef, intWitRes1: intWitRes1, booleanPulse: booleanPulse, intWitRes2: intWitRes2 };
  }
}
