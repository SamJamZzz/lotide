const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const object1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("returns undefined when the value cannot be found in a key", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 10), undefined);
  });
  it("returns first key when the is found in key", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 2), 'noma'); 
  });
  it("returns first key when the is found in key", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 3), 'Akaleri'); 
  });
  it("returns key when the is found in key", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 1), 'Blue Hill'); 
  });
});