const eqArrays = function(arr1, arr2) {
  return (arr1.toString() === arr2.toString());
};

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2) ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(output);
};

const flatten = function(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        result.push(subElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1]), [1]);
assertArraysEqual(flatten([[1]]), [1]);
assertArraysEqual(flatten([[1, 2]]), [1, 2]);
assertArraysEqual(flatten([[1, 2], 3]), [1, 2, 3]);
assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);