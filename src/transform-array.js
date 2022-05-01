const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error(`'arr' parameter must be an instance of the Array!`) }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      i++;
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') {
        i++;
      } else {
        res.pop()
        i++;
      }
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') {
      } else {
        res.push(arr[i - 1])
      }
      i++;
    }
    if (arr[i] === '--double-next') {
      res.push(arr[i + 1])
      i++;
    }
    res.push(arr[i])
  }

  return res.filter(el => el !== undefined);
}

module.exports = {
  transform
};
