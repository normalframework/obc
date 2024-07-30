/*
 * AddParameter block that outputs the sum of an input plus a parameter
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Integer input signal.
 * @param {Object} params - The parameters object.
 * @param {number} params.p - Value to be added.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Integer output signal.
 */

 function addParameter({ p }) {
  return ({ u }) => {
    return { y: u + p };
  }
}

module.exports = addParameter;