const countLetters = function(str) {
  let countObject = {};
  for (let char of str) {
    if (str[char] === ' ') {
      continue;
    }
    if (!countObject[char]) {
      countObject[char] = 0;
    }
    countObject[char] += 1;
  }
  return countObject;
};

module.exports = countLetters;