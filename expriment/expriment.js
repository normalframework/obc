const TimeManager = require("../out/TimeManager");
const fs = require('fs');
const path = require('path');

const STEPS = 101;
async function run(file, duration) {
  const validate = require(file);
  const validateInstance = validate()

  const interval = duration / STEPS;

  // Get all unique nested keys from first result to build CSV header
  const headers = [];
  function extractKeys(obj, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object') {
        for (const [subKey, subValue] of Object.entries(value)) {
          headers.push(`${prefix}${key}.${subKey}`);
        }
      }
    }
  }

  // Build CSV rows
  const rows = [['time', ...headers].join(',')];
  for (let i = 0; i < STEPS; i++) {
    const res = validateInstance({});
    if (!headers.length) {
      extractKeys(res);
    }
    const row = [TimeManager.time.toFixed(3)];
    for (const header of headers) {
      const [obj, prop] = header.split('.');
      const value = res[obj][prop];
      if (typeof value === 'boolean') {
        row.push(value ? 1 : 0);
      } else if (typeof value === 'number') {
        row.push(value.toFixed(4));
      } else {
        row.push(value);
      }
    }
    rows.push(row.join(','));
    TimeManager.advance(interval);
  }


  const dir = path.join(__dirname, 'validation');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Write TSV to js/Sampler.csv
  const outPath = path.join(dir, `${file.split('/').pop().replace('.js', '')}.csv`);
  fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
  console.log(`Wrote validation results to ${outPath}`);
}


const fileName = process.argv[2];
const duration = process.argv[3];

if (process.argv.length < 4) {
  console.log('Usage: node expriment/expriment.js <file> <duration>');
  process.exit(1);
}

if (process.argv.length === 5) {
  TimeManager.reset(Number(process.argv[4]));
}

run(fileName, duration);