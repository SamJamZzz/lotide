const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const countLetters = function(str) {
  let upperCase = str.toUpperCase();
  let countObject = {};
  for (let char of upperCase) {
    if (!countObject[char]) {
      countObject[char] = 0;
    }
    countObject[char] += 1;
  }
  return countObject;
}

const result1 = countLetters('attack');

assertEqual(result1.A, 2);
assertEqual(result1.T, 2);
assertEqual(result1.K, 1);
assertEqual(result1.L, undefined);