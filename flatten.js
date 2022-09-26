const flatten = function(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (subElement of flatten(element)) {
        result.push(subElement);
      }
      continue;
    }
    result.push(element);
  }
  return result;
};

module.exports = flatten;