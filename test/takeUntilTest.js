const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  it("returns [] when given []", () => {
    assert.deepEqual(takeUntil([], x => x < 0), []);
  });
  it("returns [] when given []", () => {
    assert.deepEqual(takeUntil([], x => x === ','), []);
  });
  it("returns an array of values from the given array until condition is met", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2]);
  });
  it("returns an array of values from the given array until condition is met", () => {
    assert.deepEqual(takeUntil(data1, x => x > 5), [ 1, 2, 5]);
  });
  it("returns an array of values from the given array until condition is met", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
  it("returns an array of values from the given array until condition is met", () => {
    assert.deepEqual(takeUntil(data2, x => x.length > 5), ['I\'ve', 'been', 'to']);
  });
});