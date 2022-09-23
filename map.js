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

const map = function(array, callback) {
  let result = [];
  for (let element of array) {
    result.push(callback(element));
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 5, 10, 15, 20];

assertArraysEqual(map([], item => item[0]), []);
assertArraysEqual(map([], item => item * 3), []);
assertArraysEqual(map(words, item => item[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, item => item * 3), [3, 15, 30, 45, 60]);