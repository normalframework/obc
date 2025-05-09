
const TimeManager = require("../standard/TimeManager");
const pidFactory = require("../standard/Buildings/Controls/OBC/CDL/Reals/PID"); // Adjust path accordingly

// Generate pulse signal
function pulseSignal(time, period = 0.25) {
  return ((time % period) < period / 2) ? 1 : 0;
}

async function main() {
  // Create PID instances
  const limPID = pidFactory({
    controllerType: "Buildings.Controls.OBC.CDL.Types.SimpleController.PID",
    Ti: 1,
    Td: 1,
    yMin: -1,
    yMax: 1,
  });

  const limPI = pidFactory({
    controllerType: "Buildings.Controls.OBC.CDL.Types.SimpleController.PI",
    Ti: 1,
    Td: 1,
    yMin: -1,
    yMax: 1,
  });

  const limPD = pidFactory({
    controllerType: "Buildings.Controls.OBC.CDL.Types.SimpleController.PD",
    Ti: 1,
    Td: 1,
    yMin: -1,
    yMax: 1,
  });

  const limP = pidFactory({
    controllerType: "Buildings.Controls.OBC.CDL.Types.SimpleController.P",
    Ti: 1,
    Td: 1,
    yMin: -1,
    yMax: 1,
  });

  const noLimPID = pidFactory({
    controllerType: "Buildings.Controls.OBC.CDL.Types.SimpleController.PID",
    Ti: 1,
    Td: 1,
    yMin: -1e15,
    yMax: 1e15,
  });

  // Simulation parameters
  const measurement = 0.5; // constant measurement

  // Results
  const timeArray = [];
  const u_sArray = [];
  const u_mArray = [];
  const limPID_yArray = [];
  const noLimPID_yArray = [];
  const limP_yArray = [];
  const limPI_yArray = [];
  const limPD_yArray = [];
  const totalSteps = 100


  // Simulation loop
  for (let step = 0; step <= totalSteps; step++)  {
    const time = TimeManager.time;
    const u_s = pulseSignal(time);
    const u_m = measurement;

    const { y: limPID_y } = limPID({ u_s, u_m });
    const { y: limPI_y } = limPI({ u_s, u_m });
    const { y: limPD_y } = limPD({ u_s, u_m });
    const { y: limP_y } = limP({ u_s, u_m });
    const { y: noLimPID_y } = noLimPID({ u_s, u_m });

    timeArray.push(Number(time.toFixed(8)));
    u_sArray.push(u_s);
    u_mArray.push(u_m);
    limPID_yArray.push(limPID_y.toFixed(4));
    noLimPID_yArray.push(noLimPID_y.toFixed(4));
    limP_yArray.push(limP_y.toFixed(4));
    limPI_yArray.push(limPI_y.toFixed(4));
    limPD_yArray.push(limPD_y);

    TimeManager.advance(0.01);
  }

  // Output final results
  // Create CSV header
  const header = ['time', 'limPID.u_s', 'limPID.u_m', 'limPID.y', 'noLimPID.y', 'limP.y', 'limPI.y', 'limPD.y'].join(',');
  
  // Create CSV rows
  const rows = timeArray.map((time, i) => {
    return [
      time,
      u_sArray[i],
      u_mArray[i], 
      limPID_yArray[i],
      noLimPID_yArray[i],
      limP_yArray[i],
      limPI_yArray[i],
      limPD_yArray[i]
    ].join(',');
  });

  // Output CSV
  console.log(header);
  rows.forEach(row => console.log(row));
}

main();