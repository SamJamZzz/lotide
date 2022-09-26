const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([4]), []);
assertArraysEqual(middle([4, 5]), []);
assertArraysEqual(middle([4, 5, 6]), [5]);
assertArraysEqual(middle([4, 5, 6, 7]), [5, 6]);
assertArraysEqual(middle([4, 5, 6, 7, 8]), [6])