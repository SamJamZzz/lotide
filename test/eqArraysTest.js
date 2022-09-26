const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays([4], [4]), true);
assertEqual(eqArrays([7], [4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3], [[4, [3, 2, 4]], 5]], [[2, 3], [[4, [3, 2, 4]], 5]]), true);
assertEqual(eqArrays([[2, 3], [[4, [3, 2, 4]], 5]], [[2, 3], [[4, [3, 4]], 5]]), false);