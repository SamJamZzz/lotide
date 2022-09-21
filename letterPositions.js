const eqArrays = function(arr1, arr2) {
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