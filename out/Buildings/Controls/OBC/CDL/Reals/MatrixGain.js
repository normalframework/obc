/**
 * MatrixGain block that outputs the product of a gain matrix with the input signal vector.
 * 
 * @param {Object} params - The parameters object.
 * @param {Array<Array<number>>} params.K - Gain matrix which is multiplied with the input.
 * 
 * @returns {Function} - A function that calculates the product of the gain matrix and the input vector.
 */

 function matrixGain({ K = [[1, 0], [0, 1]] }) {
  const nin = K[0].length; // Number of inputs
  const nout = K.length;   // Number of outputs

  return ({ u = [] }) => {
    if (u.length !== nin) {
      throw new Error(`Input vector length ${u.length} does not match the specified number of inputs ${nin}`);
    }

    const y = Array(nout).fill(0).map((_, i) =>
      K[i].reduce((acc, k, j) => acc + k * u[j], 0)
    );

    return { y };
  };
}

module.exports = matrixGain;