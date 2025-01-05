/**
 * CalendarTime block that computes the Unix time stamp and calendar time from the simulation time.
 * 
 * @param {Object} params - The parameters object.
 * @param {string} params.zerTim - Enumeration for choosing how reference time (time = 0) should be defined.
 * @param {number} params.yearRef - Year when time = 0, used if zerTim is Custom.
 * @param {number} params.offset - Offset that is added to 'time', may be used for computing time in different time zone.
 * 
 * @returns {Function} - A function that computes the Unix time stamp and calendar time.
 */

function calendarTime({ zerTim = 0, yearRef = 2016, offset = 0 }) {
  const firstYear = 2010;
  const lastYear = firstYear + 21;

  if (yearRef < firstYear || yearRef > lastYear) {
    throw new Error(`yearRef must be between ${firstYear} and ${lastYear}`);
  }

  return ({ time = 0 }) => {
    const date = new Date((time + offset) * 1000);

    let year, month, day, hour, minute, weekDay;

    switch (zerTim) {
      case 'Custom':
        year = yearRef;
        break;
      default:
        year = date.getUTCFullYear();
        break;
    }

    month = date.getUTCMonth() + 1;
    day = date.getUTCDate();
    hour = date.getUTCHours();
    minute = date.getUTCMinutes() + date.getUTCSeconds() / 60;
    weekDay = date.getUTCDay() || 7; // Sunday is 0 in JavaScript, but we want Sunday to be 7

    return { year, month, day, hour, minute, weekDay };
  };
}

module.exports = calendarTime;