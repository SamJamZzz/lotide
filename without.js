const eqArrays = function(arr1, arr2) {
  return (arr1.toString() === arr2.toString());
};

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2) ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(output);
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let element of source) {
    result.push(element);
  }

  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (itemsToRemove[i] === result[j]) {
        result.splice(j, 1);
      }
    }
  }
  return result;
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