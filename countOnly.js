const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  
  let countOnlyObject = {};
  for (let key in itemsToCount) {
    let val = itemsToCount[key];
    if (val) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (key === allItems[i]) {
          count++;
        }
      }
      if (count !== 0) {
        countOnlyObject[key] = count;
      }
    }
  }
  return countOnlyObject;
}

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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);