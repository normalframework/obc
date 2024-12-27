/**
 * Change block that evaluates the integer input to check if its value changes.
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Integer input signal.
 * @param {Object} params - The parameters object.
 * @param {number} [params.pre_u_start=0] - Start value of pre(u) at initial time.
 * 
 * @returns {Object} - The output object.
 * @returns {boolean} output.y - Connector of Boolean output signal indicating if input changes.
 * @returns {boolean} output.up - Connector of Boolean output signal indicating input increase.
 * @returns {boolean} output.down - Connector of Boolean output signal indicating input decrease.
 */

 function change({ pre_u_start = 0 }) {
  let previousValue = pre_u_start;

  return ({ u = 0 }) => {
    const hasChanged = u !== previousValue;
    const isIncreasing = u > previousValue;
    const isDecreasing = u < previousValue;

    // Update previous value for next call
    previousValue = u;

    return {
      y: hasChanged,
      up: isIncreasing,
      down: isDecreasing
    };
  }
}

module.exports = change;