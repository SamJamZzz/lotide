const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let output = eqObjects(object1, object2) ? `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}` : `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  console.log(output);
};

module.exports = assertObjectsEqual;