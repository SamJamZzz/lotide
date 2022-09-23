const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  
  for (let key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key]) && object1[key] !== null && typeof object2[key] === 'object' && !Array.isArray(object2[key]) && object2[key] !== null) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let output = eqObjects(object1, object2) ? `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}` : `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  console.log(output);
};