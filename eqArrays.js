const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const eqArrays = function(arr1, arr2) {
  return (arr1.toString() === arr2.toString());
}

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays([4], [4]), true);
assertEqual(eqArrays([7], [4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);