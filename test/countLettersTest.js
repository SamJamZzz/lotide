const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  const result1 = countLetters('attack');
  it("returns 2 when the letter occurs twice", () => {
    assert.strictEqual(result1.a, 2);
  });
  it("returns 2 when the letter occurs twice", () => {
    assert.strictEqual(result1.t, 2); 
  });
  it("returns 1 when the letter occurs once", () => {
    assert.strictEqual(result1.k, 1); 
  });
  it("returns undefined when the letter never occurs", () => {
    assert.strictEqual(result1.l, undefined); 
  });
});