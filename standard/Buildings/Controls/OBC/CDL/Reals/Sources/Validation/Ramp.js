
// http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Ramp
const ramp_40ddd056 = require("../Ramp");

module.exports = (
  
) => {
  // http://example.org#Buildings.Controls.OBC.CDL.Reals.Sources.Validation.Ramp.ram
  const ramFn = ramp_40ddd056({ duration: 3, height: 2, offset: 0.5, startTime: 1 });

  return (
    {  }
  ) => {
    const ram = ramFn({});

    return { ram: ram };
  }
}
