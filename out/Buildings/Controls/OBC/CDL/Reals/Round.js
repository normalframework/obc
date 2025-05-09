/**
 * Round block that rounds a real number to a given number of digits.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.n - Number of digits being rounded to.
 * 
 * @returns {Function} - A function that rounds the input signal to the specified number of digits.
 */

 function round({ n = 0 }) {
  const fac = 10 ** n;

  return ({ u = 0 }) => {
    const y = u > 0
      ? Math.floor(u * fac + 0.5) / fac
      : Math.ceil(u * fac - 0.5) / fac;
    return { y };
  };
}

module.exports = round;