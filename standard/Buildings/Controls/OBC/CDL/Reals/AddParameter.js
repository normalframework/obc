/**
 * AddParameter block that outputs the sum of an input plus a parameter
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * @param {Object} params - The parameters object.
 * @param {number} params.p - Value to be added.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

function addParameter({ p = 0 }) {
  return ({ u = 0 }) => {
    return { y: u + p };
  }
}

module.exports = addParameter;