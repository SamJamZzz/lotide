const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;    
  }

  for (let i = 0; i < arr1.length; i++) {
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil([], x => x < 0), []);
assertArraysEqual(takeUntil([], x => x === ','), []);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data1, x => x > 5), [ 1, 2, 5]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil(data2, x => x.length > 5), [ 'I\'ve', 'been', 'to']);
