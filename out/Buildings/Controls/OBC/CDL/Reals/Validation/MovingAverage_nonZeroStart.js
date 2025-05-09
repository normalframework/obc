
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart
const movingaverage_97c59001 = require("../MovingAverage");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve1
  const movAve1Fn = movingaverage_97c59001({ delta: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve2
  const movAve2Fn = movingaverage_97c59001({ delta: 200 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve3
  const movAve3Fn = movingaverage_97c59001({ delta: 300 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve4
  const movAve4Fn = movingaverage_97c59001({ delta: 400 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve5
  const movAve5Fn = movingaverage_97c59001({ delta: 500 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve6
  const movAve6Fn = movingaverage_97c59001({ delta: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve7
  const movAve7Fn = movingaverage_97c59001({ delta: 200 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve8
  const movAve8Fn = movingaverage_97c59001({ delta: 100 });
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Validation.MovingAverage_nonZeroStart.movAve9
  const movAve9Fn = movingaverage_97c59001({ delta: 200 });

  return (
    {  }
  ) => {
    const movAve1 = movAve1Fn({});
    const movAve2 = movAve2Fn({});
    const movAve3 = movAve3Fn({});
    const movAve4 = movAve4Fn({});
    const movAve5 = movAve5Fn({});
    const movAve6 = movAve6Fn({});
    const movAve7 = movAve7Fn({});
    const movAve8 = movAve8Fn({});
    const movAve9 = movAve9Fn({});

    return { movAve1: movAve1, movAve2: movAve2, movAve3: movAve3, movAve4: movAve4, movAve5: movAve5, movAve6: movAve6, movAve7: movAve7, movAve8: movAve8, movAve9: movAve9 };
  }
}
