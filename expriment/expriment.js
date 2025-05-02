const STEPS = 101;

async function run(file, duration) {
  const validate = require(file);
  const validateInstance = validate()

  const interval = (duration * 1000) / STEPS;


  for (let i = 0; i < STEPS; i++) {
    console.log(validateInstance({})?.y);
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

}


const fileName = process.argv[2];
const duration = process.argv[3];

run(fileName, duration);