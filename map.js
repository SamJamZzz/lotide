const map = function(array, callback) {
  let result = [];
  for (let element of array) {
    result.push(callback(element));
  }
  return result;
};

module.exports = map;