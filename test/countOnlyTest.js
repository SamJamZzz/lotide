const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("returns 1 when the item occurs once and is supposed to be counted", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined when the item never occurs and is supposed to be counted", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });
  it("returns 2 when the item occurs twice and is supposed to be counted", () => {
    assert.strictEqual(result1["Fang"], 2); 
  });
  it("returns undefined when the item occurs and is not supposed to be counted", () => {
    assert.strictEqual(result1["Agouhanna"], undefined); 
  });
});