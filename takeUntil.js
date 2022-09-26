const takeUntil = function(array, callback) {
  result = []
  for (let element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

module.exports = takeUntil;