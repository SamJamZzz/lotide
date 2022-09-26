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
};

module.exports = countOnly;