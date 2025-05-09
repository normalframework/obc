/**
 * Assert block that prints a warning message when input becomes false
 * 
 * @param {Object} input - The input object.
 * @param {boolean} input.u - Boolean input that triggers assert when it becomes false.
 * @param {Object} params - The parameters object.
 * @param {string} params.message - Message written when u becomes false.
 * 
 * @returns {Object} - The output object.
 * @returns {void} output - Prints a warning message if the input becomes false.
 */

function assertBlock({ message }) {
  return ({ u }) => {
    if (!u) {
      console.log(message);
    }
    return {};  // Return an empty object since there is no output
  }
}

module.exports = assertBlock;
