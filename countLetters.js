const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const countLetters = function(str) {
  let countObject = {};
  for (let char of str) {
    if (!countObject[char]) {
      countObject[char] = 0;
    }
    countObject[char] += 1;
  }
  return countObject;
};

const result1 = countLetters('attack');

assertEqual(result1.a, 2);
assertEqual(result1.t, 2);
assertEqual(result1.k, 1);
assertEqual(result1.l, undefined);