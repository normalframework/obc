
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealVectorFilter
const realvectorfilter_b20624b6 = require("../RealVectorFilter");
const constant_b0edecc8 = require("../../Reals/Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealVectorFilter.ReaInp
  const ReaInpFn = constant_b0edecc8({ k: [1,2,3] });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.RealVectorFilter.reaFil
  const reaFilFn = realvectorfilter_b20624b6({ msk: [true,false,true], nin: 3, nout: 2 });

  return (
    {  }
  ) => {
    const ReaInp = ReaInpFn({});
    const reaFil = reaFilFn({ u: ReaInp.y });

    return { ReaInp: ReaInp, reaFil: reaFil };
  }
}
