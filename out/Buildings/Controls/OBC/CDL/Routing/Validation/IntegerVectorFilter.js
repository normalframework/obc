
// http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorFilter
const integervectorfilter_448e507c = require("../IntegerVectorFilter");
const constant_104679de = require("../../Integers/Sources/Constant");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorFilter.IntInp
  const IntInpFn = constant_104679de({ k: "{1,2,3}" });
  // http://example.org#Buildings.Controls.OBC.CDL.Routing.Validation.IntegerVectorFilter.intFil
  const intFilFn = integervectorfilter_448e507c({ msk: "{true,false,true}", nin: 3, nout: 2 });

  return (
    {  }
  ) => {
    const IntInp = IntInpFn({});
    const intFil = intFilFn({ u: IntInp.y });

    return { IntInp: IntInp, intFil: intFil };
  }
}
