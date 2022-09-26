const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [4]", () => {
    assert.deepEqual(middle([4]), []); 
  });
  it("returns [] for [4, 5]", () => {
    assert.deepEqual(middle([4, 5]), []); 
  });
  it("returns [5] for [4, 5, 6]", () => {
    assert.deepEqual(middle([4, 5, 6]), [5]); 
  });
  it("returns [5, 6] for [4, 5, 6, 7]", () => {
    assert.deepEqual(middle([4, 5, 6, 7]), [5, 6]); 
  });
  it("returns [6] for [4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([4, 5, 6, 7, 8]), [6]); 
  });
});