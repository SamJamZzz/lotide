const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const numbers = [1, 5, 10, 15, 20];
  it("returns [] when the given []", () => {
    assert.deepEqual(map([], item => item[0]), []);
  });
  it("returns [] when the given []", () => {
    assert.deepEqual(map([], item => item * 3), []);
  });
  it("returns array of the first characters of every word", () => {
    assert.deepEqual(map(words, item => item[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns array of every number mulitplied 3", () => {
    assert.deepEqual(map(numbers, item => item * 3), [3, 15, 30, 45, 60]);
  });
});