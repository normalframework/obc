
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits
const booleantoreal_df99be1a = require("../../../CDL/Conversions/BooleanToReal");
const and_6d642f1c = require("../../../CDL/Logical/And");
const not_6d646018 = require("../../../CDL/Logical/Not");
const or_e27f1bfe = require("../../../CDL/Logical/Or");
const constant_48cc1015 = require("../../../CDL/Logical/Sources/Constant");
const addparameter_26b0d2d7 = require("../../../CDL/Reals/AddParameter");
const min_a5fb1ea3 = require("../../../CDL/Reals/Min");
const constant_baefa089 = require("../../../CDL/Reals/Sources/Constant");
const switch_6d141143 = require("../../../CDL/Reals/Switch");
const assert_078ec840 = require("../../../CDL/Utilities/Assert");

module.exports = (
  {
		ashCliZon = 0,
		ecoHigLimCon,
		eneStd,
		tit24CliZon = 0,
    } = {}
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.fixEntFixDryBul
  const fixEntFixDryBulFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.booToRea
  const booToReaFn = booleantoreal_df99be1a({ realTrue: 66000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con
  const conFn = constant_baefa089({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash1B
  const ash1BFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash2B
  const ash2BFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or22
  const or22Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash3B
  const ash3BFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or23
  const or23Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash3C
  const ash3CFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash4B
  const ash4BFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or24
  const or24Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash4C
  const ash4CFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or1
  const or1Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or4
  const or4Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash5B
  const ash5BFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash5C
  const ash5CFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or25
  const or25Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash6B
  const ash6BFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or2
  const or2Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash7
  const ash7Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash8
  const ash8Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or6
  const or6Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or26
  const or26Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or7
  const or7Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.fixDryBul
  const fixDryBulFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and2
  const and2Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con1
  const con1Fn = constant_baefa089({ k: 273.15 +21 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash5A
  const ash5AFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash6A
  const ash6AFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or5
  const or5Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and1
  const and1Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con2
  const con2Fn = constant_baefa089({ k: 273.15 +18 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con11
  const con11Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or10
  const or10Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or27
  const or27Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or11
  const or11Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or28
  const or28Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or31
  const or31Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or12
  const or12Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or29
  const or29Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or13
  const or13Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or30
  const or30Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or14
  const or14Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or3
  const or3Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or15
  const or15Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.difDryBul
  const difDryBulFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and3
  const and3Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con3
  const con3Fn = constant_baefa089({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.min1
  const min1Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.fixDryBulDifDryBul
  const fixDryBulDifDryBulFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and12
  const and12Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con12
  const con12Fn = constant_baefa089({ k: 273.15 +21 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.min2
  const min2Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and13
  const and13Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi14
  const swi14Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi13
  const swi13Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi3
  const swi3Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi2
  const swi2Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi1
  const swi1Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi
  const swiFn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash4A
  const ash4AFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash3A
  const ash3AFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash2A
  const ash2AFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or8
  const or8Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.ash1A
  const ash1AFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or33
  const or33Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or9
  const or9Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and4
  const and4Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.not1
  const not1Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.assMes
  const assMesFn = assert_078ec840({ message: "Warning: Differential dry bulb high-limit-control device is not allowed in climate zone 1A, 2A, 3A and 4A!" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.difEntFixDryBul
  const difEntFixDryBulFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titEngSta
  const titEngStaFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and11
  const and11Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.not2
  const not2Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.assMes1
  const assMes1Fn = assert_078ec840({ message: "Warning: When Title 24 energy standard is used, the device type cannot be differential enthalpy with fixed dry bulb!" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and14
  const and14Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.not3
  const not3Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.assMes2
  const assMes2Fn = assert_078ec840({ message: "Warning: Fixed dry bulb with differential dry bulb high-limit-control device is not allowed in climate zone 1A, 2A, 3A and 4A!" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.noAshCli
  const noAshCliFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.noTit24Cli
  const noTit24CliFn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.noCli
  const noCliFn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.not4
  const not4Fn = not_6d646018({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.assMes3
  const assMes3Fn = assert_078ec840({ message: "Warning: Climate zone is not specified!" });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con4
  const con4Fn = constant_baefa089({ k: 66000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con10
  const con10Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi4
  const swi4Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con5
  const con5Fn = constant_baefa089({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon1
  const titZon1Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon3
  const titZon3Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or16
  const or16Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon5
  const titZon5Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or34
  const or34Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon11
  const titZon11Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon12
  const titZon12Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or35
  const or35Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon13
  const titZon13Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or17
  const or17Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or32
  const or32Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon14
  const titZon14Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon15
  const titZon15Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or36
  const or36Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon16
  const titZon16Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or18
  const or18Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or20
  const or20Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and5
  const and5Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con6
  const con6Fn = constant_baefa089({ k: 273.15 +23 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon10
  const titZon10Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon4
  const titZon4Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon2
  const titZon2Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or38
  const or38Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or19
  const or19Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and6
  const and6Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con7
  const con7Fn = constant_baefa089({ k: 273.15 +22 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon9
  const titZon9Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon8
  const titZon8Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.titZon6
  const titZon6Fn = constant_48cc1015({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or39
  const or39Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.or21
  const or21Fn = or_e27f1bfe({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and7
  const and7Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con8
  const con8Fn = constant_baefa089({ k: 273.15 +21 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and8
  const and8Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.addPar
  const addParFn = addparameter_26b0d2d7({ p: -1 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and9
  const and9Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.addPar1
  const addPar1Fn = addparameter_26b0d2d7({ p: -2 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and10
  const and10Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.addPar2
  const addPar2Fn = addparameter_26b0d2d7({ p: -3 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.min3
  const min3Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and15
  const and15Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.min4
  const min4Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and16
  const and16Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.min5
  const min5Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.and17
  const and17Fn = and_6d642f1c({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.min6
  const min6Fn = min_a5fb1ea3({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.con9
  const con9Fn = constant_baefa089({ k: 273.15 +24 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi18
  const swi18Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi17
  const swi17Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi16
  const swi16Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi15
  const swi15Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi12
  const swi12Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi11
  const swi11Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi10
  const swi10Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi9
  const swi9Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi8
  const swi8Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi7
  const swi7Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi6
  const swi6Fn = switch_6d141143({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.Generic.AirEconomizerHighLimits.swi5
  const swi5Fn = switch_6d141143({});

  return (
    {  }
  ) => {
    const fixEntFixDryBul = fixEntFixDryBulFn({});
    const booToRea = booToReaFn({ u: fixEntFixDryBul.y });
    const con = conFn({});
    const ash1B = ash1BFn({});
    const ash2B = ash2BFn({});
    const or22 = or22Fn({ u1: ash1B.y, u2: ash2B.y });
    const ash3B = ash3BFn({});
    const or23 = or23Fn({ u1: or22.y, u2: ash3B.y });
    const ash3C = ash3CFn({});
    const ash4B = ash4BFn({});
    const or24 = or24Fn({ u1: ash3C.y, u2: ash4B.y });
    const ash4C = ash4CFn({});
    const or1 = or1Fn({ u1: or24.y, u2: ash4C.y });
    const or4 = or4Fn({ u1: or23.y, u2: or1.y });
    const ash5B = ash5BFn({});
    const ash5C = ash5CFn({});
    const or25 = or25Fn({ u1: ash5B.y, u2: ash5C.y });
    const ash6B = ash6BFn({});
    const or2 = or2Fn({ u1: or25.y, u2: ash6B.y });
    const ash7 = ash7Fn({});
    const ash8 = ash8Fn({});
    const or6 = or6Fn({ u1: ash7.y, u2: ash8.y });
    const or26 = or26Fn({ u1: or2.y, u2: or6.y });
    const or7 = or7Fn({ u1: or4.y, u2: or26.y });
    const fixDryBul = fixDryBulFn({});
    const and2 = and2Fn({ u1: or7.y, u2: fixDryBul.y });
    const con1 = con1Fn({});
    const ash5A = ash5AFn({});
    const ash6A = ash6AFn({});
    const or5 = or5Fn({ u1: ash5A.y, u2: ash6A.y });
    const and1 = and1Fn({ u1: or5.y, u2: fixDryBul.y });
    const con2 = con2Fn({});
    const con11 = con11Fn({});
    const or10 = or10Fn({ u1: ash1B.y, u2: ash2B.y });
    const or27 = or27Fn({ u1: or10.y, u2: ash3B.y });
    const or11 = or11Fn({ u1: ash3C.y, u2: ash4B.y });
    const or28 = or28Fn({ u1: or11.y, u2: ash4C.y });
    const or31 = or31Fn({ u1: or27.y, u2: or28.y });
    const or12 = or12Fn({ u1: ash5A.y, u2: ash5B.y });
    const or29 = or29Fn({ u1: or12.y, u2: ash5C.y });
    const or13 = or13Fn({ u1: ash6A.y, u2: ash6B.y });
    const or30 = or30Fn({ u1: or13.y, u2: ash7.y });
    const or14 = or14Fn({ u1: or29.y, u2: or30.y });
    const or3 = or3Fn({ u1: or31.y, u2: or14.y });
    const or15 = or15Fn({ u1: or3.y, u2: ash8.y });
    const difDryBul = difDryBulFn({});
    const and3 = and3Fn({ u1: or15.y, u2: difDryBul.y });
    const con3 = con3Fn({});
    const min1 = min1Fn({ u1: con3.y, u2: con11.y });
    const fixDryBulDifDryBul = fixDryBulDifDryBulFn({});
    const and12 = and12Fn({ u1: or7.y, u2: fixDryBulDifDryBul.y });
    const con12 = con12Fn({});
    const min2 = min2Fn({ u1: con12.y, u2: con11.y });
    const and13 = and13Fn({ u1: fixDryBulDifDryBul.y, u2: or5.y });
    const swi14 = swi14Fn({ u1: min2.y, u2: and13.y, u3: con3.y });
    const swi13 = swi13Fn({ u1: min1.y, u2: and12.y, u3: swi14.y });
    const swi3 = swi3Fn({ u1: con11.y, u2: and3.y, u3: swi13.y });
    const swi2 = swi2Fn({ u1: con2.y, u2: fixDryBul.y, u3: swi3.y });
    const swi1 = swi1Fn({ u1: con1.y, u2: and1.y, u3: swi2.y });
    const swi = swiFn({ u1: con.y, u2: and2.y, u3: swi1.y });
    const ash4A = ash4AFn({});
    const ash3A = ash3AFn({});
    const ash2A = ash2AFn({});
    const or8 = or8Fn({ u1: ash3A.y, u2: ash2A.y });
    const ash1A = ash1AFn({});
    const or33 = or33Fn({ u1: or8.y, u2: ash1A.y });
    const or9 = or9Fn({ u1: ash4A.y, u2: or33.y });
    const and4 = and4Fn({ u1: or9.y, u2: difDryBul.y });
    const not1 = not1Fn({ u: and4.y });
    const assMes = assMesFn({ u: not1.y });
    const difEntFixDryBul = difEntFixDryBulFn({});
    const titEngSta = titEngStaFn({});
    const and11 = and11Fn({ u1: difEntFixDryBul.y, u2: titEngSta.y });
    const not2 = not2Fn({ u: and11.y });
    const assMes1 = assMes1Fn({ u: not2.y });
    const and14 = and14Fn({ u1: fixDryBulDifDryBul.y, u2: or9.y });
    const not3 = not3Fn({ u: and14.y });
    const assMes2 = assMes2Fn({ u: not3.y });
    const noAshCli = noAshCliFn({});
    const noTit24Cli = noTit24CliFn({});
    const noCli = noCliFn({ u1: noAshCli.y, u2: noTit24Cli.y });
    const not4 = not4Fn({ u: noCli.y });
    const assMes3 = assMes3Fn({ u: not4.y });
    const con4 = con4Fn({});
    const con10 = con10Fn({});
    const swi4 = swi4Fn({ u1: con4.y, u2: fixEntFixDryBul.y, u3: con10.y });
    const con5 = con5Fn({});
    const titZon1 = titZon1Fn({});
    const titZon3 = titZon3Fn({});
    const or16 = or16Fn({ u1: titZon1.y, u2: titZon3.y });
    const titZon5 = titZon5Fn({});
    const or34 = or34Fn({ u1: or16.y, u2: titZon5.y });
    const titZon11 = titZon11Fn({});
    const titZon12 = titZon12Fn({});
    const or35 = or35Fn({ u1: titZon11.y, u2: titZon12.y });
    const titZon13 = titZon13Fn({});
    const or17 = or17Fn({ u1: or35.y, u2: titZon13.y });
    const or32 = or32Fn({ u1: or34.y, u2: or17.y });
    const titZon14 = titZon14Fn({});
    const titZon15 = titZon15Fn({});
    const or36 = or36Fn({ u1: titZon14.y, u2: titZon15.y });
    const titZon16 = titZon16Fn({});
    const or18 = or18Fn({ u1: or36.y, u2: titZon16.y });
    const or20 = or20Fn({ u1: or32.y, u2: or18.y });
    const and5 = and5Fn({ u1: or20.y, u2: fixDryBul.y });
    const con6 = con6Fn({});
    const titZon10 = titZon10Fn({});
    const titZon4 = titZon4Fn({});
    const titZon2 = titZon2Fn({});
    const or38 = or38Fn({ u1: titZon4.y, u2: titZon2.y });
    const or19 = or19Fn({ u1: titZon10.y, u2: or38.y });
    const and6 = and6Fn({ u1: or19.y, u2: fixDryBul.y });
    const con7 = con7Fn({});
    const titZon9 = titZon9Fn({});
    const titZon8 = titZon8Fn({});
    const titZon6 = titZon6Fn({});
    const or39 = or39Fn({ u1: titZon8.y, u2: titZon6.y });
    const or21 = or21Fn({ u1: titZon9.y, u2: or39.y });
    const and7 = and7Fn({ u1: or21.y, u2: fixDryBul.y });
    const con8 = con8Fn({});
    const and8 = and8Fn({ u1: or20.y, u2: difDryBul.y });
    const addPar = addParFn({ u: con11.y });
    const and9 = and9Fn({ u1: or19.y, u2: difDryBul.y });
    const addPar1 = addPar1Fn({ u: con11.y });
    const and10 = and10Fn({ u1: or21.y, u2: difDryBul.y });
    const addPar2 = addPar2Fn({ u: con11.y });
    const min3 = min3Fn({ u1: con5.y, u2: con11.y });
    const and15 = and15Fn({ u1: or20.y, u2: fixDryBulDifDryBul.y });
    const min4 = min4Fn({ u1: addPar.y, u2: con6.y });
    const and16 = and16Fn({ u1: or19.y, u2: fixDryBulDifDryBul.y });
    const min5 = min5Fn({ u1: addPar1.y, u2: con7.y });
    const and17 = and17Fn({ u1: or21.y, u2: fixDryBulDifDryBul.y });
    const min6 = min6Fn({ u1: addPar2.y, u2: con8.y });
    const con9 = con9Fn({});
    const swi18 = swi18Fn({ u1: min6.y, u2: fixDryBulDifDryBul.y, u3: con9.y });
    const swi17 = swi17Fn({ u1: min5.y, u2: and17.y, u3: swi18.y });
    const swi16 = swi16Fn({ u1: min4.y, u2: and16.y, u3: swi17.y });
    const swi15 = swi15Fn({ u1: min3.y, u2: and15.y, u3: swi16.y });
    const swi12 = swi12Fn({ u1: addPar2.y, u2: difDryBul.y, u3: swi15.y });
    const swi11 = swi11Fn({ u1: addPar1.y, u2: and10.y, u3: swi12.y });
    const swi10 = swi10Fn({ u1: addPar.y, u2: and9.y, u3: swi11.y });
    const swi9 = swi9Fn({ u1: con11.y, u2: and8.y, u3: swi10.y });
    const swi8 = swi8Fn({ u1: con8.y, u2: fixDryBul.y, u3: swi9.y });
    const swi7 = swi7Fn({ u1: con7.y, u2: and7.y, u3: swi8.y });
    const swi6 = swi6Fn({ u1: con6.y, u2: and6.y, u3: swi7.y });
    const swi5 = swi5Fn({ u1: con5.y, u2: and5.y, u3: swi6.y });

    return { hCut: booToRea.y, TCut: swi.y };
  }
}
