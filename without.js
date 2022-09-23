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

const without = function(source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element));
};

assertArraysEqual(without([], []), []);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1], []), [1]);
assertArraysEqual(without(['1'], [1]), ['1']);
assertArraysEqual(without(['1'], ['1']), []);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);