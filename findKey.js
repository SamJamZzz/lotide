const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const findKey = function(object, callback) {
  for (key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object1, x => x.stars === 10), undefined);
assertEqual(findKey(object1, x => x.stars === 2), 'noma');
assertEqual(findKey(object1, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(object1, x => x.stars === 1), 'Blue Hill');