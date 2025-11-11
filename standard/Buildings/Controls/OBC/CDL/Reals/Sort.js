/**
 * Sort block that sorts elements of the input vector in ascending or descending order.
 * 
 * @param {Object} params - The parameters object.
 * @param {number} params.nin - Number of input connections.
 * @param {boolean} params.ascending - Set to true if ascending order, otherwise order is descending.
 * 
 * @returns {Function} - A function that sorts the input vector and returns the sorted vector and the indices.
 */

 function sort({ nin = 0, ascending = true } = {}) {
  return ({ u = [] }) => {
    u = u ?? [];
    if (u.length !== nin) {
      throw new Error(`Input vector length ${u.length} does not match the specified number of inputs ${nin}`);
    }

    const sorted = [...u].map((val, idx) => ({ val, idx }))
      .sort((a, b) => ascending ? a.val - b.val : b.val - a.val);

    const y = sorted.map(item => item.val);
    const yIdx = sorted.map(item => item.idx + 1); // Convert to 1-based index

    return { y, yIdx };
  };
}

module.exports = sort;