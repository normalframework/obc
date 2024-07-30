/**
 * SunRiseSet block that calculates the next sunrise and sunset time.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.lat - Latitude in radians.
 * @param {number} params.lon - Longitude in radians.
 * @param {number} params.timZon - Time zone in seconds.
 * 
 * @returns {Function} - A function that calculates the next sunrise and sunset time.
 */

function SunRiseSet({ lat, lon, timZon }) {
  const k1 = Math.sin(23.45 * 2 * Math.PI / 360);
  const k2 = 2 * Math.PI / 365.25;

  function nextHourAngle(t, timDifLocCiv, lat) {
    let iDay = 1;
    let compute = true;
    let tNext, Bt, eqnTim, timCor, decAng, cosHou;

    while (compute) {
      tNext = t + iDay * 86400;
      Bt = Math.PI * ((tNext + 86400) / 86400 - 81) / 182;
      eqnTim = 60 * (9.87 * Math.sin(2 * Bt) - 7.53 * Math.cos(Bt) - 1.5 * Math.sin(Bt));
      timCor = eqnTim + timDifLocCiv;
      decAng = Math.asin(-k1 * Math.cos((tNext / 86400 + 10) * k2));
      cosHou = -Math.tan(lat) * Math.tan(decAng);
      compute = Math.abs(cosHou) > 1;
      iDay++;
    }
    const houAng = Math.acos(cosHou);
    return { houAng, tNext, timCor };
  }

  function computeSunRise(t, staTim, timDifLocCiv, lat) {
    const { houAng, tNext, timCor } = nextHourAngle(t, timDifLocCiv, lat);
    let sunRis = (12 - houAng * 24 / (2 * Math.PI) - timCor / 3600) * 3600 + Math.floor(tNext / 86400) * 86400;
    if (staTim > sunRis) {
      sunRis += 86400;
    }
    return sunRis;
  }

  function computeSunSet(t, staTim, timDifLocCiv, lat) {
    const { houAng, tNext, timCor } = nextHourAngle(t, timDifLocCiv, lat);
    let sunSet = (12 + houAng * 24 / (2 * Math.PI) - timCor / 3600) * 3600 + Math.floor(tNext / 86400) * 86400;
    if (staTim > sunSet) {
      sunSet += 86400;
    }
    return sunSet;
  }

  let staTim = Date.now() / 1000;
  let timDifLocCiv = lon * 43200 / Math.PI - timZon;
  let nextSunRise = computeSunRise(staTim - 86400, staTim, timDifLocCiv, lat);
  let nextSunSet = computeSunSet(staTim - 86400, staTim, timDifLocCiv, lat);

  if (Math.cos(lat) * Math.cos(lat) + k1 * k1 >= 1) {
    nextSunSet -= 86400;
  }

  return () => {
    const currentTime = Date.now() / 1000;
    let Bt = Math.PI * ((currentTime + 86400) / 86400 - 81) / 182;
    let eqnTim = 60 * (9.87 * Math.sin(2 * Bt) - 7.53 * Math.cos(Bt) - 1.5 * Math.sin(Bt));
    let timCor = eqnTim + timDifLocCiv;
    let decAng = Math.asin(-k1 * Math.cos((currentTime / 86400 + 10) * k2));
    let cosHou = -Math.tan(lat) * Math.tan(decAng);

    if (currentTime >= nextSunRise) {
      nextSunRise = computeSunRise(currentTime, staTim, timDifLocCiv, lat);
    }

    if (currentTime >= nextSunSet) {
      nextSunSet = computeSunSet(currentTime, staTim, timDifLocCiv, lat);
    }

    let sunUp = nextSunSet < nextSunRise;

    return { nextSunRise, nextSunSet, sunUp };
  };
}

module.exports = SunRiseSet;
