const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;    
  }

  for (let i = 0; i < arr1.length; i++) {

    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }

    if (typeof arr1[i] === 'object' && !Array.isArray(arr1[i]) && arr1[i] !== null && typeof arr2[i] === 'object' && !Array.isArray(arr2[i]) && arr2[i] !== null) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    }

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2) ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(output);
};

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

console.log(flatten([1, 2, [3, 4], 5, [6]]))

assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1]), [1]);
assertArraysEqual(flatten([[1]]), [1]);
assertArraysEqual(flatten([[1, 2]]), [1, 2]);
assertArraysEqual(flatten([[1, 2], 3]), [1, 2, 3]);
assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

assertArraysEqual(flatten([1, 2, [3, 4, [5, [6, 7, 8, 9, [10]]]], 11, [12]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
assertArraysEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4, 44], 22, 5, [[[6]]]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 44, 22, 5, 6]);