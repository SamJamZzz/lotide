const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [] when given []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("returns the given array when there is no level nesting", () => {
    assert.deepEqual(flatten([1]), [1]); 
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([[1]]), [1]); 
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([[1, 2]]), [1, 2]); 
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([[1, 2], 3]), [1, 2, 3]);
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, [6, 7, 8, 9, [10]]]], 11, [12]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  it("returns array with no level of nesting when given an array with nesting", () => {
    assert.deepEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4, 44], 22, 5, [[[6]]]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 44, 22, 5, 6]);
  });
});