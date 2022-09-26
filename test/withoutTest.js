const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [] when given []", () => {
    assert.deepEqual(without([], []), []);
  });
  it("returns [] when given []", () => {
    assert.deepEqual(without([], [1]), []); 
  });
  it("returns original array when no elements need to be excluded", () => {
    assert.deepEqual(without([1], []), [1]); 
  });
  it("returns original array when elements that need to be excluded are not present", () => {
    assert.deepEqual(without(['1'], [1]), ['1']); 
  });
  it("returns [] when only elements that need to be excluded are present", () => {
    assert.deepEqual(without(['1'], ['1']), []);
  });
  it("returns array where elements to be excluded are no present", () => {
    assert.deepEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]); 
  });
  it("returns array where elements to be excluded are no present", () => {
    assert.deepEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]); 
  });
  it("returns array where elements to be excluded are no present", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
  });
});