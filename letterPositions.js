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

const letterPositions = function(sentence) {
  const results = {};
  for (let char = 0; char < sentence.length; char++) {
    if (sentence[char] === ' ') {
      continue;
    }
    if (!results[sentence[char]]) {
      results[sentence[char]] = [];
    }
    results[sentence[char]].push(char);
  }
  return results;
};

const result1 = letterPositions('hello world')

assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.l, [2, 3, 9]);
assertArraysEqual(result1.w, [6]);
assertArraysEqual(result1.o, [4, 7]);