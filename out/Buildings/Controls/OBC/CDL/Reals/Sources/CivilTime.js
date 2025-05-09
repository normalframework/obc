const TimeManager = require("../../../../../../TimeManager");
/**
 * CivilTime block that outputs the current civil time.
 * 
 * @returns {Function} - A function that returns the current civil time in seconds since the Unix epoch.
 */

 function civilTime() {
  return () => {
    const y = TimeManager.time;
    return { y };
  };
}

module.exports = civilTime;