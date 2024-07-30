/**
 * CivilTime block that outputs the current civil time.
 * 
 * @returns {Function} - A function that returns the current civil time in seconds since the Unix epoch.
 */

 function civilTime() {
  return () => {
    const y = Date.now() / 1000;
    return { y };
  };
}

module.exports = civilTime;