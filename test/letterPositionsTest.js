const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  const result1 = letterPositions('hello world')
  it("returns position of letter in an array when letter is found once", () => {
    assert.deepEqual(result1.h, [0]);
  });
  it("returns positions of letter in an array when letter is found", () => {
    assert.deepEqual(result1.l, [2, 3, 9]); 
  });
  it("returns position of letter in an array when letter is found once", () => {
    assert.deepEqual(result1.w, [6]); 
  });
  it("returns positions of letter in an array when letter is found", () => {
    assert.deepEqual(result1.o, [4, 7]); 
  });
});