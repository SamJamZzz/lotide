const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail([2, 3]).toString(), [3].toString());
assertEqual(tail([3]).toString(), [].toString());
assertEqual(tail([]).toString(), [].toString());