const timeSuppression = require("../out/Buildings/Controls/OBC/ASHRAE/G36/Generic/TimeSuppression.js");
const sampler_875b0f69 = require("../out/Buildings/Controls/OBC/CDL/Discrete/Sampler.js");
const tsInstance = timeSuppression({ samplePeriod: 2, maxTim: 15, chaRat: 5 });

const controller = require('../out/Buildings/Controls/OBC/ASHRAE/G36/AHUs/SingleZone/VAV/Controller.js');
const constrollerInstance = controller({ samplePeriod: 2 });

const trimAndRespond = require('../out/Buildings/Controls/OBC/ASHRAE/G36/Generic/TrimAndRespond.js');


async function run() {
  const tandRespond = trimAndRespond({
    minSet: 37,
    maxSet: 370,
    iniSet: 120,
    samplePeriod: 120,
    triAmo: 1,
    resAmo: -2,
    maxRes: -4,
    numIgnReq: 4,
    delTim: 300
  })

  for (let i = 0; i < 100; i++) {
    // const res = tsInstance({ TSet: 25, TZon: 20 });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(tandRespond({ numOfReq: i, uDevSta: true }));
  }
}


run();