
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage
const movingaverage_97c59001 = require("../MovingAverage");
const sin_f9d5a014 = require("../Sources/Sin");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.sinInpNoDel
  const sinInpNoDelFn = sin_f9d5a014({ freqHz: 1/80 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve1
  const movAve1Fn = movingaverage_97c59001({ delta: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve2
  const movAve2Fn = movingaverage_97c59001({ delta: 200 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve3
  const movAve3Fn = movingaverage_97c59001({ delta: 300 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve4
  const movAve4Fn = movingaverage_97c59001({ delta: 400 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve5
  const movAve5Fn = movingaverage_97c59001({ delta: 500 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.sinInp50sDel
  const sinInp50sDelFn = sin_f9d5a014({ freqHz: 1/80, startTime: 50 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve6
  const movAve6Fn = movingaverage_97c59001({ delta: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve7
  const movAve7Fn = movingaverage_97c59001({ delta: 200 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.sinInp100sDel
  const sinInp100sDelFn = sin_f9d5a014({ freqHz: 1/80, startTime: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve8
  const movAve8Fn = movingaverage_97c59001({ delta: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage.movAve9
  const movAve9Fn = movingaverage_97c59001({ delta: 200 });

  return (
    {  }
  ) => {
    const sinInpNoDel = sinInpNoDelFn({});
    const movAve1 = movAve1Fn({ u: sinInpNoDel.y });
    const movAve2 = movAve2Fn({ u: sinInpNoDel.y });
    const movAve3 = movAve3Fn({ u: sinInpNoDel.y });
    const movAve4 = movAve4Fn({ u: sinInpNoDel.y });
    const movAve5 = movAve5Fn({ u: sinInpNoDel.y });
    const sinInp50sDel = sinInp50sDelFn({});
    const movAve6 = movAve6Fn({ u: sinInp50sDel.y });
    const movAve7 = movAve7Fn({ u: sinInp50sDel.y });
    const sinInp100sDel = sinInp100sDelFn({});
    const movAve8 = movAve8Fn({ u: sinInp100sDel.y });
    const movAve9 = movAve9Fn({ u: sinInp100sDel.y });

    return { sinInpNoDel: sinInpNoDel, movAve1: movAve1, movAve2: movAve2, movAve3: movAve3, movAve4: movAve4, movAve5: movAve5, sinInp50sDel: sinInp50sDel, movAve6: movAve6, movAve7: movAve7, sinInp100sDel: sinInp100sDel, movAve8: movAve8, movAve9: movAve9 };
  }
}
