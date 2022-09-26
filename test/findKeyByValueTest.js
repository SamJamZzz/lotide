const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    anime: "Edgerunners"
  };
  it("returns key when a given value is found", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined when a given value is not found", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });
  it("returns key when a given value is found", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); 
  });
  it("returns undefined when a given value is not found", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That Anime Show"), undefined); 
  });
  it("returns key when a given value is found", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Edgerunners"), "anime"); 
  });
});