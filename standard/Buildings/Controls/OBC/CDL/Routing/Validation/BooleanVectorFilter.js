
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanVectorFilter
const booleanvectorfilter_0be92c66 = require("../BooleanVectorFilter");
const constant_b8684894 = require("../../Logical/Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanVectorFilter.booInp
  const booInpFn = constant_b8684894({ k: [true,true,false] });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.BooleanVectorFilter.booFil
  const booFilFn = booleanvectorfilter_0be92c66({ msk: [true,false,true], nin: 3, nout: 2 });

  return (
    {  }
  ) => {
    const booInp = booInpFn({});
    const booFil = booFilFn({ u: booInp.y });

    return { booInp: booInp, booFil: booFil };
  }
}
