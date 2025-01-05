/**
 * MatrixMax block that outputs a vector of row-wise or column-wise maximum of the input matrix.
 * 
 * @param {Object} params - The parameters object.
 * @param {boolean} params.rowMax - If true, outputs row-wise maximum, otherwise column-wise.
 * @param {number} params.nRow - Number of rows in input matrix.
 * @param {number} params.nCol - Number of columns in input matrix.
 * 
 * @returns {Function} - A function that calculates the row-wise or column-wise maximum of the input matrix.
 */

 function matrixMax({ rowMax = true, nRow = 0, nCol = 0 }) {
  return ({ u = [] }) => {
    if (u.length !== nRow || u[0].length !== nCol) {
      throw new Error(`Input matrix dimensions [${u.length}, ${u[0].length}] do not match the specified dimensions [${nRow}, ${nCol}]`);
    }

    let y;
    if (rowMax) {
      y = u.map(row => Math.max(...row));
    } else {
      y = Array.from({ length: nCol }, (_, i) => Math.max(...u.map(row => row[i])));
    }

    return { y };
  };
}


module.exports = matrixMax;