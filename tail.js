const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const tail = function(arr) {
  return arr.slice(1);
};

assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail([2, 3]).toString(), [3].toString());
assertEqual(tail([3]).toString(), [].toString());
assertEqual(tail([]).toString(), [].toString());