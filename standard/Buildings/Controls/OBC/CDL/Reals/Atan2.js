
/** 
 * AddParameter block that outputs atan(u1/u2) of the inputs u1 and u2
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u1 - Connector of Real input signal 1.
 * @param {number} input.u2 - Connector of Real input signal 2.
 * @param {Object} params - The parameters object.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal in radians.
 */

 function atan2({ } = {}) {
  return ({ u1 = 0, u2 = 0 }) => {
    return { y: Math.atan2(u1 ?? 0, u2 ?? 0) };
  }
}

module.exports = atan2;