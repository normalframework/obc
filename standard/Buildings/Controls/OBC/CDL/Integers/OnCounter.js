/**
 * OnCounter block that increments the output if the input switches to true.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.y_start - Initial and reset value of y if input reset switches to true.
 * 
 * @returns {Object} - The output object.
 * @returns {function} - A function that processes trigger and reset inputs.
 * @returns {number} output.y - Integer output signal.
 */

export default function onCounter({ y_start = 0 }) {
  let y = y_start;

  return ({ trigger, reset }) => {
    if (reset) {
      y = y_start;
    } else if (trigger) {
      y += 1;
    }
    return { y };
  };
}
