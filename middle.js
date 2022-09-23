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

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([4]), []);
assertArraysEqual(middle([4, 5]), []);
assertArraysEqual(middle([4, 5, 6]), [5]);
assertArraysEqual(middle([4, 5, 6, 7]), [5, 6]);
assertArraysEqual(middle([4, 5, 6, 7, 8]), [6])