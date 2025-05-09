
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests
const plantrequests_13d6a7f1 = require("../PlantRequests");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.supTem1
  const supTem1Fn = ramp_3c414377({ duration: 3600, height: 8, offset: 273.15 +12 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.supTemSet1
  const supTemSet1Fn = ramp_3c414377({ duration: 3600, height: 15, offset: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.cooCoi1
  const cooCoi1Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.heaCoi
  const heaCoiFn = ramp_3c414377({ duration: 3600, height: -0.3, offset: 0.96, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.plaReq
  const plaReqFn = plantrequests_13d6a7f1({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.supTem
  const supTemFn = ramp_3c414377({ duration: 3600, height: 8, offset: 273.15 +15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.supTemSet
  const supTemSetFn = ramp_3c414377({ duration: 3600, height: 6, offset: 273.15 +14.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.cooCoi
  const cooCoiFn = ramp_3c414377({ duration: 3600, height: -0.3, offset: 0.96, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.MultiZone.VAV.SetPoints.Validation.PlantRequests.plaReq1
  const plaReq1Fn = plantrequests_13d6a7f1({ heaCoi: 0 });

  return (
    {  }
  ) => {
    const supTem1 = supTem1Fn({});
    const supTemSet1 = supTemSet1Fn({});
    const cooCoi1 = cooCoi1Fn({});
    const heaCoi = heaCoiFn({});
    const plaReq = plaReqFn({ TAirSup: supTem1.y, TAirSupSet: supTemSet1.y, uCooCoiSet: cooCoi1.y, uHeaCoiSet: heaCoi.y });
    const supTem = supTemFn({});
    const supTemSet = supTemSetFn({});
    const cooCoi = cooCoiFn({});
    const plaReq1 = plaReq1Fn({ TAirSup: supTem.y, TAirSupSet: supTemSet.y, uCooCoiSet: cooCoi.y });

    return { supTem1: supTem1, supTemSet1: supTemSet1, cooCoi1: cooCoi1, heaCoi: heaCoi, plaReq: plaReq, supTem: supTem, supTemSet: supTemSet, cooCoi: cooCoi, plaReq1: plaReq1 };
  }
}
