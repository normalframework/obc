
function trigger() {
  let prevTrigger = false;

  return (trigger) => {
    let res = false;
    if (trigger && !prevTrigger) {
      res = true;
    }
    prevTrigger = trigger;
    return res;
  };
}

module.exports = trigger;