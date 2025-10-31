const controller = require("./out/Buildings/Controls/OBC/ASHRAE/G36/TerminalUnits/Reheat/Controller.js");
const instance = controller({ VHeaMax_flow: 0.3, VHeaMin_flow: 0.15, VCooMax_flow: 1.5, VOccMin_flow: 0.15, heaCoi: 1 });

const input =   {
  uOpeMod: 1,
  TDis: 308.8735046386719,
  TSup: 288.5254211425781,
  u1Fan: 0,
  u1HotPla: 0,
  VDis_flow: 0.0411798395216465,
  TCooSet: 297.1499938964844,
  THeaSet: 293.1499938964844,
  TZon: 292.257568359375,
  oveFloSet: 0,
  TSupSet: 285.1499938964844,
  ppmCO2: 0,
  ppmCO2Set: 0,
  u1Occ: 0,
  u1Win: 0,
  oveDamPos: 0,
  uHeaOff: 0
}

for (let i = 0; i < 10; i++) {
  const output = instance(input);

  console.log(output);
}