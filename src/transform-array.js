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
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  return arr.reduce((result, item, index, arr) => {
      switch (item) {

        default: break;

        case "--double-next":
          result.push(arr[index + 1]);
          break;

        case "--discard-prev":
          result.splice(index - 1, 1);
          break;

        case "--discard-next":
          arr.splice(index + 1, 1);
          break;

        case "--double-prev":
          result.splice(index, 0, result[index - 1]);
          break;

        case item:
          result.push(item);
          break;
      }

      return result;
    }, []).filter((item) => item);
}

module.exports = {
  transform
};
