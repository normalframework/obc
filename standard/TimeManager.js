// TimeManager.js
let now = 0;
let last = 0;

const TimeManager = {
  reset() {
    now = 0;
    last = 0;
  },
  advance(dt = 1) {
    last = now;
    now += dt;
  },
  get dt() {
    return now - last;
  },
  get time() {
    return now;
  },
};

module.exports = TimeManager;
