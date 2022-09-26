const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }

  let midIndex = Math.floor((arr.length - 1) * 0.5);
  if (arr.length % 2 === 0) {
    return arr.slice(midIndex, midIndex + 2);
  }
  return [arr[midIndex]];
};

module.exports = middle;