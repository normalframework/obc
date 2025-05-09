
// http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests
const plantrequests_c972e3f2 = require("../PlantRequests");
const constant_baefa089 = require("../../../../../../../CDL/Reals/Sources/Constant");
const ramp_3c414377 = require("../../../../../../../CDL/Reals/Sources/Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.supTem1
  const supTem1Fn = ramp_3c414377({ duration: 3600, height: 8, offset: 273.15 +12 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.supTemSet1
  const supTemSet1Fn = ramp_3c414377({ duration: 3600, height: 15, offset: 273.15 +20 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.supTem2
  const supTem2Fn = ramp_3c414377({ duration: 3600, height: 7, offset: 273.15 +13 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.cooCoi1
  const cooCoi1Fn = constant_baefa089({ k: 0 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.heaCoi
  const heaCoiFn = ramp_3c414377({ duration: 3600, height: -0.3, offset: 0.96, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.plaReq
  const plaReqFn = plantrequests_c972e3f2({});
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.supTem
  const supTemFn = ramp_3c414377({ duration: 3600, height: 8, offset: 273.15 +15 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.supTemSet
  const supTemSetFn = ramp_3c414377({ duration: 3600, height: 6, offset: 273.15 +14.5 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.cooCoi
  const cooCoiFn = ramp_3c414377({ duration: 3600, height: -0.3, offset: 0.96, startTime: 1000 });
  // http://example.org#Buildings.Controls.OBC.ASHRAE.G36.AHUs.SingleZone.VAV.SetPoints.Validation.PlantRequests.plaReq1
  const plaReq1Fn = plantrequests_c972e3f2({ heaCoi: 0 });

  return (
    {  }
  ) => {
    const supTem1 = supTem1Fn({});
    const supTemSet1 = supTemSet1Fn({});
    const supTem2 = supTem2Fn({});
    const cooCoi1 = cooCoi1Fn({});
    const heaCoi = heaCoiFn({});
    const plaReq = plaReqFn({ TAirSup: supTem1.y, TSupCoo: supTemSet1.y, TSupHeaEco: supTem2.y, uCooCoi_actual: cooCoi1.y, uHeaCoi_actual: heaCoi.y });
    const supTem = supTemFn({});
    const supTemSet = supTemSetFn({});
    const cooCoi = cooCoiFn({});
    const plaReq1 = plaReq1Fn({ TAirSup: supTem.y, TSupCoo: supTemSet.y, uCooCoi_actual: cooCoi.y });

    return { supTem1: supTem1, supTemSet1: supTemSet1, supTem2: supTem2, cooCoi1: cooCoi1, heaCoi: heaCoi, plaReq: plaReq, supTem: supTem, supTemSet: supTemSet, cooCoi: cooCoi, plaReq1: plaReq1 };
  }
}
