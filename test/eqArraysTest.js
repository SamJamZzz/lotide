const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for arrays that are both empty", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it("returns false for different arrays", () => {
    assert.strictEqual(eqArrays([], [1]), false);
  });
  it("returns false for different arrays", () => {
    assert.strictEqual(eqArrays([1], []), false);
  });
  it("returns true for the same arrays", () => {
    assert.strictEqual(eqArrays([4], [4]), true);
  });
  it("returns false for different arrays", () => {
    assert.strictEqual(eqArrays([7], [4]), false);
  });
  it("returns true for the same arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for different arrays containing different data types", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
  });
  it("returns true for the same arrays containing nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false for different arrays containing nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("returns false for different arrays containing nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it("returns true for the same arrays containing nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [[4, [3, 2, 4]], 5]], [[2, 3], [[4, [3, 2, 4]], 5]]), true);
  });
  it("returns false for different arrays containing nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [[4, [3, 2, 4]], 5]], [[2, 3], [[4, [3, 4]], 5]]), false);
  });
});