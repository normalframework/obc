
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits
const aireconomizerhighlimits_21bdaae6 = require("../AirEconomizerHighLimits");
const ramp_3c414377 = require("../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim
  const ecoHigLimFn = aireconomizerhighlimits_21bdaae6({ ashCliZon: 2, ecoHigLimCon: 0, eneStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim1
  const ecoHigLim1Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 0, eneStd: 1, tit24CliZon: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.retAirTem
  const retAirTemFn = ramp_3c414377({ duration: 10, height: 5, offset: 295.15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim10
  const ecoHigLim10Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 1, eneStd: 1, tit24CliZon: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim11
  const ecoHigLim11Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 1, eneStd: 1, tit24CliZon: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim12
  const ecoHigLim12Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 1, eneStd: 1, tit24CliZon: 6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim13
  const ecoHigLim13Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 1, eneStd: 1, tit24CliZon: 7 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim14
  const ecoHigLim14Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 3, eneStd: 1, tit24CliZon: 1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim2
  const ecoHigLim2Fn = aireconomizerhighlimits_21bdaae6({ ashCliZon: 11, ecoHigLimCon: 0, eneStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim3
  const ecoHigLim3Fn = aireconomizerhighlimits_21bdaae6({ ashCliZon: 1, ecoHigLimCon: 0, eneStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim4
  const ecoHigLim4Fn = aireconomizerhighlimits_21bdaae6({ ashCliZon: 2, ecoHigLimCon: 1, eneStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim5
  const ecoHigLim5Fn = aireconomizerhighlimits_21bdaae6({ ashCliZon: 2, ecoHigLimCon: 3, eneStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.retAirEnt
  const retAirEntFn = ramp_3c414377({ duration: 10, height: 5000, offset: 65000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim6
  const ecoHigLim6Fn = aireconomizerhighlimits_21bdaae6({ ashCliZon: 2, ecoHigLimCon: 4, eneStd: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim7
  const ecoHigLim7Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 0, eneStd: 1, tit24CliZon: 2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim8
  const ecoHigLim8Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 0, eneStd: 1, tit24CliZon: 6 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.Validation.AirEconomizerHighLimits.ecoHigLim9
  const ecoHigLim9Fn = aireconomizerhighlimits_21bdaae6({ ecoHigLimCon: 0, eneStd: 1, tit24CliZon: 7 });

  return (
    {  }
  ) => {
    const ecoHigLim = ecoHigLimFn({});
    const ecoHigLim1 = ecoHigLim1Fn({});
    const retAirTem = retAirTemFn({});
    const ecoHigLim10 = ecoHigLim10Fn({ TRet: retAirTem.y });
    const ecoHigLim11 = ecoHigLim11Fn({ TRet: retAirTem.y });
    const ecoHigLim12 = ecoHigLim12Fn({ TRet: retAirTem.y });
    const ecoHigLim13 = ecoHigLim13Fn({ TRet: retAirTem.y });
    const ecoHigLim14 = ecoHigLim14Fn({});
    const ecoHigLim2 = ecoHigLim2Fn({});
    const ecoHigLim3 = ecoHigLim3Fn({});
    const ecoHigLim4 = ecoHigLim4Fn({ TRet: retAirTem.y });
    const ecoHigLim5 = ecoHigLim5Fn({});
    const retAirEnt = retAirEntFn({});
    const ecoHigLim6 = ecoHigLim6Fn({ hRet: retAirEnt.y });
    const ecoHigLim7 = ecoHigLim7Fn({});
    const ecoHigLim8 = ecoHigLim8Fn({});
    const ecoHigLim9 = ecoHigLim9Fn({});

    return { ecoHigLim: ecoHigLim, ecoHigLim1: ecoHigLim1, retAirTem: retAirTem, ecoHigLim10: ecoHigLim10, ecoHigLim11: ecoHigLim11, ecoHigLim12: ecoHigLim12, ecoHigLim13: ecoHigLim13, ecoHigLim14: ecoHigLim14, ecoHigLim2: ecoHigLim2, ecoHigLim3: ecoHigLim3, ecoHigLim4: ecoHigLim4, ecoHigLim5: ecoHigLim5, retAirEnt: retAirEnt, ecoHigLim6: ecoHigLim6, ecoHigLim7: ecoHigLim7, ecoHigLim8: ecoHigLim8, ecoHigLim9: ecoHigLim9 };
  }
}
